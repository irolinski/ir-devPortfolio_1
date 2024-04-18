function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-JsEOTyYh.js","assets/index-BjugJuR4.js","assets/index-BmcEQIK0.css","assets/index-CK50neMo.js","assets/index-D4bIu_qV.js","assets/index-DFTiV-YY.js","assets/index-UnmEKOSD.js","assets/index-Bpn4qx9Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BjugJuR4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-JsEOTyYh.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CK50neMo.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D4bIu_qV.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DFTiV-YY.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-UnmEKOSD.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bpn4qx9Y.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
