"use client";

import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return null;
};

export default ScrollUp;
