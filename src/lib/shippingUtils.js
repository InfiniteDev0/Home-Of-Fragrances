/**
 * French Avenue Shipping Calculator
 * Calculates shipping costs based on destination country and package details
 */

import { CURRENCY_SYMBOLS } from "./currencyUtils";

// French Avenue shipping zones and rates
export const SHIPPING_ZONES = {
  // Zone 1: East Africa (Primary delivery countries - Expedited service)
  EAST_AFRICA: {
    name: "East Africa Express",
    countries: ["KE", "TZ", "UG", "EG"], // Kenya, Tanzania, Uganda, Egypt
    baseRate: 15.0, // USD
    currency: "USD",
    deliveryDays: "3-5 business days",
    trackingIncluded: true,
    expressAvailable: true,
    description: "Fast delivery to our primary markets",
  },

  // Zone 2: Europe (French origin - Standard European delivery)
  EUROPE: {
    name: "European Standard",
    countries: [
      "FR",
      "DE",
      "IT",
      "ES",
      "NL",
      "BE",
      "AT",
      "CH",
      "PT",
      "SE",
      "NO",
      "DK",
      "FI",
      "IE",
      "GR",
      "PL",
      "CZ",
      "HU",
      "RO",
      "BG",
      "HR",
      "SI",
      "SK",
      "EE",
      "LV",
      "LT",
      "LU",
      "MT",
      "CY",
    ],
    baseRate: 12.0, // USD
    currency: "USD",
    deliveryDays: "2-4 business days",
    trackingIncluded: true,
    expressAvailable: true,
    description: "Standard European delivery from France",
  },

  // Zone 3: UK & Ireland (Post-Brexit special handling)
  UK_IRELAND: {
    name: "UK & Ireland",
    countries: ["GB", "IE", "GG", "JE"],
    baseRate: 18.0, // USD
    currency: "USD",
    deliveryDays: "4-7 business days",
    trackingIncluded: true,
    expressAvailable: false,
    description: "UK delivery with customs handling",
  },

  // Zone 4: Middle East (Premium luxury market)
  MIDDLE_EAST: {
    name: "Middle East Premium",
    countries: ["AE", "SA", "QA", "KW", "BH", "OM"],
    baseRate: 25.0, // USD
    currency: "USD",
    deliveryDays: "5-8 business days",
    trackingIncluded: true,
    expressAvailable: true,
    description: "Premium delivery to Gulf countries",
  },

  // Zone 5: North America (Trans-Atlantic)
  NORTH_AMERICA: {
    name: "North America",
    countries: ["US", "CA"],
    baseRate: 30.0, // USD
    currency: "USD",
    deliveryDays: "7-12 business days",
    trackingIncluded: true,
    expressAvailable: true,
    description: "Trans-Atlantic delivery",
  },

  // Zone 6: Asia Pacific (Long distance)
  ASIA_PACIFIC: {
    name: "Asia Pacific",
    countries: ["AU", "NZ", "JP", "SG", "HK", "TH", "PH", "IN", "LA"],
    baseRate: 35.0, // USD
    currency: "USD",
    deliveryDays: "10-15 business days",
    trackingIncluded: true,
    expressAvailable: false,
    description: "Long-distance Asia Pacific delivery",
  },

  // Zone 7: Other regions
  OTHER: {
    name: "International Standard",
    countries: ["NG"], // Nigeria and other countries not in specific zones
    baseRate: 40.0, // USD
    currency: "USD",
    deliveryDays: "12-20 business days",
    trackingIncluded: true,
    expressAvailable: false,
    description: "Standard international delivery",
  },
};

/**
 * Weight-based shipping tiers for fragrance products
 */
export const WEIGHT_TIERS = {
  LIGHT: {
    maxWeight: 0.5, // kg
    multiplier: 1.0,
    description: "Single fragrance (50ml-100ml)",
  },
  MEDIUM: {
    maxWeight: 1.5, // kg
    multiplier: 1.3,
    description: "Multiple items or large bottles",
  },
  HEAVY: {
    maxWeight: 3.0, // kg
    multiplier: 1.6,
    description: "Gift sets or bulk orders",
  },
  BULK: {
    maxWeight: Infinity,
    multiplier: 2.0,
    description: "Large orders (contact for quote)",
  },
};

/**
 * Get shipping zone for a country
 */
export const getShippingZone = (countryCode) => {
  for (const [zoneKey, zone] of Object.entries(SHIPPING_ZONES)) {
    if (zone.countries.includes(countryCode)) {
      return { key: zoneKey, ...zone };
    }
  }
  return { key: "OTHER", ...SHIPPING_ZONES.OTHER };
};

