function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B8wItOR6.js","assets/index-lJ6fnms4.js","assets/index-Cmu3y7iT.css","assets/index-1LCrIrWy.js","assets/index-BGY--y5k.js","assets/index-fkqRzYqM.js","assets/index-0FuaXOrA.js","assets/index-D7yiFZLY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-lJ6fnms4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B8wItOR6.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-1LCrIrWy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BGY--y5k.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-fkqRzYqM.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-0FuaXOrA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-D7yiFZLY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
