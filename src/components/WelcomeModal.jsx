"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCountry } from "../context/CountryContext";

const WelcomeModal = ({ onCountrySelect, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const { setSelectedCountry } = useCountry();

  // Always start country detection for the modal
  useEffect(() => {
    // Detect user's country and show modal
    detectUserCountry();
    setIsVisible(true);
  }, []);

  const detectUserCountry = async () => {
    try {
      // Try multiple IP geolocation services
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      if (data.country) {
        setDetectedCountry({
          code: data.country.toLowerCase(),
          name: data.country_name,
          city: data.city,
          region: data.region,
        });
        setUserLocation(`${data.city}, ${data.country_name}`);
      } else {
        // Fallback to Kenya if detection fails
        setDetectedCountry({
          code: "ke",
          name: "Kenya",
          city: "Nairobi",
          region: "Nairobi",
        });
        setUserLocation("Kenya");
      }
    } catch (error) {
      console.error("Error detecting country:", error);
      // Default to Kenya
      setDetectedCountry({
        code: "ke",
        name: "Kenya",
        city: "Nairobi",
        region: "Nairobi",
      });
      setUserLocation("Kenya");
    }
  };

  const handleCountryConfirm = (country) => {
    // Update the country context for pricing
    setSelectedCountry(country);

    // Store in localStorage
    localStorage.setItem("fragranceworld_welcome_seen", "true");
    localStorage.setItem("fragranceworld_country", JSON.stringify(country));

    // Notify parent component
    onCountrySelect(country);
    setIsVisible(false);
    onClose?.();
  };

  const handleCloseModal = () => {
    // Default to Kenya if user closes without selecting
    const defaultCountry = {
      code: "ke",
      name: "Kenya",
    };

    // Update the country context for pricing
    setSelectedCountry(defaultCountry);

    localStorage.setItem("fragranceworld_welcome_seen", "true");
    localStorage.setItem(
      "fragranceworld_country",
      JSON.stringify(defaultCountry)
    );

    onCountrySelect(defaultCountry);
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible || !detectedCountry) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-none shadow-2xl max-w-lg w-full relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="px-12 py-16 text-center">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
                Welcome to FragranceWorld.com
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                You are visiting us from {userLocation || "your location"},
                would you like to go to our
                <br />
                international website?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() =>
                  handleCountryConfirm({
                    code: "ke",
                    name: "Kenya",
                  })
                }
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 px-8 text-base font-medium transition-colors duration-200 tracking-wide"
              >
                Go to Kenya
              </button>

              <button
                onClick={() => handleCountryConfirm(detectedCountry)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 px-8 text-base font-medium transition-colors duration-200 tracking-wide"
              >
                Confirm
              </button>
            </div>

            {/* Other Options */}
            <div className="text-center">
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium tracking-wide transition-colors duration-200"
              >
                Other countries/regions
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeModal;
