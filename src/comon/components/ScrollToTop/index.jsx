import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Toggle button visibility when scrolling more than 300px
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </button>
      )}
    </div>
  );
}
