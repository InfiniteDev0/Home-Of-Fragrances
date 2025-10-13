import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewArrivals = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  // Handler for swipe (carousel change)
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="md:min-h-screen font-outfit w-full">
      <div className="max-w-7xl mx-auto hidden md:flex flex-col gap-5 py-6 md:py-10 px-8 ">
        {/* Header */}
        <h1 className="md:text-base underline font-semibold flex items-center gap-2">
          New & Hot
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
            stroke-width="0.9375"
          >
            <title>New & Featured</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z"
              fill="#FE9000"
            ></path>
          </svg>
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
        {/* Load More Button */}
        <Link
          href={"/new"}
          alt="link to new arrivals"
          className="flex justify-center mt-8"
        >
          <Button className="border font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
            View All New Arrivals
          </Button>
        </Link>
      </div>
      {/* mobile version */}
      <div className="max-w-7xl mx-auto md:hidden min-h-fit flex flex-col gap-5 bg-zinc-950 text-white py-6 px-4 ">
        <h1 className="md:text-base font-semibold flex items-center gap-2">
          New & Hot
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
            stroke-width="0.9375"
          >
            <title>New & Featured</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z"
              fill="#FE9000"
            ></path>
          </svg>
        </h1>
        <div className="flex flex-col gap-3">
          <Carousel
            className="w-full "
            opts={{
              loop: true,
            }}
            onSlideChange={handleSlideChange}
            style={{ height: "340px" }} // taller carousel
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="relative bg-white w-sceen h-[400px] rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-3 text-black">
                      <h2 className="text-sm font-bold">{product.name}</h2>
                      <p className="text-xs">{product.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Remove CarouselPrevious and CarouselNext for mobile */}
          </Carousel>
          <div className="flex items-center justify-center gap-2 mt-18">
            {products.map((_, idx) => (
              <div
                key={idx}
                className={`rounded-full transition-all duration-200 bg-white`}
                style={{
                  width: activeIndex === idx ? "16px" : "8px",
                  height: "8px",
                  opacity: activeIndex === idx ? 1 : 0.4,
                  background: "white",
                }}
              ></div>
            ))}
          </div>
          {/* Load More Button */}
          <Link
            href={"/new"}
            alt="link to new arrivals"
            className="flex justify-center mt-8"
          >
            <Button className="border font-semibold tracking-wider border-gray-700 bg-white text-black active:scale-105 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              View All New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
