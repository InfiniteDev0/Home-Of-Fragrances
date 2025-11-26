"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Salespage = () => {
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
    <div className="flex flex-col w-full gap-[2rem]">
      {/* header file */}
      <div className="mygrid w-full pt-16" id="brandHeaderSection">
        <div className="bg-black">
          <img
            className=""
            src="https://ounass-kw.atgcdn.ae/contentful/b3xlytuyfm3e/IA5DeNWB2ii1f09pMbDfs/e81ca6054c3a6917bffeb6ebac38b0de/Amouage_Library_Ounass_Website_Banner_Desktop_1180x660px_-_Sulaima_Rashed.jpg?q=70"
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-center !px-10 bg-zinc-900 text-white gap-5">
          <div>
            <h1 className="font-bold poppins uppercase text-4xl">
              Sales, Deals & Limited-Time Offers
            </h1>
            <p className="text-xs text-gray-500 mt-2 font-semibold w-[80%]">
              Explore holiday discounts, exclusive brand promotions, gift sets,
              and the best fragrance deals available right now.
            </p>
          </div>
          <ul className="flex flex-col gap-4 poppins !px-5 py-3">
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Holiday Deals
            </li>
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Limited Editions
            </li>
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Gift Sets
            </li>
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Flash Sales
            </li>
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Regional Offers
            </li>
            <li className="uppercase font-semibold text-xs  hover:text-gray-500 transition-all duration-500 cursor-pointer">
              Brand Exclusives
            </li>
          </ul>
        </div>
      </div>
      {/* sales type */}
      <div classname={"flex flex-col gap-[5rem]"}>
        {/* 🎄 Christmas & Holiday Season Deals */}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Christmas & Holiday Season Deals
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mb-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              New Arrivals For Him
            </Button>
          </Link>
        </div>
        {/* best Sellers */}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            BestSellers
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mb-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              BestSellers For Him
            </Button>
          </Link>
        </div>
        {/* Winter Deals*/}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Winter Deals
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mb-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Limited Edition For Him
            </Button>
          </Link>
        </div>
        {/* Flash Sales & Limited-Time Offers*/}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Flash Sales & Limited-Time Offers
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mb-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Seasonal Fragrances For Him
            </Button>
          </Link>
        </div>
        {/* Gift Sets & Bundles */}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Gift Sets & Bundles
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mb-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              MiddleEastern For Him
            </Button>
          </Link>
        </div>
        {/* Giftable */}
        <div className="flex flex-col gap-5 !px-6">
          {/* Header */}
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Gift For Him
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
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mt-8"
          >
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Make a Gift For Him
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Salespage;
