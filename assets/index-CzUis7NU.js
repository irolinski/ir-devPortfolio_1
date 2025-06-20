function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BERQNoFr.js","assets/index-B6P3Mmw2.js","assets/index-BxcmqSaG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B6P3Mmw2.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BERQNoFr.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
