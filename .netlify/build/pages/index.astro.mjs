/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, j as renderScript } from '../chunks/astro/server_BVbATeua.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cp2Jtgys.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

// src/theme.ts
function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

function ThemeButton() {
  let theme;
  function toggleTheme() {
    theme = localStorage.getItem("theme") || "light";
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  }
  return /* @__PURE__ */ jsx("button", { class: "absolute top-0 right-0 bg-black", onClick: () => toggleTheme(), "aria-label": "Toggle theme", children: /* @__PURE__ */ jsx("span", { children: theme === "dark" ? "🌞" : "🌙" }) });
}

const SvgComponent = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "transparent",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "none", stroke: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ jsx("path", { d: "M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" })
    ]
  }
);

const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex h-dvh flex-col justify-center align-middle items-center"> <h1 class="font-anton text-5xl text-sky-500">
KAN<span id="jisho" class="text-black font-anton">JISHO</span> </h1> <div class="flex bg-zinc-100 border-gray-300 mt-4 rounded-xl lg:w-1/3 w-90%"> <form id="search-form" class="flex w-full"> <input class="bg-zinc-100 ml-4 text-[20px] w-full focus-visible:outline-none" type="text" placeholder="Search..." name="kanji" maxlength="1" required> <button type="submit" class="flex box-border items-center rounded-xl h-full p-4 ml-2 hover:bg-zinc-400"><i>${renderComponent($$result, "Search", SvgComponent, {})}</i></button> </form> </div> </div> ${renderScript($$result, "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/SearchBar.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kanjisho - Japanese dictionary" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeButton", ThemeButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/ThemeButton.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "SearchBar", $$SearchBar, {})} ` })}`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/index.astro", undefined);

const $$file = "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/index.astro";
const $$url = "/path";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
