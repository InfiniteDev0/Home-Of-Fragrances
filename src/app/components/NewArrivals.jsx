"use client";
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Bell, FlameIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewArrivals = () => {
  const [activeBtn, setActivate] = useState(0);

  const filterButtons = [
    { icon: "🌶️", name: "Coming Soon" },
    { icon: "💖", name: "Everyone's Favorite" },
    { icon: "🎁", name: "Best Giftables" },
    { icon: "☝️", name: "Top 10 Brands" },
    { icon: "👉", name: "Top 10 Perfumes" },
  ];

  const products = [
    {
      id: 1,
      name: "Ahmed Al Maqribi Nisswah",
      brand: "Dr Ruqayya Abba Tofa",
      image:
        "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Fcollections%2Fniswah-1.jpg&w=2048&q=75",
    },
    {
      id: 2,
      name: "Louis Vuitton's Afternoon Swim",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490",
    },
    {
      id: 3,
      name: "Louis Vuitton's Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
    },
    {
      id: 4,
      name: "Louis vuitton's Pacific Chill",
      brand: "Fragrance World",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      id: 5,
      name: "Odyssey Toffee Coffee",
      brand: "Armaf",
      image:
        "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-6 md:py-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <h1 className="text-sm md:text-base underline font-semibold flex items-center gap-2">
          New & Hot
        </h1>

        {/* Filter Buttons - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto">
          <ul className="flex items-center gap-3 md:gap-6 min-w-max md:min-w-0 pb-2">
            {filterButtons.map((item, index) => (
              <li
                key={index}
                onClick={() => setActivate(index)}
                className={`${
                  activeBtn === index
                    ? "text-white bg-gray-950 border border-gray-500"
                    : "bg-gray-200 text-black hover:bg-zinc-900 hover:text-white"
                } poppins tracking-wider cursor-pointer transition-all duration-300 
                  px-3 
                  h-7 md:h-8
                  flex items-center justify-center 
                  rounded-full 
                  text-xs md:text-[11px]  
                  w-[200px]
                  flex-shrink-0`}
              >
                <span className="mr-1 md:mr-2">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-10">
          {products.map((product, index) => (
            <div key={product.id} className="flex flex-col gap-3 p-2 md:p-4">
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
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
                <p className="text-xs  font-medium text-gray-600">
                  By:{" "}
                  <span className="underline font-semibold tracking-wider">
                    {product.brand}
                  </span>
                </p>

                {/* Button */}
                <Button className="text-xs md:text-sm mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold h-8 md:h-10 w-full">
                  <Bell className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Remind Me</span>
                  <span className="sm:hidden">Remind</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Hidden on mobile if needed */}
        <div className="flex justify-center mt-8">
          <Button className="border bg-transparent text-black border-gray-700 hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm ">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
