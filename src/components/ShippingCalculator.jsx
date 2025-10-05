"use client";
import React, { useState, useEffect } from "react";
import { useShop } from "@/app/context/ShopContext";
import {
  getShippingOptions,
  calculateTotalOrderCost,
  qualifiesForFreeShipping,
  getFreeShippingThreshold,
} from "@/lib/shippingUtils";
import {
  convertCurrency,
  formatPrice as formatCurrencyPrice,
} from "@/lib/currencyUtils";
import { Package, Truck, Clock, MapPin, Gift } from "lucide-react";

const ShippingCalculator = ({
  orderSubtotal = 0,
  orderWeight = 0.3,
  onShippingChange,
  className = "",
}) => {
  const { userLocation, userCurrency, formatPrice } = useShop();
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [orderTotal, setOrderTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const calculateShipping = async () => {
      if (!userLocation || orderSubtotal <= 0) return;

      setIsLoading(true);
      try {
        const countryCode = userLocation.alpha2;

        // Get shipping options
        const options = getShippingOptions(countryCode, orderWeight);
        setShippingOptions(options);

        // Calculate total with selected shipping
        const total = calculateTotalOrderCost(
          orderSubtotal,
          countryCode,
          orderWeight,
          selectedShipping
        );

        // Convert shipping costs to user currency
        if (total.shippingCost > 0) {
          total.shippingCostConverted = await convertCurrency(
            total.shippingCost,
            "USD",
            userCurrency
          );
        } else {
          total.shippingCostConverted = 0;
        }

        setOrderTotal(total);

        // Notify parent component
        if (onShippingChange) {
          onShippingChange({
            shippingCost: total.shippingCostConverted,
            totalCost: total.subtotal + total.shippingCostConverted,
            selectedOption: selectedShipping,
            freeShippingApplied: total.freeShippingApplied,
          });
        }
      } catch (error) {
        console.error("Shipping calculation failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    calculateShipping();
  }, [
    userLocation,
    userCurrency,
    orderSubtotal,
    orderWeight,
    selectedShipping,
    formatPrice,
    onShippingChange,
  ]);

  const handleShippingChange = (optionId) => {
    setSelectedShipping(optionId);
  };

  if (!userLocation) {
    return (
      <div className={`p-4 border rounded-lg bg-gray-50 ${className}`}>
        <div className="flex items-center text-gray-500">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Select your country to see shipping options</span>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`p-4 border rounded-lg bg-white ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-20 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-40"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 border rounded-lg bg-white ${className}`}>
      <div className="flex items-center mb-4">
        <Package className="w-5 h-5 mr-2 text-blue-600" />
        <h3 className="font-semibold text-lg">
          Shipping to {userLocation.name} {userLocation.emoji}
        </h3>
      </div>

      {/* Shipping Options */}
      {shippingOptions.length > 0 && (
        <div className="space-y-3 mb-4">
          {shippingOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-center justify-between p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedShipping === option.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  value={option.id}
                  checked={selectedShipping === option.id}
                  onChange={(e) => handleShippingChange(e.target.value)}
                  className="mr-3 text-blue-600"
                />
                <div className="flex items-center">
                  {option.id === "express" ? (
                    <Truck className="w-4 h-4 mr-2 text-orange-500" />
                  ) : (
                    <Package className="w-4 h-4 mr-2 text-blue-500" />
                  )}
                  <div>
                    <div className="font-medium text-sm">{option.name}</div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {option.deliveryEstimate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">
                {orderTotal?.freeShippingApplied ? (
                  <span className="text-green-600 flex items-center">
                    <Gift className="w-4 h-4 mr-1" />
                    FREE
                  </span>
                ) : (
                  formatCurrencyPrice(
                    orderTotal?.shippingCostConverted || option.cost,
                    userCurrency
                  )
                )}
              </div>
            </label>
          ))}
        </div>
      )}

      {/* Free Shipping Progress */}
      {orderTotal && !orderTotal.freeShippingApplied && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-700">
              Add{" "}
              {formatCurrencyPrice(
                orderTotal.freeShippingThreshold - orderSubtotal,
                "USD"
              )}{" "}
              more for free shipping!
            </span>
            <Gift className="w-4 h-4 text-green-600" />
          </div>
          <div className="mt-2 w-full bg-green-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(
                  (orderSubtotal / orderTotal.freeShippingThreshold) * 100,
                  100
                )}%`,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Order Summary */}
      {orderTotal && (
        <div className="border-t pt-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{formatCurrencyPrice(orderSubtotal, userCurrency)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>
                {orderTotal.freeShippingApplied ? (
                  <span className="text-green-600 font-medium">FREE</span>
                ) : (
                  formatCurrencyPrice(
                    orderTotal.shippingCostConverted,
                    userCurrency
                  )
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total:</span>
              <span className="text-green-600">
                {formatCurrencyPrice(
                  orderSubtotal + (orderTotal.shippingCostConverted || 0),
                  userCurrency
                )}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Shipping Features */}
      <div className="mt-4 pt-4 border-t">
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
          <div className="flex items-center">
            <Package className="w-3 h-3 mr-1" />
            Secure packaging
          </div>
          <div className="flex items-center">
            <Truck className="w-3 h-3 mr-1" />
            Full tracking
          </div>
          <div className="flex items-center">
            <Gift className="w-3 h-3 mr-1" />
            Duties included
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Insurance covered
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
