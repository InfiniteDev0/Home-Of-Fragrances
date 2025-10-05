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
  const [isClient, setIsClient] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(true);
  const { defaultCountryCode, updateUserLocation, userLocation } = useShop();
  const { selectedCountry, updateCountry } = useCountry();
  const { user, loading, initialized, isAuthenticated } = useAuth();
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      console.log("Navbar - User state:", {
        user,
        isAuthenticated: isAuthenticated(),
      });
    }
  }, [user, initialized, isAuthenticated]);

  const handleCountryChange = (country) => {
    updateUserLocation(country);
    updateCountry({
      code: country.countryCode || country.code,
      name: country.name,
    });

    toast.success("Location Updated", {
      description: `Prices will now be shown for ${country.name} (${
        country.currencies?.[0] || "AED"
      })`,
      duration: 3000,
    });
  };

  const navlinks = [
    { link: "National Day Offers", to: "/national-day" },
    { link: "New Arrivals", to: "/new" },
    { link: "Men's Fragrances", to: "/men" },
    { link: "Women's Fragrances", to: "/women" },
    { link: "Brands", to: "/brands" },
    { link: "Collections", to: "/collections" },
    { link: "Sale", to: "/sale" },
    { link: "About Us", to: "/about" },
    { link: "Contact", to: "/contact" },
  ];

  const getUserAvatarElement = () => {
    if (!user) {
      return <User2 className="w-4 h-4 font-light" />;
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
        // Scrolling up
        setShowNavMenu(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNavMenu(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient || !initialized) {
    return (
      <div className="fixed w-full z-50">
        <div className="hidden md:flex flex-col bg-black text-white gap-5 px-4 py-5">
          <div className="md:grid grid-cols-3 items-center justify-between">
            <div></div>
            <Link href="/" className="flex items-center justify-center">
              <Image className="w-30" src={FA_logo} alt="Brand_logo" />
            </Link>
            <div className="flex items-center justify-end gap-5 !pr-5">
              <div className="w-4 h-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col text-white fixed z-50 w-full">
        <div className="md:grid grid-cols-3 px-4 py-5 bg-black items-center justify-between z-30">
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
            <Image className="w-30" src={FA_logo} alt="Brand_logo" />
          </Link>
          {/* Right Side: Search, Bag, Profile */}
          <div className="flex items-center justify-end gap-5 !pr-5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-red-500 hover:bg-transparent cursor-pointer group transition-colors"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1 font-light text-xs">Search</span>
            </Button>
            <Link href="/bag" className="flex items-center">
              <ShoppingBag className="w-4 h-4 font-light" />
            </Link>
            <Link
              href={user ? "/profile" : "/auth"}
              className="flex items-center gap-2"
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
        <motion.div
          className="flex items-center justify-center bg-black/80 !p-2 backdrop-blur-3xl"
          initial={false}
          animate={showNavMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          style={{
            position: "relative",
            zIndex: 40,
            willChange: "opacity, transform",
            pointerEvents: showNavMenu ? "auto" : "none",
          }}
        >
          <FragranceNavigationMenu />
        </motion.div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-black/30 backdrop-blur-2xl text-white fixed z-50 !py- w-full">
        <div className="grid grid-cols-3 items-center justify-between">
          <div className="flex items-center justify-start">
            <CountryDropdown
              placeholder="Select country"
              defaultValue={selectedCountry?.code || defaultCountryCode}
              onChange={handleCountryChange}
              slim
            />
          </div>
          <Link href="/" className="flex items-center justify-center">
            <Image className="w-30" src={FA_logo} alt="Brand_logo" />
          </Link>
          <div className="flex items-center justify-end gap-5 !pr-5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-red-500 hover:bg-transparent cursor-pointer group transition-colors"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1 font-light text-xs">Search</span>
            </Button>
            <Link href="/bag" className="flex items-center">
              <ShoppingBag className="w-4 h-4 font-light" />
            </Link>
            <Link
              href={user ? "/profile" : "/auth"}
              className="flex items-center gap-2"
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