"use client";
import Link from "next/link";
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
      <Link href={'/'} className="block md:hidden w-full bg-black h-full">
        <img
          src="https://scentira.in/cdn/shop/files/French_Avenue_Vulcan_Baie_Extrait_De_Parfum_4_cc35d9a4-0e45-45dd-afe0-11ae08cd29cb.png?v=1759558123&width=1000"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </Link>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text in bottom left corner */}
      <div className="absolute bottom-0 md:bottom-50 md:left-90 left-0 z-10 text-white p-6 text-left md:text-center w-full max-w-xl">
        <h1 className="text-[16px] tracking-wide">
          Vulcan Baie
        </h1>

        <p className="mb-8 text-xl font-semibold tracking-wider max-w-2xl mx-auto">
          French Avenue Unisex
        </p>
      </div>
    </div>
  );
};

export default Hero;
