System.register(["./index-legacy-DP2QcgOM.js"],(function(e,a){"use strict";var t,l,s,r,d,i,c,n,o,u,g,k,v,f,y,b,m,p,_,x,z,h,q,w,C,F,S,I,j,J,N,O,Q,E,M,$,A;return{setters:[e=>{t=e._,l=e.u,s=e.a,r=e.r,d=e.v,i=e.o,c=e.x,n=e.e,o=e.g,u=e.b,g=e.F,k=e.D,v=e.q,f=e.f,y=e.d,b=e.I,m=e.h,p=e.i,_=e.t,x=e.j,z=e.k,h=e.l,q=e.m,w=e.p,C=e.H,F=e.n,S=e.E,I=e.J,j=e.K,J=e.c,N=e.y,O=e.z,Q=e.A,E=e.B,M=e.C,$=e.s,A=e.G}],execute:function(){var a=document.createElement("style");a.textContent=".dark-content[data-v-efb1253e]{--background: #111827}.dark-background{--background: none}\n",document.head.appendChild(a);const B={key:0,class:"w-full dark:bg-gray-900"},D=(e=>(I("data-v-efb1253e"),e=e(),j(),e))((()=>f("h2",{class:"dark:text-white m-0 py-5 flex justify-center"},"Favorite Quizzes",-1))),G=["src"],H={class:"dark:bg-gray-800"},K={class:"w-1/2 dark:text-white"},P={class:"w-1/2 dark:bg-gray-800"},L=["onClick"],R={key:1,class:"dark:text-white flex justify-center text-2xl pt-5"},T={__name:"FavoriteContainer",setup(e){let a=JSON.parse(localStorage.getItem("favoriteQuizzes"))||[];console.log(a.value);const t=l(),I=s(),j=r(!1);return d((()=>{const e=JSON.parse(localStorage.getItem("darkMode"));null!==e&&(j.value=e)})),(e,l)=>(i(),c(o(S),{class:F({"dark-content":j.value})},{default:n((()=>[o(a).length>0?(i(),u("div",B,[D,(i(!0),u(g,null,k(o(a),(e=>(i(),c(o(v),{key:e.id,onClick:a=>{return t=e.id,void I.push(`/tabs/quiz/${t}`);var t},class:"dark:bg-gray-800 m-0 py-6"},{default:n((()=>[f("img",{class:"p-4",src:e.img,alt:""},null,8,G),y(o(b),{class:"dark:bg-gray-800"},{default:n((()=>[f("div",H,[y(o(m),{class:"dark:text-white"},{default:n((()=>[p(_(e.name),1)])),_:2},1024)]),y(o(x),{class:"dark:text-white"},{default:n((()=>[p(_(e.name),1)])),_:2},1024)])),_:2},1024),y(o(z),{class:"flex dark:bg-gray-800"},{default:n((()=>[f("div",K,_(e.questions.length)+" questions",1),f("div",P,[f("div",{onClick:h((a=>(e=>{t.dispatch("removeFavorite",e.id),localStorage.removeItem(`quiz-${e.id}-isFavorite`),location.reload()})(e)),["stop"])},[y(o(q),{class:"text-[20px]","aria-hidden":"true",icon:o(w),style:C({color:e.isFavorite?"red":"black"})},null,8,["icon","style"])],8,L)])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])):(i(),u("p",R," No quizzes favorited "))])),_:1},8,["class"]))}},U=t(T,[["__scopeId","data-v-efb1253e"]]);e("default",{__name:"FavoritePage",setup(e){const a=l(),t=J((()=>a.state.favoriteQuizzes.map((e=>$.find((a=>a.id===e)))))),s=r(!1);return d((()=>{const e=JSON.parse(localStorage.getItem("darkMode"));null!==e&&(s.value=e)})),(e,a)=>(i(),c(o(A),{class:"dark:bg-gray-800"},{default:n((()=>[y(o(M),{class:"dark:bg-gray-800"},{default:n((()=>[y(o(N),{class:F({"dark-background":s.value})},{default:n((()=>[y(o(O),{class:"dark:bg-gray-800"},{default:n((()=>[y(o(Q))])),_:1}),y(o(E),{class:"dark:text-white"},{default:n((()=>[p("Favorites")])),_:1})])),_:1},8,["class"])])),_:1}),y(o(S),{fullscreen:!0,class:"dark:bg-gray-800"},{default:n((()=>[(i(!0),u(g,null,k(o($),(e=>(i(),c(U,{key:e.id,quizzes:t.value,quiz:e},null,8,["quizzes","quiz"])))),128))])),_:1})])),_:1}))}})}}}));