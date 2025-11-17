"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const perfumes = [
    {
      name: "Tom Ford Oud Wood",
      brand: "Armaf",
      image:
        "https://theperfumemag.com/wp-content/uploads/2023/10/Tom-Ford-Oud-Wood-3.jpg",
    },
    {
      name: "Layton Parfums de Marly",
      brand: "Parfums de Marly",
      image:
        "https://www.cityperfume.com.au/assets/alt_1/518002.jpg?20250114082117",
    },
    {
      name: "Baccarat Rouge 540",
      brand: "Maison Francis Kurkdjian",
      image:
        "https://res.cloudinary.com/dioovnmjd/image/upload/w_1000,h_1000,f_auto,c_lfill/v1720855336/products/kurkdjian-baccarat-rouge-540-extrait-de-parfum-maison-francis_wSjSdO.webp",
    },
    {
      name: "Imagination Lv",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/content/dam/lv/online/high-end/men/fragrance/M_Fr_imagination_2024.html/jcr:content/assets/FLACON_004_J-1_063.jpg",
    },
  ];
  return (
    <div className="relative h-[76vh] md:h-screen w-full !px-6 overflow-hidden">
      {/* Video Background for large screens */}
      <div className="hidden md:block">
        {/* <video
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
          Your browser does not support the video tag.
        </video> */}
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c5b83172650551.6482b548c7660.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
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
        {/* Desktop overlay text and CTAs */}
        <div className="absolute bottom-28 left-12 z-20 text-white  hidden md:flex flex-col gap-2">
          <h1 className="text-2xl font-bold drop-shadow-lg">
            Discover the World's of Finest Fragrances
          </h1>
          <p className="text-sm font-semibold drop-shadow-md">
            Curated scents, reviews, and collections for every mood.
          </p>
          {/* Perfume preview cards */}
          <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4">
            {perfumes.map((p, i) => (
              <div key={i}>
                <div className="group w-full relative cursor-pointer">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-50 w-full object-cover group-hover:opacity-80 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold mt-3 text-xs text-white">
                  {p.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <Link
              href={"/eng-e1/homepage/collection"}
              className="bg-white text-black font-semibold text-[13px] px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              Explore Collections
            </Link>
            <Link
              href={"/eng-e1/homepage/brands"}
              className="bg-black/70 text-white font-semibold text-[13px] border-[1.4px] border-white px-6 py-2 rounded-full shadow hover:bg-black transition"
            >
              Perfume Brands
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="bg-black/70 text-white font-semibold text-[13px] border-[1.4px] border-white px-6 py-2 rounded-full shadow hover:bg-black transition"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
