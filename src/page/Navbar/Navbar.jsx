import { useState, useEffect, useContext } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { ThemeContext } from "../../comon/ThemeProvider/ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-md w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 cursor-pointer" />
        <h1 className="text-lg font-semibold">JobLk</h1>
      </div>
      <button
        onClick={toggle}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {theme === "dark" ? (
          <Moon className="w-6 h-6 text-yellow-400" />
        ) : (
          <Sun className="w-6 h-6 text-blue-400" />
        )}
      </button>
    </div>
  );
}
