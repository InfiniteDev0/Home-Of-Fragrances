"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  HeartIcon,
  ListFilter,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import FilterSlide from "../../../../../../components/modals/FilterSlide";
import { perfumes } from "../../../../../../../public/assets/assets";
import ComingSoon from "../../../../../../components/home/ComingSoon";
import { Bell, Check, FlameIcon, Heart, Plus, Star } from "lucide-react";
import confetti from "canvas-confetti";

const filterOptions = [
  { name: "Coming Soon", des: "Be the first to grab upcoming scents of 2025" },
  { name: "Everyone's Favorite", des: "Top-rated perfumes loved by all" },
  { name: "Best MiddleEastern", des: "Experience rich Arabian fragrances" },
  { name: "Top 10 Brands", des: "Iconic brands setting trends" },
  { name: "Top 10 Perfumes", des: "Our handpicked top fragrances" },
];

// Coming Soon products
const products = [
  {
    id: 1,
    name: "Ahmed Al Maqribi Nisswah",
    brand: "Dr Ruqayya Abba Tofa",
    image:
      "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Fcollections%2Fniswah-1.jpg&w=2048&q=75",
    price: "259",
    rating: 5,
    description: "Harmonious Lily Magic / 100ml",
    brandDescription:
      "Premium Arabic perfumes with traditional craftsmanship and modern elegance",
    brandLogo:
      "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Flogos%2Flogo.png&w=256&q=75",
  },
  {
    id: 2,
    name: "Louis Vuitton's Afternoon Swim",
    brand: "Louis Vuitton",
    image:
      "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490",
    price: "850",
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
];


const Shoppage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [stage, setStage] = useState({
    type: "New & Hot",
    des: "Featuring the hottest new releases of 2025",
  });
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth dropdown toggle
  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const handleDropdownClick = (option) => {
    setStage({ type: option.name, des: option.des });
    setOpenDropdown(false);
    const section = document.getElementById(
      option.name.toLowerCase().replace(/\s+/g, "-")
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const SectionData = () => {
    if (filterOptions === "Coming soon") {
      const Comingsoon = () => {
        return (
          <div>
            {perfumes.map((item, index) => {
              return <div key={index}></div>;
            })}
          </div>
        );
      };
    }
  };

  // Scroll logic placeholder (updates header as user scrolls)
  useEffect(() => {
    const handleScroll = () => {
      const sections = filterOptions.map((opt) =>
        document.getElementById(opt.name.toLowerCase().replace(/\s+/g, "-"))
      );
      let foundSection = false;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.4 && rect.bottom > 0) {
            setStage({
              type: filterOptions[i].name,
              des: filterOptions[i].des,
            });
            foundSection = true;
            break;
          }
        }
      }
      // If no section is in view (at the very top), set to "New & Hot"
      if (!foundSection) {
        setStage({
          type: "New & Hot",
          des: "Featuring the hottest new releases of 2025",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleSectionScroll = (sectionId, option) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // Adjust for fixed header
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
      setStage({ type: option.name, des: option.des });
      setOpenDropdown(false);
    }
  };

  return (
    <div>
      {/* Fixed header below navbar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-10 py-4">
        <div className="flex flex-col relative mt-2" ref={dropdownRef}>
          {/* DROPDOWN HEADER TEXT WITH ANIMATION */}
          <div onClick={toggleDropdown} className="cursor-pointer select-none">
            <AnimatePresence mode="wait">
              <motion.h1
                key={stage.type}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
                className="font-semibold text-xs flex items-center gap-2"
              >
                {stage.type} <ChevronDown className="w-4 h-4" />
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={stage.des}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-gray-500 font-semibold"
              >
                {stage.des}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Clean dropdown */}
          <ul
            className={`absolute bg-white w-70 text-xs tracking-wider flex flex-col gap-2 py-3 shadow shadow-3xl rounded-b-sm left-[-1rem] transition-all duration-300 ease-in-out transform origin-top ${
              openDropdown
                ? "opacity-100 scale-y-100 translate-y-4"
                : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            {filterOptions.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleDropdownClick(option)}
                className="hover:font-semibold cursor-pointer py-2 px-4 hover:bg-gray-100 capitalize"
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setIsFilterOpen(true)}
        >
          <ListFilter className="w-3 h-3" /> Filters
        </div>
      </div>

      {/* Desktop shop version */}
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5 pt-[130px] py-25">
        {/* New & Hot section */}
        <div className="flex flex-col" id="new-hot">
          <div className="grid grid-cols-2">
            <div>
              <img
                src="https://perfumeoriental.com/cdn/shop/files/RAYHAAN-TROPICAL-VIBE-edp-100ml.webp?v=1758748243"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2">
              {/* make the image the bg just for this part only  */}
              {perfumes.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="border w-full h-full relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://perfumepalace.in/cdn/shop/files/10_07bd5abe-c850-4615-a46c-c2b5a2115231.png?v=1759647637')`,
                  }}
                >
                  <div className="absolute top-3 right-3">
                    <HeartIcon className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-1">
                    <h1 className="text-sm font-semibold text-black">
                      {item.name}
                    </h1>
                    <p className="text-xs font-semibold tracking-wider text-gray-600">
                      {item.concentration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid of all perfumes */}
          <div className="flex flex-col gap-[3rem]">
            <div className="grid grid-cols-4">
              {perfumes.map((item, idx) => (
                <div key={idx} className="border relative">
                  <img
                    src="https://perfumepalace.in/cdn/shop/files/10_07bd5abe-c850-4615-a46c-c2b5a2115231.png?v=1759647637"
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <HeartIcon className="w-4 h-4" />
                  </div>
                  <div className="px-3 py-1 absolute top-70">
                    <h1 className="text-sm font-semibold">{item.name}</h1>
                    <p className="text-xs font-semibold tracking-wider text-gray-500">
                      {item.concentration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/new"
              alt="link to new arrivals"
              className="flex justify-center mt-8"
            >
              <Button className="border font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
                View more
              </Button>
            </Link>
          </div>
        </div>

        {/* Add sections below with matching IDs for scroll tracking */}
        {filterOptions.map((opt, i) => (
          <div
            key={i}
            id={opt.name.toLowerCase().replace(/\s+/g, "-")}
            className="min-h-screen flex justify-center !mt-15"
          >
            <div className="flex flex-col gap-1 text-center">
              <h2 className="text-sm font-semibold text-gray-500">
                {opt.name}
              </h2>
              <p className="txt-sm font-semibold">{opt.des}</p>
            </div>
            <ComingSoon />
          </div>
        ))}
      </div>

      {/* Mobile version */}
      <div
        className="flex md:hidden w-full h-screen bg-cover bg-center filter-blur-xl"
        style={{
          backgroundImage:
            "url('https://i0.wp.com/assets.beautyhub.co.ke/wp-content/uploads/2025/02/14111042/lattafa-his-confession-eau-de-parfum-100ml-1.jpg?fit=1150%2C1150&ssl=1')",
        }}
      >
        <div className="p-6 w-full h-full text-white flex flex-col justify-between gap-[5rem]">
          <div className="flex justify-end w-full">
            <Settings />
          </div>
          <div className="px-4 text-xl py-4 flex flex-col items-center gap-6">
            {[
              "All perfumes",
              "New & Featured",
              "Women",
              "Men",
              "Brands",
              "Collection",
              "Gifts and Personalisation",
            ].map((text, i) => (
              <Link href="/" key={i}>
                <p className="font-semibold tracking-wider hover:underline w-fit">
                  {text}
                </p>
              </Link>
            ))}
          </div>
          <form className="flex mb-20 items-center gap-4">
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Product"
              className="outline-none h-[6vh] text-lg placeholder:text-[14px] px-6 py-4 bg-white/10 backdrop-blur-3xl border border-gray-200 rounded-md placeholder:text-white shadow-none"
            />
            <Button
              type="submit"
              variant="outline"
              className="rounded-full w-10 h-10 text-black shadow-none"
            >
              <Search className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>

      {/* Filter Slide */}
      <FilterSlide
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default Shoppage;