/**
 * Calculate weight tier based on package weight
 */
export const getWeightTier = (weightKg) => {
  for (const [tierKey, tier] of Object.entries(WEIGHT_TIERS)) {
    if (weightKg <= tier.maxWeight) {
      return { key: tierKey, ...tier };
    }
  }
  return { key: "BULK", ...WEIGHT_TIERS.BULK };
};

/**
 * Calculate shipping cost for a country
 */
export const calculateShippingCost = (
  countryCode,
  weightKg = 0.3,
  expressShipping = false
) => {
  const shippingZone = getShippingZone(countryCode);
  const weightTier = getWeightTier(weightKg);

  let baseCost = shippingZone.baseRate * weightTier.multiplier;

  // Express shipping surcharge (if available)
  if (expressShipping && shippingZone.expressAvailable) {
    baseCost *= 1.5; // 50% surcharge for express
  }

  return {
    cost: Math.round(baseCost * 100) / 100, // Round to 2 decimal places
    currency: shippingZone.currency,
    zone: shippingZone,
    weightTier: weightTier,
    expressShipping: expressShipping && shippingZone.expressAvailable,
    deliveryEstimate: shippingZone.deliveryDays,
    trackingIncluded: shippingZone.trackingIncluded,
  };
};

/**
 * Format shipping cost with currency
 */
export const formatShippingCost = (shippingCost, targetCurrency = "USD") => {
  const symbol = CURRENCY_SYMBOLS[targetCurrency] || targetCurrency;
  const amount = shippingCost.cost.toFixed(2);
  return `${symbol}${amount}`;
};

/**
 * Get shipping options for a country
 */
export const getShippingOptions = (countryCode, weightKg = 0.3) => {
  const standardShipping = calculateShippingCost(countryCode, weightKg, false);
  const options = [
    {
      id: "standard",
      name: `Standard Shipping (${standardShipping.deliveryEstimate})`,
      ...standardShipping,
    },
  ];

  // Add express option if available
  if (standardShipping.zone.expressAvailable) {
    const expressShipping = calculateShippingCost(countryCode, weightKg, true);
    options.push({
      id: "express",
      name: `Express Shipping (${Math.ceil(
        parseInt(expressShipping.deliveryEstimate.split("-")[0]) * 0.6
      )}-${Math.ceil(
        parseInt(expressShipping.deliveryEstimate.split("-")[1]) * 0.6
      )} business days)`,
      ...expressShipping,
    });
  }

  return options;
};

/**
 * Get free shipping threshold for a country/zone
 */
export const getFreeShippingThreshold = (countryCode) => {
  const zone = getShippingZone(countryCode);

  // Free shipping thresholds based on zone
  const thresholds = {
    EAST_AFRICA: 150, // USD - Lower threshold for primary markets
    EUROPE: 100, // USD - Competitive European threshold
    UK_IRELAND: 120, // USD
    MIDDLE_EAST: 200, // USD - Premium market
    NORTH_AMERICA: 200, // USD
    ASIA_PACIFIC: 250, // USD
    OTHER: 300, // USD
  };

  return thresholds[zone.key] || thresholds.OTHER;
};

/**
 * Check if order qualifies for free shipping
 */
export const qualifiesForFreeShipping = (orderTotal, countryCode) => {
  const threshold = getFreeShippingThreshold(countryCode);
  return orderTotal >= threshold;
};

/**
 * Get delivery countries (primary focus markets)
 */
export const getDeliveryCountries = () => {
  return SHIPPING_ZONES.EAST_AFRICA.countries.map((code) => {
    const country = require("country-data-list").countries.all.find(
      (c) => c.alpha2 === code
    );
    return {
      ...country,
      shippingZone: "EAST_AFRICA",
      isPrimaryMarket: true,
    };
  });
};

/**
 * Calculate total order cost including shipping
 */
export const calculateTotalOrderCost = (
  orderSubtotal,
  countryCode,
  weightKg = 0.3,
  shippingOption = "standard"
) => {
  const shipping = calculateShippingCost(
    countryCode,
    weightKg,
    shippingOption === "express"
  );

  const qualifiesFreeShipping = qualifiesForFreeShipping(
    orderSubtotal,
    countryCode
  );
  const shippingCost = qualifiesFreeShipping ? 0 : shipping.cost;

  return {
    subtotal: orderSubtotal,
    shippingCost: shippingCost,
    total: orderSubtotal + shippingCost,
    currency: shipping.currency,
    freeShippingApplied: qualifiesFreeShipping,
    freeShippingThreshold: getFreeShippingThreshold(countryCode),
    shippingDetails: shipping,
  };
};
