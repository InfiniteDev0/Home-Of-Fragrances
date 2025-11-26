"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Overview from "./client/Overview";
import UserProfile from "./client/UserProfile";
// Add Vouchers component import if available
const MyHofpage = () => {
  // All hooks must be at the top, before any early return
  const { user } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [checkedUser, setCheckedUser] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [profileData, setProfileData] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    country: "",
    city: "",
    gender: "",
    building: "",
    houseNumber: "",
    streetName: "",
  });
  // Profile fields matching your backend structure

  // Fetch user details from DB after login
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if (user) {
      setCheckedUser(true);
      setProfileData({
        displayName: user.displayName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        photoURL: user.photoURL || "",
        country: user.country || "",
        city: user.city || "",
        gender: user.gender || "",
        building: user.building || "",
        houseNumber: user.houseNumber || "",
        streetName: user.streetName || "",
      });
    } else if (isClient) {
      // Only set checkedUser if we've hydrated and user is still null
      setCheckedUser(true);
    }
  }, [user, router, isClient]);
  const navItems = [
    { key: "overview", label: "Overview" },
    { key: "account", label: "My account" },
    { key: "orders", label: "My orders" },
    { key: "wishlist", label: "My wishlist" },
    { key: "wallet", label: "My wallet" },
    { key: "shop", label: "My shop" },
    { key: "vouchers", label: "Vouchers" },
    { key: "notifications", label: "My notifications" },
  ];

  const SelectedSection = ({ sect }) => {
    if (sect === "Overview") {
      return <Overview profileData={profileData} />;
    }
  else if (sect === "My account"){
    return <UserProfile profileData={profileData} />;
  } return null;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 pt-22 pb-1 profileHeader ">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold mb-2">
            {profileData.displayName
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase() || "U"}
          </div>
          <h2 className="text-xl font-semibold uppercase tracking-wide">
            {profileData.displayName || "USER NAME"}
          </h2>
        </div>
      </div>
      <div
        className="flex items-center border-b pt-5 pb-3 justify-between w-full sticky top-[64px] px-6 bg-white z-50  transition-all duration-300"
        id="brandNav"
      >
        <ul className="flex gap-5 text-xs text-gray-600 font-semibold tracking-wider">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                activeSection === item.label ? "bg-black text-white" : ""
              } `}
              onClick={() => setActiveSection(item.label)}
            >
              {item.label}
            </button>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <Link
              href={"eng-e1/homepage/help#contact"}
              className="text-sm underline text-gray-500 font-semibold"
            >
              Call Us
            </Link>
            <span className="w-[1px] h-5 bg-gray-500"></span>
          </div>
          <Link
            className="flex items-center text-xs font-semibold gap-2 p-2 px-4 rounded-3xl border border-gray-300 w-fit cursor-pointer hover:bg-gray-100 transition-colors"
            href="/eng-e1/homepage/help?faq"
          >
            FAQ
          </Link>
        </div>
      </div>
      {/* selected section */}
      <div>
        <SelectedSection sect={activeSection} />
      </div>
    </div>
  );
};

export default MyHofpage;
