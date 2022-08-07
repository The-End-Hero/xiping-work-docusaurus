"use strict";(self.webpackChunkxiping_work_docusaurus=self.webpackChunkxiping_work_docusaurus||[]).push([[7511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={toc_max_heading_level:6},c="\u6811(Tree)",u={unversionedId:"data-structures/\u6570\u636e\u7ed3\u6784-\u6811",id:"data-structures/\u6570\u636e\u7ed3\u6784-\u6811",title:"\u6811(Tree)",description:"\u6811\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u662f\u7531n\uff08n>=1\uff09\u4e2a\u6709\u9650\u8282\u70b9\u7ec4\u6210\u4e00\u4e2a\u5177\u6709\u5c42\u6b21\u5173\u7cfb\u7684\u96c6\u5408\u3002\u628a\u5b83\u53eb\u505a \u201c\u6811\u201d \u662f\u56e0\u4e3a\u5b83\u770b\u8d77\u6765\u50cf\u4e00\u68f5\u5012\u6302\u7684\u6811\uff0c\u4e5f\u5c31\u662f\u8bf4\u5b83\u662f\u6839\u671d\u4e0a\uff0c\u800c\u53f6\u671d\u4e0b\u7684\u3002\u5b83\u5177\u6709\u4ee5\u4e0b\u7684\u7279\u70b9\uff1a",source:"@site/docs/data-structures/\u6570\u636e\u7ed3\u6784-\u6811.md",sourceDirName:"data-structures",slug:"/data-structures/\u6570\u636e\u7ed3\u6784-\u6811",permalink:"/docs/data-structures/\u6570\u636e\u7ed3\u6784-\u6811",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/\u6570\u636e\u7ed3\u6784-\u6811.md",tags:[],version:"current",frontMatter:{toc_max_heading_level:6},sidebar:"dataStructuresBar",previous:{title:"\u94fe\u8868(Linked List)",permalink:"/docs/data-structures/\u6570\u636e\u7ed3\u6784-\u94fe\u8868"},next:{title:"\u6563\u5217\u8868(Hash Table)",permalink:"/docs/data-structures/\u6570\u636e\u7ed3\u6784-\u6563\u5217\u8868"}},i={},s=[],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6811tree"},"\u6811(Tree)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6811\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u662f\u7531n\uff08n>=1\uff09\u4e2a\u6709\u9650\u8282\u70b9\u7ec4\u6210\u4e00\u4e2a\u5177\u6709\u5c42\u6b21\u5173\u7cfb\u7684\u96c6\u5408\u3002\u628a\u5b83\u53eb\u505a \u201c\u6811\u201d \u662f\u56e0\u4e3a\u5b83\u770b\u8d77\u6765\u50cf\u4e00\u68f5\u5012\u6302\u7684\u6811\uff0c\u4e5f\u5c31\u662f\u8bf4\u5b83\u662f\u6839\u671d\u4e0a\uff0c\u800c\u53f6\u671d\u4e0b\u7684\u3002\u5b83\u5177\u6709\u4ee5\u4e0b\u7684\u7279\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u5b50\u8282\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7236\u8282\u70b9\u7684\u8282\u70b9\u79f0\u4e3a\u6839\u8282\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u975e\u6839\u8282\u70b9\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u7236\u8282\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9664\u4e86\u6839\u8282\u70b9\u5916\uff0c\u6bcf\u4e2a\u5b50\u8282\u70b9\u53ef\u4ee5\u5206\u4e3a\u591a\u4e2a\u4e0d\u76f8\u4ea4\u7684\u5b50\u6811\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u65e5\u5e38\u7684\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u548c\u7528\u7684\u66f4\u591a\u7684\u662f\u6811\u7684\u5176\u4e2d\u4e00\u79cd\u7ed3\u6784\uff0c\u5c31\u662f\u4e8c\u53c9\u6811\u3002")))}p.isMDXComponent=!0}}]);