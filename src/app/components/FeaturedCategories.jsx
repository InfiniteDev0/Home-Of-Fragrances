"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dot, ListFilter, Heart, Star, TrendingUp } from "lucide-react";
import { perfumes } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";

const dropdownOptions = [
  { label: "Most Followed", value: "mostFollowed" },
  { label: "Popular", value: "popular" },
  { label: "Most Liked", value: "mostLiked" },
];

const CaretIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    className={`ml-2 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path
      d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"
      fill="#222"
    />
  </svg>
);

const Dropdown = ({ selectedSort, onSortChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center justify-between w-[120px] px-4 py-2 bg-white border border-gray-200 rounded-md text-xs font-semibold text-black focus:outline-none transition-all duration-200"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>
          {dropdownOptions.find((opt) => opt.value === selectedSort)?.label}
        </span>
        <CaretIcon open={open} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-[220px] bg-white rounded-md border border-gray-200 p-2 z-20 animate-dropdown">
          <ul className="py-2">
            {dropdownOptions.map((opt) => (
              <li key={opt.value}>
                <button
                  className={`flex w-full items-center px-4 py-2 text-[11px] text-black rounded-sm transition-all duration-150
                    ${
                      selectedSort === opt.value
                        ? "bg-gray-100 font-semibold"
                        : "hover:bg-gray-50"
                    }
                  `}
                  onClick={() => {
                    onSortChange(opt.value);
                    setOpen(false);
                  }}
                  aria-selected={selectedSort === opt.value}
                >
                  <span>{opt.label}</span>
                  {selectedSort === opt.value && (
                    <svg
                      className="ml-auto w-3 h-3 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>{`
        .animate-dropdown {
          animation: dropdown-fade-in 0.18s cubic-bezier(.8,0,0,.8);
        }
        @keyframes dropdown-fade-in {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
};

const PerfumeCard = ({ perfume }) => {
  return (
    <Link href={`/perfume/${perfume.id}`}>
      <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="relative mb-3">
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {perfume.media?.image ? (
              <Image
                src={perfume.media.image}
                alt={perfume.name}
                width={200}
                height={200}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <span className="text-gray-400 text-sm">{perfume.name}</span>
            )}
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {perfume.availability?.newRelease && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
            {perfume.availability?.onOffer && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </span>
            )}
            {perfume.availability?.bestSeller && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Best Seller
              </span>
            )}
          </div>

          {/* Heart Icon */}
          <div className="absolute top-2 right-2">
            <Heart className="w-5 h-5 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
              {perfume.name}
            </h3>
          </div>

          <p className="text-xs text-gray-600">{perfume.house}</p>

          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">
              {perfume.reviews?.[0]?.rating || "4.5"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {perfume.price?.discount < perfume.price?.retail ? (
                <>
                  <span className="font-bold text-sm text-green-600">
                    {perfume.price.discount} {perfume.price.currency}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {perfume.price.retail} {perfume.price.currency}
                  </span>
                </>
              ) : (
                <span className="font-bold text-sm text-gray-900">
                  {perfume.price.retail} {perfume.price.currency}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              {perfume.availability?.mostFollowed && (
                <TrendingUp className="w-3 h-3 text-blue-500" />
              )}
              {perfume.availability?.mostLiked && (
                <Heart className="w-3 h-3 fill-red-500 text-red-500" />
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mt-2">
            {perfume.accords?.slice(0, 3).map((accord, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {accord}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const FeaturedCategories = () => {
  const [activeBtn, setActivate] = useState(0);
  const [selectedSort, setSelectedSort] = useState("popular");

  const filterButtons = [
    "New Releases",
    "Top rated",
    "Designer",
    "Niche",
    "On offer",
    "Vanilla",
    "Oud",
  ];

  // Filter logic
  const getFilteredPerfumes = () => {
    let filtered = [...perfumes];

    // Apply button filter
    const activeFilter = filterButtons[activeBtn];

    switch (activeFilter) {
      case "New Releases":
        filtered = filtered.filter((p) => p.availability?.newRelease);
        break;
      case "Top rated":
        filtered = filtered.filter((p) => p.availability?.topRated);
        break;
      case "Designer":
        filtered = filtered.filter((p) => p.availability?.isDesigner);
        break;
      case "Niche":
        filtered = filtered.filter((p) => p.availability?.isNiche);
        break;
      case "On offer":
        filtered = filtered.filter((p) => p.availability?.onOffer);
        break;
      case "Vanilla":
        filtered = filtered.filter((p) => p.availability?.hasVanilla);
        break;
      case "Oud":
        filtered = filtered.filter((p) => p.availability?.hasOud);
        break;
      default:
        break;
    }

    // Apply sort
    switch (selectedSort) {
      case "mostFollowed":
        filtered = filtered.filter((p) => p.availability?.mostFollowed);
        break;
      case "popular":
        filtered = filtered.sort(
          (a, b) =>
            (b.availability?.bestSeller ? 1 : 0) -
            (a.availability?.bestSeller ? 1 : 0)
        );
        break;
      case "mostLiked":
        filtered = filtered.filter((p) => p.availability?.mostLiked);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredPerfumes = getFilteredPerfumes();

  const getFilterDescription = () => {
    const activeFilter = filterButtons[activeBtn];
    const sortLabel = dropdownOptions.find(
      (opt) => opt.value === selectedSort
    )?.label;

    const descriptions = {
      "New Releases":
        "Latest fragrance launches of 2025 including Louis Vuitton Cosmic Cloud, Armaf Magnificent, and Rasasi Hawas Ice",
      "Top rated":
        "Highest rated fragrances by our community including Baccarat Rouge 540, Tom Ford Vanilla Sex, and Amouage Jubilation XXV",
      Designer:
        "Premium designer fragrances from luxury houses like Louis Vuitton, Dior, Tom Ford, and Armaf",
      Niche:
        "Exclusive niche fragrances from Maison Francis Kurkdjian, Amouage, Lattafa, and other artisanal houses",
      "On offer":
        "Special discounted fragrances with amazing value including limited-time offers and seasonal sales",
      Vanilla:
        "Rich vanilla-based fragrances featuring Tom Ford Vanilla Sex, Lattafa Khamrah Qahwa, and Baccarat Rouge 540",
      Oud: "Traditional and modern oud fragrances including Lattafa Oud for Glory and Amouage Jubilation XXV",
    };

    return (
      descriptions[activeFilter] || `${sortLabel} fragrances curated for you`
    );
  };

  return (
    <section className="py-20 px-[5%] bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center justify-between w-full gap-5">
          <Dropdown
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />

          <div className="flex items-center gap-3">
            {filterButtons.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => setActivate(index)}
                  className={`bg-transparent font-semibold text-[12px] flex items-center gap-1 !px-4 h-[5vh] transition-all duration-500 cursor-pointer rounded-full text-black ${
                    activeBtn === index
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <Dot className={`${activeBtn === index ? "" : "hidden"}`} />
                  {item}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center text-xs font-semibold gap-2 !p-2 !px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors">
            <ListFilter className="w-3 h-3" /> Filters
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-white w-full !p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl mb-2">
                {filterButtons[activeBtn]} ({filteredPerfumes.length})
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                {getFilterDescription()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                Sorted by:{" "}
                {
                  dropdownOptions.find((opt) => opt.value === selectedSort)
                    ?.label
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPerfumes.length > 0 ? (
              filteredPerfumes
                .slice(0, 8)
                .map((perfume) => (
                  <PerfumeCard key={perfume.id} perfume={perfume} />
                ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No fragrances found for this filter combination.
                </p>
              </div>
            )}
          </div>

          {filteredPerfumes.length > 8 && (
            <div className="text-center mt-6">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-2 rounded-full">
                View All {filteredPerfumes.length} Fragrances
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
