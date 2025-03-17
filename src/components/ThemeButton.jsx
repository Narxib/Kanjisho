import { useEffect, useState } from "react";
import { applyTheme } from "../utils/theme.js";
import { MoonIcon } from "../icons/moon.jsx";
import { SunIcon } from "../icons/sun";

export default function ThemeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      className="flex w-16 h-16 justify-center items-center rounded-bl-lg hover:bg-gray-400/20 "
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme == "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
