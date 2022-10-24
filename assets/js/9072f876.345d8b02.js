"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[1666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=a,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Definition",s={unversionedId:"benchmark/analyze/overhead/definition",id:"benchmark/analyze/overhead/definition",title:"Definition",description:"The overhead is the wasted time compared to a perfect solution. More specifically, suppose there exists a perfect solution that can make your real-world app render at 60FPS. Then, we measure the time of that perfect solution (suppose it is 1.00s) as well as the time if using this package (suppose it is 1.01).  Then, we say the overhead is (1.01-1.00)/1.00 = 1%.",source:"@site/docs/benchmark/analyze/overhead/definition.md",sourceDirName:"benchmark/analyze/overhead",slug:"/benchmark/analyze/overhead/definition",permalink:"/flutter_smooth/benchmark/analyze/overhead/definition",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/benchmark/analyze/overhead/definition.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Result",permalink:"/flutter_smooth/benchmark/analyze/jank-statistics/result"},next:{title:"Result",permalink:"/flutter_smooth/benchmark/analyze/overhead/result"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The overhead is the wasted time compared to a perfect solution. More specifically, suppose there exists a perfect solution that can make your real-world app render at 60FPS. Then, we measure the time of that perfect solution (suppose it is 1.00s) as well as the time if using this package (suppose it is 1.01).  Then, we say the overhead is (1.01-1.00)/1.00 = 1%."),(0,a.kt)("p",null,'Notice that, it seems not reasonable to simply compare the time using this package with the time for vanilla app. This is because the (non-existent) "perfect solution" must be slower than the vanilla app, so this part of time delta is not overhead. That time delta are necessary, since it has to generate extra frames, by whatever means, in order to achieve the 60FPS goal.'))}u.isMDXComponent=!0}}]);