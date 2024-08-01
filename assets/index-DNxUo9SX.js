function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-L4GXmQ41.js","assets/index-MT5Lo3s4.js","assets/index-94frvg9O.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-MT5Lo3s4.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-L4GXmQ41.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
