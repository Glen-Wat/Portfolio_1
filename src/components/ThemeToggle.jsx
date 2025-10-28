import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    if (onToggle) onToggle(); // closes the menu when used inside mobile nav
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex items-center justify-center p-2 rounded-full transition-transform duration-300 cursor-pointer group"
      )}
    >
      {isDarkMode ? (
        <Sun
          className={cn(
            "h-6 w-6 text-yellow-300 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 group-hover:text-yellow-400"
          )}
        />
      ) : (
        <Moon
          className={cn(
            "h-6 w-6 text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 group-hover:text-blue-700"
          )}
        />
      )}

      {/* Optional subtle glow behind the icon */}
      <span
        className={cn(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300",
          isDarkMode ? "bg-yellow-300" : "bg-blue-600"
        )}
      />
    </button>
  );
};
