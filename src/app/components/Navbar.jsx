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
  Home,
  Newspaper,
  Dot,
  Flame,
  UserRound,
  Handbag,
  Sparkle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FA_logo, FA_logo_dark } from "../assets/images/images";
import { Button } from "@/components/ui/button";
import SearchDropdown from "@/components/SearchDropdown";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // Helper: get user avatar element
  const getUserAvatarElement = () => {
    if (!user) return <User2 className="w-5 h-5 font-light" />;
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

  // Helper: get user display name
  const getUserDisplayName = () => {
    if (!user) return "Sign In";
    return user.displayName || user.email?.split("@")[0] || "Profile";
  };
  // Local state for menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const pathname = usePathname();

  // framer-motion variants for the two bars
  const topBarVariants = {
    closed: { rotate: 0, y: -5, scaleX: 1 },
    open: { rotate: 45, y: 0, scaleX: 1 },
  };
  const bottomBarVariants = {
    closed: { rotate: 0, y: 5, scaleX: 1 },
    open: { rotate: -45, y: 0, scaleX: 1 },
  };
  const barTransition = { duration: 0.22, ease: "easeInOut" };

  // Helper to map pathname to active key
  const getActiveKey = () => {
    if (pathname === "/" || pathname.startsWith("/home")) return "Home";
    if (pathname.startsWith("/shop")) return "Shop";
    if (pathname.startsWith("/new")) return "New";
    if (pathname.startsWith("/profile")) return "Profile";
    if (pathname.startsWith("/cart") || pathname.startsWith("/bag"))
      return "Cart";
    return "";
  };
  const activeKey = getActiveKey();

  return (
    <div>
      {/* Desktop Navbar: keep very high z so the toggle stays above SideMenu */}
      <div
        className={`hidden md:flex flex-col fixed z-[300] w-full transition-all duration-500 text-black bg-white border-b border-gray-400`}
      >
        <div className="md:grid grid-cols-3 px-4 py-3 items-center justify-between z-30 h-18">
          {/* menu bar (uses the same structure as your snippet) */}
          <div className="flex items-center gap-4 justify-start">
            <button
              id="desktop-menu-toggler"
              aria-label="Navigation Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lv-mega-menu__burger lv-button lv-header-icon-burger flex items-center gap-2 cursor-pointer select-none"
            >
              <span className="lv-header-icon-burger__bars">
                <span className="relative w-5 h-4 flex items-center justify-center">
                  <motion.span
                    className="absolute left-0 right-0 h-[1.5px] rounded-full bg-black"
                    variants={topBarVariants}
                    initial="closed"
                    animate={menuOpen ? "open" : "closed"}
                    transition={barTransition}
                    style={{ transformOrigin: "50% 50%" }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 h-[1.5px] rounded-full bg-black"
                    variants={bottomBarVariants}
                    initial="closed"
                    animate={menuOpen ? "open" : "closed"}
                    transition={barTransition}
                    style={{ transformOrigin: "50% 50%" }}
                  />
                </span>
              </span>
              <span
                aria-hidden="true"
                className="lv-header-icon-burger__desktop-label lv-medium-only ml-2"
              >
                <span className="block text-xs font-semibold tracking-wider">
                  {menuOpen ? "Close" : "Menu"}
                </span>
              </span>
            </button>
          </div>
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-6"
              width={24}
              height={24}
              src={FA_logo_dark}
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
              className="hover:text-gray-500 hover:bg-transparent cursor-pointer group transition-colors p-2 h-8"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1  text-xs font-semibold tracking-wider">
                Search
              </span>
            </Button>
            <div className="flex items-center ">
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
        </div>
      </div>

      {/* Desktop SideMenu only (never on mobile) */}
      {menuOpen && (
        <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      )}

      {/* Mobile Navbar: no SideMenu for mobile */}
      <div className="md:hidden bg-black/90 backdrop-blur-2xl text-white fixed z-[300] !py-3 w-full h-16">
        <div className="flex items-center justify-between w-full h-full px-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-6"
              width={100}
              height={100}
              src={FA_logo}
              alt="Brand_logo"
              priority
            />
          </Link>
          {/* mobile search */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-gray-500 hover:bg-transparent cursor-pointer group transition-colors p-2 h-8"
          >
            <SearchIcon className="w-4 h-4 group-hover:w-5" />
            <span className="ml-1  text-xs font-semibold tracking-wider">
              Search
            </span>
          </Button>
        </div>
      </div>

      {/* Search Dropdown */}
      <SearchDropdown
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Navbar: always show at bottom */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        exit={false}
        className="fixed outfit z-[50] text-white bg-black flex items-center justify-between !px-5 -bottom-2 left-0 w-full h-[10vh] md:hidden"
      >
        <Link
          href={"/"}
          className="flex flex-col items-center gap-1 leading-4 text-[13px] font-semibold tracking-widest relative"
        >
          Home
          <div className="relative w-full h-5 flex justify-center items-start">
            <AnimatePresence mode="wait">
              {activeKey === "Home" && (
                <motion.div
                  key="home-icon"
                  initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <Image
                    width={100}
                    height={100}
                    src={FA_logo}
                    alt="Brand_logo"
                    priority
                    className="w-2"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/shop"}
          className="flex flex-col items-center gap-1 leading-4 text-[13px] font-semibold tracking-widest relative"
        >
          Shop
          <div className="relative w-full h-5 flex justify-center items-start">
            <AnimatePresence mode="wait">
              {activeKey === "Shop" && (
                <motion.div
                  key="shop-icon"
                  initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <Sparkle className="w-3 h-3" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/new"}
          className="flex flex-col items-center gap-1 leading-4 text-[13px] font-semibold tracking-widest relative"
        >
          New
          <div className="relative w-full h-5 flex justify-center items-start">
            <AnimatePresence mode="wait">
              {activeKey === "New" && (
                <motion.div
                  key="new-icon"
                  initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <Flame className="w-3 h-3" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/profile"}
          className="flex flex-col items-center gap-1 leading-4 text-[13px] font-semibold tracking-widest relative"
        >
          Profile
          <div className="relative w-full h-5 flex justify-center items-start">
            <AnimatePresence mode="wait">
              {activeKey === "Profile" && (
                <motion.div
                  key="profile-icon"
                  initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <UserRound className="w-3 h-3" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/cart"}
          className="flex flex-col items-center gap-1 leading-4 text-[13px] font-semibold tracking-widest relative"
        >
          Cart
          <div className="relative w-full h-5 flex justify-center items-start">
            <AnimatePresence mode="wait">
              {activeKey === "Cart" && (
                <motion.div
                  key="cart-icon"
                  initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10, rotate: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <Handbag className="w-3 h-3" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
