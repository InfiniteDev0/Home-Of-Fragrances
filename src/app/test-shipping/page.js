"use client";
import React from "react";
import PriceDisplay from "@/components/PriceDisplay";
import { CountryDropdown } from "@/components/CountryDropdown";
import { useShop } from "@/app/context/ShopContext";

const ShippingTestPage = () => {
  const { userLocation, updateUserLocation } = useShop();

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        French Avenue - Shipping Calculator Test
      </h1>

      {/* Country Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Your Country</h2>
        <CountryDropdown
          defaultValue={userLocation?.alpha3}
          onChange={(country) => updateUserLocation(country)}
          placeholder="Select your country..."
        />
      </div>

      {/* Price Display Tests */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Price Display Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Basic Price (100 AED)</h3>
              <PriceDisplay price={100} />
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Discounted Price (150 AED, was 200 AED)
              </h3>
              <PriceDisplay price={150} originalPrice={200} />
            </div>

            <div>
              <h3 className="font-medium mb-2">Large Price (999.99 AED)</h3>
              <PriceDisplay price={999.99} />
            </div>

            <div>
              <h3 className="font-medium mb-2">Small Price (25.50 AED)</h3>
              <PriceDisplay price={25.5} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Currency Conversion</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Selected Country: {userLocation?.name || "UAE"}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Currency: {userLocation?.currencies?.[0] || "AED"}
            </p>
            <p className="text-sm text-gray-600">
              Exchange Rate:{" "}
              {userLocation ? "Live rates applied" : "Base currency (AED)"}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Converted Prices</h3>
              <div className="space-y-2">
                <PriceDisplay price={100} />
                <PriceDisplay price={250} />
                <PriceDisplay price={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Delivery Options</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Standard Delivery: 5-7 business days</li>
              <li>• Express Delivery: 2-3 business days</li>
              <li>• Premium Delivery: 1-2 business days</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Shipping Costs</h3>
            <div className="text-sm space-y-1 text-gray-600">
              <div className="flex justify-between">
                <span>Standard:</span>
                <PriceDisplay price={25} />
              </div>
              <div className="flex justify-between">
                <span>Express:</span>
                <PriceDisplay price={45} />
              </div>
              <div className="flex justify-between">
                <span>Premium:</span>
                <PriceDisplay price={75} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingTestPage;
