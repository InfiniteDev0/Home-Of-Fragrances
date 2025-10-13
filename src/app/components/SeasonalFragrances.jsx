"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, Dot, ListFilter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const SeasonalFragrances = () => {
  const [activeBtn, setActivate] = useState(0);
  const [selectedSort, setSelectedSort] = useState("popular");

  // reminderState maps productId -> 'idle' | 'animating' | 'done' | 'unsetting'
  const [reminderState, setReminderState] = useState({});

  const filterButtons = [
    { icon: "☀️", name: "Summer" },
    { icon: "❄️", name: "Winter" },
    { icon: "🌻", name: "Spring" },
    { icon: "🍁", name: "Autumn" },
    { icon: "👉", name: "All seasons" },
  ];

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
          <ChevronUp className={`w-4 h-4 ${open === false ? "" : "rotate-180"} transition-rotate duration-200`}/>
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

  const products = [
    {
      id: 1,
      name: "Ahmed Al Maqribi Nisswah",
      brand: "Dr Ruqayya Abba Tofa",
      image:
        "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Fcollections%2Fniswah-1.jpg&w=2048&q=75",
    },
    {
      id: 2,
      name: "Afternoon Swim",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490",
    },
    {
      id: 3,
      name: "Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
    },
    {
      id: 4,
      name: "Pacific Chill",
      brand: "Fragrance World",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      id: 5,
      name: "Odyssey Toffee Coffee",
      brand: "Armaf",
      image:
        "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
    },
  ];

  const getState = (id) => {
    return reminderState[id] || "idle";
  };

  const fireConfetti = () => {
    // a couple of bursts for a nice effect
    confetti({
      particleCount: 40,
      spread: 70,
      startVelocity: 45,
      origin: { y: 0.4 },
    });
    confetti({
      particleCount: 30,
      spread: 120,
      startVelocity: 30,
      scalar: 0.8,
      origin: { y: 0.6 },
    });
  };

  const handleRemindClick = (productId) => {
    const state = getState(productId);
    if (state === "idle") {
      // set animating state (setting reminder)
      setReminderState((prev) => ({ ...prev, [productId]: "animating" }));

      // fire confetti for setting reminder
      fireConfetti();

      // fallback: if animationend doesn't fire, ensure we set to done after buffer
      setTimeout(() => {
        setReminderState((prev) => {
          if (prev[productId] === "animating") {
            return { ...prev, [productId]: "done" };
          }
          return prev;
        });
      }, 1400); // equals 3 * 0.36s + buffer
    } else if (state === "done") {
      // user wants to unset reminder: no confetti, play a short bell-ring animation
      setReminderState((prev) => ({ ...prev, [productId]: "unsetting" }));
      // onAnimationEnd for 'bell-ring' will set it back to 'idle'
    }
    // if state === 'animating' or 'unsetting' ignore clicks
  };

  const handleAnimationEnd = (productId, e) => {
    // Determine which animation ended by name
    const animName =
      e?.animationName || (e?.nativeEvent && e.nativeEvent.animationName);
    if (animName === "bell-shake") {
      // finishing the set-reminder animation -> done
      setReminderState((prev) => ({ ...prev, [productId]: "done" }));
    } else if (animName === "bell-ring") {
      // finishing the unset animation -> idle
      setReminderState((prev) => ({ ...prev, [productId]: "idle" }));
    }
  };

  return (
    <div className="min-h-screen font-outfit w-full">
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

      <div className="max-w-7xl mx-auto flex flex-col gap-9 bg-black text-white md:text-black md:bg-white py-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 max-w-5xl mx-auto outfit">
          <h1 className="text-2xl font-semibold">Seasonal fragrances</h1>
          <p className="font-semibold text-center text-sm text-gray-400">
            Best fragrances suited for the each season  , packed with longevity
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
                onClick={() => setActivate(index)}
                className={`bg-transparent font-semibold text-[12px] flex items-center gap-1 !px-4 h-[5vh] transition-all duration-500 cursor-pointer rounded-full text-black ${
                  activeBtn === index
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : "bg-black text-white hover:text-white hover:bg-gray-800"
                }`}
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
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-10">
          {products.map((product, index) => {
            const state = getState(product.id);
            return (
              <div key={product.id} className="flex flex-col gap-3  md:p-4">
                {/* Image Container */}
                <div className="relative bg-white w-full aspect-[3/4] overflow-hidden md:rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-xs">Harmonious Lily Magic / 100ml</p>
                  <p className="flex items-center justify-between font-semibold">
                    259$
                    <span className="hidden md:flex items-center text-[12px] gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />5
                    </span>
                  </p>
                  <Button
                    className={
                      "hidden md:flex font-semibold tracking-wider text-xs rounded-none"
                    }
                  >
                    View item
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button - Hidden on mobile if needed */}
        <div className="flex justify-center mt-8">
          <Button className="border bg-white text-black md:bg-transparent md:text-black border-gray-700 font-semibold tracking-wider hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm ">
            View seasonal fragrances
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalFragrances;
