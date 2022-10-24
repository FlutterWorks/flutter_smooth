"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[2372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(d,i(i({ref:t},h),{},{components:n})):r.createElement(d,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Result",s={unversionedId:"benchmark/analyze/overhead/result",id:"benchmark/analyze/overhead/result",title:"Result",description:"The MaybePreemptRender is slow (needs syscall) now, causing larger overhead. It can be (and should be) optimized//github.com/fzyzcjy/flutter_smooth/issues/110. The pipeline is also not optimized yet.",source:"@site/docs/benchmark/analyze/overhead/result.md",sourceDirName:"benchmark/analyze/overhead",slug:"/benchmark/analyze/overhead/result",permalink:"/flutter_smooth/benchmark/analyze/overhead/result",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/benchmark/analyze/overhead/result.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Definition",permalink:"/flutter_smooth/benchmark/analyze/overhead/definition"},next:{title:"Waste",permalink:"/flutter_smooth/benchmark/analyze/waste"}},l={},c=[],h={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"result"},"Result"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MaybePreemptRender")," is slow (needs syscall) now, causing larger overhead. It can be (and should be) optimized: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fzyzcjy/flutter_smooth/issues/110"},"https://github.com/fzyzcjy/flutter_smooth/issues/110"),". The pipeline is also not optimized yet.")),(0,o.kt)("p",null,"The possible overhead components may be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MaybePreemptRender")," checks - overhead. In each preempt point, we have to check whether it is time to trigger a preempt render."),(0,o.kt)("li",{parentName:"ol"},"Preempt render - not overhead. To my best knowledge, any solution that wants to achieve 60FPS has to run the build/layout/paint/etc pipeline for the part that wants to be changing. Therefore, it is inevitable to have this component. (Feel free to correct me if you come up with a faster solution without that.) By the way, this part strongly depends on your use case. If you have simple animations this will be fast, while for extremely fancy animations it can be slow.")),(0,o.kt)("p",null,"Thus, the question remains to be, how slow is ",(0,o.kt)("inlineCode",{parentName:"p"},"MaybePreemptRender")," checks?"),(0,o.kt)("p",null,"I ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fzyzcjy/flutter_smooth/commit/d9cc91ff61fa560b385fffa3f0461b0d3226df1a"},"originally checked it")," by adding a Timeline event whenever a MaybePreemptRender is called, and by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"overhead.py"),", the average of one such check is 22.57 microseconds on my machine. In other words, since (by looking at tracing data) we call it roughly once per millisecond, it is 2.3% overhead. However, this is wrong. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Timeline.timeSync")," itself has non-neglitible overhead, as it itself reads system time twice (i.e. two syscalls), while the code under measurement is nothing but ",(0,o.kt)("em",{parentName:"p"},"one")," read-system-time (i.e. one syscall). From such rough estimation, it should be less than 2.3/3 = 0.8% overhead."),(0,o.kt)("p",null,"Anyway, in my humble opinion any number lower than 2.3% looks already good enough, so I will firstly spend time doing other work in this library. Feel free to PR for an accurate measurement of overhead!"),(0,o.kt)("small",null,"(To reproduce this, create your own tracing data using latest code, instead of using the sample tracing json in this repo - I recorded that prior to writing this section and that data does not include MaybePreemptRender timeline events.)"))}m.isMDXComponent=!0}}]);