function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-yBuenOGL.js","assets/index-D1MHHyHP.js","assets/index-f4pFSWeP.css","assets/index-D8EZvG24.js","assets/index-BJOprvmz.js","assets/index-DMs-LCgA.js","assets/index-UF-KsAC7.js","assets/index-BHtdtw7v.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D1MHHyHP.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-yBuenOGL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D8EZvG24.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BJOprvmz.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DMs-LCgA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-UF-KsAC7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BHtdtw7v.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
