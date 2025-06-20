function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-_FsBja1x.js","assets/index-B6P3Mmw2.js","assets/index-BxcmqSaG.css","assets/index-C8FA2gBM.js","assets/index-D486iSl3.js","assets/index-BarUNiMA.js","assets/index-DkH_GoWO.js","assets/index-CBF6RbQM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B6P3Mmw2.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-_FsBja1x.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C8FA2gBM.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D486iSl3.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BarUNiMA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DkH_GoWO.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CBF6RbQM.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
