"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CollectionsBanner = () => {
  const collections = [
    {
      title: "Designer Fragrance Houses",
      subtitle: "Luxury & Prestige",
      description:
        "Visit our renowned global brands like Dior, Lv and Gucci, offering iconic scents that blend fashion  with mass appealing.",
      image:
        "https://media.cntravellerme.com/photos/680b49cb0383eb83826831bd/16:9/w_2560%2Cc_limit/Ocean%2520BLVD%2520-%2520Louis%2520Vuitton%2520Cologne%2520Perfumes.jpg",
      href: "/shop/designer",
      badge: "Designer",
    },
    {
      title: "Niche Fragrance Houses",
      subtitle: "Artistry & Exclusivity",
      description:
        "A blend of artistic expression, rare ingredients, and unique scent profiles. Elegance imbuded with tradition.",
      image:
        "https://armaf.com/cdn/shop/collections/10_1536x864_d97bb4ce-2b3d-4aeb-970c-18a1679c91ce.webp?v=1722597378",
      href: "/shop/niche",
      badge: "Niche",
    },
  ];

  return (
    <section className="py-16 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-xl text-gray-900 mb-2">
            Featured Perfume Houses
          </h2>
          <p className="text-xs font-semibold text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated fragrance power houses
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
                <div className="relative bg-white  min-h-[60vh] overflow-hidden  duration-300">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/50 backdrop-blur-3xl text-white text-xs font-medium px-3 rounded-full py-1 uppercase tracking-wide">
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
                  <div className="py-6 flex flex-col items- justify-start">
                    <p className="text-sm text-gray-700 mb-2 font-semibold tracking-wide">
                      {collection.subtitle}
                    </p>
                    <p className="text-gray-400 text-xs mb-4 font-semibold">
                      {collection.description}
                    </p>
                    <div className="flex bg-black w-50 text-white items-center justify-between  rounded-full !px-4 text-sm font-semibold h-9">
                      <span>Shop Collection</span>
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsBanner;
