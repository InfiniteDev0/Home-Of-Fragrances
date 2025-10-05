"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useShop } from "../context/ShopContext";

const TrendingProducts = () => {
  const { formatPrice } = useShop();

  const trendingProducts = [
    {
      id: 1,
      name: "Lattafa Khamrah",
      brand: "Lattafa",
      price: 45.99,
      originalPrice: 65.99,
      image: "https://m.media-amazon.com/images/I/81XsV2i2E-L._SL1500_.jpg",
      rating: 4.8,
      reviews: 2847,
      notes: "Cinnamon, Praline, Vanilla",
      href: "/fragrances/lattafa-khamrah",
    },
    {
      id: 2,
      name: "Armaf Club De Nuit Intense",
      brand: "Armaf",
      price: 38.99,
      originalPrice: 55.99,
      image:
        "https://m.media-amazon.com/images/I/617e+LaJLaL._UF1000,1000_QL80_.jpg",
      rating: 4.7,
      reviews: 1923,
      notes: "Pineapple, Bergamot, Oakmoss",
      href: "/fragrances/armaf-club-de-nuit",
    },
    {
      id: 3,
      name: "Creed Aventus",
      brand: "Creed",
      price: 285.99,
      originalPrice: 335.99,
      image:
        "https://static.thcdn.com/images/small/webp//productimg/original/12870029-5345132274143190.jpg",
      rating: 4.9,
      reviews: 5641,
      notes: "Pineapple, Birch, Musk",
      href: "/fragrances/creed-aventus",
    },
    {
      id: 4,
      name: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      price: 195.99,
      originalPrice: 230.99,
      image:
        "https://dreamskinhaven.co.ke/wp-content/uploads/2021/11/tom-ford-black-orchid-edp-50ml-3103-1000x1000-1.jpg",
      rating: 4.6,
      reviews: 3456,
      notes: "Black Orchid, Chocolate, Vanilla",
      href: "/fragrances/tom-ford-black-orchid",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most coveted fragrances loved by our community
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              <Link href={product.href}>
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to themed placeholder if real image fails to load
                      e.target.src = `https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&q=80`;
                    }}
                  />
                  {/* Sale Badge */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-medium">
                    SALE
                  </div>
                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {product.brand}
                    </p>
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Notes */}
                  <p className="text-xs text-gray-600 mb-3">{product.notes}</p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/trending"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View All Trending
            <svg
              className="w-5 h-5 ml-2"
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

export default TrendingProducts;
