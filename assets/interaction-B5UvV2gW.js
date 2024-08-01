function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-2SqFgmm7.js","assets/Ranges-CXVyg3Me.js","assets/index-MT5Lo3s4.js","assets/index-94frvg9O.css","assets/index-BHqBcfWS.js","assets/OptionsColor-Bm8GpyUC.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-MT5Lo3s4.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-2SqFgmm7.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
