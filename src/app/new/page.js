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
import FilterSlide from "../components/FilterSlide";
import { perfumes } from "../assets/assets";
import ComingSoon from "../components/ComingSoon";
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

// Everyone's Favorite products
const Favoriteproducts = [
  {
    id: 11,
    name: "louis Vuitton Imagination",
    brand: "Louis Vuitton",
    image:
      "https://my.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination--LP0219_PM2_Front%20view.jpg?impolicy=bgcolor&bgcolor=%23f8f8f8",
    price: "340",
    rating: 4.9,
    description: "Iconic Amber Floral / 70ml",
  },
  {
    id: 12,
    name: "Stronger with You",
    brand: "Armani",
    image:
      "https://assets-cf.armani.com/image/upload/f_auto,q_auto:best,ar_4:5,w_1350,c_fill/LC601900_NLP_100ML_F_FW2025.jpg",
    price: "650",
    rating: 4.8,
    description: "Luxurious Oriental / 50ml",
  },
  {
    id: 13,
    name: "Creed Aventus",
    brand: "Creed",
    image:
      "https://www.creedfragrance.com/images?url=https://static.thcdn.com/productimg/original/12852836-1335225305181175.jpg&format=webp&auto=avif&width=1000&height=1000&fit=cover",
    price: "1200",
    rating: 4.7,
    description: "Fruity Chypre / 120ml",
  },
  {
    id: 14,
    name: "Chanel N°5",
    brand: "Chanel",
    image:
      "https://en.bloomingdales.com.kw/dw/image/v2/BLJM_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw2d78c8ec/sfcc-new-blm-production/2/0/4/7/7/204779464_IN.jpg?sw=435&sh=650&q=100",
    price: "180",
    rating: 4.6,
    description: "Sweet Gourmand / 100ml",
  },
  {
    id: 15,
    name: "Dior Sauvage",
    brand: "Dior",
    image:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5d83aa9c/Y0998025/Y0998025_C099800170_E01_RHC.jpg?sw=1024",
    rating: 4.5,
    description: "Fresh Spicy / 100ml",
  },
];

// Best MiddleEastern
const MiddleEastern = [
  {
    id: 21,
    name: "Vulcan fue",
    brand: "French Avenue",
    image:
      "https://elarab.my/cdn/shop/files/VxK9mpJW68520bfa54528_1750207482.jpg?v=1750207511&width=1920",
    price: "39",
    rating: 4.9,
    description: "Classic Aldehyde Floral Set",
  },
  {
    id: 22,
    name: "Reef Coral",
    brand: "Reef",
    image:
      "https://reefperfumesna.com/cdn/shop/files/CoralNew.png?v=1751912467",
    rating: 4.7,
    description: "5 Miniatures Discovery / 5x10ml",
  },
  {
    id: 23,
    name: "Ibraq , Emarati Scents",
    brand: "Viktor & Rolf",
    image:
      "https://emaratiscents.com/cdn/shop/files/e9d97865-c899-4f11-b31e-c46b7d17bc01-1000x1000-fEvBUWbCvWxJZeJkPDVr72JceBTTpckhPcQn5JS4.webp?v=1751226300&width=1000",
    price: "520",
    rating: 4.8,
    description: "Floral Explosion Set / 100ml + 20ml",
  },
  {
    id: 24,
    name: "ESSENCE OF CASABLANCA",
    brand: "Swiss Arabian",
    image:
      "https://swissarabian.com/cdn/shop/products/Casablanca-Bottle-_-UB_3412d7ea-b69a-48a0-93ba-86a3233b7bd2_720x.png?v=1689138095",
    price: "299",
    rating: 4.6,
    description: "Oriental Collection / 3x50ml",
  },
  {
    id: 25,
    name: "Rasasi Hawas fire",
    brand: "Rasasi",
    image:
      "https://belvish.com/cdn/shop/files/rasasihawasedpformen_1.jpg?v=1735911836",
    price: "159",
    rating: 4.5,
    description: "Travel Size Collection / 4x25ml",
  },
];

