"use client";
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Bell, FlameIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewArrivals = () => {

    const [activeBtn, setActivate] = useState(0);
  
    const filterButtons = [
      "🌶️ Coming Soon",
      "💖 Everyones's Favorite",
      "🎁 Best Giftables",
      "☝️ Top 10 Brands",
      "👉 Top 10 Perfumes",
    ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5 !px-10 !py-10">
      <h1 className="text-sm underline font-semibold flex items-center gap-2 ">
        New & Hot
      </h1>
      <ul className="flex items-center  gap-[2rem]">
        {filterButtons.map((item, index) => (
          <li
            key={index}
            onClick={() => setActivate(index)}
            className={`${
              activeBtn === index
                ? "text-white border bg-gray-950 border-gray-500 hover:bg-transparent"
                : "bg-gray-200 text-black "
            } poppins  tracking-wider cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-300 w-40 h-7 flex items-center justify-center rounded-3xl text-[10px]`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* slected filter */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-[5rem]">
        <div className="flex flex-col gap-3 !p-4 w-50 h-50">
          <img
            src="https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Fcollections%2Fniswah-1.jpg&w=2048&q=75"
            className="w-50 h-60"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-[12px] font-semibold">
              Ahmed Al Maqribi Nisswah
            </h1>
            <p className="text-[8px]  font-semibold">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                Dr Ruqayya Abba Tofa
              </span>
            </p>
            <Button
              className={
                "text-[12px] !mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold "
              }
            >
              <Bell className="!w-3 !h-3" />
              Remind Me
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 !p-4 w-50 h-50">
          <img
            src="https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490"
            className="w-50 h-60"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-[12px] font-semibold">
              Louis Vuitton's Afternoon Swim
            </h1>
            <p className="text-[8px] font-semibold">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                Louis Vuitton
              </span>
            </p>
            <Button
              className={
                "text-[12px] !mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold "
              }
            >
              <Bell className="!w-3 !h-3" />
              Remind Me
            </Button>
          </div>
        </div>
        <div className="flex flex-col !p-4 gap-3 w-50 h-50">
          <img
            src="https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490"
            className="w-50 h-60"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-[12px] font-semibold">
              Louis Vuitton's Sun Song
            </h1>
            <p className="text-[8px] font-semibold">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                Louis Vuitton
              </span>
            </p>
            <Button
              className={
                "text-[12px] !mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold "
              }
            >
              <Bell className="!w-3 !h-3" />
              Remind Me
            </Button>
          </div>
        </div>
        <div className="flex flex-col !p-4 gap-3 w-50 h-50">
          <img
            src="https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090"
            className="w-full"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-[12px] font-semibold">
              Louis vuitton's Pacific Chill
            </h1>
            <p className="text-[8px] font-semibold">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                Fragrance World
              </span>
            </p>
            <Button
              className={
                "text-[12px] !mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold "
              }
            >
              <Bell className="!w-3 !h-3" />
              Remind Me
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 !p-4 w-50 h-50">
          <img
            src="https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533"
            className="w-50 h-60"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-[12px] font-semibold font-">Odyssey Toffee Coffee</h1>
            <p className="text-[8px] font-semibold">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                Armaf
              </span>
            </p>
            <Button
              className={
                "text-[12px] !mt-2 bg-gray-100 text-black hover:bg-gray-200 cursor-pointer rounded-sm font-semibold "
              }
            >
              <Bell className="!w-3 !h-3" />
              Remind Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
