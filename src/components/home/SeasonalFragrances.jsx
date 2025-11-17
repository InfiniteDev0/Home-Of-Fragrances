"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, Dot, ListFilter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import Dropdown from "./Dropdown";
import Link from "next/link";

import {
  seasonalTopPicks,
  seasonalMostLiked,
  seasonalBestSelling,
} from "@/data/constants";

const SeasonalFragrances = () => {
  // Dummy reminderState to prevent ReferenceError (reminder logic is commented out)
  const reminderState = {};
  const [activeBtn, setActivate] = useState(0);
  const [selectedSort, setSelectedSort] = useState("popular");
  const [SelectedArray, setSelectedArray] = useState([]);
  const [season, setSeason] = useState("Summer");
  const [fade, setFade] = useState(false);

  const filterButtons = [
    { icon: "☀️", name: "Summer" },
    { icon: "❄️", name: "Winter" },
    { icon: "🌻", name: "Spring" },
    { icon: "🍁", name: "Autumn" },
    { icon: "👉", name: "All seasons" },
  ];

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      let arr = [];
      let sourceArr = null;
      if (selectedSort === "popular") {
        sourceArr = seasonalTopPicks;
      } else if (selectedSort === "mostLiked") {
        sourceArr = seasonalMostLiked;
      } else if (selectedSort === "BestSeller") {
        sourceArr = seasonalBestSelling;
      }
      if (sourceArr) {
        if (season === "All seasons") {
          const found = sourceArr.find((item) => item.season === "All Seasons");
          arr = found ? found.perfumes : [];
        } else {
          const found = sourceArr.find((s) => s.season === season);
          arr = found ? found.perfumes : [];
        }
      }
      setSelectedArray(arr);
      setFade(false);
    }, 250);
    return () => clearTimeout(timeout);
  }, [season, selectedSort]);

  const getState = (id) => {
    return reminderState[id] || "idle";
  };

  return (
    <div className="min-h-fit font-outfit w-full">
      {/* Inline styles for the bell animations kept local to the component */}
      <style>{`
        @keyframes bell-shake {
          0% { transform: translateX(0) rotate(0deg); }
          15% { transform: translateX(-6px) rotate(-6deg); }
          30% { transform: translateX(6px) rotate(6deg); }
          45% { transform: translateX(-4px) rotate(-4deg); }
          60% { transform: translateX(4px) rotate(4deg); }
          75% { transform: translateX(-2px) rotate(-2deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
        /* apply the animation 3 times when animating (set reminder) */
        .bell-shake {
          display: inline-flex;
          animation: bell-shake 0.36s ease-in-out 3;
          will-change: transform;
        }

        @keyframes bell-ring {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-8deg); }
          30% { transform: rotate(8deg); }
          45% { transform: rotate(-6deg); }
          60% { transform: rotate(6deg); }
          75% { transform: rotate(-3deg); }
          100% { transform: rotate(0deg); }
        }
        /* ring animation: rotate around the TOP so the top appears stationary and sides move */
        .bell-ring {
          display: inline-flex;
          transform-origin: 50% 8%;
          animation: bell-ring 0.48s ease-in-out 1;
          will-change: transform;
        }

        /* ensure the icon doesn't affect layout when moving */
        .remind-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-9 text-black bg-white py-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between  gap-1  outfit">
          <h1 className="text-lg underline font-semibold flex items-center gap-2">
            Seasonal fragrances
          </h1>
          <p className="font-semibold  text-xs text-gray-400">
            Best fragrances suited for the each season , packed with longevity
            and strong projection.
          </p>
        </div>
        {/* <div className="flex items-center gap-2">
          <Sun className=" text-white !p-2 bg-yellow-500 rounded-full w-8 h-8" />
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Summer Fragrances
          </h1>
        </div> */}

        <div className="hidden md:flex items-center justify-between w-full gap-5">
          <Dropdown
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />

          <div className="flex items-center gap-3">
            {filterButtons.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (activeBtn !== index) {
                    setActivate(index);
                    setSeason(item.name);
                  }
                }}
                className={`bg-transparent font-semibold text-[12px] flex items-center gap-1 !px-4 h-[5vh] transition-all duration-500 cursor-pointer rounded-full text-black ${
                  activeBtn === index
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : "bg-black text-white hover:text-white hover:bg-gray-800"
                }`}
                aria-pressed={activeBtn === index}
              >
                <Dot className={`${activeBtn === index ? "" : "hidden"}`} />
                <span className="mr-1">{item.icon}</span>
                <span>{item.name}</span>
              </Button>
            ))}
          </div>

          <div className="flex items-center text-xs font-semibold gap-2 !p-2 !px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors">
            <ListFilter className="w-3 h-3" /> Filters
          </div>
        </div>

        {/* Filter Buttons - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto"></div>

        {/* Products Grid - Responsive */}
        <div
          className={`grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-10 transition-opacity duration-300 ${
            fade ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {SelectedArray.map((product, index) => {
            // Use index as fallback key if no id
            const key = product.id || product.name || index;
            const state = getState(product.id);
            return (
              <div key={key} className="flex flex-col gap-3  md:p-4">
                {/* Image Container */}
                <div className="relative w-full bg-gray-200 aspect-[3/4] overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-xs">
                      No Image
                    </div>
                  )}
                </div>
                {/* Product Info */}
                <div className="flex  flex-col gap-2">
                  <h1 className="text-sm font-semibold group-hover:underline cursor-pointer line-clamp-2 leading-tight">
                    {product.name}
                  </h1>
                  {product.description && (
                    <p className="text-xs">{product.description}</p>
                  )}
                  {product.price && (
                    <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                      {product.price}$
                    </p>
                  )}
                  <Button
                    className={
                      "hidden md:flex h-[4.3vh] mt-3 font-semibold tracking-wider text-xs rounded-none"
                    }
                  >
                    View item
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <Link
          href={"/eng-e1/homepage/collection/seasonalCollection"}
          alt="link to new arrivals"
          className="flex justify-center mt-8"
        >
          <Button className="border font-semibold tracking-wider  bg-black text-white hover:bg-black/90 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
            View Seasonal Collection
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SeasonalFragrances;
