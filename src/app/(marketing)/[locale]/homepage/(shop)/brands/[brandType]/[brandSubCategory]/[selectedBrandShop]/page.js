"use client";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Instagram,
  ListFilter,
  PlayCircle,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SelectedbrandShoppage = () => {
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

  const collections = [
    {
      name: "Journey to China",
      img: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fe73125b44a366a3ab06c0de7de3c1d6e80343267-1920x1080.jpg%3Fq%3D90%26fit%3Dmax%26auto%3Dformat&w=3840&q=90",
    },
    {
      name: "Les Extraits",
      img: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fr_Hub_Perfumes_2025_V2.html/jcr:content/assets/collections/Extraits_Joye_LV_Extraits_Family1_Adb98_B_Extend_1600x2000_DII.jpg?imwidth=730",
    },
    {
      name: "Les Parfums Louis Vuitton",
      img: "https://hips.hearstapps.com/hmg-prod/images/les-parfums-de-cologne-1650555404.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    },
    {
      name: "Discontinued",
      img: "https://fragrancerevival.com/wp-content/uploads/2021/01/jil-sander-man-absolute-cologne-1.png",
    },
    {
      name: "Limited Edition",
      img: "https://me.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_LV_Lovers_2025_Copper.html/jcr:content/assets/FRAGRANCE_LOVERSCOLLECTIBLE_VISUAL03_LVCOM_1600x2000_DII.jpg",
    },
  ];

  const RelatedBrands = [
    {
      name: "Dior",
      img: "https://ybeauty.pk/cdn/shop/files/5PCPerfume5.jpg?v=1738062017",
    },
    {
      name: "Chanel",
      img: "https://yourperfumeshop.co.uk/cdn/shop/files/bleu-de-chanel-advert-parfum_800x.png?v=1717608283",
    },
    {
      name: "Hermes",
      img: "https://fimgs.net/himg/o.MEfgsbOudLX.jpg",
    },
    {
      name: "Maison Francis Kurkdjian",
      img: "https://www.franciskurkdjian.com/on/demandware.static/-/Sites-mfk-master-catalog/default/dw6a4542e3/BR540_REPUSH25-KV_AIR-ALL_triptych_square_1080x1080.jpg",
    },
    {
      name: "Tom Ford",
      img: "https://cdn4.beautinow.com/wp-content/uploads/2024/05/167.2.jpg",
    },
  ];

  const reviews = [
    {
      vid: "Jeremy Fragrance",
      caption: "The king of modern freshness",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Favorite%20Louis%20Vuitton%20Fragrance%20%23jeremyfragrance%20%23fragrance%20%23cologne%20%23parfum%20%23perfume.mp4",
    },
    {
      vid: "Cal Cologne",
      caption: "Unboxing LV’s creative elegance",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/If%20i%20could%20only%20have%20two%20fragrances%20for%20life.%20And%20they%20had%20to%20come%20from%20the%20house%20of%20Louis%20Vuitton.mp4",
    },
    {
      vid: "Cologne Boy",
      caption: "Soft leather & iris magic",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Mixing%20%243000%20worth%20of%20LV%20Fragrances%21%20%23LV%20%23thecologneboy.mp4",
    },
    {
      vid: "Fragrance Flan",
      caption: "Luxury wrapped in travel spirit",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Louis%20Vuitton%20new%20vanilla%20fragrance_%20Fantasmagory.mp4",
    },
    {
      vid: "Noels Smells",
      caption: "Is Louis Vuitton worth it?",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Sun%20Song%20by%20Louis%20Vuitton%2C%20most%20anticipated%20LV%20release%2C%20but%20is%20it%20worth%20it_%20%23fragrance%20%23cologne.mp4",
    },
    {
      vid: "Aromatix",
      caption: "Signature scent of confidence",
      link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Best%20Louis%20Vuitton%20Fragrances%20%28Ranked%29.mp4",
    },
  ];
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Brand SHop Header */}
      <div className="flex flex-col w-full" id="brandHeaderSection">
        <div className="px-6 pt-20">
          <div className="font-semibold flex items-center justify-between text-2xl relative">
            {/* brand Logo */}
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Font-Louis-Vuitton-Logo.jpg"
              alt=""
              className="w-50"
            />
            <BadgeCheck className="text-blue-500 w-4 absolute top-0 left-48" />
            {/* brand socials */}
            <div>
              <div className="flex items-center gap-3">
                <Instagram className="text-black w-4 " />
                <Youtube className="text-black w-4 " />
                <Twitter className="text-black w-4 " />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center border-b pt-5 pb-3 justify-between w-full sticky top-[64px] px-6 bg-white z-50 transition-all duration-300"
          id="brandNav"
        >
          <ul className="flex gap-7 text-xs text-gray-600 font-semibold tracking-wider">
            <li className="cursor-pointer hover:text-black hover:underline">
              Overview
            </li>
            <li className="cursor-pointer flex items-center gap-1 hover:text-black hover:underline">
              New And Hot
              <svg
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                title="New &amp; Featured"
                width="12"
                height="17"
                color="currentColor"
                strokeWidth="0.9375"
              >
                <title>New &amp; Featured</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z"
                  fill="#FE9000"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Collections
              {/* include for her and for him , and dicontiuned plus the brand collections */}
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Bestsellers
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Seasonal Picks
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Discounts
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Reviews
            </li>
            <li className="cursor-pointer hover:text-black hover:underline">
              Related Brands
            </li>
          </ul>

          <div
            className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
            // onClick={() => setIsFilterOpen(true)}
          >
            <ListFilter className="w-3 h-3" />
            Shop filter
            {/* Brands Filters Search bar input (with auto-suggestions) Dropdown
              filters: Category → Designer / Niche / Indie / Arabian / Celebrity
              Country → France, Italy, UAE, etc. Sort → A–Z, Popularity, Latest
              Triggers state updates in parent (brands/page.jsx). */}
          </div>
        </div>
      </div>
      {/* Products Section */}
      <div className="flex flex-col gap-[5rem] px-4 py-6">
        {/* 🔹 Overview */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Overview
          </h1>
          <div className="grid grid-cols-2  gap-[5rem]">
            <div>
              <p className="text-sm flex items-center gap-2 mb-3 font-semibold">
                Brand perfumer:
                <span className="text-xs text-gray-500 underline">
                  Jacques Cavallier-Belletrud.
                </span>
              </p>
              <img
                src="https://images.prestigeonline.com/wp-content/uploads/sites/5/2024/07/03033135/jacques-cavallier-belletrud_04_-rights-until-oct-1-2024-cropped-scaled-1.jpeg"
                alt=""
                className="w-full"
              />
              <q className="text-xs italic">
                What I really love is to create. I wake in the morning and look
                at the sea and dream of many things and tell myself that
                whatever I do, I will start with a hope of making something
                good.
              </q>
            </div>
            <div className="flex flex-col items-center justify-between">
              {/* brand intro */}
              <div className="text-sm  flex flex-col font-semibold leading-relaxed text-right">
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-sm text-black">Origin:</span>{" "}
                  Founded in <span className="italic">Paris, France</span> in
                  1854 by Louis Vuitton.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-sm text-black">Legacy:</span>{" "}
                  Synonymous with timeless luxury and craftsmanship, <br /> LV
                  expanded into fine fragrances in collaboration with master
                  perfumer{" "}
                  <span className="italic">Jacques Cavallier-Belletrud</span>.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-sm text-black">
                    Signature Style:
                  </span>{" "}
                  Elegant, refined, and transportive — blending
                  <br />
                  <span className="italic hover:underline">
                    leathery, floral, and woody
                  </span>{" "}
                  accords that evoke the spirit of travel.
                </p>
                <p className="text-xs  text-gray-400">
                  <span className="font-bold text-black text-sm">
                    Creative Director of Fragrances:
                  </span>{" "}
                  Jacques Cavallier-Belletrud.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-black">Year Founded:</span>{" "}
                  1854 (Fragrance line launched in 2016).
                </p>
              </div>
              {/* Signature Style & Accords */}
              <div className="flex flex-col gap-2">
                <p className="font-semibold  underline">
                  Signature Style , Accords & their Strenghts
                </p>
                <div className="grid grid-cols-2">
                  <ul>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      1. Floral-Musk Heart{" "}
                      <span className="underline">
                        This is the core of LV’s perfume DNA
                      </span>
                    </li>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      2. Amber-Woody Warmth
                    </li>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      3. Citrus Brilliance
                    </li>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      4. Soft Leather Accord
                    </li>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      5. Iris & Powder
                    </li>
                    <li className="text-sm text-gray-500 italic font-semibold">
                      6. Fruity Transparency
                    </li>
                  </ul>

                  {/* Strengths of each accord */}
                  <div className="flex flex-col mt-3 gap-4">
                    {/* Floral-Musk Heart — strongest */}
                    <span className="w-[95%] h-2 bg-gradient-to-r from-purple-700 to-gray-800 rounded-full"></span>

                    {/* Amber-Woody Warmth — strong */}
                    <span className="w-[85%] h-2 bg-gradient-to-r from-amber-800 to-gray-700 rounded-full"></span>

                    {/* Citrus Brilliance — medium-strong */}
                    <span className="w-[75%] h-2 bg-gradient-to-r from-pink-700 to-gray-500 rounded-full"></span>

                    {/* Soft Leather Accord — moderate */}
                    <span className="w-[65%] h-2 bg-gradient-to-r from-amber-500 to-gray-400 rounded-full"></span>

                    {/* Iris & Powder — delicate */}
                    <span className="w-[55%] h-2 bg-gradient-to-r from-purple-400 to-gray-300 rounded-full"></span>

                    {/* Fruity Transparency — light */}
                    <span className="w-[45%] h-2 bg-gradient-to-r from-yellow-400 to-gray-200 rounded-full"></span>
                  </div>
                </div>
              </div>
              {/* Legacy / Brand Philosophy */}
              <div className="flex flex-col items-center">
                {/* Accent Title */}
                <p className="text-xs uppercase tracking-[3px] text-gray-500 italic">
                  The Maison Philosophy
                </p>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-gray-300 mx-auto my-3"></div>

                {/* Brand Philosophy Text */}
                <q className="text-sm italic text-center text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Each Louis Vuitton fragrance is an olfactory journey — crafted
                  to capture moments of travel, memory, and emotion in the
                  purest form.
                </q>
              </div>
              {/* visit the webiste of the brand */}
              <Link
                href="https://eu.louisvuitton.com/eng-e1/stories/lvperfumes"
                target="_blank"
                className="flex cursor-pointer rounded-none items-center justify-center font-semibold tracking-wider text-sm bg-black w-full text-white h-[5vh]"
              >
                Visit The Brands Official Website
              </Link>
            </div>
          </div>
          {/* div */}
        </section>

        {/* 🔹 Collections */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Collections
          </h1>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {collections.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-xs  font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/collections" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              View Collections
            </Button>
          </Link>
        </section>

        {/* 🔹 Bestsellers */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Bestsellers
          </h1>
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
          <Link href="/brand/bestsellers" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Shop Bestsellers
            </Button>
          </Link>
        </section>

        {/* 🔹 Seasonal Picks */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Seasonal Picks
          </h1>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Product cards for seasonal */}
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
          <Link href="/brand/seasonal" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Discover Seasonal Picks
            </Button>
          </Link>
        </section>

        {/* 🔹 Discounts */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Discounts
          </h1>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Discounted products */}
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
          <Link href="/brand/discounts" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              View Current Offers
            </Button>
          </Link>
        </section>

        {/* 🔹 Reviews */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Reviews and Posts
          </h1>
          <div className="flex flex-col gap-3">
            {/* Scrollable Reviews Row */}
            <div className="flex overflow-x-auto gap-4 scrollbar-hide py-2">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  onClick={() => setExpanded(index)}
                  className="relative overflow-hidden rounded-2xl group aspect-[9/16] bg-gray-200 flex-shrink-0 w-60 cursor-pointer"
                >
                  <video
                    src={review.link}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-sm font-semibold">{review.vid}</h3>
                    <p className="text-xs opacity-80 italic">
                      {review.caption}
                    </p>
                  </div>

                  <PlayCircle className="absolute top-4 right-4 text-white/80 group-hover:text-white transition-all w-6 h-6" />
                </div>
              ))}
            </div>

            {/* Expanded view */}
            {expanded !== null && (
              <div
                onClick={() => setExpanded(null)}
                className="fixed inset-0 bg-black/80 flex items-center justify-center top-18 z-50"
              >
                <div
                  className="relative w-[50%] md:w-[30%] aspect-[3/4] rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                  <video
                    src={reviews[expanded].link}
                    autoPlay
                    loop
                    controls
                    className="w-full h-full object-cover"
                  ></video>

                  <button
                    onClick={() => setExpanded(null)}
                    className="absolute top-3 right-3 bg-black/60 rounded-full p-2 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link href="/brand/reviews" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Read & Write Reviews
            </Button>
          </Link>
        </section>

        {/* 🔹 Related Brands */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Related Brands
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {RelatedBrands.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-xs  font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore Similar Brands
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SelectedbrandShoppage;
