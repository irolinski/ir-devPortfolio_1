function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CO3lM9_t.js","assets/index-u03Jcwbu.js","assets/index-BmcEQIK0.css","assets/index-5MTPs4Eb.js","assets/index-xjlAEBO6.js","assets/index-BOvJkJXZ.js","assets/index-G86K_6P1.js","assets/index-Eco3iHL5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-u03Jcwbu.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CO3lM9_t.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-5MTPs4Eb.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-xjlAEBO6.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BOvJkJXZ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-G86K_6P1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Eco3iHL5.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