// Top 10 Brands
const Top10Brands = [
  {
    id: 1,
    brandName: "Louis Vuitton",
    brandDescription:
      "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
    brandLogo: "https://icon2.cleanpng.com/20180712/qcy/aawzygg7c.webp",
    ShopLink: "https://me.louisvuitton.com/",
    image:
      "https://media.cntravellerme.com/photos/680b49cb0383eb83826831bd/16:9/w_2560%2Cc_limit/Ocean%2520BLVD%2520-%2520Louis%2520Vuitton%2520Cologne%2520Perfumes.jpg",
  },
  {
    id: 2,
    brandName: "Armani",
    brandDescription:
      "Premium Arabic perfumes with traditional craftsmanship and modern elegance",
    brandLogo:
      "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Flogos%2Flogo.png&w=256&q=75",
    ShopLink: "https://ae.ahmedalmaghribi.com/",
    image:
      "https://www.giorgioarmanibeauty-usa.com/on/demandware.static/-/Sites-armani-us-Library/default/dwe277309d/images/pdp/RITM5808091_THUMBNAIL_1.jpg",
  },
  {
    id: 3,
    brandName: "Maison Francis Kurkdjian",
    brandDescription:
      "Luxury French perfume brand celebrated for artistic and timeless fragrances",
    brandLogo: "https://www.franciskurkdjian.com/media/logo.svg",
    ShopLink: "https://www.franciskurkdjian.com/",
    image:
      "https://i0.wp.com/chaileedo.com/wp-content/uploads/2025/09/9.10-1.jpg?fit=1280%2C720&ssl=1",
  },
  {
    id: 4,
    brandName: "Fragrance World",
    brandDescription:
      "Affordable luxury fragrances inspired by premium designer scents",
    brandLogo:
      "https://fragranceworld.ae/wp-content/uploads/2021/03/fw-logo.png",
    ShopLink: "https://fragranceworld.ae/",
    image:
      "https://www.smella.es/cdn/shop/files/Untitleddesign-2025-03-28T113411.087.png?v=1755186774",
  },
  {
    id: 5,
    brandName: "Armaf",
    brandDescription:
      "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
    brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
    ShopLink: "https://armaf.com/",
    image:
      "https://armaf.com/cdn/shop/collections/10_1536x864_d97bb4ce-2b3d-4aeb-970c-18a1679c91ce.webp?v=1722597378",
  },
  {
    id: 6,
    brandName: "Lattafa",
    brandDescription:
      "Leading Middle Eastern fragrance brand offering bold, long-lasting perfumes",
    brandLogo: "https://lattafa.com/cdn/shop/files/lattafa-logo.png",
    ShopLink: "https://lattafa.com/",
    image:
      "https://perfumepure.net/wp-content/uploads/2025/05/lattafa-melhores-perfumes-verao-2025-banner.png",
  },
  {
    id: 7,
    brandName: "Rasasi",
    brandDescription:
      "Dubai-based perfume house blending oriental and occidental scents with finesse",
    brandLogo: "https://www.rasasi.com/cdn/shop/files/rasasi-logo.png",
    ShopLink: "https://www.rasasi.com/",
    image:
      "https://preview.redd.it/theory-rasasis-quick-releases-how-it-could-be-tied-to-their-v0-u3gif7sv71gf1.jpg?width=640&crop=smart&auto=webp&s=f2ea73f93e373cbbed42071036d9712cea338eb9",
  },
  {
    id: 8,
    brandName: "Jean Paul Gaultier",
    brandDescription:
      "One of the oldest perfume houses in the Middle East known for opulent fragrances",
    brandLogo: "https://ajmalperfume.com/cdn/shop/files/ajmal-logo.png",
    ShopLink: "https://ajmalperfume.com/",
    image:
      "https://media.theperfumeshop.com/medias/sys_master/root/hcd/h9c/10063045656606/JPG-LE-MALE-RE-2025_SJP-40021_ETAIL-STILL-LME-ABSOLU-LES-MALES-NO-LP/JPG-LE-MALE-RE-2025-SJP-40021-ETAIL-STILL-LME-ABSOLU-LES-MALES-NO-LP.jpg",
  },
  {
    id: 9,
    brandName: "Swiss Arabian",
    brandDescription:
      "Pioneers of Arabian perfumery blending heritage and innovation",
    brandLogo:
      "https://swissarabian.com/cdn/shop/files/swiss-arabian-logo.png",
    ShopLink: "https://swissarabian.com/",
    image:
      "https://www.duneperfumes.com.au/cdn/shop/files/Untitleddesign_79.png?v=1750943876",
  },
  {
    id: 10,
    brandName: "Tom Ford",
    brandDescription:
      "American luxury brand known for sophisticated and bold fragrances",
    brandLogo:
      "https://www.tomford.com/media/logo/stores/1/tom_ford_logo.svg",
    ShopLink: "https://www.tomford.com/",
    image:
      "https://perfumegallery.ae/cdn/shop/collections/TOMFORD.jpg?v=1658587858",
  },
];

