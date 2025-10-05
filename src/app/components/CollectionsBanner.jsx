"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CollectionsBanner = () => {
  const collections = [
    {
      title: "Oud Masters",
      subtitle: "Premium Arabian Collection",
      description: "Authentic oud fragrances from renowned perfumers",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop&q=80",
      href: "/collections/oud-masters",
      badge: "Luxury",
    },
    {
      title: "Fresh & Citrus",
      subtitle: "Light & Refreshing",
      description: "Perfect for everyday wear and warm weather",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop&q=80",
      href: "/collections/fresh-citrus",
      badge: "Popular",
    },
  ];

  const quickCollections = [
    {
      title: "Best Sellers",
      count: "28 Products",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=200&fit=crop&q=80",
      href: "/collections/best-sellers",
    },
    {
      title: "New Arrivals",
      count: "15 Products",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=200&fit=crop&q=80",
      href: "/collections/new-arrivals",
    },
    {
      title: "Gift Sets",
      count: "12 Products",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=200&fit=crop&q=80",
      href: "/collections/gift-sets",
    },
  ];

  return (
    <section className="py-16 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated fragrance collections
          </p>
        </div>

        {/* Main Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={collection.href} className="group block">
                <div className="relative bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black text-white text-xs font-medium px-3 py-1 uppercase tracking-wide">
                      {collection.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center text-black font-medium">
                      <span>Shop Collection</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Collections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickCollections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={collection.href} className="group block">
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {collection.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{collection.count}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get notified about new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsBanner;
