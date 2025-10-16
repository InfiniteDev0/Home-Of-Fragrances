"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[76vh] md:h-screen w-full !px-6 overflow-hidden">
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
      <Link href={"/"} className="block md:hidden w-full bg-black h-full">
        <img
          src="https://perfumeoriental.com/cdn/shop/files/RAYHAAN-TROPICAL-VIBE-edp-100ml.webp?v=1758748243"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </Link>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text in bottom left corner */}
      <div>
        {/* small screen size */}
        <div className="absolute flex flex-col md:hidden bottom-0 md:bottom-50 md:left-90 left-0 z-10 text-white px-6 text-left md:text-center w-full max-w-xl">
          <h1 className="text-[16px] tracking-wide">Rayhaan Tropical vibes</h1>

          <p className="mb-8 text-xl font-semibold tracking-wider max-w-2xl mx-auto">
            Enjoy the tropical scents
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
