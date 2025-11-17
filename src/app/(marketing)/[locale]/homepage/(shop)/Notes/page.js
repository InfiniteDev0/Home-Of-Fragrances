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
import { filterOptions } from "@/data/constants";


const NotesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [stage, setStage] = useState({
    type: "CITRUS SMELLS",
    des: "Fresh, zesty, and invigorating citrus fragrances",
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
    // Create exact ID match
    const sectionId = `section-${option.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`;
    const section = document.getElementById(sectionId);

    if (section) {
      const headerOffset = 120; // Height of the fixed navbar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  // Scroll logic placeholder (updates header as user scrolls)
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 120; // Height of the fixed header
      const sections = filterOptions.map((opt) =>
        document.getElementById(
          `section-${opt.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
        )
      );

      let foundSection = false;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the viewport and its top is near or just past the header
          if (rect.top <= headerHeight + 10 && rect.bottom > headerHeight) {
            setStage({
              type: filterOptions[i].name,
              des: filterOptions[i].des,
            });
            foundSection = true;
            break;
          }
        }
      }

      // If we're at the very top of the page, set to first section
      if (!foundSection && window.scrollY < 100) {
        setStage({
          type: filterOptions[0].name,
          des: filterOptions[0].des,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once on mount to set initial state
    handleScroll();

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
    <div className="flex flex-col gap-[5rem]">
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
      {/* Each Notes collection */}
      <div className="px-6 mt-28 pb-10">
        <div className="flex flex-col gap-[5rem]">
          {filterOptions.map((option, index) => {
            const sectionId = `section-${option.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <div
                key={index}
                id={sectionId}
                className=" flex flex-col gap-5 pt-12"
              >
                <h1 className="md:text-base underline font-semibold justify-center flex items-center gap-2 mb-4">
                  {option.name}
                </h1>
                {/* Add your section content here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-6">
                  {
                      option.List.map((note , idx) => {
                        return (
                          <Link
                            className="flex flex-col items-center justify-center bg-gray-200 rounded-sm h-[7vh] hover:bg-gray-300 "
                            href={`/eng-e1/homepage/Notes${note.link}`}
                            key={idx}
                          >
                            <img src={note.image} alt="" />
                            <p className="text-sm font-semibold tracking-wider">
                              {note.name}
                            </p>
                          </Link>
                        );
                      })
                  }
                </div>
              </div>
            );
          })}
        </div>
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

export default NotesPage;
