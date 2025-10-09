"use client";
import {
  ChevronLeft,
  ChevronRight,
  SearchIcon,
  ShoppingBag,
  User2,
  UserRoundCheck,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CountryDropdown } from "@/components/CountryDropdown";
import { toast } from "sonner";
import { useShop } from "@/app/context/ShopContext";
import { useCountry } from "../../context/CountryContext";
import Image from "next/image";
import { FA_logo } from "../assets/images/images";
import { Button } from "@/components/ui/button";
import SearchDropdown from "@/components/SearchDropdown";
import FragranceNavigationMenu from "@/components/FragranceNavigationMenu";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(true);
  const { defaultCountryCode, updateUserLocation, userLocation } = useShop();
  const { selectedCountry, updateCountry } = useCountry();
  const { user, loading, initialized, isAuthenticated } = useAuth();
  const lastScrollY = useRef(0);

  useEffect(() => {
    console.log("Navbar - User state:", {
      user,
      isAuthenticated: isAuthenticated(),
    });
  }, [user, isAuthenticated]);

  const handleCountryChange = (country) => {
    updateUserLocation(country);
    updateCountry({
      code: country.countryCode || country.code,
      name: country.name,
    });

    toast.success(
      `Location Updated to ${country.name} (${
        country.currencies?.[0] || "AED"
      })`,
      {
        duration: 3000,
      }
    );
  };

  const getUserAvatarElement = () => {
    if (!user) {
      return <User2 className="w-5 h-5 font-light" />;
    }
    if (user.photoURL) {
      return (
        <Image
          src={user.photoURL}
          alt="User avatar"
          width={24}
          height={24}
          className="rounded-full border border-green-600 object-cover"
        />
      );
    }
    return <UserRoundCheck className="w-5 h-5 font-light" />;
  };

  const getUserDisplayName = () => {
    if (!user) return "Sign In";
    return user.displayName || user.email?.split("@")[0] || "Profile";
  };

  // Scroll-Up Only Nav Reveal
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setShowNavMenu(true);
      } else if (currentScrollY.current > lastScrollY.current) {
        setShowNavMenu(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col text-white fixed z-50 w-full">
        <div className="md:grid grid-cols-3 px-4 py-3 bg-black items-center justify-between z-30 h-16">
          {/* Country Selector */}
          <div className="flex items-center justify-start">
            <CountryDropdown
              placeholder="Select country"
              defaultValue={selectedCountry?.code || defaultCountryCode}
              onChange={handleCountryChange}
              slim
            />
          </div>
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-6"
              width={24}
              height={24}
              src={FA_logo}
              alt="Brand_logo"
              priority
            />
          </Link>
          {/* Right Side: Search, Bag, Profile */}
          <div className="flex items-center justify-end gap-5 !pr-5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-red-500 hover:bg-transparent cursor-pointer group transition-colors p-2 h-8"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1 font-light text-xs">Search</span>
            </Button>
            <Link href="/bag" className="flex items-center p-2">
              <ShoppingBag className="w-4 h-4 font-light" />
            </Link>
            <Link
              href={user ? "/profile" : "/auth"}
              className="flex items-center gap-2 p-2"
              title={
                user
                  ? `Go to ${getUserDisplayName()}'s profile`
                  : "Sign in to your account"
              }
            >
              {getUserAvatarElement()}
            </Link>
          </div>
        </div>
        {/* Nav Links - Using FragranceNavigationMenu */}
        <motion.div className="flex items-center justify-center bg-black/90 !p-2 backdrop-blur-3xl h-12">
          <FragranceNavigationMenu />
        </motion.div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-black/90 backdrop-blur-2xl text-white fixed z-50 !py-3 w-full h-16">
        <div className="grid grid-cols-3 items-center justify-between h-full">
          <div className="flex items-center justify-start">
            <CountryDropdown
              placeholder="Select country"
              defaultValue={selectedCountry?.code || defaultCountryCode}
              onChange={handleCountryChange}
              slim
            />
          </div>
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-6"
              width={24}
              height={24}
              src={FA_logo}
              alt="Brand_logo"
              priority
            />
          </Link>
          <div className="flex items-center justify-end gap-5 !pr-5">
            <Link href="/bag" className="flex items-center p-2">
              <ShoppingBag className="w-5 h-5 font-light" />
            </Link>
            <Link
              href={user ? "/profile" : "/auth"}
              className="flex items-center gap-2 p-2"
              title={
                user
                  ? `Go to ${getUserDisplayName()}'s profile`
                  : "Sign in to your account"
              }
            >
              {getUserAvatarElement()}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      <SearchDropdown
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default Navbar;
