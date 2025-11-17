"use client";

import { countryRegions } from "./countries";

const LOCATION_KEY = "userLocation";
const CONSENT_KEY = "locationConsent";

export function initializeUserLocation() {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(LOCATION_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function saveUserLocation(location) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
}

export function getUserCurrency(countryCode) {
  // Default currency mapping - expand as needed
  const currencyMap = {
    AE: "AED",
    US: "USD",
    GB: "GBP",
    EU: "EUR",
    // Add more currency mappings as needed
  };

  return currencyMap[countryCode] || "USD";
}

export function hasConsent() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "true";
}

export function setConsent(value) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value.toString());
}

export function getDefaultCountry() {
  // Default to UAE
  return {
    name: "United Arab Emirates",
    code: "AE",
  };
}

export function clearLocationData() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LOCATION_KEY);
  localStorage.removeItem(CONSENT_KEY);
}

export function findCountryByCode(code) {
  for (const region of countryRegions) {
    const country = region.countries.find((c) => c.code === code);
    if (country) return country;
  }
  return getDefaultCountry();
}

export function getAllCountries() {
  return countryRegions.reduce((acc, region) => {
    return [...acc, ...region.countries];
  }, []);
}
