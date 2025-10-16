import React, { useContext, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useCountry } from "../../context/CountryContext";
import { toast } from "sonner";

const countryRegions = [
  {
    name: "Americas",
    countries: [
      { name: "United States", code: "US" },
      { name: "Canada", code: "CA" },
      // ...add more Americas countries
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "Austria", code: "AT" },
      { name: "Belgium", code: "BE" },
      { name: "Bulgaria", code: "BG" },
      { name: "Croatia", code: "HR" },
      { name: "Cyprus", code: "CY" },
      { name: "Czech Republic", code: "CZ" },
      { name: "Denmark", code: "DK" },
      { name: "Estonia", code: "EE" },
      { name: "Finland", code: "FI" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "Greece", code: "GR" },
      { name: "Guernsey", code: "GG" },
      { name: "Hungary", code: "HU" },
      { name: "Ireland", code: "IE" },
      { name: "Italy", code: "IT" },
      { name: "Jersey", code: "JE" },
      { name: "Latvia", code: "LV" },
      { name: "Lithuania", code: "LT" },
      { name: "Luxembourg", code: "LU" },
      { name: "Malta", code: "MT" },
      { name: "Netherlands", code: "NL" },
      { name: "Norway", code: "NO" },
      { name: "Poland", code: "PL" },
      { name: "Portugal", code: "PT" },
      { name: "Romania", code: "RO" },
      { name: "Slovakia", code: "SK" },
      { name: "Slovenia", code: "SI" },
      { name: "Sweden", code: "SE" },
      { name: "Switzerland", code: "CH" },
      { name: "United Kingdom", code: "GB" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "Bahrain", code: "BH" },
      { name: "Hong Kong", code: "HK" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Kuwait", code: "KW" },
      { name: "Laos", code: "LA" },
      { name: "Oman", code: "OM" },
      { name: "Philippines", code: "PH" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "Singapore", code: "SG" },
      { name: "Thailand", code: "TH" },
      { name: "United Arab Emirates", code: "AE" },
    ],
  },
  {
    name: "Oceania",
    countries: [
      { name: "Australia", code: "AU" },
      { name: "New Zealand", code: "NZ" },
      // ...add more Oceania countries
    ],
  },
  {
    name: "Africa",
    countries: [
      { name: "Kenya", code: "KE" },
      { name: "Tanzania", code: "TZ" },
      { name: "Uganda", code: "UG" },
      { name: "Egypt", code: "EG" },
      { name: "Nigeria", code: "NG" },
      // ...add more Africa countries
    ],
  },
  {
    name: "Other Countries / Regions",
    countries: [
      { name: "Kenya", code: "KE" },
      // ...add more Other countries
    ],
  },
];

