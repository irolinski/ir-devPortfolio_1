function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CC1EvPbO.js","assets/index-CTU1tc5I.js","assets/index-BmcEQIK0.css","assets/index-DGNxKtWR.js","assets/index-O6UKnZK7.js","assets/index-EJuRuRhe.js","assets/index-DxmijXv3.js","assets/index-kW4s6J8T.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CTU1tc5I.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CC1EvPbO.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DGNxKtWR.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-O6UKnZK7.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-EJuRuRhe.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DxmijXv3.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-kW4s6J8T.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
