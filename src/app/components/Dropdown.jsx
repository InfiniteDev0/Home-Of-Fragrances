"use client"
import { ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const dropdownOptions = [
  { label: "Best Selling", value: "BestSeller" },
  { label: "Popular", value: "popular" },
  { label: "Most Liked", value: "mostLiked" },
];

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
        className="flex items-center justify-between w-[120px] px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer rounded-md text-xs font-semibold text-black focus:outline-none transition-all duration-200"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>
          {dropdownOptions.find((opt) => opt.value === selectedSort)?.label}
        </span>
        <ChevronUp
          className={`w-4 h-4 ${
            open === false ? "" : "rotate-180"
          } transition-rotate duration-200`}
        />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-[220px] bg-white rounded-md border border-gray-300 p-2 z-20 animate-dropdown">
          <ul className="py-2">
            {dropdownOptions.map((opt) => (
              <li key={opt.value}>
                <button
                  className={`flex w-full items-center px-4 py-2 text-[11px] text-black rounded-sm transition-all duration-150
                      ${
                        selectedSort === opt.value
                          ? "bg-gray-100 font-semibold"
                          : "hover:bg-gray-50 font-semibold"
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

export default Dropdown;
