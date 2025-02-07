// src/theme.ts
export function applyTheme(theme) {
   const nav = document.getElementById("navbar")
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      nav.classList.add("dark")
      localStorage.setItem("theme", "dark");
    } else {
      nav.classList.remove("dark")
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  
  export function initTheme() {
    const storedTheme = localStorage.getItem("theme") || "light";
    applyTheme(storedTheme);
  }
  