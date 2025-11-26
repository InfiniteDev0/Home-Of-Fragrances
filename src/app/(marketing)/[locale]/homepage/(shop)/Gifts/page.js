import Gifts from "@/components/home/Gifts";
import Link from "next/link";
import React from "react";

const Giftspage = () => {
  return (
    <div className="w-full  bg-white overflow-x-hidden">
      {/* Intro Section - strictly desktop */}
      <section className="relative w-full  min-h-[700px] flex flex-col justify-end overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://video.ralphlauren.com/v2/2025/10/20251014-gifts-holiday-lp/20251014_GiftGuide_Hero_1440x720_DSK.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for darkening video if needed */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        {/* Centered Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-[5rem] text-white text-center ">
          <div>
            <p className="text-xl font-semibold drop-shadow-md">
              Home of Fragrances
            </p>
            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              Gifts and Personalization
            </h1>
          </div>
          <Link
            href={"/eng-e1/homepage/gifts/occasional/holiday-gifts"}
            className="bg-transparent text-white font-semibold text-[13px] border-[1.4px] border-white px-6 py-2 rounded-full shadow hover:bg-black transition cursor-pointer"
          >
            Make a Holiday Gift
          </Link>
        </div>
      </section>
      {/* Gifts Section - strictly desktop, below intro */}
      <section className="relative w-full z-30 bg-white">
        <div className="max-w-7xl mx-auto px-12 py-16">
          <Gifts />
        </div>
      </section>
      {/* Gifts Section - strictly desktop, below intro */}
      <section className="relative w-full z-30 bg-white">
        <div className="max-w-7xl mx-auto px-12 py-16">
          
        </div>
      </section>
    </div>
  );
};

export default Giftspage;
