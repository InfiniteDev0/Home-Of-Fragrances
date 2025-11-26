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
  Heart,
} from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FA_logo, FA_logo_dark } from "../../../public/assets/images/images";
import { Button } from "@/components/ui/button";
const SearchDropdown = dynamic(
  () => import("@/components/shared/SearchDropdown"),
  {
    ssr: false, // only render on client
    loading: () => <p className="p-2 text-sm">Loading search...</p>, // optional placeholder
  }
);

import { useAuth } from "../../app/context/AuthContext";
import Link from "next/link";
import dynamic from "next/dynamic";

const SideMenu = dynamic(() => import("./SideMenu"), {
  ssr: false, // important: ensures it’s only loaded client-side
});

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShopContext } from "@/app/context/ShopContext";
import { giftCategories } from "@/data/constants";

const Navbar = () => {
  // Helper: get user avatar element
  const getUserAvatarElement = () => {
    if (!isClient || !user) return <User2 className="w-5 h-5 font-light" />;
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
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSearchOpen = searchParams.has("search");
  const { cartItems, wishlistItems } = useContext(ShopContext);

  useEffect(() => setIsClient(true), []);

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

  const openSearch = () => {
    // Adds ?search to current URL (preserving pathname)
    const currentPath = window.location.pathname;
    router.push(`${currentPath}?search`);
  };

  // Add this helper
  const hideMobileTopNav = pathname.startsWith("/shop");

  return (
    <div>
      {/* Desktop Navbar: keep very high z so the toggle stays above SideMenu */}
      <div
        className={`hidden md:flex flex-col fixed z-[300] w-full transition-all duration-500 text-black bg-white border-b border-gray-200`}
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
          <Link
            href="/eng-e1/homepage"
            className="flex items-center justify-center"
          >
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
              onClick={openSearch}
              className="hover:text-gray-500 hover:bg-transparent cursor-pointer group transition-colors p-2 h-8"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1  text-xs font-semibold tracking-wider">
                Search
              </span>
            </Button>
            <div className="flex items-center gap-1">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex items-center bg-transparent cursor-pointer text-black p-2">
                    <ShoppingBag className="w-4 h-4 font-light" />
                  </button>
                </SheetTrigger>
                <SheetContent className="z-[9999] fixed w-[400px] sm:w-[500px]">
                  {cartItems.length === 0 ? (
                    <SheetHeader className="flex flex-col">
                      <h2 className="text-xl font-bold tracking-wide">
                        Your Bag
                      </h2>
                      <hr />
                      <div className="mt-4 text-sm text-gray-700 font-semibold">
                        Uh-oh. It’s empty!
                      </div>
                      <div className="font-semibold text-xs text-gray-600">
                        Don't know where to start? Here are the scents
                        everyone's after.
                      </div>
                      <div>
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source
                            src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/YTDown.com_YouTube_Cologne-Perfume-Collection-LOUIS-VUITTON_Media_5-q59O9pZo8_001_1080p.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="mt-4 flex">
                        <Link href="/shop/best-sellers" passHref>
                          <SheetClose asChild>
                            <Button className="bg-black text-white text-xs font-semibold px-4 py-2">
                              Shop holiday collection
                            </Button>
                          </SheetClose>
                        </Link>
                      </div>
                    </SheetHeader>
                  ) : (
                    <SheetHeader className="flex flex-col">
                      <h2 className="text-xl font-bold tracking-wide">
                        Your Bag
                      </h2>
                      <hr />
                      {/* Render cart items here */}
                    </SheetHeader>
                  )}

                  {/* Footer Actions */}
                  <SheetFooter className="px-4 py-4 flex gap-3">
                    {cartItems.length > 0 && (
                      <SheetClose asChild>
                        <Link href="/myhof/cart" passHref>
                          <Button className="flex-1 font-semibold tracking-wider text-xs">
                            Checkout
                          </Button>
                        </Link>
                      </SheetClose>
                    )}
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              {/* Wishlist Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex items-center bg-transparent cursor-pointer text-black p-2">
                    <Heart className="w-4 h-4 font-light" />
                  </button>
                </SheetTrigger>
                <SheetContent className="z-[9999] fixed w-[400px] sm:w-[500px]">
                  <SheetHeader>
                    <SheetTitle>Your Wishlist</SheetTitle>
                    <hr />
                    {wishlistItems.length === 0 ? (
                      <SheetDescription className={"pt-4"}>
                        <p className="font-semibold text-black text-xs">
                          These are the scents that are made to make you 🖤
                          smell better.
                        </p>
                        <p className="font-semibold text-black text-xs">
                          <SheetClose asChild>
                            <Link
                              href={"/login"}
                              onClick={() => {
                                setMode("register");
                              }}
                              className="hover:border-b mr-2 border-black uppercase"
                            >
                              Create an account
                            </Link>
                          </SheetClose>
                          or
                          <SheetClose asChild>
                            <Link
                              href={"/login"}
                              onClick={() => {
                                setMode("login");
                              }}
                              className="hover:border-b mx-2 border-black uppercase"
                            >
                              log in
                            </Link>
                          </SheetClose>{" "}
                          to sync it across all your devices
                        </p>
                        <p>Make a gift</p>
                        <div className="grid grid-cols-2 ">
                          {giftCategories.slice( 0 , 4).map((gift, idx) => (
                            <Link
                              href={`${gift.link}`}
                              key={idx}
                              className="flex flex-col gap-3 p-2 group"
                            >
                              {/* Image Container */}
                              <div
                                className="relative w-full dark:bg-white aspect-square
                                         overflow-hidden"
                              >
                                <img
                                  src={gift.img}
                                  alt={gift.name}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>

                              {/* gift Info */}
                              <div className="flex flex-col gap-2">
                                <h1
                                  className="text-xs sm:text-sm transition-all
                                             group-hover:underline  font-semibold line-clamp-2 leading-tight"
                                >
                                  {gift.name}
                                </h1>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </SheetDescription>
                    ) : (
                      <SheetDescription className={"pt-4"}></SheetDescription>
                    )}
                  </SheetHeader>

                  {/* Wishlist Items ... */}

                  <SheetFooter className="px-4 py-4 flex gap-3">
                    {wishlistItems.length > 0 && (
                      <SheetClose asChild>
                        <Link href="/myhof/wishlist" passHref>
                          <Button
                            type="submit"
                            className="flex-1 font-semibold tracking-wider text-xs"
                          >
                            Go to Wishlist Page
                          </Button>
                        </Link>
                      </SheetClose>
                    )}
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              {isClient && user ? (
                <Link
                  href="/myhof"
                  title={`Go to ${user.displayName}'s profile`}
                  className="flex items-center gap-2 p-2"
                >
                  {getUserAvatarElement()}
                </Link>
              ) : isClient ? (
                <Link
                  href="/login"
                  title="Sign in to your account"
                  className="flex items-center gap-2 p-2"
                >
                  {getUserAvatarElement()}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop SideMenu only (never on mobile) */}
      {menuOpen && (
        <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      )}

      {/* Mobile Navbar: no SideMenu for mobile */}
      {!hideMobileTopNav && (
        <div className="md:hidden bg-black/80 backdrop-blur-3xl text-white fixed z-[300] !py-3 w-full h-16">
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
              // onClick={() => setIsSearchOpen(true)}
              className="hover:text-gray-500 hover:bg-transparent cursor-pointer group transition-colors p-2 h-8"
            >
              <SearchIcon className="w-4 h-4 group-hover:w-5" />
              <span className="ml-1  text-xs font-semibold tracking-wider">
                Search
              </span>
            </Button>
          </div>
        </div>
      )}

      {/* Search Dropdown */}
      <SearchDropdown />
      {/* // isOpen={isSearchOpen}
        // onClose={() => setIsSearchOpen(false)}/> */}

      {/* Mobile Navbar: always show at bottom */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        exit={false}
        className="fixed outfit z-[50] text-white bg-black flex items-center justify-between !px-5 -bottom-2 left-0 w-full h-[13vh] md:hidden"
      >
        <Link
          href={"/"}
          className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                    className="w-[10px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/shop"}
          className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                  <Sparkle className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <Link
          href={"/eng-e1/homepage/new"}
          className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                  <Flame className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        {isClient && user ? (
          <Link
            href={"/myhof"}
            className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                    <UserRound className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        ) : isClient ? (
          <Link
            href={"/login"}
            className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                    <UserRound className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        ) : null}
        <Link
          href={"/cart"}
          className="flex flex-col items-center gap-1 leading-4 text-[14px] font-semibold tracking-widest relative"
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
                  <Handbag className="w-4 h-4" />
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
