function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-B9VaDL4V.js","assets/index-CTU1tc5I.js","assets/index-BmcEQIK0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CTU1tc5I.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-B9VaDL4V.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
