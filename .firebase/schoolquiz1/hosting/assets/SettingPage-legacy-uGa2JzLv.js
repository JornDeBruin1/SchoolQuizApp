System.register(["./index-legacy-D7zMnzAV.js"],(function(e,a){"use strict";var t,l,d,s,r,c,u,n,o,g,k,f,i,_,v,m,h,p,x,b,y,S,w,C;return{setters:[e=>{t=e._,l=e.r,d=e.v,s=e.o,r=e.x,c=e.e,u=e.d,n=e.g,o=e.E,g=e.n,k=e.L,f=e.M,i=e.N,_=e.i,v=e.O,m=e.P,h=e.Q,p=e.G,x=e.R,b=e.y,y=e.z,S=e.A,w=e.B,C=e.C}],execute:function(){var a=document.createElement("style");a.textContent=".dark-content[data-v-c9e9c61d]{--background: #111827}.dark-item[data-v-c9e9c61d]{--background: #1f2937}.dark-background{--background: none}\n",document.head.appendChild(a);const I=t({__name:"SettingsContainer",setup(e){const a=l(""),t=()=>{b.value=!b.value,localStorage.setItem("darkMode",JSON.stringify(b.value)),x((()=>{location.reload()}))},b=l(!1);return d((()=>{const e=JSON.parse(localStorage.getItem("darkMode"));null!==e&&(b.value=e)})),(e,l)=>(s(),r(n(p),null,{default:c((()=>[u(n(o),{fullscreen:!0,class:g({"dark-content":b.value})},{default:c((()=>[u(n(k),{class:"dark:bg-gray-800 w-full md:px-[35%] pt-12"},{default:c((()=>[u(n(f),{class:g(["mt-12",{"dark-item":b.value}])},{default:c((()=>[u(n(i),{class:"dark:text-white"},{default:c((()=>[_("Enable darkmode")])),_:1}),u(n(v),{checked:b.value,color:"primary",onIonChange:t},null,8,["checked"])])),_:1},8,["class"]),u(n(f),{class:g({"dark-item":b.value})},{default:c((()=>[u(n(i),{class:"dark:text-white"},{default:c((()=>[_("Language")])),_:1}),u(n(m),{modelValue:a.value.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.value=e),class:"dark:text-white",placeholder:"Select One"},{default:c((()=>[u(n(h),{class:"dark:text-white",value:"nl"},{default:c((()=>[_("Nederlands")])),_:1}),u(n(h),{class:"dark:text-white",value:"en"},{default:c((()=>[_("Engels")])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["class"])])),_:1})])),_:1},8,["class"])])),_:1}))}},[["__scopeId","data-v-c9e9c61d"]]);e("default",{__name:"SettingPage",setup(e){const a=l(!1);return d((()=>{const e=JSON.parse(localStorage.getItem("darkMode"));null!==e&&(a.value=e)})),(e,t)=>(s(),r(n(p),{class:"dark:bg-gray-800"},{default:c((()=>[u(n(C),{class:"dark:bg-gray-800"},{default:c((()=>[u(n(b),{class:g({"dark-background":a.value})},{default:c((()=>[u(n(y),{class:"dark:bg-gray-800"},{default:c((()=>[u(n(S))])),_:1}),u(n(w),{class:"dark:text-white text-center"},{default:c((()=>[_("Settings")])),_:1})])),_:1},8,["class"])])),_:1}),u(n(o),{fullscreen:!0,class:"dark:bg-gray-800"},{default:c((()=>[u(I)])),_:1})])),_:1}))}})}}}));