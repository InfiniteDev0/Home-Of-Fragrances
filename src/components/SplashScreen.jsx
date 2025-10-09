"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FA_logo } from "@/app/assets/images/images";

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Auto-hide after 3 seconds (like Aston Martin)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClient]);

  const handleExitComplete = () => {
    onComplete();
  };

  if (!isClient) {
    return null; // Don't render on server
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Logo Animation - Aston Martin Style */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
              y: -300, // Rise up to navbar position
              scale: 0.6,
              transition: { duration: 1.2, ease: "easeInOut" },
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src={FA_logo}
              alt="Home of Fragrances"
              className="w-15 mx-auto" // Made smaller like Aston Martin
            />
            <h1>HOME OF FRAGRANCES</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
