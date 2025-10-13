"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Shoppage = () => {
    const [searchQuery, setSearchQuery] = useState("");
      const [searchResults, setSearchResults] = useState([]);
      const [selectedNotes, setSelectedNotes] = useState([]);
      const [selectedBrand, setSelectedBrand] = useState("");
      const [selectedYear, setSelectedYear] = useState([1990, 2025]);
      const inputRef = useRef(null);
  return (
    <div>
      {/* desktop shop version */}
      <div className="hidden md:flex"></div>
      <div
        className="flex md:hidden w-full h-screen bg-cover bg-center filter-blur-xl"
        style={{
          backgroundImage:
            "url('https://www.beautybase.com/images/afnan-turathi-electric-eau-de-parfum-90ml-spray-p83863-38241_image.jpg')",
        }}
      >
        {/* ...add any mobile shop content here... */}
        <div className="!p-6 w-full h-full text-white flex flex-col justify-between gap-[5rem]">
          <div className="flex justify-end w-full">
            <Settings className="text-gray-800 " />
          </div>
          <div className="!px-4  !py-4 flex flex-col items-center gap-6">
            {/* navlinks */}
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                All perfumes
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold flex items-cernter gap-2 tracking-wide hover:underline w-fit">
                New & Featured{" "}
                <svg
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  title="New &amp; Featured"
                  width="12"
                  height="17"
                  color="currentColor"
                  strokeWidth="0.9375"
                >
                  <title>New &amp; Featured</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z"
                    fill="#FE9000"
                  ></path>
                </svg>
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                Women
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                Men
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                Brands
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                Collection
              </p>
            </Link>
            <Link href={"/"}>
              <p className="font-semibold tracking-wider hover:underline w-fit">
                Gifts and Personalisation
              </p>
            </Link>
          </div>
          <form className="flex mb-20 items-center gap-4">
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Product"
              className="outline-none h-[6vh] text-lg placeholder:text-[14px] px-6 py-4  bg-neutral-950 border border-gray-400 rounded-md  !shadow-none"
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
      </div>
    </div>
  );
};

export default Shoppage;
