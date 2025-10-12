"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen w-full !px-6 overflow-hidden">
      {/* Video Background for large screens */}
      <div className="hidden md:block">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://armaf.com/cdn/shop/videos/c/vp/fd82d87854584aa5bdffec0e9b226556/fd82d87854584aa5bdffec0e9b226556.HD-1080p-7.2Mbps-58754399.mp4?v=0"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Image Background for small screens */}
      <div className="block md:hidden w-full h-full">
        <img
          src="https://media.wonderlandmagazine.com/uploads/2020/05/image002-1.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text in bottom left corner */}
      <div className="absolute bottom-0 md:bottom-50 md:left-90 left-0 z-10 text-white p-6 text-left md:text-center w-full max-w-xl">
        <h1 className="text-xl md:text-4xl font-light mb-4 tracking-wide">
          Discover Your
          <span className="font-normal">Signature Scent</span>
        </h1>

        <p className="mb-8 text-sm md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Explore our curated collection of luxury fragrances from the world's
          finest perfume houses
        </p>

        <div className="flex flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-8 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 tracking-wide">
            Shop Now
          </button>
          <button className="border border-white text-white px-8 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 tracking-wide">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
