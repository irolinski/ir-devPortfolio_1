function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CuL7KjcH.js","assets/index-wa3yGHZQ.js","assets/index-CKgPswVr.css","assets/index-C41KspT5.js","assets/index-9qg_wrIb.js","assets/index-CPWAIkop.js","assets/index-BkvzmzzN.js","assets/index-BevEXU4f.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-wa3yGHZQ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CuL7KjcH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C41KspT5.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-9qg_wrIb.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CPWAIkop.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BkvzmzzN.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BevEXU4f.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};