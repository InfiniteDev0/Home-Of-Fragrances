"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchDropdown from "@/components/shared/SearchDropdown";
import ScrollingAnimations from "../animations/ScrollingAnimations";
import "../../app/lib/nprogress"
import dynamic from "next/dynamic";
import ProgressBar from "../shared/ProgressBar";
const ChatAssistantAi = dynamic(() => import("../modals/ChatAssitanntAi"), {
  ssr: false,
});

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();

  const hiddenRoutes = ["/homepage/reviews-and-blog", "/login"];
  const shouldHideLayout = hiddenRoutes.some((route) =>
    pathname?.includes(route)
  );

  const chatRoutes = ["/", "/shop", "/profile", "/myhof"];
  const shouldShowChat = chatRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <>
    <ProgressBar/>
      {!shouldHideLayout && <Navbar />}
      <ScrollingAnimations />

      <AnimatePresence>
        {shouldShowChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <ChatAssistantAi />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
      <SearchDropdown />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default ClientWrapper;
