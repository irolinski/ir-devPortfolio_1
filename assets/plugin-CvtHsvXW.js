function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-DAx09mJS.js","assets/index-6eFq_Rbl.js","assets/index-DSz5bk4C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-6eFq_Rbl.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-DAx09mJS.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
