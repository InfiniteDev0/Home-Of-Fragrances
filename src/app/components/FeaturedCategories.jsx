import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      type: "Women",
      des: "Smell with femine luxury scents",
      TopProducts: [
        {
          id: 1,
          name: "Louis Vuitton's Imagination",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
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
          name: "Louis Vuitton's Imagination",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
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
          name: "Louis Vuitton's Sun Song",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
          price: "920",
          rating: 4.9,
          description: "Radiant Solar Fragrance / 100ml",
          brandDescription:
            "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
          brandLogo:
            "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
        },
        {
          id: 4,
          name: "Louis vuitton's Pacific Chill",
          brand: "Fragrance World",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
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
            "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
          price: "120",
          rating: 4.6,
          description: "Rich Gourmand Delight / 100ml",
          brandDescription:
            "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
          brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
        },
      ],
    },
    {
      type: "Men",
      des: "Smell with masculine luxury scents",
      TopProducts: [
        {
          id: 1,
          name: "Louis Vuitton's Imagination",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
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
          name: "Louis Vuitton's Imagination",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
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
          name: "LV Sun Song",
          brand: "Louis Vuitton",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
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
          name: "LV Pacific Chill",
          brand: "Fragrance World",
          image:
            "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
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
            "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
          price: "120",
          rating: 4.6,
          description: "Rich Gourmand Delight / 100ml",
          brandDescription:
            "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
          brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
        },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 py-6 md:py-10 px-2  ">
      {categories.map((category, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-5 items-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-700">
                {category.type}
              </p>
              <p className="text-xs font-semibold tracking-wider">
                {category.des}
              </p>
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {category.TopProducts.map((product, idx) => (
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
                </div>
              ))}
            </div>
            {/* Load More Button */}
            <Link
              href={`/shop/${category.type}`}
              alt="link to new arrivals"
              className="flex justify-center mt-8"
            >
              <Button className="border font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                View All {category.type}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedCategories;