// Top 10 Perfumes
const Top10Perfumes = [
  {
    id: 31,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    image:
      "https://www.franciskurkdjian.com/media/catalog/product/b/a/baccarat_rouge_540_edp_70ml_1.jpg",
    price: "1350",
    rating: 4.9,
    description: "Iconic Amber Floral / 70ml",
  },
  {
    id: 32,
    name: "Creed Aventus",
    brand: "Creed",
    image:
      "https://creedboutique.com/media/catalog/product/a/v/aventus_120ml_1.jpg",
    price: "1200",
    rating: 4.8,
    description: "Fruity Chypre / 120ml",
  },
  {
    id: 33,
    name: "Tom Ford Black Orchid",
    brand: "Tom Ford",
    image:
      "https://www.tomford.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-tomford-master-catalog/default/dw123456/images/large/T0XV01_BLK_ORD_EDP_50ML.jpg",
    price: "650",
    rating: 4.7,
    description: "Luxurious Oriental / 50ml",
  },
  {
    id: 34,
    name: "Dior Sauvage",
    brand: "Dior",
    image:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/90/0/packshots%2FPDG_Y0996225_F009600000_E01_GHC.jpg",
    price: "420",
    rating: 4.6,
    description: "Fresh Spicy / 100ml",
  },
  {
    id: 35,
    name: "Chanel Bleu de Chanel",
    brand: "Chanel",
    image:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1240/bleu-de-chanel-eau-de-parfum-spray-100ml-3145891073409-8847106686750.jpg",
    price: "580",
    rating: 4.5,
    description: "Woody Aromatic / 100ml",
  },
  {
    id: 36,
    name: "Lattafa Khamrah",
    brand: "Lattafa",
    image: "https://lattafa.com/media/catalog/product/khamrah_100ml.jpg",
    price: "180",
    rating: 4.8,
    description: "Sweet Gourmand / 100ml",
  },
  {
    id: 37,
    name: "Armaf Club de Nuit Intense",
    brand: "Armaf",
    image:
      "https://armaf.com/media/catalog/product/c/l/club_de_nuit_intense_man_105ml.jpg",
    price: "120",
    rating: 4.7,
    description: "Fruity Smoky / 105ml",
  },
  {
    id: 38,
    name: "Amouage Interlude Man",
    brand: "Amouage",
    image:
      "https://www.amouage.com/media/catalog/product/i/n/interlude_man_edp_100ml_1.jpg",
    price: "890",
    rating: 4.6,
    description: "Spicy Oriental / 100ml",
  },
  {
    id: 39,
    name: "Rasasi Hawas",
    brand: "Rasasi",
    image:
      "https://www.rasasi.com/media/catalog/product/h/a/hawas_100ml_1.jpg",
    price: "220",
    rating: 4.5,
    description: "Fresh Aquatic / 100ml",
  },
  {
    id: 40,
    name: "Swiss Arabian Shaghaf Oud",
    brand: "Swiss Arabian",
    image:
      "https://swissarabian.com/media/catalog/product/s/h/shaghaf_oud_100ml.jpg",
    price: "299",
    rating: 4.4,
    description: "Oriental Woody / 100ml",
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
              return <div></div>;
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
