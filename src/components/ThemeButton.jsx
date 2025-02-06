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
        <button class="absolute top-0 right-0 bg-black" onClick={()=>toggleTheme()} aria-label="Toggle theme">
            <span>{theme === "dark" ? "🌞" : "🌙"}</span>
        </button>
    )
}
