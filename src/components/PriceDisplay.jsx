"use client";
import React, { useState, useEffect } from "react";
import { useShop } from "@/app/context/ShopContext";
import {
  calculateTotalOrderCost,
  getShippingOptions,
  formatShippingCost,
  qualifiesForFreeShipping,
} from "@/lib/shippingUtils";
import { convertCurrency } from "@/lib/currencyUtils";

const PriceDisplay = ({
  basePrice = 99.99,
  baseCurrency = "USD",
  productName = "Sample Product",
  productWeight = 0.3, // kg - typical fragrance weight
  showShipping = true,
}) => {
  const { userCurrency, convertPrice, formatPrice, userLocation } = useShop();
  const [convertedPrice, setConvertedPrice] = useState(null);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [totalOrderCost, setTotalOrderCost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const calculatePriceAndShipping = async () => {
      setIsLoading(true);
      try {
        // Convert product price
        const converted = await convertPrice(basePrice, baseCurrency);
        setConvertedPrice(converted);

        // Calculate shipping if location is available
        if (userLocation && showShipping) {
          const countryCode = userLocation.alpha2;

          // Get shipping options
          const options = getShippingOptions(countryCode, productWeight);
          setShippingOptions(options);

          // Calculate total cost with selected shipping
          const convertedBasePrice = await convertCurrency(
            basePrice,
            baseCurrency,
            userCurrency
          );
          const orderTotal = calculateTotalOrderCost(
            convertedBasePrice,
            countryCode,
            productWeight,
            selectedShipping
          );

          // Convert shipping cost to user currency
          if (orderTotal.shippingCost > 0) {
            orderTotal.shippingCostConverted = await convertCurrency(
              orderTotal.shippingCost,
              "USD",
              userCurrency
            );
            orderTotal.totalConverted = await convertCurrency(
              orderTotal.total,
              "USD",
              userCurrency
            );
          } else {
            orderTotal.shippingCostConverted = 0;
            orderTotal.totalConverted = convertedBasePrice;
          }

          setTotalOrderCost(orderTotal);
        }
      } catch (error) {
        console.error("Price and shipping calculation failed:", error);
        setConvertedPrice(formatPrice(basePrice));
      } finally {
        setIsLoading(false);
      }
    };

    calculatePriceAndShipping();
  }, [
    basePrice,
    baseCurrency,
    userCurrency,
    userLocation,
    selectedShipping,
    convertPrice,
    formatPrice,
    productWeight,
    showShipping,
  ]);

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-lg mb-4">{productName}</h3>

      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-20 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-40"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Product Price */}
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {convertedPrice}
            </div>
            {userCurrency !== baseCurrency && (
              <div className="text-xs text-gray-400">
                Original: {formatPrice(basePrice)} {baseCurrency}
              </div>
            )}
          </div>

          {/* Shipping Information */}
          {showShipping && userLocation && totalOrderCost && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Shipping to {userLocation.name} {userLocation.emoji}
              </h4>

              {/* Shipping Options */}
              {shippingOptions.length > 0 && (
                <div className="space-y-2 mb-3">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-2 border rounded cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={selectedShipping === option.id}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium text-sm">
                            {option.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {option.zone.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        {totalOrderCost.freeShippingApplied ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          formatPrice(
                            totalOrderCost.shippingCostConverted || option.cost,
                            userCurrency
                          )
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              )}

              {/* Free Shipping Message */}
              {!totalOrderCost.freeShippingApplied && (
                <div className="text-xs text-gray-500 mb-3">
                  Free shipping on orders over{" "}
                  {formatPrice(totalOrderCost.freeShippingThreshold, "USD")} USD
                </div>
              )}

              {/* Order Total */}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Product Price:</span>
                  <span className="text-sm">{convertedPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Shipping:</span>
                  <span className="text-sm">
                    {totalOrderCost.freeShippingApplied ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      formatPrice(
                        totalOrderCost.shippingCostConverted || 0,
                        userCurrency
                      )
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span className="text-green-600">
                    {formatPrice(
                      totalOrderCost.totalConverted || totalOrderCost.subtotal,
                      userCurrency
                    )}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Location Display */}
          {userLocation && (
            <div className="text-sm text-gray-500 border-t pt-2">
              <div>📍 Delivering to {userLocation.name}</div>
              <div>💱 Prices shown in {userCurrency}</div>
              {totalOrderCost && (
                <div>
                  🚚 Estimated delivery:{" "}
                  {totalOrderCost.shippingDetails.deliveryEstimate}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;
