"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BrandSpotlight = () => {
  const featuredBrands = [
    {
      name: "Creed",
      description: "Luxury British perfumery since 1760",
      logo: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=100&fit=crop",
      href: "/brands/creed",
      products: 24,
      founded: "1760",
    },
    {
      name: "Tom Ford",
      description: "Modern luxury and sophisticated elegance",
      logo: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=100&fit=crop",
      href: "/brands/tom-ford",
      products: 18,
      founded: "2005",
    },
    {
      name: "Lattafa",
      description: "Premium Middle Eastern fragrances",
      logo: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=200&h=100&fit=crop",
      href: "/brands/lattafa",
      products: 45,
      founded: "1982",
    },
    {
      name: "Armaf",
      description: "Contemporary Arabian perfumery excellence",
      logo: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=200&h=100&fit=crop",
      href: "/brands/armaf",
      products: 38,
      founded: "2014",
    },
    {
      name: "Maison Francis Kurkdjian",
      description: "French haute parfumerie artistry",
      logo: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=100&fit=crop",
      href: "/brands/mfk",
      products: 16,
      founded: "2009",
    },
    {
      name: "Montale",
      description: "Oud and rose specialists from Paris",
      logo: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=100&fit=crop",
      href: "/brands/montale",
      products: 52,
      founded: "2003",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
            Featured Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore fragrances from the world's most prestigious perfume houses
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={brand.href}>
                <div className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 text-center">
                  {/* Brand Logo/Image */}
                  <div className="mb-4 flex justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Brand Info */}
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Est. {brand.founded}
                    </p>
                    <p className="text-xs text-gray-600 leading-tight">
                      {brand.description}
                    </p>
                    <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                      {brand.products} Products
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Brands Button */}
        <div className="text-center mt-12">
          <Link
            href="/brands"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            View All Brands
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

export default BrandSpotlight;
