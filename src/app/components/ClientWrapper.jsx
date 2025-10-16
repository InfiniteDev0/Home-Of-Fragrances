"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import CookieConsent from "@/components/CookieConsent";
import { Toaster } from "sonner";
import Navbar from "./Navbar";
import ShopProvider from "../context/ShopContext";
import { AuthProvider } from "../context/AuthContext";
import { CountryProvider } from "../../context/CountryContext";
import WelcomeModal from "../../components/WelcomeModal";
import Footer from "./Footer";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");
  const isProfilePage = pathname?.startsWith("/profile");
  const hideNavbar = isAuthPage || isProfilePage; // Hide navbar on both auth and profile pages

  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [countrySelected, setCountrySelected] = useState(false);

  // Check if user needs to see welcome modal on component mount
  React.useEffect(() => {
    if (!hideNavbar) {
      // Only show modals on pages that show navbar
      const hasSeenWelcome = localStorage.getItem(
        "fragranceworld_welcome_seen"
      );

      // For first-time visitors, always show welcome modal first
      if (!hasSeenWelcome) {
        setShowWelcomeModal(true);
      } else {
        // For returning visitors, check if they need to see cookie consent
        setCountrySelected(true);
        const hasSeenCookies = document.cookie.includes("cookie-consent");
        if (!hasSeenCookies) {
          setShowCookieConsent(true);
        }
      }
    }
  }, [hideNavbar]);

  const handleConsentChange = (consent) => {
    setShowCookieConsent(false);
  };

  const handleCountrySelect = (country) => {
    localStorage.setItem("fragranceworld_welcome_seen", "true");
    localStorage.setItem(
      "fragranceworld_selected_country",
      JSON.stringify(country)
    );
    setShowWelcomeModal(false);
    setCountrySelected(true);

    // Now show cookie consent after country selection
    setTimeout(() => {
      setShowCookieConsent(true);
    }, 500); // Small delay for better UX
  };

  const handleWelcomeClose = () => {
    // If user closes without selecting, default to UAE
    const defaultCountry = { code: "ae", name: "United Arab Emirates" };
    handleCountrySelect(defaultCountry);
  };

  return (
    <AuthProvider>
      <CountryProvider>
        <ShopProvider>
          <Toaster position="top-right"  theme="dark" />
          {!hideNavbar && showCookieConsent && countrySelected && (
            <CookieConsent onConsentChange={handleConsentChange} />
          )}
          {!hideNavbar && <Navbar />}
          <main className={hideNavbar ? "" : ""}>
            {children}
        
          </main>
        </ShopProvider>
      </CountryProvider>
    </AuthProvider>
  );
};

export default ClientWrapper;
