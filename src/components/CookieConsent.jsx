"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/app/context/AuthContext";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateCookieConsent } = useAuth();

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (consent === undefined) {
      setIsOpen(true);
    } else {
      updateCookieConsent?.(consent);
    }
  }, [updateCookieConsent]);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setIsOpen(false);
    updateCookieConsent?.("accepted");
  };

  const handleReject = () => {
    Cookies.set("cookie-consent", "rejected", { expires: 365 });
    setIsOpen(false);
    updateCookieConsent?.("rejected");
  };

  const handlePersonalize = () => {
    Cookies.set("cookie-consent", "personalized", { expires: 365 });
    setIsOpen(false);
    updateCookieConsent?.("personalized");
  };

  const handleClose = () => {
    Cookies.set("cookie-consent", "rejected", { expires: 365 });
    setIsOpen(false);
    updateCookieConsent?.("rejected");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="w-full top-10 max-w-2xl bg-white shadow-2xl rounded-none relative z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>

            <div className=" text-sm px-16 py-10">
              <div className="mb-12 space-y-6">
                <p className="text-gray-700  text-xs leading-relaxed">
                  We use cookies, including third party cookies, for operational
                  purposes, statistical analyses, to personalize your
                  experience, provide you with targeted content tailored to your
                  interests and to analyze the performance of our advertising
                  campaigns.
                </p>

                <p className="text-gray-700 text-xs leading-relaxed">
                  You can accept these cookies by clicking on "Accept all", or
                  refuse them on "Reject All" or clicking on "Personalize my
                  choices" to manage your preferences.
                </p>

                <p className="text-gray-700 text-xs leading-relaxed">
                  You can change your preferences at any time at the bottom of
                  the HomeOfFragrances.com website.
                </p>

                <p className="text-gray-700 text-xs leading-relaxed">
                  For further information about cookie management, please see
                  dedicated section on the HomeOfFragrances.com site of your
                  country of residence.
                </p>
              </div>

              <div className="flex justify-center space-x-6">
                <button
                  onClick={handlePersonalize}
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium transition-colors duration-200 tracking-wide"
                >
                  Personalize my choices
                </button>

                <button
                  onClick={handleReject}
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium transition-colors duration-200 tracking-wide"
                >
                  Reject All
                </button>

                <button
                  onClick={handleAccept}
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium transition-colors duration-200 tracking-wide"
                >
                  Accept all
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
