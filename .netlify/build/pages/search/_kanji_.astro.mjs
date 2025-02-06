/* empty css                                    */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../../chunks/astro/server_BVbATeua.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_Cp2Jtgys.mjs';
import { $ as $$KanjiDisplay } from '../../chunks/KanjiDisplay_C5UmB6sO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$kanji = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$kanji;
  const term = Astro2.params.kanji;
  const fetchKanji = async (term2) => {
    return await fetch(
      `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${term2}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "cd76a844dfmshd6ff1d53a7f74d5p1e6f2bjsnc4911c9e0550",
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
        }
      }
    ).then((data) => data.json());
  };
  const fetchedData = await fetchKanji(term);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Results for ${term}` }, { "default": ($$result2) => renderTemplate`${renderTemplate`${renderComponent($$result2, "KanjiDisplay", $$KanjiDisplay, { "fetchedData": fetchedData })}`}` })}`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/search/[kanji].astro", undefined);

const $$file = "C:/Users/Brian/Documents/Programming/Kanjisho/src/pages/search/[kanji].astro";
const $$url = "/path/search/[kanji]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$kanji,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
