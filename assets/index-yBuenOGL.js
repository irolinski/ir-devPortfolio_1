function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CQRHp7EI.js","assets/index-D1MHHyHP.js","assets/index-f4pFSWeP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D1MHHyHP.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CQRHp7EI.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
