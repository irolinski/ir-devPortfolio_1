function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-vuDHu7A3.js","assets/index-lJ6fnms4.js","assets/index-Cmu3y7iT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-lJ6fnms4.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-vuDHu7A3.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
