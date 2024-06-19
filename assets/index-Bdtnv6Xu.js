function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CmAUa2rb.js","assets/index-6N0Dg0f0.js","assets/index-f4pFSWeP.css","assets/index-DcJ1Tiu4.js","assets/index-B_8uFKZd.js","assets/index-Blmu_3h0.js","assets/index-ZKAxGve1.js","assets/index-IXOyv6dG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-6N0Dg0f0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CmAUa2rb.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DcJ1Tiu4.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B_8uFKZd.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Blmu_3h0.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ZKAxGve1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-IXOyv6dG.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
