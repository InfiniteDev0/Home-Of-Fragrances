"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import TrendingProducts from "./components/SeasonalFragrances";
import MiddleEasternFragrances from "./components/MiddleEasternFragrances";
import BrandSpotlight from "./components/BrandSpotlight";
import NewArrivals from "./components/NewArrivals";
import CollectionsBanner from "./components/CollectionsBanner";
import SeasonalFragrances from "./components/SeasonalFragrances";
import SplashScreen from "@/components/SplashScreen";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Check if it's the user's first visit (only after client-side hydration)
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowSplash(false);
    }
  }, [isClient]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    localStorage.setItem("hasVisited", "true");
  };

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="w-full">
      <Hero />
      <NewArrivals />
      {/* seasonal fragrances */}
      <SeasonalFragrances />
      {/* designers */}
      {/* niche */}
      {/* men */}
      {/* women */}
      {/* featured bbrands */}
    </div>
  );
}
