function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D9cUFqNO.js","assets/index-DkaDPB90.js","assets/index-BmcEQIK0.css","assets/index-Bc3Hh4QK.js","assets/index-C4OxGLf3.js","assets/index-B5EqWvwN.js","assets/index-nnVcvR2T.js","assets/index-dBizdUtI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DkaDPB90.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D9cUFqNO.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bc3Hh4QK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C4OxGLf3.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B5EqWvwN.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-nnVcvR2T.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-dBizdUtI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
