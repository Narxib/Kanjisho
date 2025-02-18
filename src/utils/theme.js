// src/theme.ts
export function applyTheme(theme) {
  const nav = document.getElementById("navbar")
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    nav.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark");
  } else {
    nav.setAttribute("data-theme", "light")
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light");
  }
}

export function initTheme() {
  const storedTheme = localStorage.getItem("theme") || "light";
  applyTheme(storedTheme);
}

