"use client";

import React, { createContext, useState, useContext } from "react";
import {
  initializeUserLocation,
  saveUserLocation,
  getUserCurrency,
  hasConsent,
  getDefaultCountry,
  clearLocationData,
} from "@/lib/locationUtils";

// ----------------------
// Context Setup
// ----------------------
export const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

// ----------------------
// Provider Component
// ----------------------
export const ShopProvider = ({ children }) => {
  // ----------------------
  // Cart State and wishlist
  // ----------------------
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  // ----------------------
  // Location State
  // ----------------------
  const [userLocation, setUserLocation] = useState(null);
  const [userCurrency, setUserCurrency] = useState("KES"); // Default to Kenyan Shilling
  const [defaultCountryCode, setDefaultCountryCode] = useState("KEN"); // Default to Kenya
  const [hasLocationConsent, setHasLocationConsent] = useState(false);

  // ----------------------
  // Consent Handling
  // ----------------------
  const handleConsentChange = async (consentGiven, boolean) => {
    setHasLocationConsent(consentGiven);

    if (consentGiven) {
      // User gave consent, initialize location
      const location = await initializeUserLocation();
      if (location) {
        setUserLocation(location);
        setUserCurrency(location.currency || getUserCurrency());
        setDefaultCountryCode(location.alpha3);
      } else {
        const defaultCountry = await getDefaultCountry();
        setDefaultCountryCode(defaultCountry);
      }
    } else {
      // User rejected consent, clear data and default to Kenya
      clearLocationData();
      setUserLocation(null);
      setUserCurrency("KES");
      setDefaultCountryCode("KEN");
    }
  };

  // ----------------------
  // UI State
  // ----------------------
  const [menuText, setMenuText] = useState("Menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ----------------------
  // Context Value
  // ----------------------
  const value = {
    // Cart
    cartItems,
    setCartItems,
    // Wishlist
    wishlistItems,
    setWishlistItems,

    // Location
    userLocation,
    setUserLocation,
    userCurrency,
    setUserCurrency,
    defaultCountryCode,
    setDefaultCountryCode,
    hasLocationConsent,
    setHasLocationConsent,
    handleConsentChange,

    // UI
    menuText,
    setMenuText,
    isMenuOpen,
    setIsMenuOpen,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;

// Location state
// userLocation,
// userCurrency,
// isLocationLoading,
// hasLocationConsent,
// defaultCountryCode,

// // Location methods
// updateUserLocation,
// handleConsentChange,
// getLocationDisplay,
// convertPrice,
// formatPrice,

// // Utility methods
// clearUserData: clearLocationData,
// Update user's selected country
// const updateUserLocation = (countryData) => {
//   // Ensure we have complete country data
//   const completeCountryData = {
//     alpha2: countryData.alpha2,
//     alpha3: countryData.alpha3,
//     countryCallingCodes: countryData.countryCallingCodes || [],
//     currencies: countryData.currencies || ["USD"],
//     emoji: countryData.emoji,
//     ioc: countryData.ioc,
//     languages: countryData.languages || [],
//     name: countryData.name,
//     status: countryData.status || "assigned",
//   };

//   setUserLocation(completeCountryData);

//   // Update currency
//   const currency = completeCountryData.currencies?.[0] || "USD";
//   setUserCurrency(currency);

//   // Update default country code for the dropdown
//   setDefaultCountryCode(completeCountryData.alpha3);

//   // Save to cookies if consent is given
//   if (hasLocationConsent) {
//     saveUserLocation(completeCountryData);
//   }
// };

// Get formatted location display
// const getLocationDisplay = () => {
//   if (userLocation) {
//     return `${userLocation.name} (${userCurrency})`;
//   }
//   return "Select Location";
// };

// Convert price to user's currency
// const convertPrice = async (basePrice, baseCurrency = "USD") => {
//   const { convertAndFormatPrice } = await import("@/lib/currencyUtils");
//   return await convertAndFormatPrice(basePrice, baseCurrency, userCurrency);
// };

// Format price in user's currency (synchronous version for display)
// const formatPrice = (price, currency = userCurrency) => {
//   const { formatPrice: formatPriceUtil } = require("@/lib/currencyUtils");
//   return formatPriceUtil(price, currency);
// };

// Initialize location on app start
// useEffect(() => {
//   const initLocation = async () => {
//     setIsLocationLoading(true);

//     try {
//       const consent = hasConsent();
//       setHasLocationConsent(consent);

//       if (consent) {
//         const location = await initializeUserLocation();
//         if (location) {
//           setUserLocation(location);
//           setUserCurrency(location.currency || getUserCurrency());
//           setDefaultCountryCode(location.alpha3); // Update default country code when location is initialized
//         }

//         const defaultCountry = await getDefaultCountry();
//         setDefaultCountryCode(defaultCountry);
//       }
//     } catch (error) {
//       console.error("Failed to initialize location:", error);
//     } finally {
//       setIsLocationLoading(false);
//     }
//   };

//   initLocation();
// }, []);

// Handle cookie consent changes
