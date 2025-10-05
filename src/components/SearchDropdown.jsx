"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input"; // shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { Search, X, Star } from "lucide-react";
import { FA_logo } from "@/app/assets/images/images";

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

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
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
      <div className="fixed inset-0 bg-black/70 text-white backdrop-blur-3xl z-50 flex flex-col !rounded-none !shadow-none">
        {/* Header */}
        <div className="border-b border-gray-200 p-8 flex items-center justify-between">
          <Image src={FA_logo} width={120} height={40} alt="Brand" />
          <Button
            variant="ghost"
            className="!rounded-none text-[10px] hover:bg-black !shadow-none"
            onClick={onClose}
          >
            Close Search
            <X className="w-5 h-5 text-white" />
          </Button>
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
            <li className="bg-white text-black font-semibold tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-300 w-22 h-7 flex items-center justify-center rounded-3xl text-xs">
              News
            </li>
            <li className="bg-white text-black font-semibold tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-300 w-22 h-7 flex items-center justify-center rounded-3xl text-xs">Notes</li>
            <li className="bg-white text-black font-semibold tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-300 w-22 h-7 flex items-center justify-center rounded-3xl text-xs">Perfumers</li>
            <li className="bg-white text-black font-semibold tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-300 w-22 h-7 flex items-center justify-center rounded-3xl text-xs">Awards</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SearchDropdown;
