import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderScript, k as renderHead, l as renderSlot } from './astro/server_BVbATeua.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$NavbarLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavbarLink;
  const { route, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex
            items-center
            font-thin
            h-full
            hover:bg-zinc-200
            cursor-pointer
            p-2
            text-sky-500"${addAttribute(`${route}`, "href")}>${name}</a>`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/NavbarLink.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="flex fixed w-full items-center bg-zinc-100 shadow-lg"> <div class="ml-8 font-thin text-2xl"> <span class="font-anton text-sky-500">KAN</span><span id="jisho" class="font-anton text-black">JISHO</span> </div> <ul class="flex font-anton h-12 pl-8 items-center"> ${renderComponent($$result, "NavbarLink", $$NavbarLink, { "route": "/", "name": "Home" })} </ul> </nav>`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/Navbar.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/src/layouts/styles.css"><link rel="icon" type="image/svg+xml" href="/icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderScript($$result, "C:/Users/Brian/Documents/Programming/Kanjisho/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class=""> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
