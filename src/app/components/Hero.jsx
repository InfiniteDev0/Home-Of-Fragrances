"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://armaf.com/cdn/shop/videos/c/vp/d78c7154ffb74e30a859085ad3fe8ecd/d78c7154ffb74e30a859085ad3fe8ecd.HD-1080p-7.2Mbps-49629966.mp4?v=0"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-6 tracking-wide">
            Discover Your
            <br />
            <span className="font-normal">Signature Scent</span>
          </h1>

          <p className=" mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of luxury fragrances from the world's
            finest perfume houses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-2 text-sm font-medium hover:bg-gray-100 transition-colors duration-300 tracking-wide">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wide">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
