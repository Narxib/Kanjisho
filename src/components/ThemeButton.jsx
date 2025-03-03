import { useEffect, useState } from "react";
import { applyTheme } from "../utils/theme.js";
import MoonIcon from "../icons/moon.jsx";
import SunIcon from "../icons/sun.jsx"; // Asegúrate de tener este icono

export default function ThemeButton() {
    const [theme, setTheme] = useState("")

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
            className="flex text-red-400 bg-white/20 w-6 h-6  p-8 justify-center items-center hover:bg-black/20 "
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
