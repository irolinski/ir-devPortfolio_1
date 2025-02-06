function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BWC2LFee.js","assets/index-lJ6fnms4.js","assets/index-Cmu3y7iT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-lJ6fnms4.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BWC2LFee.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
