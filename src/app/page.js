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
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FA_logo_dark } from "./assets/images/images";

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
      <SeasonalFragrances />
      <CollectionsBanner />
      <FeaturedCategories />
      <MiddleEasternFragrances />
      <Gifts />
      <div className=" hidden md:flex md:!pt-20">
        <Footer />
      </div>
      <div className="md:hidden flex relative h-[30vh] w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1747850336872-449f7973d6c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdoaXRlJTIwc2FuZCUyMGJnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          alt=""
          className="w-full h-full object-fill"
        />
        <div className=" absolute top-10 ">
          <Link href="/" className="flex flex-col items-center justify-center font-extrabold text-3xl gap-2">
            <Image
              className="w-5"
              width={100}
              height={100}
              src={FA_logo_dark}
              alt="Brand_logo"
              priority
            />
            HOME OF FRAGRANCES
          </Link>
        </div>
      </div>
    </div>
  );
}