export default function SideMenu({
  isOpen,
  onClose = () => {},
  allowCloseOnOverlay = false,
}) {
  const router = useRouter(); // Initialize useRouter
  const [loading, setLoading] = useState(false); // State for loader

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isOpen]);

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const panelVariants = { hidden: { x: "-100%" }, visible: { x: 0 } };
  const countryPanelVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const regionTransition = {
    duration: 0.4, // Slow and smooth transition
    ease: "easeInOut",
  };

  const { menuText, setMenuText, isMenuOpen, setIsMenuOpen } =
    useContext(ShopContext);

  const handleMenuBar = () => {
    const nextOpen = !isMenuOpen;
    setIsMenuOpen(nextOpen);
    setMenuText(nextOpen ? "Close" : "Menu");
  };

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

  const [showCountrySelect, setShowCountrySelect] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedRegion, setExpandedRegion] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const { updateCountry } = useCountry();

  const contentRefs = useRef(countryRegions.map(() => React.createRef()));

  const handleRegionToggle = (regionIndex) => {
    setExpandedRegion(expandedRegion === regionIndex ? null : regionIndex);
  };

  const getDropdownHeight = (index) => {
    const ref = contentRefs.current[index];
    return ref.current ? `${ref.current.scrollHeight}px` : "0px";
  };

  // When a country is selected, update context, show toast, and close country select
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    updateCountry(country);
    toast.success(`Location Updated to ${country.name}`);
    setShowCountrySelect(false);
  };

  const handleNavLinkClick = (path) => {
    setLoading(true); // Show loader
    onClose(); // Close the SideMenu
    setTimeout(() => {
      router.push(path); // Navigate to the selected path
      setLoading(false); // Hide loader after navigation
    }, 500); // Simulate a delay for better UX
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop is lower z than the navbar (so navbar controls remain clickable) */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.18 }}
            onClick={allowCloseOnOverlay ? onClose : undefined}
            aria-hidden="true"
          />

          {!showCountrySelect ? (
            <motion.aside
              className="fixed left-0 top-0 bottom-0 w-[86vw] max-w-[520px] bg-white text-black z-[210] shadow-2xl overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={panelVariants}
              transition={{ type: "tween", duration: 0.22 }}
              aria-modal="true"
              role="dialog"
            >
              <div className="flex flex-col gap-4">
                <div className="!px-4  !py-4 flex items-center z-30 h-18 border-b border-gray-400">
                  <div className="flex items-center  gap-4 justify-start">
                    <button
                      id="mobile-menu-toggler"
                      aria-label="Navigation Menu"
                      aria-expanded={isMenuOpen}
                      onClick={handleMenuBar}
                      className="lv-mega-menu__burger lv-button lv-header-icon-burger flex items-center gap-2 cursor-pointer select-none"
                    >
                      <span className="lv-header-icon-burger__bars">
                        <span className="relative w-4 h-4 flex items-center justify-center">
                          <motion.span
                            className="absolute left-0 right-0 h-[1.5px] rounded-full bg-black"
                            variants={topBarVariants}
                            initial="open"
                            animate={isMenuOpen ? "open" : "closed"}
                            transition={barTransition}
                            style={{ transformOrigin: "50% 50%" }}
                          />
                          <motion.span
                            className="absolute left-0 right-0 h-[1.5px] rounded-full bg-black"
                            variants={bottomBarVariants}
                            initial="open"
                            animate={isMenuOpen ? "open" : "closed"}
                            transition={barTransition}
                            style={{ transformOrigin: "50% 50%" }}
                          />
                        </span>
                      </span>

                      {/* Desktop label containing Menu and Close (visually matches snippet) */}
                      <span
                        aria-hidden="true"
                        className="lv-header-icon-burger__desktop-label lv-medium-only ml-2"
                      >
                        <span className="block text-xs">{menuText}</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="!px-4  !py-4 flex flex-col gap-4  border-b border-gray-400">
                  {/* navlinks */}
                  <Link
                    href={"/new"}
                    onClick={() => handleNavLinkClick("/new")}
                  >
                    <p className="font-semibold flex items-center gap-2 tracking-wide hover:underline w-fit">
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
                  <Link
                    href={"/women"}
                    onClick={() => handleNavLinkClick("/women")}
                  >
                    <p className="font-semibold tracking-wide hover:underline w-fit">
                      Women
                    </p>
                  </Link>
                  <Link
                    href={"/men"}
                    onClick={() => handleNavLinkClick("/men")}
                  >
                    <p className="font-semibold tracking-wide hover:underline w-fit">
                      Men
                    </p>
                  </Link>
                  <Link
                    href={"/brands"}
                    onClick={() => handleNavLinkClick("/brands")}
                  >
                    <p className="font-semibold tracking-wide hover:underline w-fit">
                      Brands
                    </p>
                  </Link>
                  <Link
                    href={"/collection"}
                    onClick={() => handleNavLinkClick("/collection")}
                  >
                    <p className="font-semibold tracking-wide hover:underline w-fit">
                      Collection
                    </p>
                  </Link>
                  <Link
                    href={"/Gifts"}
                    onClick={() => handleNavLinkClick("/shop")}
                  >
                    <p className="font-semibold tracking-wide hover:underline w-fit">
                      Gifts and Personalization
                    </p>
                  </Link>
                </div>
                <div className="!px-4  !pb-5 flex flex-col gap-4  border-b border-gray-400">
                  <p className="font-semibold text-sm flex items-center  w-fit underline">
                    Can we help you?
                  </p>
                  <p className="font-semibold flex text-xs items-center gap-2 tracking-wide hover:underline w-fit">
                    +971 800 884 8866
                  </p>
                </div>
                <div className="!px-4  !py-4 flex flex-col gap-2  border-b border-gray-400">
                  <p className=" font-semibold underline cursor-pointer text-sm flex items-center  w-fit">
                    Terms of Use
                  </p>
                  <p className=" font-semibold underline cursor-pointer text-sm flex items-center  w-fit">
                    Privacy Policy
                  </p>
                  <p className=" font-semibold underline cursor-pointer text-sm flex items-center  w-fit">
                    Notifications
                  </p>
                  <p className=" font-semibold underline cursor-pointer text-sm flex items-center  w-fit">
                    Contact
                  </p>
                  <p className="font-semibold flex items-center text-sm justify-between">
                    <span>Delivery country / region</span>
                    <span
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => setShowCountrySelect(true)}
                    >
                      {selectedCountry ? selectedCountry.name : "Choose"}
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </p>
                </div>
              </div>
            </motion.aside>
          ) : (
            <motion.aside
              className="fixed left-0 top-0 bottom-0 w-[86vw] max-w-[520px] bg-white text-black z-[210] shadow-2xl overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={countryPanelVariants}
              transition={{ type: "tween", duration: 0.22 }}
              aria-modal="true"
              role="dialog"
            >
              <div
                className={`py-25 px-6 flex flex-col gap-6 ${
                  isAnimating ? "overflow-hidden" : "overflow-y-auto"
                }`} // Disable scrolling during animation
              >
                <p className="font-semibold text-base mb-2">
                  CHOOSE YOUR COUNTRY/REGION
                </p>
                <div className="border-t border-gray-300">
                  {countryRegions.map((region, index) => {
                    const isExpanded = expandedRegion === index;
                    return (
                      <div key={region.name}>
                        <button
                          className="w-full flex items-center justify-between py-4 border-b border-gray-200 text-left font-semibold text-base"
                          onClick={() => handleRegionToggle(index)}
                        >
                          <span>{region.name}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                        <div
                          ref={contentRefs.current[index]}
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            height: isExpanded
                              ? getDropdownHeight(index)
                              : "0px",
                          }}
                        >
                          <div className="pl-2 pb-2">
                            {region.countries.map((country) => (
                              <button
                                key={country.code}
                                className="flex items-center justify-between w-full py-2 px-2 rounded hover:bg-gray-100 cursor-pointer transition"
                                onClick={() => handleCountrySelect(country)}
                              >
                                <span className="flex items-center gap-2">
                                  {country.name}
                                </span>
                                {selectedCountry &&
                                  selectedCountry.code === country.code && (
                                    <Check className="w-4 h-4" />
                                  )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {selectedCountry && (
                  <div className="mt-8">
                    <p className="text-base font-semibold">
                      {selectedCountry.name}
                    </p>
                    <p className="mt-2 text-gray-700">
                      Your location matters to us.
                    </p>
                    <p className="text-gray-700">
                      We use it to calculate product prices
                    </p>
                    <p className="text-gray-700">and shipment cost</p>
                  </div>
                )}
              </div>
            </motion.aside>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
