import{_ as S,r as c,v as f,o as k,x as m,e as t,d as a,g as e,E as v,n as r,L as b,M as g,N as _,i as o,O as h,P as M,Q as i,G as p,R as w,y,z as C,A as N,B as O,C as B}from"./index-DF3xa576.js";const D={__name:"SettingsContainer",setup(I){const s=c(""),n=()=>{l.value=!l.value,localStorage.setItem("darkMode",JSON.stringify(l.value)),w(()=>{location.reload()})},l=c(!1);return f(()=>{const d=JSON.parse(localStorage.getItem("darkMode"));d!==null&&(l.value=d)}),(d,u)=>(k(),m(e(p),null,{default:t(()=>[a(e(v),{fullscreen:!0,class:r({"dark-content":l.value})},{default:t(()=>[a(e(b),{class:"dark:bg-gray-800 w-full md:px-[35%] pt-12"},{default:t(()=>[a(e(g),{class:r(["mt-12",{"dark-item":l.value}])},{default:t(()=>[a(e(_),{class:"dark:text-white"},{default:t(()=>[o("Enable darkmode")]),_:1}),a(e(h),{checked:l.value,color:"primary",onIonChange:n},null,8,["checked"])]),_:1},8,["class"]),a(e(g),{class:r({"dark-item":l.value})},{default:t(()=>[a(e(_),{class:"dark:text-white"},{default:t(()=>[o("Language")]),_:1}),a(e(M),{modelValue:s.value.value,"onUpdate:modelValue":u[0]||(u[0]=x=>s.value.value=x),class:"dark:text-white",placeholder:"Select One"},{default:t(()=>[a(e(i),{class:"dark:text-white",value:"nl"},{default:t(()=>[o("Nederlands")]),_:1}),a(e(i),{class:"dark:text-white",value:"en"},{default:t(()=>[o("Engels")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["class"])]),_:1})]),_:1},8,["class"])]),_:1}))}},E=S(D,[["__scopeId","data-v-c9e9c61d"]]),T={__name:"SettingPage",setup(I){const s=c(!1);return f(()=>{const n=JSON.parse(localStorage.getItem("darkMode"));n!==null&&(s.value=n)}),(n,l)=>(k(),m(e(p),{class:"dark:bg-gray-800"},{default:t(()=>[a(e(B),{class:"dark:bg-gray-800"},{default:t(()=>[a(e(y),{class:r({"dark-background":s.value})},{default:t(()=>[a(e(C),{class:"dark:bg-gray-800"},{default:t(()=>[a(e(N))]),_:1}),a(e(O),{class:"dark:text-white text-center"},{default:t(()=>[o("Settings")]),_:1})]),_:1},8,["class"])]),_:1}),a(e(v),{fullscreen:!0,class:"dark:bg-gray-800"},{default:t(()=>[a(E)]),_:1})]),_:1}))}};export{T as default};
