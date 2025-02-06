/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BVbATeua.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex h-screen w-full flex-col m-auto text-center justify-center items-center font-5xl"> <h1 class="font-anton text-5xl font-bold">404</h1> <h2 class="font-anton text-2xl font-bold">PAGE NOT FOUND</h2> <a class="underline hover:text-blue-400 hover:decoration-blue-500 decoration-black decoration-1" href="/">Return home</a> </section>`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/404.astro", undefined);

const $$file = "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/404.astro";
const $$url = "/path/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
