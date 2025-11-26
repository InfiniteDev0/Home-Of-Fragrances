import { ArrowUp} from "lucide-react";
import React from "react";

const ScrollingAnimations = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollTop}
      className="bg-black text-white flex items-center justify-center w-15 h-15 rounded-full fixed left-3 bottom-3 z-[9999] shadow-lg hover:bg-gray-900 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollingAnimations;
