"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[2404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="SmoothMaterialPageRoute",l={unversionedId:"design/drop-in/page-route",id:"design/drop-in/page-route",title:"SmoothMaterialPageRoute",description:"To use the package, there is no need to understand this section since it is implementation details. This section is for those who are interested in knowing what happens under the hood.",source:"@site/docs/design/drop-in/page-route.md",sourceDirName:"design/drop-in",slug:"/design/drop-in/page-route",permalink:"/flutter_smooth/design/drop-in/page-route",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/drop-in/page-route.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fix jank by await vsync",permalink:"/flutter_smooth/design/infra/misc/await-vsync"},next:{title:"SmoothListView",permalink:"/flutter_smooth/design/drop-in/list-view"}},s={},p=[{value:"Core",id:"core",level:2},{value:"Adapt to <code>PageRoute</code>",id:"adapt-to-pageroute",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smoothmaterialpageroute"},"SmoothMaterialPageRoute"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To use the package, there is no need to understand this section since it is implementation details. This section is for those who are interested in knowing what happens under the hood.")),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("p",null,"Let's start from the simple, by building a page transition animation without worrying how to adapt to the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"PageRoute")," system."),(0,o.kt)("p",null,"That is pretty simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"return SmoothBuilder(\n  builder: (context, child) => SmoothPageTransition(child: child),\n  child: MySecondPage(),\n);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SmoothPageTransition")," can be implemented as something like the following. (To demonstrate the idea more clearly, the code deliberately lacks things like creating a Tween, disposing controller, starting a controller, widget fields, etc)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class SmoothPageTransition extends StatefulWidget {...}\nclass _SmoothPageTransitionState extends State<SmoothPageTransition> with SingleTickerProviderStateMixin {\n  final controller = AnimationController(vsync: this);\n  Widget build(BuildContext context) => SlideTransition(\n    position: controller.value,\n    child: widget.child,\n  );\n}\n")),(0,o.kt)("h2",{id:"adapt-to-pageroute"},"Adapt to ",(0,o.kt)("inlineCode",{parentName:"h2"},"PageRoute")),(0,o.kt)("p",null,"Now comes the problem: We cannot directly use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Animation"),"s exposed from ",(0,o.kt)("inlineCode",{parentName:"p"},"PageRoute.buildTransitions"),", because the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticker"),"s driving those animations never fire at extra preempt rendering."),(0,o.kt)("p",null,"Looking at the source code (",(0,o.kt)("inlineCode",{parentName:"p"},"SmoothPageRouteMixin"),"), I did a small trick: I create a class, ",(0,o.kt)("inlineCode",{parentName:"p"},"DualProxyAnimationController"),", which behaves like an ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimationController"),", but secretly passes all write operations to another secondary AnimationController. Then, for that secondary controller, I let the extra onTick be fired when extra preempt rendering. Then we are done."))}d.isMDXComponent=!0}}]);