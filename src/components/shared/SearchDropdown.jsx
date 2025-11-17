"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, SearchIcon, X } from "lucide-react";
import { FA_logo_dark } from "../../../public/assets/images/images";
import { products } from "@/data/constants";

// Sample / fallback data
const trendingSearches = ["oud", "rose", "dior", "lattafa", "creed"];
const sampleNotes = ["Oud", "Rose", "Amber", "Vanilla", "Citrus", "Musk"];

const SearchDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.has("search");

  const handleClose = () => {
    const baseUrl = window.location.href.split("?")[0];
    router.push(baseUrl);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  // Lock body scroll when search is open
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
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Debounced search
  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = products;
      if (searchQuery) {
        filtered = filtered.filter(
          (f) =>
            f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setSearchResults(filtered);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, isOpen]);

  // Update suggestions as user types
  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    const matches = products
      .map((p) => p.name)
      .filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()));
    let extra = [];
    if (matches.length) {
      extra = matches
        .map((name) => [name, `${name} parfum`, `${name} eau de parfum`])
        .flat();
    }
    setSuggestions([...new Set([...matches, ...extra])].slice(0, 5));
  }, [searchQuery]);

  // Keyboard navigation for suggestions
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (!suggestions.length) return;
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        e.preventDefault();
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        setSearchQuery(suggestions[highlightedIndex]);
        setHighlightedIndex(-1);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [suggestions, highlightedIndex, isOpen]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions]);

  if (!isOpen) return null;

  return (
    <div>
      {/* Desktop view */}
      <div className="fixed overflow-y-scroll inset-0 bg-white text-black backdrop-blur-3xl z-50 hidden md:flex flex-col !py-25 !px-5 !rounded-none !shadow-none">
        {/* Header */}
        <div className="flex items-center justify-between !px-8">
          <div className="uppercase flex items-center gap-3 mt-4 md:mt-0 text-lg font-bold tracking-wide">
            <Image src={FA_logo_dark} className="w-8 h-10" alt="" />
            Home of fragrances
          </div>
          <p
            className="!rounded-none flex items-center hover:text-gray-500 cursor-pointer gap-2 !pb-2 text-[12px] !shadow-none"
            onClick={handleClose}
          >
            Close Search
            <X className="w-4 h-4" />
          </p>
        </div>
        {/* Search bar + trending */}
        <div className="max-w-4xl mx-auto w-full py-10">
          <form className="flex items-center gap-4 relative">
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a Fragrances , Notes , Brand"
              className="border outline-none border-gray-600 text-lg font-extrabold tracking-wider px-6 py-4 !rounded-full !shadow-none pr-20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-24 top-1/2 text-sm -translate-y-1/2 text-black  font-extrabold px-2 py-1"
                tabIndex={-1}
              >
                Clear
              </button>
            )}
            <Button
              type="submit"
              variant="outline"
              className="!rounded-full w-10 h-10 text-black !shadow-none"
            >
              <Search className="w-5 h-5" />
            </Button>
          </form>
          {/* Live suggestions below input */}
          {searchQuery && suggestions.length > 0 && (
            <div className="bg-white border mt-2">
              {suggestions.map((sugg, idx) => {
                const i = sugg.toLowerCase().indexOf(searchQuery.toLowerCase());
                return (
                  <div
                    key={idx}
                    className={`flex items-center px-4 py-2 gap-2 border-b last:border-b-0 cursor-pointer ${
                      highlightedIndex === idx ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    onMouseDown={() => {
                      setSearchQuery(sugg);
                      setHighlightedIndex(-1);
                    }}
                  >
                    <SearchIcon className="w-4 h-4 text-sm text-gray-500" />
                    <span className="text-sm">
                      {i >= 0 ? (
                        <>
                          <span className="font-semibold text-sm text-black">
                            {sugg.slice(0, i + searchQuery.length)}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {sugg.slice(i + searchQuery.length)}
                          </span>
                        </>
                      ) : (
                        sugg
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="max-w-7xl flex flex-col gap-4 mx-auto w-full !px-8">
          {/* Header: show number of results */}
          <p className="text-sm font-semibold">
            {searchQuery
              ? `${searchResults.length} search result${
                  searchResults.length !== 1 ? "s" : ""
                }`
              : "Search results"}
          </p>

          {loading && (
            <div className="flex flex-col items-center justify-center py-10">
              <Image
                src={FA_logo_dark}
                width={13}
                height={13}
                alt="Loading"
                className="animate-spin"
              />
            </div>
          )}

          {!loading && searchQuery && searchResults.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10">
              <span className="text-lg font-semibold">
                There are no items matching for "{searchQuery}"
              </span>
              <span className="text-sm text-gray-500 mt-2">
                Try improving your results by double checking your spelling or
                trying a more general keyword.
              </span>
              <div className="mt-4 flex gap-2 text-xs font-semibold">
                TRENDING SEARCHES:
                {trendingSearches.map((term) => (
                  <span key={term} className="px-2">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!loading && searchResults.length > 0 && (
            <>
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {searchResults.map((product, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
                    <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-xs">{product.description}</p>
                      <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                        {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className="fixed inset-0 bg-black/90 text-white backdrop-blur-3xl z-50 flex flex-col !py-20 !px-4 !rounded-none !shadow-none md:hidden">
        <div className="flex items-center justify-end mb-4">
          <button onClick={handleClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

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

        <div className="mb-4">
          <span className="">Trending search</span>
          <ul className="flex flex-col flex-wrap gap-2 mt-2">
            {trendingSearches.map((term) => (
              <li
                key={term}
                className="px-2 py-1 flex items-center gap-4 rounded text-sm "
              >
                <div className="border border-gray-700 rounded-full p-3">
                  <SearchIcon className="w-4 h-4" />
                </div>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
