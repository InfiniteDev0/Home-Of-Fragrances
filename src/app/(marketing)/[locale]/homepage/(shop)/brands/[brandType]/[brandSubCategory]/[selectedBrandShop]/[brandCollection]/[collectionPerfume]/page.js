"use client";
import React, { useRef } from "react";

const CollectionPerfumepage = () => {
  const moreInfoRef = useRef(null);

  const handleScrollToMoreInfo = () => {
    moreInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      {/* product intro */}
      <div className="grid grid-cols-2 min-h-screen">
        {/* product data images and videos */}
        <div>
          <img
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-myriad--LP0350_PM2_Front%20view.png?wid=1090&hei=1090"
            alt=""
            className="mt-18 w-full"
          />
          <img
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-myriad--LP0350_PM1_Cropped%20view.png?wid=1090&hei=1090"
            alt=""
            className="w-full"
          />
          <img
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-myriad--LP0350_PM1_Cropped%20worn%20view.png?wid=1090&hei=1090"
            alt=""
            className="w-full"
          />
          <img
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-myriad--LP0350_PM1_Ambiance%20view.png?wid=1090&hei=1090"
            alt=""
            className="w-full"
          />
        </div>
        <div className="bg-gray-100 h-screen sticky top-0 flex items-center justify-center">
          <div className="space-y-4 max-w-md">
            <h1 className="text-3xl font-bold">Myriad</h1>
            <p className="text-gray-600">Personnalizable & refillable</p>
            <button
              onClick={handleScrollToMoreInfo}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition w-full"
            >
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* product more info */}
      <div
        ref={moreInfoRef}
        className="min-h-screen bg-white shadow rounded p-8"
      >
        {/* Add your product more info content here */}
        <h2 className="text-2xl font-bold mb-4">Product More Info</h2>
        <p>Details about the perfume, notes, reviews, etc.</p>
      </div>
    </div>
  );
};

export default CollectionPerfumepage;
