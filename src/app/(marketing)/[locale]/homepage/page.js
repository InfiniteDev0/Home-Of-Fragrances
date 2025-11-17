"use client";
import CollectionsBanner from "@/components/home/CollectionsBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Gifts from "@/components/home/Gifts";
import Hero from "@/components/home/Hero";
import MiddleEasternFragrances from "@/components/home/MiddleEasternFragrances";
import NewArrivals from "@/components/home/NewArrivals";
import SeasonalFragrances from "@/components/home/SeasonalFragrances";
export default function HomePage() {

  return (
    <div className="w-full">
      <Hero />
      <NewArrivals />
      <SeasonalFragrances />
      <CollectionsBanner />
      <FeaturedCategories />
      <MiddleEasternFragrances />
      <Gifts />
    </div>
  );
}
