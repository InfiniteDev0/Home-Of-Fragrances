"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input"; // shadcn/ui
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, SearchIcon, X } from "lucide-react";
import { FA_logo_dark } from "@/app/assets/images/images";

// Sample data remains for demo purposes
const sampleFragrances = [
  /* ...your data... */
];
const trendingSearches = ["oud", "rose", "dior", "lattafa", "creed"];
const recentSearches = [
  "Dior Sauvage",
  "Chanel No. 5",
  "Tom Ford",
  "Creed Aventus",
];
const sampleNotes = ["Oud", "Rose", "Amber", "Vanilla", "Citrus", "Musk"];

const SearchDropdown = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState([1990, 2025]);
  const inputRef = useRef(null);

  // Lock body scroll when SearchDropdown is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      if (inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    return;
  }, [isOpen]);

  useEffect(() => {
    // Filter logic (add more for advanced filters)
    let filtered = sampleFragrances;
    if (searchQuery) {
      filtered = filtered.filter(
        (f) =>
          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedNotes.length) {
      filtered = filtered.filter((f) =>
        selectedNotes.some((note) =>
          f.category.toLowerCase().includes(note.toLowerCase())
        )
      );
    }
    if (selectedBrand) {
      filtered = filtered.filter((f) => f.brand === selectedBrand);
    }
    setSearchResults(filtered);
  }, [searchQuery, selectedNotes, selectedBrand, selectedYear]);

  // UI helper functions
  const toggleNote = (note) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  return (
    isOpen && (
      <div>
        {/* Desktop view */}
        <div className="fixed inset-0 bg-white text-black backdrop-blur-3xl z-50 hidden md:flex flex-col !py-25 !px-5 !rounded-none !shadow-none">
          {/* Header */}
          <div className="flex items-center justify-end">
            <p
              className="!rounded-none flex items-center gap-2 !pb-2 text-[12px] !shadow-none"
              onClick={onClose}
            >
              Close Search
              <X className="w-4 h-4" />
            </p>
          </div>
          {/* Search bar + trending */}
          <div className="max-w-4xl mx-auto w-full py-10">
            <form className="flex items-center gap-4">
              <Input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Fragrances , News , Brand , Notes"
                className="border border-gray-300 text-lg px-6 py-4 !rounded-none !shadow-none"
              />
              <Button
                type="submit"
                variant="outline"
                className="!rounded-full w-10 h-10 text-black !shadow-none"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>
          </div>
          <div className="max-w-7xl mx-auto w-full !px-10">
            <ul className="flex items-center justify-center gap-[2rem]">
              <li className=" font-semibold hover:text-gray-500 tracking-wider cursor-pointer flex items-center justify-center rounded-3xl text-xs">
                News
              </li>
              <li className=" font-semibold hover:text-gray-500 tracking-wider cursor-pointer flex items-center justify-center rounded-3xl text-xs">
                Notes
              </li>
              <li className=" font-semibold hover:text-gray-500 tracking-wider cursor-pointer flex items-center justify-center rounded-3xl text-xs">
                Perfumers
              </li>
              <li className=" font-semibold hover:text-gray-500 tracking-wider cursor-pointer flex items-center justify-center rounded-3xl text-xs">
                Awards
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile view */}
        <div className="fixed inset-0 bg-black/90 text-white backdrop-blur-3xl z-50 flex flex-col !py-20 !px-4 !rounded-none !shadow-none md:hidden">
          {/* Header */}
          <div className="flex items-center justify-end mb-4">
            <button onClick={onClose} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Search bar */}
          <form className="flex items-center gap-2 mb-4">
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for product"
              className="border bg-white text-black  placeholder:text-black border-gray-300  px-4 py-2  !rounded-md h-[7vh] placeholder:text-[16px] !shadow-none"
            />
            <Button
              type="submit"
              variant="outline"
              className="!rounded-full w-9 h-9 text-black !shadow-none"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>
          {/* Trending searches */}
          <div className="mb-4">
            <span className="">Trending search</span>
            <ul className="flex flex-col  flex-wrap gap-2 mt-2">
              {trendingSearches.map((term) => (
                <li
                  key={term}
                  className="px-2 py-1 flex items-center gap-4 rounded text-sm "
                >
                  <div className="border border-gray-700 rounded-full p-3">
                    <SearchIcon className="w-4 h-4"/>
                  </div>
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchDropdown;
