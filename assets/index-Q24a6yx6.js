function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CdyKy73B.js","assets/index-6eFq_Rbl.js","assets/index-DSz5bk4C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-6eFq_Rbl.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CdyKy73B.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
