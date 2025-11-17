"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { useShop } from "../../app/context/ShopContext";
import ConvertedPrice from "./ConvertedPrice";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const MiddleEasternFragrances = () => {
  // const { formatPrice, convertPrice, userCurrency } = useShop();

  const middleEasternProducts = [
    {
      id: 1,
      name: "Ibraq Reefs Oceanic",
      brand: "Ibraq Reefs",
      price: 67.99,
      originalPrice: 85.99,
      image:
        "https://worldofperfumesuk.com/cdn/shop/files/IBRAQSUMMEROCEANBUNDLE.jpg?v=1753657952", // Real Ibraq website image
      isNew: false,
      notes: ["Sea Breeze", "White Musk", "Driftwood"],
      href: "/fragrances/ibraq-oceanic",
    },
    {
      id: 2,
      name: "Reef 33",
      brand: "Riffs",
      price: 54.99,
      originalPrice: null,
      image: "https://fimgs.net/mdimg/perfume/o.89358.jpg", // Real Riffs website image
      isNew: false,
      notes: ["Golden Amber", "Vanilla", "Sandalwood"],
      href: "/fragrances/riffs-amber-nights",
    },
    {
      id: 3,
      name: "City of Arabia",
      brand: "Lattafa",
      price: 125.99,
      originalPrice: 145.99,
      image:
        "https://www.lodoro.cl/cdn/shop/files/LattafaPrideArtOfArabiaI_1_1024x.png?v=1752177477", // Real Ahmed Al Maqribi website image
      isNew: true,
      notes: ["Premium Saffron", "Oud", "Rose Petals"],
      href: "/fragrances/ahmed-saffron-elite",
    },
    {
      id: 4,
      name: "Amouge Outlands",
      brand: "Amouge",
      price: 78.99,
      originalPrice: null,
      image:
        "https://hrd-live.cdn.scayle.cloud/images/7a5c4c0ad71c8150423d1bcb26e7a932.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff", // Real French Avenue website image
      isNew: false,
      isBestSeller: true,
      notes: ["Mediterranean Herbs", "Citrus", "White Tea"],
      href: "/fragrances/french-avenue-levant",
    },
    {
      id: 5,
      name: "Kaaf Ahmed Al Maqribi",
      brand: "Ahmed Al Maqribi",
      price: 89.99,
      originalPrice: null,
      image:
        "https://zaoud.it/cdn/shop/files/ahmed-al-amghribi-kaaf-extrait-perfume-bottle-surrounded-by-lavender-and-watermelon-against-white-background.jpg?v=1756872946&width=1445", // Real Osma website image
      isNew: true,
      notes: ["Royal Oud", "Rose", "Amber"],
      href: "/fragrances/osma-royal-oud",
    },
  ];

  return (
    <section className="py-14  bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-6 md:py-10 px-2 ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700">
              Middle Eastern
            </p>
            <p className="text-xs !px-4 font-semibold tracking-wider">
              Middle Eastern perfumes scream sensuality, kindness, spiciness,
              and exoticness
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {middleEasternProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 p-2 md:p-4"
            >
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
                <h1 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs">{product.description}</p>
                <p className="flex items-center justify-between font-semibold">
                  {product.price}$
                  <span className="flex items-center text-[12px] gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {product.rating}
                  </span>
                </p>
                <Button
                  className={
                    "font-semibold tracking-wider text-xs rounded-none"
                  }
                >
                  View item
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href={`/shop/middleEastern`}
          alt="link to new arrivals"
          className="flex justify-center mt-8"
        >
          <Button className="border font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
            View All MiddleEastern
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MiddleEasternFragrances;
