"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BrandSubcategoryLists = ({ category }) => {
  const router = useRouter();

  // Function to close the list by removing the query parameter
  const handleClose = () => {
    const url = window.location.pathname;
    router.push(url);
  };

  // Get the display name of the category
  const getCategoryDisplayName = () => {
    switch (category) {
      case "all-brands":
        return "All Brands";
      case "legacy-houses":
        return "Legacy Houses";
      case "modern-icons":
        return "Modern Icons";
      case "luxury-lines":
        return "Luxury Lines";
      case "best-sellers":
        return "Best Sellers";
      case "signature-collections":
        return "Signature Collections";
      case "fresh-and-daytime":
        return "Fresh & Daytime";
      case "evening-and-formal":
        return "Evening & Formal";
      default:
        return "";
    }
  };

  // Simulated brands data - you would typically fetch this from an API
  const brands = [
    "Chanel",
    "Dior",
    "Gucci",
    "Louis Vuitton",
    "Hermès",
    "Prada",
    "Versace",
    "YSL",
    // Add more brands as needed
  ].sort();

  return (
    <div className="relative">
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute right-0 top-0 p-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Category title */}
      <h2 className="text-xl font-semibold mb-4">{getCategoryDisplayName()}</h2>

      {/* Brands list */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <Link
            href={`/eng-e1/homepage/brands/designer/featured%20Brands/our${brand}Store`}
            key={index}
            className="text-left p-2 hover:bg-gray-50 rounded-md text-sm"
          >
            {brand}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandSubcategoryLists;
