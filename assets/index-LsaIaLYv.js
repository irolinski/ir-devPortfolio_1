function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-U8y2lcl-.js","assets/index-CZlFbeRr.js","assets/index-DSz5bk4C.css","assets/index-ziVd9GS1.js","assets/index-qvyN13gr.js","assets/index-BYgWt2L1.js","assets/index-CbkE0tqB.js","assets/index-nkKSZYS2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CZlFbeRr.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-U8y2lcl-.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ziVd9GS1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-qvyN13gr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BYgWt2L1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CbkE0tqB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-nkKSZYS2.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
