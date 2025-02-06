// src/theme.ts
export function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  
  export function initTheme() {
    const storedTheme = localStorage.getItem("theme") || "light";
    applyTheme(storedTheme);
  }
  