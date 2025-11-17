"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function LocationConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if we need to show the consent banner
    const needsConsent = Cookies.get("needsConsent");
    const hasConsent = Cookies.get("locationConsent");
    const userLocation = Cookies.get("userLocation");

    if (needsConsent === "true" && !hasConsent && !userLocation) {
      setShowBanner(true);
    }
  }, []);

  const detectUserLocation = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Failed to fetch location");

      const data = await response.json();

      // Format location data
      const locationData = {
        alpha2: data.country_code,
        alpha3: data.country_code_iso3,
        name: data.country_name,
        currency: data.currency,
        continent_code: data.continent_code,
        calling_code: data.country_calling_code.replace("+", ""),
      };

      // Save location data
      Cookies.set("userLocation", JSON.stringify(locationData), {
        path: "/",
        expires: 30,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      // Construct new URL with detected country
      const locale = `eng-${locationData.alpha2.toLowerCase()}`;
      const currentUrl = new URL(window.location.href);
      const newPath = pathname.replace(/^\/eng-[a-z]{2}/, `/${locale}`);
      currentUrl.pathname = newPath;
      currentUrl.searchParams.set("dispatchCountry", locationData.alpha2);

      // Navigate to new URL
      window.location.href = currentUrl.toString();
    } catch (error) {
      console.error("Error detecting location:", error);
      handleUAEFallback();
    }
  };

  const handleUAEFallback = () => {
    const uaeLocation = {
      alpha2: "AE",
      alpha3: "ARE",
      name: "United Arab Emirates",
      currency: "AED",
      continent_code: "AS",
      calling_code: "971",
    };

    Cookies.set("userLocation", JSON.stringify(uaeLocation), {
      path: "/",
      expires: 30,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Redirect to UAE homepage if not already there
    if (!pathname.includes("eng-ae")) {
      const currentUrl = new URL(window.location.href);
      currentUrl.pathname = currentUrl.pathname.replace(
        /^\/eng-[a-z]{2}/,
        "/eng-ae"
      );
      currentUrl.searchParams.set("dispatchCountry", "AE");
      window.location.href = currentUrl.toString();
    }
  };

  const handleConsent = async (allowed) => {
    setIsLoading(true);

    // Remove the needs consent flag
    Cookies.remove("needsConsent");

    // Set the consent decision
    Cookies.set("locationConsent", allowed ? "true" : "false", {
      path: "/",
      expires: 30,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    if (allowed) {
      await detectUserLocation();
    } else {
      handleUAEFallback();
    }

    setShowBanner(false);
    setIsLoading(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            We'd like to use your location to provide you with the most relevant
            shopping experience and local currency. Would you like to allow
            location-based features?
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            Allow
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            Continue with Default
          </button>
        </div>
      </div>
    </div>
  );
}
