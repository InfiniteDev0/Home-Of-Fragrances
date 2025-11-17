"use client";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";
import BrandSubcategoryLists from "@/components/brands/BrandSubcategoryLists";

const BrandSubCategorypage = () => {
  const searchParams = useSearchParams();
  const showBrandList =
    searchParams.has("all-brands") ||
    searchParams.has("legacy-houses") ||
    searchParams.has("modern-icons") ||
    searchParams.has("luxury-lines") ||
    searchParams.has("best-sellers") ||
    searchParams.has("signature-collections") ||
    searchParams.has("fresh-and-daytime") ||
    searchParams.has("evening-and-formal");

  const selectedCategory = searchParams.get("all-brands")
    ? "all-brands"
    : searchParams.get("legacy-houses")
    ? "legacy-houses"
    : searchParams.get("modern-icons")
    ? "modern-icons"
    : searchParams.get("luxury-lines")
    ? "luxury-lines"
    : searchParams.get("best-sellers")
    ? "best-sellers"
    : searchParams.get("signature-collections")
    ? "signature-collections"
    : searchParams.get("fresh-and-daytime")
    ? "fresh-and-daytime"
    : searchParams.get("evening-and-formal")
    ? "evening-and-formal"
    : "";
  const products = [
    {
      id: 1,
      name: "LV Imagination",
      brand: "Louis Vuitton",
      image:
        "https://whitewall.art/wp-content/uploads/2021/04/lv-beach-s4-596v3-e1617314981342.jpeg", // image for small screen sizes.
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090", image for large screen sizes
      price: "920",
      rating: 4.8,
      description: "Fresh Aquatic Escape / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 2,
      name: "LV Imagination",
      brand: "Louis Vuitton",
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F06%2Flouis-vuitton-imagination-mens-perfume-fragrance-1.jpg?q=75&w=800&cbr=1&fit=max",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
      price: "920",
      rating: 4.8,
      description: "Fresh Aquatic Escape / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 3,
      name: "Lv Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://i0.wp.com/scentadvice.com/wp-content/uploads/2025/07/hawas-turning-into-the-fast-furious-franchise-megamare-v0-s4ii4y32kfff1-1.webp?fit=640%2C834&ssl=1",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.9,
      description: "Radiant Solar Scent / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 4,
      name: "Lv Pacific Chill",
      brand: "Fragrance World",
      image:
        "https://elitegen.singtao.ca/wp-content/uploads/elitegen2020/2023/05/PACIFIC-CHILL-PR-VISUAL-1-scaled.jpg",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
      price: "180",
      rating: 4.7,
      description: "Cool Ocean Breeze / 100ml",
      brandDescription:
        "Affordable luxury fragrances inspired by premium designer scents",
      brandLogo:
        "https://fragranceworld.ae/wp-content/uploads/2021/03/fw-logo.png",
    },
    {
      id: 5,
      name: "Odyssey Toffee Coffee",
      brand: "Armaf",
      image:
        "https://perfumesdemarca.com.mx/cdn/shop/files/odyssey-Toffee-Coffee-de-armaf-edp-100-ml-para-hombre-perfumes-originales-perfumes-de-marca-perfumes-arabes-8.jpg?v=1758325288",
      // "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
      price: "120",
      rating: 4.6,
      description: "Rich Gourmand Delight / 100ml",
      brandDescription:
        "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
      brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full" id="brandHeaderSection">
        <div className="px-6 pt-20">
          <h1 className="font-semibold text-2xl">French & Italian Classics</h1>
          <p className="text-sm font-semibold">
            Description of what French & Italian Classics are
          </p>
        </div>
        <div
          className="flex items-center border-b pt-5 pb-3 justify-between w-full sticky top-[64px] px-6 bg-white z-50 transition-all duration-300"
          id="brandNav"
        >
          <ul className="flex gap-5 text-xs text-gray-600 font-semibold tracking-wider">
            <Link
              href="?all-brands"
              className="cursor-pointer hover:text-black hover:underline"
            >
              All Brands
            </Link>
            <Link
              href="?legacy-houses"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Legacy Houses
            </Link>
            <Link
              href="?modern-icons"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Modern Icons
            </Link>
            <Link
              href="?luxury-lines"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Luxury Lines
            </Link>
            <Link
              href="?best-sellers"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Best Sellers
            </Link>
            <Link
              href="?signature-collections"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Signature Collections
            </Link>
            <Link
              href="?fresh-and-daytime"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Fresh & Daytime
            </Link>
            <Link
              href="?evening-and-formal"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Evening & Formal
            </Link>
          </ul>

          <div
            className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
            // onClick={() => setIsFilterOpen(true)}
          >
            <ListFilter className="w-3 h-3" />
            Brands filter
            {/* Brands Filters Search bar input (with auto-suggestions) Dropdown
              filters: Category → Designer / Niche / Indie / Arabian / Celebrity
              Country → France, Italy, UAE, etc. Sort → A–Z, Popularity, Latest
              Triggers state updates in parent (brands/page.jsx). */}
          </div>
        </div>
        {showBrandList && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]">
            <div className="fixed inset-x-0 top-[120px] bg-white p-6 shadow-lg">
              <BrandSubcategoryLists category={selectedCategory} />
            </div>
          </div>
        )}
        <div className="px-6 pt-8">
          <div className="flex flex-col gap-[5rem]">
            {/* All Brands */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                All Brands
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={"/brands/all"} className="flex justify-center mb-8">
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore All Brands
                </Button>
              </Link>
            </div>

            {/* Legacy Houses */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Legacy Houses
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/legacy"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore Legacy Houses
                </Button>
              </Link>
            </div>

            {/* Modern Icons */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Modern Icons
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/modern-icons"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore Modern Icons
                </Button>
              </Link>
            </div>

            {/* Luxury Lines */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Luxury Lines
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/luxury"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore Luxury Lines
                </Button>
              </Link>
            </div>

            {/* Best Sellers */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Best Sellers
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/best-sellers"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Shop Best Sellers
                </Button>
              </Link>
            </div>

            {/* Signature Collections */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Signature Collections
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/signature"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore Signature Collections
                </Button>
              </Link>
            </div>

            {/* Fresh & Daytime */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Fresh & Daytime
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/fresh-daytime"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Discover Fresh & Daytime
                </Button>
              </Link>
            </div>

            {/* Evening & Formal */}
            <div className="flex flex-col gap-5">
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Evening & Formal
              </h1>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/brands/evening-formal"}
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Explore Evening & Formal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSubCategorypage;
