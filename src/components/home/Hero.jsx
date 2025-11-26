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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/YTDown.com_YouTube_Cologne-Perfume-Collection-LOUIS-VUITTON_Media_5-q59O9pZo8_001_1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <img
          src="https://cdn.mos.cms.futurecdn.net/A2mjjTk3Bw8zBajdAPy9JW.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}
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
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center hidden md:flex gap-2">
          <h1
            className="text-4xl md:text-6xl font-extrabold"
          >
            Discover the World's Finest Fragrances
          </h1>

          <p className="text-sm font-semibold drop-shadow-md">
            Curated scents, reviews, and collections for every mood.
          </p>

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
