"use client";
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Bell, Check, FlameIcon, Star, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const SeasonalFragrances = () => {
  const [activeBtn, setActivate] = useState(0);

  // reminderState maps productId -> 'idle' | 'animating' | 'done' | 'unsetting'
  const [reminderState, setReminderState] = useState({});

  const filterButtons = [
    { icon: "🌶️", name: "Coming Soon" },
    { icon: "💖", name: "Everyone's Favorite" },
    { icon: "🎁", name: "Best Giftables" },
    { icon: "☝️", name: "Top 10 Brands" },
    { icon: "👉", name: "Top 10 Perfumes" },
  ];

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
      name: "Louis Vuitton's Afternoon Swim",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490",
    },
    {
      id: 3,
      name: "Louis Vuitton's Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
    },
    {
      id: 4,
      name: "Louis vuitton's Pacific Chill",
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

      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-6 md:py-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <h1>Seasonal fragrances</h1>
        <div className="flex items-center gap-2">
          <Sun className=" text-white !p-2 bg-yellow-500 rounded-full w-8 h-8" />
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Summer Fragrances
          </h1>
        </div>

        {/* Filter Buttons - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto"></div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-10">
          {products.map((product, index) => {
            const state = getState(product.id);
            return (
              <div key={product.id} className="flex flex-col gap-3 p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
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
                    <span className="flex items-center text-[12px] gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />5
                    </span>
                  </p>
                  <Button
                    className={
                      "font-semibold tracking-wider text-xs rounded-none"
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
          <Button className="border bg-transparent text-black border-gray-700 hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm ">
            View seasonal fragrances
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalFragrances;
