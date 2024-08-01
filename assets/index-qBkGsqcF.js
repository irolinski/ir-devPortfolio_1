function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DNxUo9SX.js","assets/index-MT5Lo3s4.js","assets/index-94frvg9O.css","assets/index-DF8LahQN.js","assets/index-DNw0M9SR.js","assets/index-CUZgN1uo.js","assets/index-BDwAIZDb.js","assets/index-BKP5-6Y2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-MT5Lo3s4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DNxUo9SX.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DF8LahQN.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DNw0M9SR.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CUZgN1uo.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BDwAIZDb.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BKP5-6Y2.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
