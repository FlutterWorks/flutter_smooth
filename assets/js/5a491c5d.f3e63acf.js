"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[6654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={},a="Multi-render",l={unversionedId:"design/infra/rasterizer-queue/multi-render",id:"design/infra/rasterizer-queue/multi-render",title:"Multi-render",description:"Title: Allow render to be called multiple times for one BeginFrame",source:"@site/docs/design/infra/rasterizer-queue/multi-render.md",sourceDirName:"design/infra/rasterizer-queue",slug:"/design/infra/rasterizer-queue/multi-render",permalink:"/flutter_smooth/design/infra/rasterizer-queue/multi-render",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/infra/rasterizer-queue/multi-render.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"After",permalink:"/flutter_smooth/design/infra/rasterizer-queue/after"},next:{title:"Remove (3N-1) uncomfort",permalink:"/flutter_smooth/design/infra/rasterizer-queue/remove-jank"}},u={},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-render"},"Multi-render"),(0,i.kt)("admonition",{title:"Upstream PR",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Title:")," Allow render to be called multiple times for one BeginFrame"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flutter/engine/pull/36438"},"https://github.com/flutter/engine/pull/36438"))),(0,i.kt)("p",null,"One result of the code change is that, it allows multi-render in one plain frame."),(0,i.kt)("p",null,"It is a must to add that change (create a continuation if there is none) to ",(0,i.kt)("inlineCode",{parentName:"p"},"Render"),". This is because, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Render")," multiple times for one ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginFrame"),". The original code will reject all ",(0,i.kt)("inlineCode",{parentName:"p"},"Render"),"s except for the first one, thus the whole flutter_smooth will not work because we can no longer submit anything more to render."))}p.isMDXComponent=!0}}]);