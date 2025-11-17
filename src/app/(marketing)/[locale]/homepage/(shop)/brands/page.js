"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Brandspage() {

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
        <div className="px-6 pt-20 ">
          <h1 className="font-semibold text-2xl">
            Explore Our Featured Brands
          </h1>
        </div>
        <div
          className="flex items-center border-b pt-5 pb-3 justify-between w-full sticky top-[64px] px-6 bg-white z-50  transition-all duration-300"
          id="brandNav"
        >
          <ul className="flex gap-5 text-xs text-gray-600 font-semibold tracking-wider">
            <Link
              href="/eng-e1/homepage/brands/designer"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Designer
            </Link>
            <Link
              href="/eng-e1/homepage/brands/niche"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Niche
            </Link>
            <Link
              href="/eng-e1/homepage/brands/middleeastern"
              className="cursor-pointer hover:text-black hover:underline"
            >
              MiddleEastern
            </Link>
            <Link
              href="/eng-e1/homepage/brands/indie"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Indie
            </Link>
            <Link
              href="/eng-e1/homepage/brands/private-exclusive"
              className="cursor-pointer hover:text-black hover:underline"
            >
              Private / Exclusive Lines
            </Link>
          </ul>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <p className="text-sm underline text-gray-500 font-semibold">
                Over 100 Featured brands
              </p>
              <span className="w-[1px] h-5 bg-gray-500"></span>
            </div>
            <div
              className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
              href="/brands"
            >
              View Brand List
            </div>
          </div>
        </div>
        {/* Each brand collection */}
        <div className="px-6 pt-8">
          <div className="flex flex-col gap-[5rem]">
            {/* new arrivals */}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Designer Brands
              </h1>
              {/* products */}
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    {/* Image Container */}
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
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
                href={"/eng-e1/homepage/brands/designer"}
                alt="link to new arrivals"
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Featured Designer Brands
                </Button>
              </Link>
            </div>
            {/* best Sellers */}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Niche Houses
              </h1>
              {/* products */}
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    {/* Image Container */}
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
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
                href={"/eng-e1/homepage/brands/niche"}
                alt="link to new arrivals"
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Featured Niche brands
                </Button>
              </Link>
            </div>
            {/* Limited Edition */}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Middle Eastern Brands
              </h1>
              {/* products */}
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    {/* Image Container */}
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
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
                href={"/eng-e1/homepage/brands/middleeastern"}
                alt="link to new arrivals"
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Middle Eastern brands
                </Button>
              </Link>
            </div>
            {/* Seasonal*/}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Indie Fragrances
              </h1>
              {/* products */}
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    {/* Image Container */}
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
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
                href={"/eng-e1/homepage/brands/indie"}
                alt="link to new arrivals"
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Feautured Indie Fragrances
                </Button>
              </Link>
            </div>
            {/* MiddleEastern */}
            <div className="flex flex-col gap-5">
              {/* Header */}
              <h1 className="md:text-base underline font-semibold flex items-center gap-2">
                Private / Exclusive Lines
              </h1>
              {/* products */}
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    {/* Image Container */}
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
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
                href={"/eng-e1/homepage/brands/private-exclusive"}
                alt="link to new arrivals"
                className="flex justify-center mb-8"
              >
                <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                  Private / Exclusive Lines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brandspage;
