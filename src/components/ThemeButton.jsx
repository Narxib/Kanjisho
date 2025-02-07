import moon from "../icons/moon.jsx"
import sun from "../icons/sun.jsx"
import { applyTheme } from "../utils/theme.js"

export default function ThemeButton() {
    let theme
    function toggleTheme() {
        theme=localStorage.getItem("theme") || "light";
        theme = theme === "dark" ? "light" : "dark";
        applyTheme(theme);
    }

    return (
        <button class="flex absolute w-6 h-6 top-12 p-8 justify-center items-center hover:bg-black/20 right-12 rounded-full" onClick={()=>toggleTheme()} aria-label="Toggle theme">
            <span>{theme === "dark" ? "🌞" : "🌙"}</span>
        </button>
    )
}
