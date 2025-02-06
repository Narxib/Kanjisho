import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_BVbATeua.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$KanjiDisplay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KanjiDisplay;
  const { fetchedData } = Astro2.props;
  console.log(fetchedData);
  const { kanji, radical, references, examples } = fetchedData;
  return renderTemplate`${maybeRenderHead()}<section class="flex h-screen justify-center pt-[100px] lg:flex lg:items-top items-center text-center"> <div class="flex flex-col lg:flex-row lg:w-1/2 lg:h-1/2 mb-8 h-full w-11/12 content-center p-4 rounded-xl shadow-xl transition-all duration-300 bg-slate-50 items-top justify-normal lg:items-center items-start"> <!--Kanji --> <div class="flex flex-col w-full lg:w-1/4 justify-center items-center lg:ml-4 h-auto"> <img class="w-[140px] h-[140px]"${addAttribute(kanji.video.poster, "src")} alt="kanji"> <a${addAttribute(`/radicals/grade-${references.grade}`, "href")} class="rounded-lg font-sans font-bold text-green-950 bg-green-300 justify-center p-2">
Grade ${references.grade} </a> <div class="flex flex-col justify-center w-auto mt-4"> <h4 class="font-bold font-sans">Radicals</h4> <img class="w-auto h-[30px] justify-center"${addAttribute(radical.image, "src")} alt=""> <p class="font-sansjp font-bold"> ${radical.name.hiragana} </p> </div> </div> <!--Meanings --> <div class="flex flex-col lg:flex-row items-center w-auto justify-center h-full ml-5"> <div class="mx-2 h-2/3 lg:mr-10"> <h2 class="font-oswald font-bold">MEANING</h2> <h2 class="font-sans">${kanji.meaning.english}</h2> <div class="flex justify-around mt-12"> <div class="flex-col"> <h2 class="font-bold first-letter: font-sans">KUN</h2> <p>${kanji.kunyomi.hiragana}</p> </div> <div class="flex-col"> <h2 class="font-bold font-oswald">ON</h2> <p class="font-sansjp"> ${kanji.onyomi.katakana.toUpperCase()} </p> </div> </div> </div> <div class="flex flex-wrap pt-4 lg:mt-4 border-t-[1px] sm:border-l-[1px] sm:border-t-[0px] w-full lg:w-2/3 overflow-auto justify-center items-center h-full"> ${examples.map((example) => {
    return renderTemplate`<div class="flex flex-col"> <h2 class="font-sansjp font-base"> ${example.japanese} </h2> <h1 class="font-sans"> ${example.meaning.english} </h1> </div>`;
  })} </div> </div> </div> </section>`;
}, "C:/Users/Brian/Documents/Programming/Kanjisho/src/components/KanjiDisplay.astro", undefined);

export { $$KanjiDisplay as $ };
