function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DAL7PyUq.js","assets/index-6eFq_Rbl.js","assets/index-DSz5bk4C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-6eFq_Rbl.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DAL7PyUq.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
