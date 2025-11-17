"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchDropdown from "@/components/shared/SearchDropdown";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const hideNavbar = pathname?.includes("/homepage/reviews-and-blog");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <SearchDropdown />
      <Footer />
    </>
  );
};

export default ClientWrapper;
