"use client";
import React, { useState, useRef } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FilterSlide = ({ isOpen, onClose }) => {
  const filterOptions = {
    gender: ["For Him", "For Her", "Unisex"],
    type: ["Eau de Toilette", "Eau de Parfum", "Extrait"],
    category: [
      "Bestselling",
      "Limited Edition",
      "Discounted",
      "Top Rated",
      "On Offer",
    ],
    notes: ["Floral", "Woody", "Oriental", "Fresh", "Citrus"],
    performance: ["Short (2-4 hours)", "Medium (4-8 hours)", "Long (8+ hours)"],
    occasion: ["Casual", "Formal", "Evening", "Party"],
    price: ["Under $50", "$50-$100", "$100-$200", "Above $200"],
    typeOfBrand: ["Designer", "Niche"],
  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  // NEW: selected map: { categoryKey: Set([option,...]) }
  const [selectedMap, setSelectedMap] = useState({});

  // Create refs for all categories
  const contentRefs = useRef(
    Object.keys(filterOptions).map(() => React.createRef())
  );

  const handleCategoryToggle = (categoryIndex) => {
    setExpandedCategory(
      expandedCategory === categoryIndex ? null : categoryIndex
    );
  };

  const toggleOption = (categoryIndex, option) => {
    setSelectedMap((prev) => {
      const key = Object.keys(filterOptions)[categoryIndex];
      const prevSet = new Set(prev[key] || []);
      if (prevSet.has(option)) prevSet.delete(option);
      else prevSet.add(option);
      return { ...prev, [key]: Array.from(prevSet) };
    });
  };

  const clearAll = () => {
    setSelectedMap({});
  };

  const totalSelected = Object.values(selectedMap).reduce(
    (sum, arr) => sum + (arr?.length || 0),
    0
  );

  const getDropdownHeight = (index) => {
    const ref = contentRefs.current[index];
    return ref.current ? `${ref.current.scrollHeight}px` : "0px";
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0  z-[310]">
          <aside className="fixed right-0 top-0 bottom-0 w-[86vw] max-w-[520px] bg-white text-black z-[320] shadow-2xl flex flex-col">
            {/* Header */}
            <div className="py-[1.38rem] px-6 flex items-center justify-between border-b border-gray-200 bg-white z-[330]">
              <div className="flex items-center justify-between w-full gap-4">
                <h2 className="text-lg font-semibold">Filter &amp; Sort</h2>
                {/* total selected badge */}
                <div className="text-xs text-gray-600 mr-5">
                  {totalSelected > 0 ? (
                    <span className="flex items-center gap-2">
                      <span className="font-semibold">
                        {totalSelected} Filters
                      </span>
                      <button
                        onClick={clearAll}
                        className="text-sm underline text-gray-900"
                      >
                        Clear All
                      </button>
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">No filters</span>
                  )}
                </div>
              </div>

              <Button className={"rounded-full w-6 h-6 cursor-pointer"} size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 px-6 py-4 overflow-y-auto">
              {Object.entries(filterOptions).map(([key, options], index) => {
                const isExpanded = expandedCategory === index;
                const selectedCount = (selectedMap[key] || []).length;
                return (
                  <div key={key} className="border-b border-gray-300">
                    <button
                      className="w-full flex items-center justify-between py-4 text-left font-semibold text-base"
                      onClick={() => handleCategoryToggle(index)}
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-3">
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        {/* per-category badge */}
                        {selectedCount > 0 && (
                          <span className="text-[10px] bg-black  rounded-full w-4 h-4 flex items-center justify-center text-white">
                            {selectedCount}
                          </span>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    <div
                      ref={contentRefs.current[index]}
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        height: isExpanded ? getDropdownHeight(index) : "0px",
                      }}
                    >
                      <div className="pl-4 pb-4 flex flex-wrap gap-3">
                        {options.map((option) => {
                          const isSelected = (selectedMap[key] || []).includes(
                            option
                          );
                          return (
                            <button
                              key={option}
                              role="switch"
                              aria-checked={isSelected}
                              onClick={() => toggleOption(index, option)}
                              className={`text-sm px-4 py-2 rounded-sm border transition 
                                ${
                                  isSelected
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                            >
                              {option}
                              {/* optional count per option could go here if needed */}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="py-4 px-6 border-t border-gray-300 bg-white z-[330]">
              <Button
                className="w-full rounded-none  bg-black hover:bg-zinc-900 cursor-pointer"
                onClick={() => {
                  /* apply filters logic */
                }}
              >
                Apply Filters
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default FilterSlide;
