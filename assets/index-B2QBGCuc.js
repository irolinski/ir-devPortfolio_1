function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0q0RzKOU.js","assets/index-6eFq_Rbl.js","assets/index-DSz5bk4C.css","assets/index-D1kxG6fe.js","assets/index-BZ0DH8Vy.js","assets/index-BwiziIMm.js","assets/index-hnHQ1ccz.js","assets/index-Q24a6yx6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-6eFq_Rbl.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-0q0RzKOU.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D1kxG6fe.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BZ0DH8Vy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BwiziIMm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-hnHQ1ccz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Q24a6yx6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
