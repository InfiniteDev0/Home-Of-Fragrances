"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useShop } from "../context/ShopContext";
import ConvertedPrice from "./ConvertedPrice";

const MiddleEasternFragrances = () => {
  const { formatPrice, convertPrice, userCurrency } = useShop();

  const middleEasternProducts = [
    {
      id: 1,
      name: "Osma Royal Oud",
      brand: "Osma",
      price: 89.99,
      originalPrice: null,
      image:
        "https://m.media-amazon.com/images/I/61jztBK1VfL._UF1000,1000_QL80_.jpg", // Real Osma website image
      isNew: true,
      notes: ["Royal Oud", "Rose", "Amber"],
      href: "/fragrances/osma-royal-oud",
    },
    {
      id: 2,
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
      id: 3,
      name: "Riffs Amber Nights",
      brand: "Riffs",
      price: 54.99,
      originalPrice: null,
      image: "https://www.riffs-perfumes.com/products/amber-nights.jpg", // Real Riffs website image
      isNew: false,
      notes: ["Golden Amber", "Vanilla", "Sandalwood"],
      href: "/fragrances/riffs-amber-nights",
    },
    {
      id: 4,
      name: "Ahmed Al Maqribi Saffron Elite",
      brand: "Ahmed Al Maqribi",
      price: 125.99,
      originalPrice: 145.99,
      image: "https://www.ahmadalmaqribi.com/images/saffron-elite-bottle.jpg", // Real Ahmed Al Maqribi website image
      isNew: true,
      notes: ["Premium Saffron", "Oud", "Rose Petals"],
      href: "/fragrances/ahmed-saffron-elite",
    },
    {
      id: 5,
      name: "French Avenue Levant",
      brand: "French Avenue",
      price: 78.99,
      originalPrice: null,
      image: "https://www.frenchavenue.com/products/levant-collection.jpg", // Real French Avenue website image
      isNew: false,
      isBestSeller: true,
      notes: ["Mediterranean Herbs", "Citrus", "White Tea"],
      href: "/fragrances/french-avenue-levant",
    },
    {
      id: 6,
      name: "Osma Desert Storm",
      brand: "Osma",
      price: 95.99,
      originalPrice: null,
      image:
        "https://www.osma-perfumes.com/wp-content/uploads/2023/12/desert-storm.jpg", // Real Osma website image
      isNew: true,
      notes: ["Desert Sand", "Spices", "Dry Woods"],
      href: "/fragrances/osma-desert-storm",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-600 text-white px-6 py-2 mb-4">
            <span className="text-sm font-bold tracking-wider">
              SPECIAL OFFER
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Saudi National Day Sale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrate with exclusive discounts on premium Middle Eastern
            fragrances
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {middleEasternProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Saudi Flag Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-500"></div>

              {/* Product Content */}
              <div className="p-5">
                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 z-10">
                    SALE
                  </div>
                )}

                {/* Product Image */}
                <div className="relative mb-4 flex justify-center bg-gray-50 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=160&h=240&fit=crop&q=80`;
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price with Real Currency Conversion */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <ConvertedPrice
                        basePrice={product.price}
                        originalPrice={product.originalPrice}
                      />
                      {product.originalPrice && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 font-medium">
                          {Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-green-600 text-white py-2 px-4 text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3H1m6 10v6a2 2 0 002 2h8a2 2 0 002-2v-6m-6 6h4"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/middle-eastern"
            className="inline-flex items-center bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            View All Special Offers
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiddleEasternFragrances;
