import axios from "axios";
import Cookies from "js-cookie";
import { countries } from "country-data-list";

/**
 * Location detection and management utilities
 */

// Cookie keys
export const COOKIE_KEYS = {
  CONSENT: "cookie-consent",
  USER_LOCATION: "user-location",
  SELECTED_COUNTRY: "selected-country",
  CURRENCY: "user-currency",
};

/**
 * Detect user's location using IP geolocation
 */
export const detectUserLocation = async () => {
  try {
    // Using ipapi.co for free IP geolocation
    const response = await axios.get("https://ipapi.co/json/");
    const { country_code, country_name, currency } = response.data;

    // Find the country in our countries data
    const countryData = countries.all.find(
      (country) => country.alpha2.toLowerCase() === country_code.toLowerCase()
    );

    if (countryData) {
      return {
        alpha2: countryData.alpha2,
        alpha3: countryData.alpha3,
        name: countryData.name,
        currency: currency || countryData.currencies[0],
        detected: true,
      };
    }

    return null;
  } catch (error) {
    console.error("Failed to detect user location:", error);
    return null;
  }
};

/**
 * Get stored user location from cookies
 */
export const getStoredLocation = () => {
  try {
    const stored = Cookies.get(COOKIE_KEYS.SELECTED_COUNTRY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Failed to parse stored location:", error);
    return null;
  }
};

/**
 * Save user's selected country to cookies
 */
export const saveUserLocation = (countryData) => {
  const consent = Cookies.get(COOKIE_KEYS.CONSENT);

  if (consent === "accepted" || consent === "personalized") {
    try {
      // Store the complete country data
      Cookies.set(
        COOKIE_KEYS.SELECTED_COUNTRY,
        JSON.stringify({
          alpha2: countryData.alpha2,
          alpha3: countryData.alpha3,
          countryCallingCodes: countryData.countryCallingCodes || [],
          currencies: countryData.currencies || [],
          emoji: countryData.emoji,
          ioc: countryData.ioc,
          languages: countryData.languages || [],
          name: countryData.name,
          status: countryData.status,
          timestamp: Date.now(),
        }),
        { expires: 365 }
      );

      // Store the currency separately for easy access
      Cookies.set(COOKIE_KEYS.CURRENCY, countryData.currencies?.[0] || "KES", {
        expires: 365,
      });

      return true;
    } catch (error) {
      console.error("Failed to save user location:", error);
      return false;
    }
  }

  return false;
};

/**
 * Get user's preferred currency
 */
export const getUserCurrency = () => {
  const storedLocation = getStoredLocation();
  return storedLocation?.currency || Cookies.get(COOKIE_KEYS.CURRENCY) || "KES";
};

/**
 * Initialize user location on app start
 */
export const initializeUserLocation = async () => {
  const consent = Cookies.get(COOKIE_KEYS.CONSENT);

  // If user hasn't given consent, return null
  if (!consent || consent === "rejected") {
    return null;
  }

  // Check if we have stored location
  const storedLocation = getStoredLocation();
  if (storedLocation) {
    return storedLocation;
  }

  // If consent is given but no stored location, detect it
  if (consent === "accepted" || consent === "personalized") {
    const detectedLocation = await detectUserLocation();
    if (detectedLocation) {
      // Find full country data
      const countryData = countries.all.find(
        (country) => country.alpha2 === detectedLocation.alpha2
      );

      if (countryData) {
        saveUserLocation(countryData);
        return {
          ...countryData,
          currency: detectedLocation.currency,
        };
      }
    }
  }

  return null;
};

/**
 * Clear all location-related cookies
 */
export const clearLocationData = () => {
  Cookies.remove(COOKIE_KEYS.SELECTED_COUNTRY);
  Cookies.remove(COOKIE_KEYS.CURRENCY);
  Cookies.remove(COOKIE_KEYS.USER_LOCATION);
};

/**
 * Check if user has given cookie consent
 */
export const hasConsent = () => {
  const consent = Cookies.get(COOKIE_KEYS.CONSENT);
  return consent === "accepted" || consent === "personalized";
};

/**
 * Get default country based on user's stored or detected location
 */
export const getDefaultCountry = async () => {
  const storedLocation = getStoredLocation();

  if (storedLocation) {
    return storedLocation.alpha3; // CountryDropdown expects alpha3
  }

  // Check if user closed modal without consent (default location set)
  const defaultLocation = Cookies.get("default-location");
  if (defaultLocation) {
    return defaultLocation;
  }

  if (hasConsent()) {
    const detectedLocation = await detectUserLocation();
    if (detectedLocation) {
      // Check if detected location is in our delivery countries
      const deliveryCountries = ["KEN", "TZA", "UGA", "EGY"]; // ISO alpha3 codes
      if (deliveryCountries.includes(detectedLocation.alpha3)) {
        return detectedLocation.alpha3;
      }
    }
  }

  return "KEN"; // Default to Kenya as primary delivery country
};
