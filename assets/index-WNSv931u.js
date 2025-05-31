var Fe=Object.defineProperty;var Pe=(t,s,r)=>s in t?Fe(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var ie=(t,s,r)=>Pe(t,typeof s!="symbol"?s+"":s,r);import{r as Me,a as Be,g as De,u as D,b as _e,c as j,L as T,R as ee,O as Oe,d as ke,e as qe,f as P,B as Ue}from"./react-vendor-CSNOUrTX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();var oe={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function $e(){if(me)return G;me=1;var t=Me(),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function n(a,i,m){var x,y={},w=null,N=null;m!==void 0&&(w=""+m),i.key!==void 0&&(w=""+i.key),i.ref!==void 0&&(N=i.ref);for(x in i)o.call(i,x)&&!d.hasOwnProperty(x)&&(y[x]=i[x]);if(a&&a.defaultProps)for(x in i=a.defaultProps,i)y[x]===void 0&&(y[x]=i[x]);return{$$typeof:s,type:a,key:w,ref:N,props:y,_owner:l.current}}return G.Fragment=r,G.jsx=n,G.jsxs=n,G}var ge;function ze(){return ge||(ge=1,oe.exports=$e()),oe.exports}var e=ze(),Z={},ue;function We(){if(ue)return Z;ue=1;var t=Be();return Z.createRoot=t.createRoot,Z.hydrateRoot=t.hydrateRoot,Z}var He=We();const Ge=De(He);function Ve({toggleSidebar:t,sidebarOpen:s,showSidebar:r,searchIndex:o=[]}){const l=D(),d=_e(),[n,a]=j.useState(!1),[i,m]=j.useState(!1),[x,y]=j.useState(!1),[w,N]=j.useState(""),[g,c]=j.useState([]),[h,f]=j.useState(-1),b=j.useRef(null);j.useEffect(()=>{const v=localStorage.getItem("darkMode")==="true"||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;a(v),C(v);const S=()=>{m(window.scrollY>10)};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[]),j.useEffect(()=>{const v=S=>{(S.metaKey||S.ctrlKey)&&S.key==="k"&&(S.preventDefault(),y(!0)),S.key==="Escape"&&x&&y(!1),x&&g.length>0&&(S.key==="ArrowDown"?(S.preventDefault(),f(E=>E<g.length-1?E+1:E)):S.key==="ArrowUp"?(S.preventDefault(),f(E=>E>0?E-1:0)):S.key==="Enter"&&h>=0&&(S.preventDefault(),I(g[h])))};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[x,g,h]),j.useEffect(()=>{x&&b.current&&(b.current.focus(),N(""),c([]),f(-1))},[x]),j.useEffect(()=>{if(w.trim().length>=2){const v=L(w);c(v),f(-1)}else c([])},[w]);const k=()=>{const v=!n;a(v),C(v),localStorage.setItem("darkMode",v.toString())},C=v=>{v?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},L=v=>{if(!o||!v)return[];const S=v.toLowerCase().trim();return o.filter(E=>E.title.toLowerCase().includes(S)||E.content.toLowerCase().includes(S)||E.tags&&E.tags.some(M=>M.toLowerCase().includes(S))).slice(0,10)},I=v=>{y(!1),v&&v.url&&d(v.url)},A=[{text:"Home",href:"/"},{text:"Docs",href:"/docs/getting-started"},{text:"GitHub",href:"https://github.com/voilajsx/appkit",external:!0}],F=g.reduce((v,S)=>{const E=S.category||"Other";return v[E]||(v[E]=[]),v[E].push(S),v},{});return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:`sticky top-0 z-30 w-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-200 ${i?"shadow-sm border-b border-gray-200 dark:border-gray-800":""}`,children:[e.jsx("div",{className:" mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs("div",{className:"flex items-center ",children:[r&&e.jsx("button",{onClick:t,className:"p-1.5 mr-1.5 text-gray-500 rounded-md lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500","aria-label":s?"Close sidebar":"Open sidebar",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),e.jsxs(T,{to:"/",className:"group flex items-center",children:[e.jsx("div",{className:"mr-3 flex-shrink-0 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 p-1.5 text-white",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})}),e.jsxs("span",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150",children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400 font-normal",children:"@voilajsx"}),"/appkit"]})]})]}),e.jsx("nav",{className:"hidden md:flex items-center",children:e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex",children:A.map((v,S)=>{const E=!v.external&&l.pathname===v.href;return v.external?e.jsx("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:`px-4 py-1.5 text-sm font-medium rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors ${S>0?"ml-1":""}`,children:v.text},v.text):e.jsx(T,{to:v.href,className:`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${E?"bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow-sm":"text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"} ${S>0?"ml-1":""}`,children:v.text},v.text)})})}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"relative",children:e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 py-1.5 px-3 rounded-md transition-colors",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mr-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})}),"Search",e.jsx("span",{className:"ml-4 text-xs bg-gray-200 dark:bg-gray-700 py-0.5 px-1.5 rounded",children:"⌘K"})]})})}),e.jsx("button",{onClick:k,className:"p-1.5 text-gray-500 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500","aria-label":n?"Switch to light mode":"Switch to dark mode",children:n?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})})}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{className:"p-1.5 text-gray-500 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500","aria-label":"Open mobile menu",onClick:()=>{const v=document.getElementById("mobile-menu");v&&v.classList.toggle("hidden")},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})})]})]})}),e.jsx("div",{id:"mobile-menu",className:"hidden md:hidden",children:e.jsxs("div",{className:"px-2 pt-2 pb-4 space-y-1 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900",children:[A.map(v=>{const S=!v.external&&l.pathname===v.href;return v.external?e.jsxs("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",children:[v.text,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-1.5 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},v.text):e.jsx(T,{to:v.href,className:`block px-3 py-2 rounded-md text-sm font-medium ${S?"bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-white":"text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`,onClick:()=>{const E=document.getElementById("mobile-menu");E&&E.classList.add("hidden")},children:v.text},v.text)}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Search"]})]})})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50",onClick:()=>y(!1)}),e.jsx("div",{className:"fixed top-[20%] inset-x-0 mx-auto w-full max-w-2xl px-4 z-50",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{ref:b,type:"text",value:w,onChange:v=>N(v.target.value),placeholder:"Search documentation...",className:"block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:e.jsx("kbd",{className:"hidden sm:inline-flex items-center px-2 py-1 text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded",children:"ESC"})})]})}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto",children:w.length<2?e.jsx("div",{className:"p-4 text-center text-gray-500 dark:text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Start typing to search..."})}):g.length===0?e.jsxs("div",{className:"p-6 text-center text-gray-500 dark:text-gray-400",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mx-auto h-12 w-12 mb-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),e.jsx("p",{className:"text-lg font-medium",children:"No results found"}),e.jsx("p",{className:"mt-1",children:"Try adjusting your search terms"})]}):Object.entries(F).map(([v,S])=>e.jsxs("div",{children:[e.jsx("div",{className:"px-4 py-2 bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700",children:e.jsx("h3",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase",children:v})}),e.jsx("ul",{children:S.map((E,M)=>{const W=M===h;return e.jsx("li",{children:e.jsxs("button",{className:`block w-full text-left px-4 py-3 ${W?"bg-blue-50 dark:bg-blue-900/20":"hover:bg-gray-50 dark:hover:bg-gray-750"}`,onClick:()=>I(E),onMouseEnter:()=>f(g.indexOf(E)),children:[e.jsx("div",{className:`font-medium ${W?"text-blue-600 dark:text-blue-400":"text-gray-900 dark:text-white"}`,children:E.title}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2",children:[E.excerpt||E.content.substring(0,100),"..."]}),E.tags&&E.tags.length>0&&e.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1",children:E.tags.slice(0,3).map(R=>e.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",children:R},R))})]})},E.id||M)})})]},v))}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 px-4 py-3 text-xs text-gray-500 dark:text-gray-400",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{className:"px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700",children:"↑"}),e.jsx("kbd",{className:"ml-1 px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700",children:"↓"}),e.jsx("span",{className:"ml-1",children:"to navigate"})]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{className:"px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700",children:"Enter"}),e.jsx("span",{className:"ml-1",children:"to select"})]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{className:"px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700",children:"Esc"}),e.jsx("span",{className:"ml-1",children:"to close"})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:()=>y(!1),className:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",children:"Close"})})]})})]})})]})]})}function Je(){return new Date().getFullYear(),e.jsxs("footer",{className:"bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"text-center bg-gradient-to-r from-blue-600 to-indigo-600 p-12  shadow-md",children:[e.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Ready to Build Better Apps?"}),e.jsx("p",{className:"text-white text-xl mb-8 max-w-3xl mx-auto",children:"Start using @voilajsx/appkit today and focus on what makes your application unique."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsx(T,{to:"/docs/getting-started",className:"bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors",children:"Get Started"}),e.jsx("a",{href:"https://github.com/voilajsx/appkit",target:"_blank",rel:"noopener noreferrer",className:"bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors",children:"View on GitHub"})]})]}),e.jsx("div",{className:"container-padding mx-auto py-4 pb-8",children:e.jsx("div",{className:"pt-6 pb-10 border-gray-200 dark:border-gray-800",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.jsxs("p",{className:"text-sm",children:["Built with ",e.jsx("span",{className:"text-red-500",children:"❤"})," in India by the"," ",e.jsx("a",{href:"https://github.com/orgs/voilajsx/people",target:"_blank",rel:"noopener noreferrer",className:"text-voila-blue dark:text-voila-purple hover:underline",children:"VoilaJSX Team"})," ","— powering modern web development."]})})})})})]})}function Ye({isOpen:t,onClose:s,currentModule:r,currentDoc:o}){D();const[l,d]=j.useState({});j.useEffect(()=>{r&&d(m=>({...m,[r]:!0}))},[r]);const n=(m,x)=>r==="general"&&o===x,a=[{title:"Getting Started",slug:"getting-started"},{title:"Overview",slug:"overview"}],i=[{title:"Auth",slug:"auth"},{title:"Config",slug:"config"},{title:"Logging",slug:"logging"},{title:"Validation",slug:"validation"},{title:"Security",slug:"security"},{title:"Error",slug:"error"}];return e.jsx(e.Fragment,{children:e.jsxs("aside",{className:`fixed top-16 left-0 z-20 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform lg:translate-x-0 transition-transform duration-200 ease-in-out ${t?"translate-x-0":"-translate-x-full"} lg:sticky lg:top-16 lg:h-screen shadow-sm lg:shadow-none`,style:{height:"calc(100vh - 64px)"},children:[e.jsx("div",{className:"flex justify-end p-2 lg:hidden",children:e.jsx("button",{onClick:s,className:"p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors","aria-label":"Close sidebar",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})}),e.jsxs("div",{className:"h-full overflow-y-auto py-6 px-4",style:{scrollbarWidth:"thin",scrollbarColor:"#CBD5E0 #F7FAFC"},children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"px-3 mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400",children:"Getting Started"}),e.jsx("ul",{className:"sidebar-list  pl-1",children:a.map(m=>e.jsx("li",{className:"sidebar-list-item",children:e.jsx(T,{to:`/docs/${m.slug}`,className:`sidebar-link flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${n("general",m.slug)?"active bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium":"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`,onClick:s,children:m.title})},m.slug))})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"px-3 mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400",children:"Modules"}),e.jsx("ul",{className:"sidebar-list  pl-1",children:i.map(m=>e.jsx("li",{className:"sidebar-list-item",children:e.jsx(T,{to:`/docs/${m.slug}`,className:`sidebar-link flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${n("general",m.slug)?"active bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 font-medium":"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`,onClick:s,children:m.title})},m.slug))})]}),e.jsx("div",{className:"sidebar-footer mt-12 pt-6 border-t border-gray-200 dark:border-gray-800",children:e.jsxs("div",{className:"px-3 flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-semibold mr-2",children:"Version:"}),e.jsx("span",{children:"1.0.0"})]}),e.jsx("a",{href:"https://github.com/voilajsx/appkit/releases",target:"_blank",rel:"noopener noreferrer",className:"sidebar-link text-blue-600 dark:text-blue-400 hover:underline text-xs",children:"View releases"})]})})]})]})})}function Ke({children:t}){const s=D(),[r,o]=j.useState(!1),[l,d]=j.useState(!1);j.useEffect(()=>{o(s.pathname.includes("/docs")),d(!1)},[s.pathname]);const n=()=>{d(!l)},a=()=>{const x=s.pathname.split("/");if(x.length<3)return{currentModule:null,currentDoc:null};const y=x[2]==="auth"||x[2]==="logging"?x[2]:"general",w=x.length>3?x[3]:x[2];return{currentModule:y,currentDoc:w}},{currentModule:i,currentDoc:m}=a();return e.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx(Ve,{toggleSidebar:n,sidebarOpen:l,showSidebar:r}),e.jsxs("div",{className:"flex flex-grow pt-0",children:[r&&e.jsx(Ye,{isOpen:l,onClose:()=>d(!1),currentModule:i,currentDoc:m}),e.jsx("main",{className:"flex-1 w-full transition-all duration-200",children:e.jsx("div",{className:"container px-0 md:px-4 py-4   mx-auto",children:t})})]}),e.jsx(Je,{}),l&&r&&e.jsx("div",{className:"fixed inset-0 bg-gray-900/50 z-10 lg:hidden",onClick:()=>d(!1),"aria-hidden":"true"})]})}function Q({children:t,className:s="",title:r,description:o,icon:l,to:d,href:n,hover:a=!0,bordered:i=!0,padding:m="md",shadow:x="sm",variant:y="default",...w}){const N="rounded-lg overflow-hidden transition-all duration-200",g={none:"",sm:"p-3",md:"p-5",lg:"p-7"},c={none:"",sm:"shadow-sm",md:"shadow",lg:"shadow-lg"},h=i?"border border-gray-200 dark:border-gray-800":"",f=a?"hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700":"",b={none:"",default:"bg-white dark:bg-gray-900",primary:"bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900/50",subtle:"bg-gray-50 dark:bg-gray-800/50"},k=`
    ${N} 
    ${g[m]||g.md} 
    ${c[x]||c.sm}
    ${h}
    ${f}
    ${b[y]||b.default}
    ${s}
  `,C=e.jsxs(e.Fragment,{children:[(l||r||o)&&e.jsxs("div",{className:t?"mb-4":"",children:[l&&e.jsx("div",{className:"mb-3 text-2xl text-voila-blue dark:text-voila-purple",children:l}),r&&e.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-1",children:r}),o&&e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:o})]}),t]});return d?e.jsx(T,{to:d,className:k,...w,children:C}):n?e.jsx("a",{href:n,className:k,target:"_blank",rel:"noopener noreferrer",...w,children:C}):e.jsx("div",{className:k,...w,children:C})}function U({children:t,variant:s="primary",size:r="md",onClick:o,className:l="",to:d,href:n,disabled:a=!1,fullWidth:i=!1,type:m="button",...x}){const y="inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",w={sm:"text-xs px-2.5 py-1.5",md:"text-sm px-4 py-2",lg:"text-base px-5 py-2.5"},N={primary:"text-white bg-voila-blue hover:bg-blue-700 focus:ring-blue-500 shadow-sm disabled:bg-blue-300 dark:disabled:bg-blue-800",secondary:"text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 shadow-sm disabled:bg-gray-100 disabled:text-gray-400 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:bg-gray-800 dark:disabled:text-gray-600",outline:"text-voila-blue bg-transparent border border-voila-blue hover:bg-blue-50 focus:ring-blue-500 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 disabled:text-blue-300 disabled:border-blue-300 disabled:hover:bg-transparent dark:disabled:text-blue-800 dark:disabled:border-blue-800",ghost:"text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 disabled:text-gray-300 disabled:hover:bg-transparent dark:disabled:text-gray-700",danger:"text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 shadow-sm disabled:bg-red-300 dark:disabled:bg-red-800"},g=i?"w-full":"",c=`
    ${y} 
    ${w[r]||w.md} 
    ${N[s]||N.primary}
    ${g}
    ${l}
  `;return d&&!a?e.jsx(T,{to:d,className:c,...x,children:t}):n&&!a?e.jsx("a",{href:n,className:c,target:x.target||"_blank",rel:x.rel||"noopener noreferrer",...x,children:t}):e.jsx("button",{type:m,className:c,onClick:o,disabled:a,...x,children:t})}function ve(){const[t,s]=j.useState([]);return j.useEffect(()=>{s([{name:"Auth",slug:"auth",description:"Secure authentication utilities including JWT tokens, password hashing, and middleware for route protection.",icon:"🔐",featured:!0,docs:[{title:"API Reference",slug:"api-reference"},{title:"Examples",slug:"examples"}],features:["JWT Token Management","Password Security","Authentication Middleware","Role-Based Access Control"]},{name:"Logging",slug:"logging",description:"Structured logging system with multiple transports, log levels, and context management.",icon:"📊",featured:!0,docs:[{title:"API Reference",slug:"api-reference"},{title:"Examples",slug:"examples"}],features:["Structured Logging","Multiple Transports","Log Levels","Context Tracking"]},{name:"Config",slug:"config",description:"Configuration management with environment variables, config files, and schema validation.",icon:"⚙️",featured:!1,docs:[{title:"API Reference",slug:"api-reference"},{title:"Examples",slug:"examples"}],features:["Environment Variables","Configuration Files","Schema Validation","Secure Secrets Management"]},{name:"HTTP",slug:"http",description:"HTTP utilities for building and consuming APIs, including request handling and response formatting.",icon:"🌐",featured:!1,docs:[{title:"API Reference",slug:"api-reference"},{title:"Examples",slug:"examples"}],features:["API Client","Request Validation","Response Formatting","Error Handling"]}])},[]),t}function we(t){var s,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(s=0;s<l;s++)t[s]&&(r=we(t[s]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function Ne(){for(var t,s,r=0,o="",l=arguments.length;r<l;r++)(t=arguments[r])&&(s=we(t))&&(o&&(o+=" "),o+=s);return o}var Ze=Object.create,te=Object.defineProperty,Qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertyNames,X=Object.getOwnPropertySymbols,tt=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,xe=(t,s,r)=>s in t?te(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,q=(t,s)=>{for(var r in s||(s={}))le.call(s,r)&&xe(t,r,s[r]);if(X)for(var r of X(s))Ee.call(s,r)&&xe(t,r,s[r]);return t},re=(t,s)=>Qe(t,et(s)),Se=(t,s)=>{var r={};for(var o in t)le.call(t,o)&&s.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&X)for(var o of X(t))s.indexOf(o)<0&&Ee.call(t,o)&&(r[o]=t[o]);return r},rt=(t,s)=>function(){return s||(0,t[Ce(t)[0]])((s={exports:{}}).exports,s),s.exports},st=(t,s)=>{for(var r in s)te(t,r,{get:s[r],enumerable:!0})},at=(t,s,r,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let l of Ce(s))!le.call(t,l)&&l!==r&&te(t,l,{get:()=>s[l],enumerable:!(o=Xe(s,l))||o.enumerable});return t},nt=(t,s,r)=>(r=t!=null?Ze(tt(t)):{},at(!t||!t.__esModule?te(r,"default",{value:t,enumerable:!0}):r,t)),it=rt({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,s){var r=function(){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,d={},n={util:{encode:function g(c){return c instanceof a?new a(c.type,g(c.content),c.alias):Array.isArray(c)?c.map(g):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++l}),g.__id},clone:function g(c,h){h=h||{};var f,b;switch(n.util.type(c)){case"Object":if(b=n.util.objId(c),h[b])return h[b];f={},h[b]=f;for(var k in c)c.hasOwnProperty(k)&&(f[k]=g(c[k],h));return f;case"Array":return b=n.util.objId(c),h[b]?h[b]:(f=[],h[b]=f,c.forEach(function(C,L){f[L]=g(C,h)}),f);default:return c}},getLanguage:function(g){for(;g;){var c=o.exec(g.className);if(c)return c[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,c){g.className=g.className.replace(RegExp(o,"gi"),""),g.classList.add("language-"+c)},isActive:function(g,c,h){for(var f="no-"+c;g;){var b=g.classList;if(b.contains(c))return!0;if(b.contains(f))return!1;g=g.parentElement}return!!h}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(g,c){var h=n.util.clone(n.languages[g]);for(var f in c)h[f]=c[f];return h},insertBefore:function(g,c,h,f){f=f||n.languages;var b=f[g],k={};for(var C in b)if(b.hasOwnProperty(C)){if(C==c)for(var L in h)h.hasOwnProperty(L)&&(k[L]=h[L]);h.hasOwnProperty(C)||(k[C]=b[C])}var I=f[g];return f[g]=k,n.languages.DFS(n.languages,function(A,F){F===I&&A!=g&&(this[A]=k)}),k},DFS:function g(c,h,f,b){b=b||{};var k=n.util.objId;for(var C in c)if(c.hasOwnProperty(C)){h.call(c,C,c[C],f||C);var L=c[C],I=n.util.type(L);I==="Object"&&!b[k(L)]?(b[k(L)]=!0,g(L,h,null,b)):I==="Array"&&!b[k(L)]&&(b[k(L)]=!0,g(L,h,C,b))}}},plugins:{},highlight:function(g,c,h){var f={code:g,grammar:c,language:h};if(n.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=n.tokenize(f.code,f.grammar),n.hooks.run("after-tokenize",f),a.stringify(n.util.encode(f.tokens),f.language)},tokenize:function(g,c){var h=c.rest;if(h){for(var f in h)c[f]=h[f];delete c.rest}var b=new x;return y(b,b.head,g),m(g,b,c,b.head,0),N(b)},hooks:{all:{},add:function(g,c){var h=n.hooks.all;h[g]=h[g]||[],h[g].push(c)},run:function(g,c){var h=n.hooks.all[g];if(!(!h||!h.length))for(var f=0,b;b=h[f++];)b(c)}},Token:a};function a(g,c,h,f){this.type=g,this.content=c,this.alias=h,this.length=(f||"").length|0}a.stringify=function g(c,h){if(typeof c=="string")return c;if(Array.isArray(c)){var f="";return c.forEach(function(I){f+=g(I,h)}),f}var b={type:c.type,content:g(c.content,h),tag:"span",classes:["token",c.type],attributes:{},language:h},k=c.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(b.classes,k):b.classes.push(k)),n.hooks.run("wrap",b);var C="";for(var L in b.attributes)C+=" "+L+'="'+(b.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+C+">"+b.content+"</"+b.tag+">"};function i(g,c,h,f){g.lastIndex=c;var b=g.exec(h);if(b&&f&&b[1]){var k=b[1].length;b.index+=k,b[0]=b[0].slice(k)}return b}function m(g,c,h,f,b,k){for(var C in h)if(!(!h.hasOwnProperty(C)||!h[C])){var L=h[C];L=Array.isArray(L)?L:[L];for(var I=0;I<L.length;++I){if(k&&k.cause==C+","+I)return;var A=L[I],F=A.inside,v=!!A.lookbehind,S=!!A.greedy,E=A.alias;if(S&&!A.pattern.global){var M=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,M+"g")}for(var W=A.pattern||A,R=f.next,O=b;R!==c.tail&&!(k&&O>=k.reach);O+=R.value.length,R=R.next){var z=R.value;if(c.length>g.length)return;if(!(z instanceof a)){var V=1,_;if(S){if(_=i(W,O,g,v),!_||_.index>=g.length)break;var J=_.index,Ie=_.index+_[0].length,$=O;for($+=R.value.length;J>=$;)R=R.next,$+=R.value.length;if($-=R.value.length,O=$,R.value instanceof a)continue;for(var H=R;H!==c.tail&&($<Ie||typeof H.value=="string");H=H.next)V++,$+=H.value.length;V--,z=g.slice(O,$),_.index-=O}else if(_=i(W,0,z,v),!_)continue;var J=_.index,Y=_[0],se=z.slice(0,J),ce=z.slice(J+Y.length),ae=O+z.length;k&&ae>k.reach&&(k.reach=ae);var K=R.prev;se&&(K=y(c,K,se),O+=se.length),w(c,K,V);var Re=new a(C,F?n.tokenize(Y,F):Y,E,Y);if(R=y(c,K,Re),ce&&y(c,R,ce),V>1){var ne={cause:C+","+I,reach:ae};m(g,c,h,R.prev,O,ne),k&&ne.reach>k.reach&&(k.reach=ne.reach)}}}}}}function x(){var g={value:null,prev:null,next:null},c={value:null,prev:g,next:null};g.next=c,this.head=g,this.tail=c,this.length=0}function y(g,c,h){var f=c.next,b={value:h,prev:c,next:f};return c.next=b,f.prev=b,g.length++,b}function w(g,c,h){for(var f=c.next,b=0;b<h&&f!==g.tail;b++)f=f.next;c.next=f,f.prev=c,g.length-=b}function N(g){for(var c=[],h=g.head.next;h!==g.tail;)c.push(h.value),h=h.next;return c}return n}();s.exports=r,r.default=r}}),p=nt(it());p.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},p.languages.markup.tag.inside["attr-value"].inside.entity=p.languages.markup.entity,p.languages.markup.doctype.inside["internal-subset"].inside=p.languages.markup,p.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(p.languages.markup.tag,"addInlined",{value:function(t,o){var r={},r=(r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:p.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}}),o=(r["language-"+o]={pattern:/[\s\S]+/,inside:p.languages[o]},{});o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},p.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(p.languages.markup.tag,"addAttribute",{value:function(t,s){p.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:p.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),p.languages.html=p.languages.markup,p.languages.mathml=p.languages.markup,p.languages.svg=p.languages.markup,p.languages.xml=p.languages.extend("markup",{}),p.languages.ssml=p.languages.xml,p.languages.atom=p.languages.xml,p.languages.rss=p.languages.xml,function(t){var s={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,o="(?:[^\\\\-]|"+r.source+")",o=RegExp(o+"-"+o),l={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:o,inside:{escape:r,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":s,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:r}},"special-escape":s,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":l}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":l}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(p),p.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},p.languages.javascript=p.languages.extend("clike",{"class-name":[p.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),p.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,p.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:p.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:p.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:p.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:p.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:p.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),p.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:p.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),p.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),p.languages.markup&&(p.languages.markup.tag.addInlined("script","javascript"),p.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),p.languages.js=p.languages.javascript,p.languages.actionscript=p.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),p.languages.actionscript["class-name"].alias="function",delete p.languages.actionscript.parameter,delete p.languages.actionscript["literal-property"],p.languages.markup&&p.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:p.languages.markup}}),function(t){var s=/#(?!\{).+/,r={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:s,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:r}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:s,interpolation:r}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:r}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(p),function(t){var s=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(s,"addSupport",{value:function(r,o){(r=typeof r=="string"?[r]:r).forEach(function(l){var d=function(y){y.inside||(y.inside={}),y.inside.rest=o},n="doc-comment";if(a=t.languages[l]){var a,i=a[n];if((i=i||(a=t.languages.insertBefore(l,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[n])instanceof RegExp&&(i=a[n]={pattern:i}),Array.isArray(i))for(var m=0,x=i.length;m<x;m++)i[m]instanceof RegExp&&(i[m]={pattern:i[m]}),d(i[m]);else d(i)}})}}),s.addSupport(["java","javascript","php"],s)}(p),function(t){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,s=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(p),function(t){var s=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,s=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:s={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+s.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[s,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=s,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:s,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:s,number:r})}(p),function(t){var s=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+r.source+"(?:[ 	]+"+s.source+")?|"+s.source+"(?:[ 	]+"+r.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),d=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function n(a,i){i=(i||"").replace(/m/g,"")+"m";var m=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return a});return RegExp(m,i)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+d+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:n(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:n(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:n(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:n(d),lookbehind:!0,greedy:!0},number:{pattern:n(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:s,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(p),function(t){var s=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(m){return m=m.replace(/<inner>/g,function(){return s}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+m+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,l=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return o}),d=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,n=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+d+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+d+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+d+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(m){["url","bold","italic","strike","code-snippet"].forEach(function(x){m!==x&&(t.languages.markdown[m].inside.content.inside[x]=t.languages.markdown[x])})}),t.hooks.add("after-tokenize",function(m){m.language!=="markdown"&&m.language!=="md"||function x(y){if(y&&typeof y!="string")for(var w=0,N=y.length;w<N;w++){var g,c=y[w];c.type!=="code"?x(c.content):(g=c.content[1],c=c.content[3],g&&c&&g.type==="code-language"&&c.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),c.alias?typeof c.alias=="string"?c.alias=[c.alias,g]:c.alias.push(g):c.alias=[g]))}}(m.tokens)}),t.hooks.add("wrap",function(m){if(m.type==="code-block"){for(var x="",y=0,w=m.classes.length;y<w;y++){var N=m.classes[y],N=/language-(.+)/.exec(N);if(N){x=N[1];break}}var g,c=t.languages[x];c?m.content=t.highlight(function(h){return h=h.replace(n,""),h=h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(f,b){var k;return(b=b.toLowerCase())[0]==="#"?(k=b[1]==="x"?parseInt(b.slice(2),16):Number(b.slice(1)),i(k)):a[b]||f})}(m.content),c,x):x&&x!=="none"&&t.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),m.attributes.id=g,t.plugins.autoloader.loadLanguages(x,function(){var h=document.getElementById(g);h&&(h.innerHTML=t.highlight(h.textContent,t.languages[x],x))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),a={amp:"&",lt:"<",gt:">",quot:'"'},i=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(p),p.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:p.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},p.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var s=t.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),r=0;r<s.length;){var o=s[r++];if(o.type==="keyword"&&o.content==="mutation"){var l=[];if(y(["definition-mutation","punctuation"])&&x(1).content==="("){r+=2;var d=w(/^\($/,/^\)$/);if(d===-1)continue;for(;r<d;r++){var n=x(0);n.type==="variable"&&(N(n,"variable-input"),l.push(n.content))}r=d+1}if(y(["punctuation","property-query"])&&x(0).content==="{"&&(r++,N(x(0),"property-mutation"),0<l.length)){var a=w(/^\{$/,/^\}$/);if(a!==-1)for(var i=r;i<a;i++){var m=s[i];m.type==="variable"&&0<=l.indexOf(m.content)&&N(m,"variable-input")}}}}function x(g){return s[r+g]}function y(g,c){c=c||0;for(var h=0;h<g.length;h++){var f=x(h+c);if(!f||f.type!==g[h])return}return 1}function w(g,c){for(var h=1,f=r;f<s.length;f++){var b=s[f],k=b.content;if(b.type==="punctuation"&&typeof k=="string"){if(g.test(k))h++;else if(c.test(k)&&--h===0)return f}}return-1}function N(g,c){var h=g.alias;h?Array.isArray(h)||(g.alias=h=[h]):g.alias=h=[],h.push(c)}}),p.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var s=t.languages.javascript["template-string"],r=s.pattern.source,o=s.inside.interpolation,l=o.inside["interpolation-punctuation"],d=o.pattern.source;function n(y,w){if(t.languages[y])return{pattern:RegExp("((?:"+w+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:y}}}}function a(y,w,N){return y={code:y,grammar:w,language:N},t.hooks.run("before-tokenize",y),y.tokens=t.tokenize(y.code,y.grammar),t.hooks.run("after-tokenize",y),y.tokens}function i(y,w,N){var h=t.tokenize(y,{interpolation:{pattern:RegExp(d),lookbehind:!0}}),g=0,c={},h=a(h.map(function(b){if(typeof b=="string")return b;for(var k,C,b=b.content;y.indexOf((C=g++,k="___"+N.toUpperCase()+"_"+C+"___"))!==-1;);return c[k]=b,k}).join(""),w,N),f=Object.keys(c);return g=0,function b(k){for(var C=0;C<k.length;C++){if(g>=f.length)return;var L,I,A,F,v,S,E,M=k[C];typeof M=="string"||typeof M.content=="string"?(L=f[g],(E=(S=typeof M=="string"?M:M.content).indexOf(L))!==-1&&(++g,I=S.substring(0,E),v=c[L],A=void 0,(F={})["interpolation-punctuation"]=l,(F=t.tokenize(v,F)).length===3&&((A=[1,1]).push.apply(A,a(F[1],t.languages.javascript,"javascript")),F.splice.apply(F,A)),A=new t.Token("interpolation",F,o.alias,v),F=S.substring(E+L.length),v=[],I&&v.push(I),v.push(A),F&&(b(S=[F]),v.push.apply(v,S)),typeof M=="string"?(k.splice.apply(k,[C,1].concat(v)),C+=v.length-1):M.content=v)):(E=M.content,Array.isArray(E)?b(E):b([E]))}}(h),new t.Token(N,h,"language-"+N,y)}t.languages.javascript["template-string"]=[n("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),n("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),n("svg",/\bsvg/.source),n("markdown",/\b(?:markdown|md)/.source),n("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),n("sql",/\bsql/.source),s].filter(Boolean);var m={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function x(y){return typeof y=="string"?y:Array.isArray(y)?y.map(x).join(""):x(y.content)}t.hooks.add("after-tokenize",function(y){y.language in m&&function w(N){for(var g=0,c=N.length;g<c;g++){var h,f,b,k=N[g];typeof k!="string"&&(h=k.content,Array.isArray(h)?k.type==="template-string"?(k=h[1],h.length===3&&typeof k!="string"&&k.type==="embedded-code"&&(f=x(k),k=k.alias,k=Array.isArray(k)?k[0]:k,b=t.languages[k])&&(h[1]=i(f,b,k))):w(h):typeof h!="string"&&w([h]))}}(y.tokens)})}(p),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var s=t.languages.extend("typescript",{});delete s["class-name"],t.languages.typescript["class-name"].inside=s,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),t.languages.ts=t.languages.typescript}(p),function(t){var s=t.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,o="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(o+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(o+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:s,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:s.string,number:s.number,boolean:s.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:s,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(p),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(p),p.languages.n4js=p.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),p.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),p.languages.n4jsd=p.languages.n4js,function(t){function s(n,a){return RegExp(n.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),a)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:s(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:s(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:s(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],o=0;o<r.length;o++){var d=r[o],l=t.languages.javascript[d],d=(l=t.util.type(l)==="RegExp"?t.languages.javascript[d]={pattern:l}:l).inside||{};(l.inside=d)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(p),function(t){var s=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function d(i,m){return i=i.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return l}),RegExp(i,m)}l=d(l).source,t.languages.jsx=t.languages.extend("markup",s),t.languages.jsx.tag.pattern=d(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=s.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:d(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:d(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function n(i){for(var m=[],x=0;x<i.length;x++){var y=i[x],w=!1;typeof y!="string"&&(y.type==="tag"&&y.content[0]&&y.content[0].type==="tag"?y.content[0].content[0].content==="</"?0<m.length&&m[m.length-1].tagName===a(y.content[0].content[1])&&m.pop():y.content[y.content.length-1].content!=="/>"&&m.push({tagName:a(y.content[0].content[1]),openedBraces:0}):0<m.length&&y.type==="punctuation"&&y.content==="{"?m[m.length-1].openedBraces++:0<m.length&&0<m[m.length-1].openedBraces&&y.type==="punctuation"&&y.content==="}"?m[m.length-1].openedBraces--:w=!0),(w||typeof y=="string")&&0<m.length&&m[m.length-1].openedBraces===0&&(w=a(y),x<i.length-1&&(typeof i[x+1]=="string"||i[x+1].type==="plain-text")&&(w+=a(i[x+1]),i.splice(x+1,1)),0<x&&(typeof i[x-1]=="string"||i[x-1].type==="plain-text")&&(w=a(i[x-1])+w,i.splice(x-1,1),x--),i[x]=new t.Token("plain-text",w,null,w)),y.content&&typeof y.content!="string"&&n(y.content)}}var a=function(i){return i?typeof i=="string"?i:typeof i.content=="string"?i.content:i.content.map(a).join(""):""};t.hooks.add("after-tokenize",function(i){i.language!=="jsx"&&i.language!=="tsx"||n(i.tokens)})}(p),function(t){var s=t.util.clone(t.languages.typescript),s=(t.languages.tsx=t.languages.extend("jsx",s),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);s.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+s.pattern.source+")",s.pattern.flags),s.lookbehind=!0}(p),p.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},p.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=p.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var s={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:s},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:s},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(p),p.languages.c=p.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),p.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),p.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},p.languages.c.string],char:p.languages.c.char,comment:p.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:p.languages.c}}}}),p.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete p.languages.c.boolean,p.languages.objectivec=p.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete p.languages.objectivec["class-name"],p.languages.objc=p.languages.objectivec,p.languages.reason=p.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),p.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete p.languages.reason.function,function(t){for(var s=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,r=0;r<2;r++)s=s.replace(/<self>/g,function(){return s});s=s.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+s),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(p),p.languages.go=p.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),p.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete p.languages.go["class-name"],function(t){var s=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,r=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return s.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:s,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return r})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(p),p.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},p.languages.python["string-interpolation"].inside.interpolation.inside.rest=p.languages.python,p.languages.py=p.languages.python,p.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},p.languages.webmanifest=p.languages.json;var de={};st(de,{dracula:()=>lt,duotoneDark:()=>ct,duotoneLight:()=>gt,github:()=>xt,gruvboxMaterialDark:()=>zt,gruvboxMaterialLight:()=>Ht,jettwaveDark:()=>Mt,jettwaveLight:()=>Dt,nightOwl:()=>ht,nightOwlLight:()=>bt,oceanicNext:()=>jt,okaidia:()=>vt,oneDark:()=>Ot,oneLight:()=>Ut,palenight:()=>Nt,shadesOfPurple:()=>Et,synthwave84:()=>Tt,ultramin:()=>At,vsDark:()=>Te,vsLight:()=>Ft});var ot={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},lt=ot,dt={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},ct=dt,mt={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},gt=mt,ut={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},xt=ut,pt={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},ht=pt,yt={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},bt=yt,B={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",tag:"#fc929e",function:"#79b6f2",className:"#FAC863"},ft={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:B.keyword}},{types:["attr-value"],style:{color:B.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:B.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:B.primitive}},{types:["boolean"],style:{color:B.boolean}},{types:["tag"],style:{color:B.tag}},{types:["string"],style:{color:B.string}},{types:["punctuation"],style:{color:B.string}},{types:["selector","char","builtin","inserted"],style:{color:B.char}},{types:["function"],style:{color:B.function}},{types:["operator","entity","url","variable"],style:{color:B.variable}},{types:["keyword"],style:{color:B.keyword}},{types:["atrule","class-name"],style:{color:B.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},jt=ft,kt={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},vt=kt,wt={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Nt=wt,Ct={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},Et=Ct,St={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Tt=St,Lt={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},At=Lt,It={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},Te=It,Rt={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Ft=Rt,Pt={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Mt=Pt,Bt={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Dt=Bt,_t={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},Ot=_t,qt={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},Ut=qt,$t={plain:{color:"#ebdbb2",backgroundColor:"#292828"},styles:[{types:["imports","class-name","maybe-class-name","constant","doctype","builtin","function"],style:{color:"#d8a657"}},{types:["property-access"],style:{color:"#7daea3"}},{types:["tag"],style:{color:"#e78a4e"}},{types:["attr-name","char","url","regex"],style:{color:"#a9b665"}},{types:["attr-value","string"],style:{color:"#89b482"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#ea6962"}},{types:["entity","number","symbol"],style:{color:"#d3869b"}}]},zt=$t,Wt={plain:{color:"#654735",backgroundColor:"#f9f5d7"},styles:[{types:["delimiter","boolean","keyword","selector","important","atrule","property","variable","deleted"],style:{color:"#af2528"}},{types:["imports","class-name","maybe-class-name","constant","doctype","builtin"],style:{color:"#b4730e"}},{types:["string","attr-value"],style:{color:"#477a5b"}},{types:["property-access"],style:{color:"#266b79"}},{types:["function","attr-name","char","url"],style:{color:"#72761e"}},{types:["tag"],style:{color:"#b94c07"}},{types:["comment","prolog","cdata","operator","inserted"],style:{color:"#a89984"}},{types:["entity","number","symbol"],style:{color:"#924f79"}}]},Ht=Wt,Gt=t=>j.useCallback(s=>{var r=s,{className:o,style:l,line:d}=r,n=Se(r,["className","style","line"]);const a=re(q({},n),{className:Ne("token-line",o)});return typeof t=="object"&&"plain"in t&&(a.style=t.plain),typeof l=="object"&&(a.style=q(q({},a.style||{}),l)),a},[t]),Vt=t=>{const s=j.useCallback(({types:r,empty:o})=>{if(t!=null){{if(r.length===1&&r[0]==="plain")return o!=null?{display:"inline-block"}:void 0;if(r.length===1&&o!=null)return t[r[0]]}return Object.assign(o!=null?{display:"inline-block"}:{},...r.map(l=>t[l]))}},[t]);return j.useCallback(r=>{var o=r,{token:l,className:d,style:n}=o,a=Se(o,["token","className","style"]);const i=re(q({},a),{className:Ne("token",...l.types,d),children:l.content,style:s(l)});return n!=null&&(i.style=q(q({},i.style||{}),n)),i},[s])},Jt=/\r\n|\r|\n/,pe=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},he=(t,s)=>{const r=t.length;return r>0&&t[r-1]===s?t:t.concat(s)},Yt=t=>{const s=[[]],r=[t],o=[0],l=[t.length];let d=0,n=0,a=[];const i=[a];for(;n>-1;){for(;(d=o[n]++)<l[n];){let m,x=s[n];const w=r[n][d];if(typeof w=="string"?(x=n>0?x:["plain"],m=w):(x=he(x,w.type),w.alias&&(x=he(x,w.alias)),m=w.content),typeof m!="string"){n++,s.push(x),r.push(m),o.push(0),l.push(m.length);continue}const N=m.split(Jt),g=N.length;a.push({types:x,content:N[0]});for(let c=1;c<g;c++)pe(a),i.push(a=[]),a.push({types:x,content:N[c]})}n--,s.pop(),r.pop(),o.pop(),l.pop()}return pe(a),i},ye=Yt,Kt=({prism:t,code:s,grammar:r,language:o})=>j.useMemo(()=>{if(r==null)return ye([s]);const l={code:s,grammar:r,language:o,tokens:[]};return t.hooks.run("before-tokenize",l),l.tokens=t.tokenize(s,r),t.hooks.run("after-tokenize",l),ye(l.tokens)},[s,r,o,t]),Zt=(t,s)=>{const{plain:r}=t,o=t.styles.reduce((l,d)=>{const{languages:n,style:a}=d;return n&&!n.includes(s)||d.types.forEach(i=>{const m=q(q({},l[i]),a);l[i]=m}),l},{});return o.root=r,o.plain=re(q({},r),{backgroundColor:void 0}),o},Qt=Zt,Xt=({children:t,language:s,code:r,theme:o,prism:l})=>{const d=s.toLowerCase(),n=Qt(o,d),a=Gt(n),i=Vt(n),m=l.languages[d],x=Kt({prism:l,language:d,code:r,grammar:m});return t({tokens:x,className:`prism-code language-${d}`,style:n!=null?n.root:{},getLineProps:a,getTokenProps:i})},er=t=>j.createElement(Xt,re(q({},t),{prism:t.prism||p,theme:t.theme||Te,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/const tr=de.vsDark,rr=de.github;function u({code:t,language:s,showLineNumbers:r=!1,showCopyButton:o=!0,showLanguageBadge:l=!0,fileName:d=null,className:n=""}){const[a,i]=j.useState(!1),[m,x]=j.useState(!0);j.useEffect(()=>{const c=document.documentElement.classList.contains("dark");x(c);const h=new MutationObserver(f=>{f.forEach(b=>{if(b.attributeName==="class"){const k=document.documentElement.classList.contains("dark");x(k)}})});return h.observe(document.documentElement,{attributes:!0}),()=>h.disconnect()},[]);const y=async()=>{try{await navigator.clipboard.writeText(t),i(!0),setTimeout(()=>{i(!1)},2e3)}catch(c){console.error("Failed to copy code:",c)}},w=c=>({js:"JavaScript",jsx:"React",ts:"TypeScript",tsx:"React TSX",bash:"Terminal",sh:"Shell",html:"HTML",css:"CSS",json:"JSON",md:"Markdown",yml:"YAML",yaml:"YAML"})[c]||c,N=t.trim()+(t.endsWith(`
`)?"":`
`),g=s||(n!=null&&n.startsWith("language-")?n.replace("language-",""):"text");return e.jsx("div",{className:"code-block",children:e.jsxs("div",{className:`group relative my-6 rounded-lg overflow-hidden shadow-sm ${m?"border border-gray-700":"border border-indigo-100"} ${n}`,children:[(d||l)&&e.jsxs("div",{className:`flex items-center justify-between px-4 py-2 ${m?"bg-gray-800 text-gray-200 border-b border-gray-700":"bg-indigo-50 text-indigo-800 border-b border-indigo-100"}`,children:[d&&e.jsx("div",{className:"text-sm font-mono",children:d}),l&&!d&&e.jsx("div",{className:`text-xs font-medium uppercase tracking-wider ${m?"text-gray-400":"text-indigo-600"}`,children:w(g)})]}),e.jsx(er,{theme:m?tr:rr,code:N,language:g,children:({className:c,style:h,tokens:f,getLineProps:b,getTokenProps:k})=>e.jsx("pre",{className:`${c} overflow-x-auto py-4 text-sm`,style:{...h,marginTop:0,backgroundColor:m?"#1e1e1e":"#f8f9fc",borderRadius:0},children:f.map((C,L)=>e.jsxs("div",{...b({line:C,key:L}),className:`px-4 ${r?"pl-12 relative":""}`,children:[r&&e.jsx("span",{className:`absolute left-0 px-4 select-none text-right w-8 ${m?"text-gray-500":"text-indigo-300"}`,children:L+1}),C.map((I,A)=>e.jsx("span",{...k({token:I,key:A})},A))]},L))})}),o&&e.jsx("button",{onClick:y,className:`absolute top-4 right-4 p-2 rounded-md transition-all ${a?"bg-green-500 text-white":m?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-indigo-100 text-indigo-700 hover:bg-indigo-200"} ${a?"":"opacity-0 group-hover:opacity-100"}`,"aria-label":"Copy code to clipboard",title:"Copy code to clipboard",children:a?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:[e.jsx("path",{d:"M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z"}),e.jsx("path",{d:"M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z"})]})})]})})}function sr(){return ve(),e.jsxs("div",{className:"max-w-8xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"relative overflow-hidden py-6 pb-12  px-4",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 -z-10"}),e.jsxs("div",{className:"absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-40 -left-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob"}),e.jsx("div",{className:"absolute top-40 -right-40 w-80 h-80 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute -bottom-40 left-20 w-80 h-80 bg-voila-purple/20 dark:bg-voila-purple/10 rounded-full blur-3xl animate-blob animation-delay-4000"})]}),e.jsxs("div",{className:"relative max-w-5xl mx-auto text-center",children:[e.jsx("div",{className:"mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-md",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-10 h-10 text-voila-blue",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),e.jsx("h1",{className:"text-4xl md:text-6xl font-extrabold mb-6 logo",children:e.jsx("span",{className:" text-transparent bg-clip-text bg-gradient-to-r from-voila-blue via-blue-600 to-voila-purple",children:"@voilajsx/appkit"})}),e.jsx("p",{className:"text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10",children:"A minimal, framework-agnostic Node.js toolkit providing essential building blocks for modern applications."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 md:gap-6",children:[e.jsx(T,{to:"/docs/getting-started",className:"transform transition-all duration-300 px-8 py-4 bg-voila-blue text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1",children:"Get Started →"}),e.jsx("a",{href:"https://github.com/voilajsx/appkit",target:"_blank",rel:"noopener noreferrer",className:"transform transition-all duration-300 px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-xl shadow-lg hover:shadow-gray-300/60 dark:hover:shadow-gray-900/60 hover:-translate-y-1",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]})}),e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer",className:"transform transition-all duration-300 px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-xl shadow-lg hover:shadow-gray-300/60 dark:hover:shadow-gray-900/60 hover:-translate-y-1",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M0 0v24h24v-24h-24zm13 21h-2v-9h-4v9h-4v-12h10v12zm8 0h-5v-6h2v3h1v-3h2v6z"})}),"npm"]})})]}),e.jsxs("div",{className:"mt-10 flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400",children:[e.jsxs("span",{className:"flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full mr-2"}),"v1.0.0"]}),e.jsxs("span",{className:"flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 bg-blue-500 rounded-full mr-2"}),"MIT License"]}),e.jsxs("span",{className:"flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 bg-purple-500 rounded-full mr-2"}),"Node.js 14+"]})]})]})]}),e.jsxs("div",{className:"my-16 px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Key Principles"}),e.jsx("div",{className:"w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Built with modern practices for real-world applications."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-400 text-2xl",children:"⚡"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",children:"Minimal By Design"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Lightweight utilities with no bloat, optimized for performance."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 text-2xl",children:"🔄"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:"Framework-Agnostic"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Works with any Node.js framework without lock-in."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-400 text-2xl",children:"🧩"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors",children:"Modular Architecture"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Import only what you need with focused, independent modules."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-cyan-50 dark:bg-cyan-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-cyan-600 dark:text-cyan-400 text-2xl",children:"💪"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors",children:"First-Class TypeScript"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"TypeScript support with full type definitions for safer coding."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-teal-50 dark:bg-teal-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-teal-600 dark:text-teal-400 text-2xl",children:"📘"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors",children:"Good Documentation"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Clear, comprehensive docs with examples and best practices."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-red-50 dark:bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-red-600 dark:text-red-400 text-2xl",children:"🔒"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors",children:"Security-Focused"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Secure coding practices with audited modules and safe defaults."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-green-50 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-400 text-2xl",children:"✅"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors",children:"Comprehensively Tested"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Thoroughly tested with unit, integration, and edge case tests."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-400 text-2xl",children:"🚀"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors",children:"Production-Ready"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Battle-tested utilities for reliable, high-performance apps."})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300 overflow-hidden group",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-violet-50 dark:bg-violet-900/30 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-colors flex-shrink-0",children:e.jsx("span",{className:"text-violet-600 dark:text-violet-400 text-2xl",children:"🧠"})}),e.jsx("h3",{className:"h3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors",children:"AI-Enhanced"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Optimized for LLMs with AI-specific guides for rapid development."})]})})]})]}),e.jsxs("div",{className:"mb-8 mt-16 px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Modules Overview"}),e.jsx("div",{className:"w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Our library consists of 13 independent modules, each focused on solving specific aspects of application development."})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Module"}),e.jsx("th",{scope:"col",className:"px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Description"}),e.jsx("th",{scope:"col",className:"px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Key Methods"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/auth",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"🔐"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Auth"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Authentication and authorization utilities"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md font-mono",children:"generateToken"}),e.jsx("code",{className:"inline-block text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md font-mono",children:"verifyToken"}),e.jsx("code",{className:"inline-block text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md font-mono",children:"hashPassword"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/cache",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"⚡"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Cache"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Caching with in-memory or Redis strategies"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-md font-mono",children:"createCache"}),e.jsx("code",{className:"inline-block text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-md font-mono",children:"get"}),e.jsx("code",{className:"inline-block text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-md font-mono",children:"set"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/config",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"⚙️"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Config"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Environment-based configuration management"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-md font-mono",children:"loadConfig"}),e.jsx("code",{className:"inline-block text-xs bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-md font-mono",children:"getConfig"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/email",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-sky-50 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"📧"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Email"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Template-based email sending"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-md font-mono",children:"initEmail"}),e.jsx("code",{className:"inline-block text-xs bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-md font-mono",children:"sendEmail"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/error",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"🚨"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Error"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Consistent error handling and formatting"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-md font-mono",children:"createError"}),e.jsx("code",{className:"inline-block text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-md font-mono",children:"notFoundError"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/events",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"📡"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Events"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Pub/sub event bus for decoupled communication"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-md font-mono",children:"subscribe"}),e.jsx("code",{className:"inline-block text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-md font-mono",children:"publish"}),e.jsx("code",{className:"inline-block text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-md font-mono",children:"unsubscribe"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/logging",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"📝"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Logging"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Structured logging with multiple transports"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md font-mono",children:"createLogger"}),e.jsx("code",{className:"inline-block text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md font-mono",children:"info"}),e.jsx("code",{className:"inline-block text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md font-mono",children:"error"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/queue",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-rose-50 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"⏱️"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Queue"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Background job processing"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-2 py-1 rounded-md font-mono",children:"initQueue"}),e.jsx("code",{className:"inline-block text-xs bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-2 py-1 rounded-md font-mono",children:"addJob"}),e.jsx("code",{className:"inline-block text-xs bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-2 py-1 rounded-md font-mono",children:"processJob"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/security",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-red-50 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"🛡️"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Security"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"CSRF protection, rate limiting, and sanitization"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded-md font-mono",children:"createCsrfMiddleware"}),e.jsx("code",{className:"inline-block text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded-md font-mono",children:"createRateLimiter"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/storage",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"💾"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Storage"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"File storage abstraction for local and cloud providers"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md font-mono",children:"initStorage"}),e.jsx("code",{className:"inline-block text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md font-mono",children:"upload"}),e.jsx("code",{className:"inline-block text-xs bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md font-mono",children:"download"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/tenantdb",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"🏢"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"TenantDB"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Multi-tenant database management"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-mono",children:"createDb"}),e.jsx("code",{className:"inline-block text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-mono",children:"forTenant"}),e.jsx("code",{className:"inline-block text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-mono",children:"createTenant"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/utils",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"🔧"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Utils"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Helper functions for data manipulation and async tasks"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-mono",children:"pick"}),e.jsx("code",{className:"inline-block text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-mono",children:"deepMerge"}),e.jsx("code",{className:"inline-block text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md font-mono",children:"retry"})]})})]}),e.jsxs("tr",{className:"transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("a",{href:"/appkit/docs/validation",className:"flex items-center group",children:[e.jsx("div",{className:"flex-shrink-0 w-9 h-9 bg-lime-50 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-lg",children:"✓"})}),e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400 group-hover:underline",children:"Validation"})]})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Schema-based data validation"})}),e.jsx("td",{className:"px-6 py-4 text-sm",children:e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("code",{className:"inline-block text-xs bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300 px-2 py-1 rounded-md font-mono",children:"createValidator"}),e.jsx("code",{className:"inline-block text-xs bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300 px-2 py-1 rounded-md font-mono",children:"validate"})]})})]})]})]})})}),e.jsx("div",{className:"text-center mt-8",children:e.jsxs(T,{to:"/docs/getting-started",className:"inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",children:["Explore all modules",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("div",{className:"mb-8 mt-16 px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-10",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Why Use AppKit?"}),e.jsx("div",{className:"w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Build robust applications faster with production-ready utilities"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsx("div",{className:"bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]",children:e.jsxs("div",{className:"p-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5 text-white shadow-sm group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-white",children:"Accelerate Development"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Stop reinventing common functionality"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Consistent API across all utilities"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Focus on business logic, not infrastructure"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Cut development time in half"})]})]})]})}),e.jsx("div",{className:"bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]",children:e.jsxs("div",{className:"p-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-5 text-white shadow-sm group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-white",children:"Production-Ready"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Based on real-world usage patterns"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Optimized for performance and stability"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Secure by default implementation"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Battle-tested in high-traffic applications"})]})]})]})}),e.jsx("div",{className:"bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-amber-900/20 rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]",children:e.jsxs("div",{className:"p-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-5 text-white shadow-sm group-hover:scale-110 transition-transform duration-300",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-white",children:"Developer Experience"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Comprehensive documentation with examples"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"First-class TypeScript support"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Modular structure for picking what you need"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"flex-shrink-0 text-green-500 mr-2",children:"✓"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"AI-optimized for code generation"})]})]})]})})]}),e.jsxs("div",{className:"mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"13"}),e.jsx("div",{className:"text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Modules"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"100+"}),e.jsx("div",{className:"text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Utility Functions"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"98%"}),e.jsx("div",{className:"text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Test Coverage"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"2x"}),e.jsx("div",{className:"text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400",children:"Development Speed"})]})]}),e.jsx("div",{className:"mt-12 bg-gray-100 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm",children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("svg",{className:"h-10 w-10 text-gray-400 dark:text-gray-500 mb-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179"})}),e.jsx("blockquote",{className:"text-lg italic text-gray-600 dark:text-gray-300 max-w-4xl",children:"AppKit has transformed how we build our applications. We’ve significantly sped up the development process while enhancing code quality and long-term maintainability."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-white",children:"Krishna Teja"}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"CTO at Fresherbot"})]})]})})]})]})}function be(){const[t,s]=j.useState("installation");j.useEffect(()=>{const o=()=>{const l=["installation","basic-usage","module-imports","example-project","compatibility","next-steps"];for(const d of l){const n=document.getElementById(d);if(!n)continue;const a=n.getBoundingClientRect();if(a.top<=100&&a.bottom>=100){s(d);break}}};return window.addEventListener("scroll",o),o(),()=>{window.removeEventListener("scroll",o)}},[]);const r=o=>{const l=document.getElementById(o);l&&(window.scrollTo({top:l.offsetTop-80,behavior:"smooth"}),s(o))};return e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"w-full lg:w-3/4  p-3 lg:pr-16",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Getting Started"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Learn how to quickly integrate @voilajsx/appkit into your Node.js applications."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Installation"}),e.jsx("p",{className:"mb-4",children:"Install @voilajsx/appkit using your preferred package manager:"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Using npm:"}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Using yarn:"}),e.jsx(u,{code:"yarn add @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Using pnpm:"}),e.jsx(u,{code:"pnpm add @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 rounded",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Note:"})," @voilajsx/appkit requires Node.js version 14.0.0 or later."]})})]}),e.jsxs("section",{id:"basic-usage",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Basic Usage"}),e.jsx("p",{className:"mb-4",children:"Here's a simple example showing how to use @voilajsx/appkit modules in your application:"}),e.jsx(u,{code:`import { auth, logging } from '@voilajsx/appkit';

// Initialize logger
const logger = logging.createLogger({
  level: 'info',
  pretty: process.env.NODE_ENV !== 'production'
});

// Generate a JWT token
const token = auth.generateToken(
  { userId: '123', email: 'user@example.com' },
  { secret: process.env.JWT_SECRET, expiresIn: '1d' }
);

logger.info({ token }, 'Generated authentication token');`,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"mt-4",children:["The example above demonstrates importing two modules (",e.jsx("code",{children:"auth"})," and ",e.jsx("code",{children:"logging"}),"), initializing a logger, and generating a JWT token."]})]}),e.jsxs("section",{id:"module-imports",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Module Imports"}),e.jsx("p",{className:"mb-4",children:"@voilajsx/appkit is designed to be modular, allowing you to import only what you need. Here are different ways to import the modules:"}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Import all modules:"}),e.jsx(u,{code:`import * as appkit from '@voilajsx/appkit';

const logger = appkit.logging.createLogger();
const token = appkit.auth.generateToken({ userId: '123' }, { secret: 'your-secret' });`,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Import specific modules:"}),e.jsx(u,{code:`import { auth, logging, cache } from '@voilajsx/appkit';

const logger = logging.createLogger();
const token = auth.generateToken({ userId: '123' }, { secret: 'your-secret' });`,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Direct module import (recommended for tree-shaking):"}),e.jsx(u,{code:`import { createLogger } from '@voilajsx/appkit/logging';
import { generateToken } from '@voilajsx/appkit/auth';

const logger = createLogger();
const token = generateToken({ userId: '123' }, { secret: 'your-secret' });`,language:"javascript",showCopyButton:!0})]}),e.jsx("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 dark:border-yellow-400 rounded",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200",children:[e.jsx("strong",{children:"Best Practice:"})," For optimal bundle size in production applications, import modules directly from their paths as shown in the last example."]})})]}),e.jsxs("section",{id:"example-project",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Example Project"}),e.jsx("p",{className:"mb-4",children:"Here's a more complete example showing how to create a simple Express API with @voilajsx/appkit:"}),e.jsx(u,{code:`import express from 'express';
import { auth, logging, error, validation, config } from '@voilajsx/appkit';

// Initialize app
const app = express();
app.use(express.json());

// Load configuration
config.loadConfig({
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret',
    expiresIn: '7d'
  },
  server: {
    port: process.env.PORT || 3000
  }
});

// Create logger
const logger = logging.createLogger();

// Create validation schema
const userSchema = validation.createValidator({
  email: { type: 'string', format: 'email', required: true },
  password: { type: 'string', minLength: 8, required: true }
});

// Create error handler
const errorHandler = error.createErrorHandler({
  logger,
  formatError: (err) => ({
    error: err.message,
    code: err.code || 'INTERNAL_ERROR',
    status: err.status || 500
  })
});

// Create authentication middleware
const authenticate = auth.createAuthMiddleware({
  secret: config.getConfig('jwt.secret')
});

// Routes
app.post('/login', async (req, res, next) => {
  try {
    // Validate request body
    validation.validate(req.body, userSchema);
    
    // Authentication logic here...
    const user = { id: '123', email: req.body.email };
    
    // Generate token
    const token = auth.generateToken(
      { userId: user.id, email: user.email },
      { 
        secret: config.getConfig('jwt.secret'),
        expiresIn: config.getConfig('jwt.expiresIn')
      }
    );
    
    res.json({ token, user });
  } catch (err) {
    next(err);
  }
});

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Error handling
app.use(error.notFoundHandler());
app.use(errorHandler);

// Start server
const port = config.getConfig('server.port');
app.listen(port, () => {
  logger.info({ port }, 'Server started');
});`,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"mt-4",children:"This example demonstrates using multiple modules together to create a simple API with authentication, validation, error handling, logging, and configuration management."})]}),e.jsxs("section",{id:"compatibility",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Framework Compatibility"}),e.jsx("p",{className:"mb-4",children:"@voilajsx/appkit is designed to be framework-agnostic and works seamlessly with popular Node.js frameworks:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"font-semibold mb-2 text-xl flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✅"}),"Express"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Full compatibility with middleware support and Express-specific helpers."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"font-semibold mb-2 text-xl flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✅"}),"Fastify"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Works with Fastify's plugin system and request/reply model."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"font-semibold text-xl mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✅"}),"Koa"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Compatible with Koa's middleware pattern and context object."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"font-semibold mb-2  text-xl flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✅"}),"NestJS"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Can be used within NestJS modules, services, and providers."})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Framework-Specific Examples"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("a",{href:"/docs/examples/express",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Express integration example"})}),e.jsx("li",{children:e.jsx("a",{href:"/docs/examples/fastify",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Fastify integration example"})}),e.jsx("li",{children:e.jsx("a",{href:"/docs/examples/koa",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Koa integration example"})}),e.jsx("li",{children:e.jsx("a",{href:"/docs/examples/nestjs",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"NestJS integration example"})})]})]})]}),e.jsxs("section",{id:"next-steps",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Next Steps"}),e.jsx("p",{className:"mb-4",children:"Now that you understand the basics, explore these resources to dive deeper into @voilajsx/appkit:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Explore Modules"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Dive into each module's documentation to learn about all available features."}),e.jsxs(T,{to:"/docs#modules",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View all modules",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example Projects"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"See complete example projects that demonstrate real-world usage patterns."}),e.jsxs(T,{to:"/docs/examples",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View examples",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"API Reference"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Explore the detailed API documentation for each module."}),e.jsxs(T,{to:"/docs/api-reference",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View API reference",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"GitHub Repository"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"View the source code, report issues, or contribute to the project."}),e.jsxs("a",{href:"https://github.com/voilajsx/appkit",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["Visit GitHub",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})]})]})]}),e.jsx("div",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky",style:{top:"5rem"},children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("nav",{className:"toc ",children:e.jsxs("ul",{className:"space-y-2 text-sm p-0 m-0",children:[e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("installation"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="installation"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Installation"})}),e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("basic-usage"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="basic-usage"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Basic Usage"})}),e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("module-imports"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="module-imports"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Module Imports"})}),e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("example-project"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="example-project"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Example Project"})}),e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("compatibility"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="compatibility"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Framework Compatibility"})}),e.jsx("li",{class:"list-none",children:e.jsx("button",{onClick:()=>r("next-steps"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="next-steps"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Next Steps"})})]})})]})})})]})}function ar(){const[t,s]=j.useState("introduction");j.useEffect(()=>{const o=()=>{const l=["introduction","core-modules","auth-module","cache-module","config-module","email-module","error-module","events-module","logging-module","queue-module","security-module","storage-module","tenantdb-module","validation-module","utils-module","example-integration","next-steps"];for(const d of l){const n=document.getElementById(d);if(!n)continue;const a=n.getBoundingClientRect();if(a.top<=100&&a.bottom>=100){s(d);break}}};return window.addEventListener("scroll",o),o(),()=>{window.removeEventListener("scroll",o)}},[]);const r=o=>{const l=document.getElementById(o);l&&(window.scrollTo({top:l.offsetTop-80,behavior:"smooth"}),s(o))};return e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-3 lg:pr-16",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"@voilajsx/appkit Overview"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"A comprehensive toolkit for building robust Node.js applications with integrated modules for authentication, caching, error handling, and more."})]}),e.jsxs("section",{id:"introduction",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Introduction"}),e.jsx("p",{className:"mb-4",children:"@voilajsx/appkit is a modular, framework-agnostic library designed to simplify common Node.js application development tasks. It provides a collection of well-designed, thoroughly tested modules that work seamlessly together while remaining independently usable."}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsx("li",{children:"Modular design with consistent APIs across all modules"}),e.jsx("li",{children:"Framework-agnostic, works with Express, Fastify, Koa, NestJS, and more"}),e.jsx("li",{children:"Follows modern Node.js best practices and patterns"}),e.jsx("li",{children:"Fully typed with TypeScript for improved developer experience"}),e.jsx("li",{children:"Comprehensive documentation and examples"}),e.jsx("li",{children:"Built with security and performance in mind"})]})]}),e.jsx("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 rounded",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Designed for Production:"})," @voilajsx/appkit is built for real-world application development, with a focus on reliability, security, and maintainability. Each module includes sensible defaults while allowing extensive customization."]})})]}),e.jsxs("section",{id:"core-modules",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Core Modules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🔐"}),"Auth"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"JWT token management, password hashing, and authentication middleware."}),e.jsxs("button",{onClick:()=>r("auth-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"⚡"}),"Cache"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Flexible caching with support for memory, Redis, and custom cache strategies."}),e.jsxs("button",{onClick:()=>r("cache-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"⚙️"}),"Config"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Environment-aware configuration management with validation and watching."}),e.jsxs("button",{onClick:()=>r("config-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"📧"}),"Email"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Send emails with various providers, templates, and attachments."}),e.jsxs("button",{onClick:()=>r("email-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"❌"}),"Error"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Structured error handling with typed errors and middleware."}),e.jsxs("button",{onClick:()=>r("error-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🔔"}),"Events"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Publish-subscribe event system with async support and history."}),e.jsxs("button",{onClick:()=>r("events-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"📝"}),"Logging"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Structured logging with multiple transports and contextual loggers."}),e.jsxs("button",{onClick:()=>r("logging-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"📊"}),"Queue"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Background job processing with retries, priorities, and monitoring."}),e.jsxs("button",{onClick:()=>r("queue-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🛡️"}),"Security"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"CSRF protection, rate limiting, and input sanitization."}),e.jsxs("button",{onClick:()=>r("security-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"💾"}),"Storage"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"File storage with local and cloud provider support."}),e.jsxs("button",{onClick:()=>r("storage-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🏢"}),"TenantDB"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Multi-tenant database management for SaaS applications."}),e.jsxs("button",{onClick:()=>r("tenantdb-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"✅"}),"Validation"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Input validation with schema support and custom rules."}),e.jsxs("button",{onClick:()=>r("validation-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🔧"}),"Utils"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Helper functions for common operations like string handling and date manipulation."}),e.jsxs("button",{onClick:()=>r("utils-module"),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["Learn more",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})]})]}),e.jsxs("section",{id:"auth-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🔐"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Auth Module"})]}),e.jsx("p",{className:"mb-4",children:"The Auth module provides secure, flexible authentication utilities for Node.js applications, including JWT token management, password hashing, and middleware for protecting routes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"JWT token generation and verification"}),e.jsx("li",{children:"Secure password hashing with bcrypt"}),e.jsx("li",{children:"Framework-agnostic authentication middleware"}),e.jsx("li",{children:"Role-based access control"}),e.jsx("li",{children:"Customizable token sources and error handling"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"User authentication in web applications"}),e.jsx("li",{children:"Protecting API routes"}),e.jsx("li",{children:"Securing admin panels and sensitive operations"}),e.jsx("li",{children:"Token-based authentication for SPAs and mobile apps"}),e.jsx("li",{children:"Implementing role-based permissions"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  generateToken, 
  verifyToken, 
  hashPassword, 
  comparePassword,
  createAuthMiddleware 
} from '@voilajsx/appkit/auth';

// Generate a JWT token
const token = generateToken(
  { userId: '123', email: 'user@example.com' },
  { secret: process.env.JWT_SECRET, expiresIn: '1d' }
);

// Verify a token
try {
  const payload = verifyToken(token, { secret: process.env.JWT_SECRET });
  console.log(payload.userId); // '123'
} catch (error) {
  console.log('Invalid token');
}

// Hash a password
const hash = await hashPassword('myPassword123');

// Verify a password
const isValid = await comparePassword('myPassword123', hash);

// Create middleware to protect routes
const auth = createAuthMiddleware({ secret: process.env.JWT_SECRET });
app.get('/profile', auth, (req, res) => {
  // req.user contains the decoded token payload
  res.json({ user: req.user });
});
`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/auth",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Auth",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"auth-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🔐"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Auth Module"})]}),e.jsx("p",{className:"mb-4",children:"The Auth module provides secure, flexible authentication utilities for Node.js applications, including JWT token management, password hashing, and middleware for protecting routes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"JWT token generation and verification"}),e.jsx("li",{children:"Secure password hashing with bcrypt"}),e.jsx("li",{children:"Framework-agnostic authentication middleware"}),e.jsx("li",{children:"Role-based access control"}),e.jsx("li",{children:"Customizable token sources and error handling"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"User authentication in web applications"}),e.jsx("li",{children:"Protecting API routes"}),e.jsx("li",{children:"Securing admin panels and sensitive operations"}),e.jsx("li",{children:"Token-based authentication for SPAs and mobile apps"}),e.jsx("li",{children:"Implementing role-based permissions"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  generateToken, 
  verifyToken, 
  hashPassword, 
  comparePassword,
  createAuthMiddleware 
} from '@voilajsx/appkit/auth';

// Generate a JWT token
const token = generateToken(
  { userId: '123', email: 'user@example.com' },
  { secret: process.env.JWT_SECRET, expiresIn: '1d' }
);

// Verify a token
try {
  const payload = verifyToken(token, { secret: process.env.JWT_SECRET });
  console.log(payload.userId); // '123'
} catch (error) {
  console.log('Invalid token');
}

// Hash a password
const hash = await hashPassword('myPassword123');

// Verify a password
const isValid = await comparePassword('myPassword123', hash);

// Create middleware to protect routes
const auth = createAuthMiddleware({ secret: process.env.JWT_SECRET });
app.get('/profile', auth, (req, res) => {
  // req.user contains the decoded token payload
  res.json({ user: req.user });
});
`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/auth",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Auth",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"cache-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"⚡"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Cache Module"})]}),e.jsx("p",{className:"mb-4",children:"The Cache module provides a flexible, easy-to-use caching system that supports multiple storage strategies including in-memory, Redis, and more, with a consistent API."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple cache storage adapters (memory, Redis, Memcached)"}),e.jsx("li",{children:"Consistent API across different adapters"}),e.jsx("li",{children:"TTL support for cache expiration"}),e.jsx("li",{children:"Namespaces for organizing cached data"}),e.jsx("li",{children:"Pattern-based key management"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Caching database queries and API responses"}),e.jsx("li",{children:"Rate limiting and request throttling"}),e.jsx("li",{children:"Session storage for web applications"}),e.jsx("li",{children:"Distributed locks and semaphores"}),e.jsx("li",{children:"Memoization for expensive operations"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { createCache } from '@voilajsx/appkit/cache';

// Create a cache instance
const cache = await createCache({
  strategy: 'redis',
  url: process.env.REDIS_URL,
  defaultTTL: 3600, // 1 hour
});

// Store a value
await cache.set('user:123', { id: '123', name: 'John Doe' });

// Retrieve a value
const user = await cache.get('user:123');
if (user) {
  console.log(user.name); // John Doe
}

// Cache with namespaces
const userCache = cache.namespace('users');
await userCache.set('123', { id: '123', name: 'John Doe' });
// Key is stored as 'users:123'

// Cache-aside pattern with getOrSet
const posts = await cache.getOrSet(
  'posts:recent',
  async () => {
    // This function is only called on cache miss
    return await fetchRecentPosts();
  },
  1800 // 30 minutes TTL
);`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/cache",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Cache",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"config-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"⚙️"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Config Module"})]}),e.jsx("p",{className:"mb-4",children:"The Config module provides a unified approach to application configuration, supporting multiple file formats, environment variables, validation, and real-time config updates."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Support for JSON, YAML, and JS config files"}),e.jsx("li",{children:"Environment variable integration"}),e.jsx("li",{children:"Schema-based validation"}),e.jsx("li",{children:"Real-time config watching"}),e.jsx("li",{children:"Hierarchical configuration with dot notation"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Application settings management"}),e.jsx("li",{children:"Environment-specific configurations"}),e.jsx("li",{children:"Feature flags and toggles"}),e.jsx("li",{children:"Centralized configuration for microservices"}),e.jsx("li",{children:"Validation of application settings"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { loadConfig, getConfig, validateConfig } from '@voilajsx/appkit/config';

// Define a schema for validation
const schema = {
  server: {
    type: 'object',
    required: ['port'],
    properties: {
      host: { type: 'string', default: 'localhost' },
      port: { type: 'number', minimum: 1, maximum: 65535 }
    }
  },
  database: {
    type: 'object',
    required: ['url'],
    properties: {
      url: { type: 'string' },
      pool: {
        type: 'object',
        properties: {
          min: { type: 'number', default: 2 },
          max: { type: 'number', default: 10 }
        }
      }
    }
  }
};

// Load configuration from file with defaults and validation
await loadConfig('./config.json', {
  defaults: {
    server: {
      host: 'localhost',
      port: 3000
    }
  },
  required: ['database.url'],
  schema,
  env: true, // Allow environment variables to override
  watch: true // Watch for changes
});

// Get configuration values
const port = getConfig('server.port'); // 3000
const dbUrl = getConfig('database.url');

// Listen for config changes
process.on('config:changed', (changes) => {
  console.log('Configuration changed:', changes);
});`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/config",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Config",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"email-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"📧"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Email Module"})]}),e.jsx("p",{className:"mb-4",children:"The Email module provides a unified API for sending emails with various providers, including templates, attachments, and HTML content support."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Support for multiple email providers (SMTP, SendGrid, SES)"}),e.jsx("li",{children:"Templated emails with variable substitution"}),e.jsx("li",{children:"HTML and plain text email bodies"}),e.jsx("li",{children:"File attachments"}),e.jsx("li",{children:"Email queue integration"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Welcome and onboarding emails"}),e.jsx("li",{children:"Password reset and account verification"}),e.jsx("li",{children:"Transactional emails (order confirmations, receipts)"}),e.jsx("li",{children:"Notification emails"}),e.jsx("li",{children:"Newsletter and marketing campaigns"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { initEmail, sendEmail, sendTemplatedEmail } from '@voilajsx/appkit/email';

// Initialize email provider
await initEmail('smtp', {
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  defaultFrom: 'noreply@example.com'
});

// Send a simple email
await sendEmail(
  'user@example.com',
  'Welcome to our platform!',
  '<h1>Welcome!</h1><p>Thank you for signing up.</p>',
  {
    text: 'Welcome! Thank you for signing up.',
    replyTo: 'support@example.com'
  }
);

// Send a templated email
const template = \`
  <h1>Hello, {{name}}!</h1>
  <p>Your account has been created successfully.</p>
  {{#if verificationRequired}}
    <p>Please verify your email by clicking <a href="{{verificationUrl}}">here</a>.</p>
  {{/if}}
\`;

await sendTemplatedEmail(
  'user@example.com',
  'Account Created',
  template,
  {
    name: 'John Doe',
    verificationRequired: true,
    verificationUrl: 'https://example.com/verify?token=abc123'
  },
  {
    attachments: [
      {
        filename: 'welcome.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf'
      }
    ]
  }
);`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/email",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Email",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"error-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"❌"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Error Module"})]}),e.jsx("p",{className:"mb-4",children:"The Error module provides structured error handling with typed errors, middleware for API error responses, and utilities for common error patterns."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Standardized error types with status codes"}),e.jsx("li",{children:"Error middleware for Express and other frameworks"}),e.jsx("li",{children:"Async error handling utilities"}),e.jsx("li",{children:"Typed error factories for common scenarios"}),e.jsx("li",{children:"Structured error responses for APIs"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Consistent API error responses"}),e.jsx("li",{children:"Safe handling of async route handlers"}),e.jsx("li",{children:"Request validation errors"}),e.jsx("li",{children:"Authentication and authorization errors"}),e.jsx("li",{children:"Global error handling in web applications"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  AppError, 
  validationError, 
  notFoundError,
  createErrorHandler,
  asyncHandler
} from '@voilajsx/appkit/error';

// Create custom error
const paymentError = new AppError(
  'PAYMENT_ERROR',
  'Payment processing failed',
  { orderId: '123' },
  402 // status code
);

// Use error factories for common errors
const userNotFound = notFoundError('User', '123');
const invalidInput = validationError({
  email: 'Invalid email format',
  password: 'Password too short'
});

// Create Express error handler middleware
const errorHandler = createErrorHandler({
  logger: console.error,
  includeStack: process.env.NODE_ENV !== 'production'
});

// Setup Express routes with error handling
const app = express();

// Wrap async route handlers
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await findUser(req.params.id);
  
  if (!user) {
    throw notFoundError('User', req.params.id);
  }
  
  res.json(user);
}));

// Add error handling middleware
app.use(errorHandler);

// Handle uncaught exceptions and rejections
handleUncaughtExceptions();
handleUnhandledRejections();`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/error",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Error",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"events-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🔔"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Events Module"})]}),e.jsx("p",{className:"mb-4",children:"The Events module provides a flexible publish-subscribe system with support for synchronous and asynchronous event handling, event history, and custom event stores."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Synchronous and asynchronous event handling"}),e.jsx("li",{children:"Event history and replay"}),e.jsx("li",{children:"Custom event stores"}),e.jsx("li",{children:"Filtered event subscriptions"}),e.jsx("li",{children:"Wait for specific events with timeouts"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Application events and notifications"}),e.jsx("li",{children:"Inter-module communication"}),e.jsx("li",{children:"Audit logging"}),e.jsx("li",{children:"Event-driven architecture"}),e.jsx("li",{children:"Workflow state transitions"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  subscribe, 
  subscribeAsync, 
  publish, 
  publishBatch,
  waitForEvent
} from '@voilajsx/appkit/events';

// Subscribe to an event
const unsubscribe = subscribe('user:created', (data) => {
  console.log('New user created:', data.id);
});

// Subscribe to an event with async handler
subscribeAsync('order:created', async (order) => {
  // Process order asynchronously
  await processOrder(order);
  await sendOrderConfirmation(order);
});

// Publish an event
const eventId = publish('user:created', { 
  id: '123',
  email: 'user@example.com',
  createdAt: new Date()
});

// Publish multiple events
publishBatch([
  { event: 'user:created', data: { id: '123' } },
  { event: 'email:sent', data: { userId: '123', type: 'welcome' } }
]);

// Wait for an event with timeout
try {
  const result = await waitForEvent('order:processed', {
    timeout: 5000,
    filter: (data) => data.orderId === '123'
  });
  
  console.log('Order processed:', result);
} catch (error) {
  console.error('Timeout waiting for order processing');
}

// Clean up subscription when no longer needed
unsubscribe();`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/events",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Events",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"logging-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"📝"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Logging Module"})]}),e.jsx("p",{className:"mb-4",children:"The Logging module provides structured logging with support for multiple transports, log levels, and contextual logging for Node.js applications."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple log transports (console, file, custom)"}),e.jsx("li",{children:"Log levels with granular control"}),e.jsx("li",{children:"Structured JSON logging"}),e.jsx("li",{children:"Child loggers for request context"}),e.jsx("li",{children:"Log rotation and retention policies"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Application event logging"}),e.jsx("li",{children:"Request logging in web applications"}),e.jsx("li",{children:"Error tracking and debugging"}),e.jsx("li",{children:"Audit logging for compliance"}),e.jsx("li",{children:"Performance monitoring"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger instance
const logger = createLogger({
  level: 'info', // log level (error, warn, info, debug)
  defaultMeta: {
    service: 'api',
    environment: process.env.NODE_ENV
  },
  enableFileLogging: true,
  dirname: 'logs',
  filename: 'app.log',
  retentionDays: 7
});

// Log at different levels
logger.info('Server started', { port: 3000 });
logger.debug('Debug information', { config: { db: 'connected' } });
logger.warn('Resource running low', { resource: 'memory', usage: '85%' });
logger.error('Failed to connect to database', { 
  error: err.message,
  stack: err.stack
});

// Create child logger with context
function handleRequest(req, res, next) {
  // Create request-specific logger
  req.logger = logger.child({
    requestId: req.id,
    method: req.method,
    path: req.path,
    ip: req.ip
  });
  
  req.logger.info('Request received');
  
  // Log response
  res.on('finish', () => {
    req.logger.info('Request completed', {
      statusCode: res.statusCode,
      responseTime: Date.now() - req.startTime
    });
  });
  
  next();
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('Shutting down');
  await logger.flush();
  await logger.close();
  process.exit(0);
});`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/logging",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Logging",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"queue-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"📊"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Queue Module"})]}),e.jsx("p",{className:"mb-4",children:"The Queue module provides background job processing with support for different adapters, job priorities, retries, and monitoring capabilities."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple queue adapters (memory, Redis, database)"}),e.jsx("li",{children:"Job priorities and scheduling"}),e.jsx("li",{children:"Automatic retries with backoff"}),e.jsx("li",{children:"Concurrency control for job processing"}),e.jsx("li",{children:"Job progress tracking and monitoring"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Email sending and notifications"}),e.jsx("li",{children:"Report generation and data processing"}),e.jsx("li",{children:"File uploads and image processing"}),e.jsx("li",{children:"API integrations and webhooks"}),e.jsx("li",{children:"Scheduled tasks and maintenance"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { initQueue, getQueue } from '@voilajsx/appkit/queue';

// Initialize queue with Redis adapter
await initQueue('redis', {
  redis: process.env.REDIS_URL,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000
    },
    removeOnComplete: true
  }
});

const queue = getQueue();

// Add a job to the queue
await queue.addJob('emails', {
  to: 'user@example.com',
  subject: 'Welcome!',
  template: 'welcome',
  data: { name: 'John' }
}, {
  priority: 10, // higher priority
  delay: 5000 // delay in ms
});

// Process jobs from the queue
await queue.processJobs('emails', async (job) => {
  console.log(\`Processing email job \${job.id}\`);
  // Send email implementation
  await sendEmail(job.data.to, job.data.subject, job.data.template, job.data.data);
  return { sent: true, timestamp: new Date() };
}, {
  concurrency: 5, // Process 5 jobs at once
  onCompleted: (jobId, result) => {
    console.log(\`Job \${jobId} completed\`, result);
  },
  onFailed: (jobId, error) => {
    console.error(\`Job \${jobId} failed\`, error);
  }
});

// Get queue stats
const stats = await queue.getQueueInfo('emails');
console.log(\`Queue stats: \${stats.pending} pending, \${stats.processing} processing, \${stats.completed} completed, \${stats.failed} failed\`);

// Clean up old jobs
await queue.cleanUp('emails', 24 * 60 * 60 * 1000, 'completed');`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/queue",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Queue",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"security-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🛡️"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Security Module"})]}),e.jsx("p",{className:"mb-4",children:"The Security module provides essential web security utilities including CSRF protection, rate limiting, and input sanitization for Node.js applications."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"CSRF token generation and validation"}),e.jsx("li",{children:"Rate limiting middleware with custom stores"}),e.jsx("li",{children:"Input sanitization and escaping"}),e.jsx("li",{children:"Filename and path sanitization"}),e.jsx("li",{children:"Security headers configuration"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Web form protection against CSRF"}),e.jsx("li",{children:"API rate limiting and throttling"}),e.jsx("li",{children:"User input sanitization"}),e.jsx("li",{children:"Preventing brute force attacks"}),e.jsx("li",{children:"Secure file uploads and downloads"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  generateCsrfToken, 
  validateCsrfToken,
  createCsrfMiddleware,
  createRateLimiter,
  escapeString,
  sanitizeHtml,
  sanitizeFilename
} from '@voilajsx/appkit/security';

// CSRF Protection
app.use(session()); // Requires session middleware

// Generate CSRF token for a form
app.get('/form', (req, res) => {
  const csrfToken = generateCsrfToken(req.session);
  res.render('form', { csrfToken });
});

// Validate CSRF token on form submission
app.post('/form', (req, res) => {
  const isValid = validateCsrfToken(req.body._csrf, req.session);
  if (!isValid) {
    return res.status(403).send('Invalid CSRF token');
  }
  // Process form...
});

// Or use the CSRF middleware
const csrf = createCsrfMiddleware();
app.use(csrf);

// Rate limiting
const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit to 5 login attempts per IP per 15 minutes
  message: 'Too many login attempts, please try again later'
});

app.post('/login', loginLimiter, (req, res) => {
  // Login logic...
});

// Input sanitization
function sanitizeUserInput(input) {
  return {
    username: escapeString(input.username),
    bio: sanitizeHtml(input.bio, {
      allowedTags: ['p', 'b', 'i', 'a', 'ul', 'ol', 'li']
    }),
    profileImage: sanitizeFilename(input.profileImage)
  };
}`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/security",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Security",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"storage-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"💾"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Storage Module"})]}),e.jsx("p",{className:"mb-4",children:"The Storage module provides a unified API for file storage with support for local and cloud storage providers, streaming, and file management."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple storage providers (local, S3, custom)"}),e.jsx("li",{children:"Streaming uploads and downloads"}),e.jsx("li",{children:"File metadata and content type handling"}),e.jsx("li",{children:"Directory operations and path management"}),e.jsx("li",{children:"Large file uploads with progress tracking"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"User file uploads and management"}),e.jsx("li",{children:"Media file storage and streaming"}),e.jsx("li",{children:"Document and asset management"}),e.jsx("li",{children:"Backup and archiving"}),e.jsx("li",{children:"Content distribution and static files"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { initStorage, getStorage } from '@voilajsx/appkit/storage';

// Initialize storage with local provider
await initStorage('local', {
  basePath: './uploads',
  baseUrl: '/files'
});

// Or with S3 provider
await initStorage('s3', {
  bucket: 'my-app-files',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  publicRead: true
});

const storage = getStorage();

// Upload a file
const result = await storage.upload(
  fileBuffer, // Buffer or Stream
  'users/123/profile.jpg',
  {
    contentType: 'image/jpeg',
    metadata: {
      userId: '123',
      uploadedAt: new Date().toISOString()
    },
    public: true
  },
  (percent) => {
    console.log(\`Upload progress: \${percent}%\`);
  }
);

console.log(\`File uploaded: \${result.url}\`);

// Download a file
const fileContent = await storage.download('users/123/profile.jpg');

// Stream a file
const fileStream = await storage.downloadStream('videos/intro.mp4');
fileStream.pipe(res);

// List files in a directory
const files = await storage.list('users/123', { recursive: true });

// Check if file exists
const exists = await storage.exists('users/123/profile.jpg');

// Get file metadata
const metadata = await storage.getMetadata('users/123/profile.jpg');
console.log(\`File size: \${metadata.size}, Modified: \${metadata.modified}\`);

// Get public URL
const url = storage.getUrl('users/123/profile.jpg');

// Get signed URL (for private files)
const signedUrl = await storage.getUrl('private/report.pdf', {
  signed: true,
  expiresIn: 3600 // seconds
});`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/storage",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Storage",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"tenantdb-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🏢"}),e.jsx("h2",{className:"text-2xl font-bold",children:"TenantDB Module"})]}),e.jsx("p",{className:"mb-4",children:"The TenantDB module provides multi-tenant database management for SaaS applications, with support for different tenant isolation strategies and middleware integration."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple tenant isolation strategies (row, schema, database)"}),e.jsx("li",{children:"Tenant-aware database connections"}),e.jsx("li",{children:"Tenant provisioning and management"}),e.jsx("li",{children:"Request-scoped tenant context"}),e.jsx("li",{children:"Framework agnostic middleware"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"SaaS applications with multi-tenant architecture"}),e.jsx("li",{children:"White-labeled products for multiple clients"}),e.jsx("li",{children:"Enterprise applications with division/department isolation"}),e.jsx("li",{children:"Marketplace platforms with vendor separation"}),e.jsx("li",{children:"Isolated environments for development/testing"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { createDb, createMiddleware, createTenantContext } from '@voilajsx/appkit/tenantdb';

// Create a multi-tenant database instance
const db = createDb({
  url: process.env.DATABASE_URL,
  strategy: 'schema', // 'row', 'schema', or 'database'
  adapter: 'prisma', // 'prisma', 'mongoose', 'knex', or 'typeorm'
  pooling: {
    max: 10,
    min: 2
  },
  cache: {
    enabled: true,
    ttl: 5 * 60 * 1000 // 5 minutes
  }
});

// Create tenant middleware for Express
const tenantMiddleware = createMiddleware(db, {
  // Extract tenant ID from request
  getTenantId: (req) => {
    return req.headers['x-tenant-id'] || 
           req.query.tenant || 
           req.subdomain;
  },
  // Handle errors
  onError: (error, req, res) => {
    if (error.message.includes('not found')) {
      res.status(404).json({ error: 'Tenant not found' });
    } else {
      res.status(400).json({ error: error.message });
    }
  },
  required: true // Require valid tenant
});

// Apply middleware to routes
app.use('/api', tenantMiddleware);

// Create a new tenant
await db.createTenant('acme-corp', {
  runMigrations: true,
  template: 'default'
});

// Access tenant-specific database
app.get('/api/users', async (req, res) => {
  // req.db is set by middleware to tenant-specific connection
  const users = await req.db.user.findMany();
  res.json(users);
});

// Create tenant context for background jobs
const tenantContext = createTenantContext(db);

// Run function in tenant context
await tenantContext.run('acme-corp', async () => {
  const db = tenantContext.getDb();
  await db.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@acme-corp.example.com',
      role: 'ADMIN'
    }
  });
});`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/tenantdb",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about TenantDB",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"validation-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"✅"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Validation Module"})]}),e.jsx("p",{className:"mb-4",children:"The Validation module provides schema-based input validation with support for custom rules, async validation, and middleware integration for Express and other frameworks."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Schema-based validation with rules"}),e.jsx("li",{children:"Custom validation rules and formatters"}),e.jsx("li",{children:"Async validation support"}),e.jsx("li",{children:"Nested object validation"}),e.jsx("li",{children:"Express middleware integration"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"API request validation"}),e.jsx("li",{children:"Form input validation"}),e.jsx("li",{children:"User registration and profile data"}),e.jsx("li",{children:"Configuration validation"}),e.jsx("li",{children:"Business rule enforcement"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import { 
  createValidator, 
  createValidationMiddleware 
} from '@voilajsx/appkit/validation';

// Create a validator instance
const validator = createValidator({
  strict: true, // Reject unknown fields
  customRules: {
    isSlug: (value) => {
      return typeof value === 'string' && /^[a-z0-9-]+$/.test(value);
    },
    isUniqueEmail: async (value) => {
      const user = await db.user.findUnique({ where: { email: value } });
      return !user; // Return true if email is unique
    }
  },
  errorFormatter: (field, rule, params) => {
    if (rule === 'isSlug') {
      return \`\${field} must contain only lowercase letters, numbers, and hyphens\`;
    }
    // Default formatting for other rules
    return \`\${field} failed \${rule} validation\`;
  }
});

// Define a validation schema
const userSchema = {
  username: {
    rules: ['required', 'string', 'minLength:3', 'maxLength:20', 'isSlug'],
    optional: false,
  },
  email: {
    rules: ['required', 'email', 'isUniqueEmail'],
    optional: false,
  },
  age: {
    rules: ['integer', 'min:18', 'max:120'],
    optional: true,
    transform: (value) => (value ? parseInt(value, 10) : value),
  },
  profile: {
    rules: ['object'],
    optional: true,
  },
  'profile.bio': {
    rules: ['string', 'maxLength:500'],
    optional: true,
  }
};

// Validate data
const result = validator.validate(userData, userSchema);
if (!result.isValid) {
  console.error('Validation errors:', result.errors);
} else {
  console.log('Valid data:', result.validatedData);
}

// Async validation
const asyncResult = await validator.validateAsync(userData, userSchema);

// Create Express validation middleware
const validateUser = createValidationMiddleware(userSchema, {
  validator,
  throwOnError: true,
  errorStatus: 400,
  errorFormatter: (errors) => ({
    error: 'Validation failed',
    details: errors.map((e) => ({
      field: e.field,
      message: e.message,
    })),
  }),
});

// Apply middleware to routes
app.post('/api/users', validateUser, async (req, res) => {
  // req.body contains validated data
  const user = await createUser(req.body);
  res.status(201).json(user);
});`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/validation",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Validation",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"utils-module",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🔧"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Utils Module"})]}),e.jsx("p",{className:"mb-4",children:"The Utils module provides a collection of helper functions for common operations like string manipulation, date handling, object operations, and asynchronous utilities."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Key Features"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"String utilities (casing, slugs, templates)"}),e.jsx("li",{children:"Date and time manipulation"}),e.jsx("li",{children:"Object and array operations"}),e.jsx("li",{children:"Async helpers (retry, timeout, parallel)"}),e.jsx("li",{children:"ID and UUID generation"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"space-y-1 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("li",{children:"Data formatting and transformation"}),e.jsx("li",{children:"URL slug generation"}),e.jsx("li",{children:"Complex object manipulation"}),e.jsx("li",{children:"Resilient API calls with retries"}),e.jsx("li",{children:"Performance optimization with debounce/throttle"})]})]})]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example"}),e.jsx(u,{code:`import {
  // String utilities
  camelCase, snakeCase, kebabCase, pascalCase, capitalize,
  slugify, truncate, template, maskString,
  
  // Object utilities
  pick, omit, deepMerge, deepClone, get, set,
  flatten, unflatten, isEqual, isEmpty,
  
  // Date utilities
  formatDate, parseDate, addDays, subDays, dateDiff,
  
  // ID utilities
  generateId, generateUuid,
  
  // Async utilities
  sleep, retry, timeout, parallel, debounce, throttle
} from '@voilajsx/appkit/utils';

// String utilities
const slug = slugify('Hello World Example'); // hello-world-example
const truncated = truncate('This is a long text', 10); // This is...
const masked = maskString('user@example.com', { showFirst: 2, showLast: 4 }); // us****@example.com

// String templating
const greeting = template(
  'Hello, {{name}}! Welcome to {{company}}.',
  { name: 'John', company: 'Acme Inc.' }
); // Hello, John! Welcome to Acme Inc.

// Object utilities
const user = {
  id: 123,
  name: 'John Doe',
  email: 'john@example.com',
  password: 'secret',
  meta: { lastLogin: '2023-01-01' }
};

const publicUser = pick(user, ['id', 'name', 'email']); // Omits password
const withoutMeta = omit(user, ['meta']); // Remove meta
const merged = deepMerge({ name: 'Jane' }, { email: 'jane@example.com' });
const nested = get(user, 'meta.lastLogin'); // '2023-01-01'

// Date utilities
const today = new Date();
const formatted = formatDate(today, 'YYYY-MM-DD');
const tomorrow = addDays(today, 1);
const lastWeek = subDays(today, 7);
const daysBetween = dateDiff(lastWeek, tomorrow, 'days');

// ID generation
const randomId = generateId(8); // e.g., '3f9a2b7c'
const uuid = generateUuid(); // e.g., '34c9eb34-419f-4835-b234-exampleuuid'

// Async utilities
const fetchWithRetry = async (url) => {
  return retry(
    async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(\`Status: \${response.status}\`);
      return response.json();
    },
    {
      attempts: 3,
      delay: 1000,
      factor: 2 // Exponential backoff
    }
  );
};

// Run tasks in parallel with concurrency limit
const results = await parallel(
  [fetchUsers, fetchProducts, fetchOrders],
  2 // Run 2 tasks at once
);

// Debounce a function call
const debouncedSearch = debounce(
  (query) => searchAPI(query),
  300 // Wait 300ms after last call
);

// Usage
debouncedSearch('hello'); // Called immediately
debouncedSearch('hello world'); // Only this one actually calls searchAPI`,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-4 text-right",children:e.jsxs(T,{to:"/docs/utils",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center justify-end",children:["Learn more about Utils",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})]}),e.jsxs("section",{id:"example-integration",className:"mb-12 scroll-mt-20",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"🔄"}),e.jsx("h2",{className:"text-2xl font-bold",children:"Example Integration"})]}),e.jsx("p",{className:"mb-4",children:"Here's an example of how multiple @voilajsx/appkit modules can work together to create a robust Express API with authentication, validation, logging, and error handling."}),e.jsx(u,{code:`import express from 'express';
import {
  // Auth module
  generateToken, createAuthMiddleware,
  // Validation module
  createValidator, createValidationMiddleware,
  // Logging module
  createLogger,
  // Error module
  createErrorHandler, asyncHandler, notFoundHandler,
  notFoundError, validationError,
  // Config module
  loadConfig, getConfig
} from '@voilajsx/appkit';

// Load application configuration
await loadConfig('./config.json', {
  env: true,
  required: ['jwt.secret', 'database.url']
});

// Create logger
const logger = createLogger({
  level: 'info',
  defaultMeta: {
    service: 'api',
    environment: process.env.NODE_ENV
  }
});

// Create Express app
const app = express();
app.use(express.json());

// Create validator
const validator = createValidator();

// User schema
const userSchema = {
  email: {
    rules: ['required', 'email'],
    optional: false
  },
  password: {
    rules: ['required', 'string', 'minLength:8'],
    optional: false
  }
};

// Authentication middleware
const auth = createAuthMiddleware({
  secret: getConfig('jwt.secret')
});

// Setup routes
app.post(
  '/api/login',
  createValidationMiddleware(userSchema, { validator }),
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    // Find user and verify password (implementation omitted)
    const user = await findUserByEmail(email);
    if (!user || !(await verifyPassword(password, user.password))) {
      logger.warn('Failed login attempt', { email });
      throw validationError({ 
        _error: 'Invalid email or password' 
      });
    }
    
    // Generate token
    const token = generateToken(
      { userId: user.id, email: user.email, role: user.role },
      { 
        secret: getConfig('jwt.secret'),
        expiresIn: getConfig('jwt.expiresIn', '1d')
      }
    );
    
    logger.info('User logged in', { userId: user.id });
    res.json({ token, user: { id: user.id, email: user.email } });
  })
);

// Protected route
app.get(
  '/api/profile',
  auth,
  asyncHandler(async (req, res) => {
    const user = await findUserById(req.user.userId);
    
    if (!user) {
      throw notFoundError('User', req.user.userId);
    }
    
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  })
);

// Error handling
app.use(notFoundHandler());
app.use(createErrorHandler({
  logger: (error) => {
    logger.error('Request error', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      status: error.status
    });
  },
  includeStack: process.env.NODE_ENV !== 'production'
}));

// Start server
const port = getConfig('server.port', 3000);
app.listen(port, () => {
  logger.info(\`Server started on port \${port}\`);
});`,language:"javascript",showCopyButton:!0})]}),e.jsxs("section",{id:"next-steps",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Next Steps"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Getting Started"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Ready to start using @voilajsx/appkit? Follow our getting started guide to set up your first application."}),e.jsxs(T,{to:"/docs/getting-started",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View Getting Started Guide",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Example Projects"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Explore complete example projects that demonstrate how to use @voilajsx/appkit in real-world applications."}),e.jsxs(T,{to:"/docs/examples",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View Example Projects",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"API Reference"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Explore the detailed API reference for all @voilajsx/appkit modules to learn about available functions and options."}),e.jsxs(T,{to:"/docs/api-reference",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View API Reference",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"GitHub Repository"}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Visit the GitHub repository to contribute, report issues, or explore the source code."}),e.jsxs("a",{href:"https://github.com/voilajsx/appkit",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["Visit GitHub Repository",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})]})]})]}),e.jsx("div",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky",style:{top:"5rem"},children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("nav",{className:"toc",children:e.jsxs("ul",{className:"space-y-2 text-sm p-0 m-0",children:[e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("introduction"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="introduction"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Introduction"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("core-modules"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="core-modules"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Core Modules"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("auth-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="auth-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Auth Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("cache-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="cache-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Cache Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("config-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="config-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Config Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("email-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="email-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Email Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("error-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="error-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Error Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("events-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="events-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Events Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("logging-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="logging-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Logging Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("queue-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="queue-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Queue Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("security-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="security-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Security Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("storage-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="storage-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Storage Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("tenantdb-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="tenantdb-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"TenantDB Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("validation-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="validation-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Validation Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("utils-module"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="utils-module"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Utils Module"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("example-integration"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="example-integration"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Example Integration"})}),e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>r("next-steps"),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t==="next-steps"?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,children:"Next Steps"})})]})})]})})})]})}function nr(){const[t,s]=j.useState("introduction"),r=D(),o=[{name:"Getting Started",id:"getting-started"},{name:"Core Concepts",id:"core-concepts"},{name:"Installation",id:"installation"},{name:"User Authentication",id:"user-authentication"},{name:"Protecting Routes",id:"protecting-routes"},{name:"Role-Based Access",id:"role-based-access"},{name:"Configuration",id:"configuration"},{name:"Common Scenarios",id:"common-scenarios"},{name:"Best Practices",id:"best-practices"},{name:"Error Handling",id:"error-handling"},{name:"Further Reading",id:"further-reading"}],l=(a,i)=>{let m;return(...x)=>{clearTimeout(m),m=setTimeout(()=>a.apply(this,x),i)}},d=j.useCallback(l(()=>{for(const a of o){const i=document.getElementById(a.id);if(!i)continue;const m=i.getBoundingClientRect();if(m.top<=120&&m.bottom>=120){s(a.id),window.history.replaceState(null,"",`#${a.id}`);break}}},100),[]);j.useEffect(()=>(window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)),[d]),j.useEffect(()=>{if(r.hash){const a=r.hash.replace("#","");n(a)}},[r.hash]);const n=a=>{const i=document.getElementById(a);i&&(window.scrollTo({top:i.offsetTop-80,behavior:"smooth"}),s(a))};return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-6 lg:pr-16",children:[e.jsxs("header",{className:"mb-8",children:[e.jsxs("h1",{className:"text-4xl font-bold flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"🔐"})," Authentication Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Secure your Node.js apps with simple, powerful authentication tools"}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"View @voilajsx/appkit on npm",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Auth module is your go-to tool for adding secure authentication to Node.js applications. Whether you’re building a blog, an e-commerce API, or a dashboard, this module helps you manage user logins, protect routes, and control access with ease. It works smoothly with popular frameworks like Express, Fastify, and Koa, and it’s designed to be both beginner-friendly and powerful for advanced use cases."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Why use this module? It handles the heavy lifting of authentication—things like securely storing passwords, generating tokens, and checking user permissions—so you can focus on building your app. In this guide, we’ll walk you through everything from setup to advanced scenarios, with plenty of examples you can copy and paste."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to secure your app?"," ",e.jsx("a",{href:"#installation",onClick:()=>n("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Let’s dive in"}),"."]})]}),e.jsxs("section",{id:"core-concepts",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Concepts"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Before we jump into coding, let’s explore the key ideas behind the Auth module. Understanding these will help you use it effectively:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"JWT Tokens",desc:"JWTs (JSON Web Tokens) let you securely send user data between the client and server without storing session data on the server. They’re perfect for APIs and apps that need to scale."},{title:"Password Hashing",desc:"Passwords are stored as secure hashes using bcrypt, which protects them even if your database is compromised. The module handles hashing and verification for you."},{title:"Middleware",desc:"Middleware functions check if a user is authenticated or has the right permissions before allowing access to a route. Think of them as gatekeepers for your app."},{title:"Role-Based Access",desc:"Control what users can do based on their roles (e.g., admin, editor, guest). This makes it easy to restrict sensitive features to authorized users."}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These concepts work together to make authentication secure and flexible. In the next sections, we’ll show you how to put them into practice with real code."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Installation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Setting up the Auth module is quick and straightforward. Follow these steps to get started:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Install the package"}),": Run the following command in your project directory:",e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import the module"}),": Use ES Modules to import the Auth functions you need:",e.jsx(u,{code:`
import { generateToken, verifyToken, hashPassword, createAuthMiddleware } from '@voilajsx/appkit/auth';
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prepare your app"}),": Ensure your Node.js app uses a framework like Express and has a database (e.g., MongoDB, PostgreSQL) for storing user data."]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The module supports Node.js 14+ and works with both ES Modules and CommonJS. If you’re using CommonJS, replace ",e.jsx("code",{children:"import"})," with ",e.jsx("code",{children:"require"}),"."]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Need more setup help? Check the"," ",e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/src/auth/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"}),"."]})]}),e.jsxs("section",{id:"user-authentication",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"User Authentication"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let’s build a secure user authentication system for registering and logging in users. The Auth module makes this easy by handling password hashing and JWT creation. Here’s how to set it up."}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Registering a User"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["When a user signs up, you need to securely store their password. The ",e.jsx("code",{children:"hashPassword()"})," function uses bcrypt to create a secure hash. Here’s the process:"]}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Collect the user’s email and password from your signup form."}),e.jsxs("li",{children:["Hash the password using ",e.jsx("code",{children:"hashPassword()"}),"."]}),e.jsx("li",{children:"Save the email and hashed password in your database."})]}),e.jsx(u,{code:`
import { hashPassword } from '@voilajsx/appkit/auth';

async function registerUser(email, password) {
  // Hash the password with 10 salt rounds
  const hashedPassword = await hashPassword(password, 10);
  // Save to database (example uses a generic db)
  await db.users.insert({ email, password: hashedPassword });
  return { success: true, message: 'User registered successfully' };
}
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"10"})," salt rounds provide a good balance of security and speed. For higher security, you can increase this number, but it will slow down the hashing process."]}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Logging In a User"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"For login, verify the user’s password and issue a JWT for authenticated requests. Here’s how:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Find the user by email in your database."}),e.jsxs("li",{children:["Check the password with ",e.jsx("code",{children:"comparePassword()"}),"."]}),e.jsxs("li",{children:["Generate a JWT with ",e.jsx("code",{children:"generateToken()"})," if the password is correct."]})]}),e.jsx(u,{code:`
import { comparePassword, generateToken } from '@voilajsx/appkit/auth';

async function loginUser(email, password) {
  // Find user in database
  const user = await db.users.findOne({ email });
  if (!user) throw new Error('User not found');

  // Verify password
  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  // Generate JWT
  const token = generateToken(
    { userId: user.id, email: user.email },
    { secret: 'your-secret-key', expiresIn: '24h' }
  );
  return { token };
}
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["The JWT can be sent to the client and stored securely (e.g., in an HTTP-only cookie). Use it in the ",e.jsx("code",{children:"Authorization"})," header for protected requests."]})]}),e.jsxs("section",{id:"protecting-routes",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Protecting Routes"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["To secure your API routes, use middleware to check for valid JWTs. The ",e.jsx("code",{children:"createAuthMiddleware()"})," function ensures only authenticated users can access protected routes. Here’s how it works:"]}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Create the middleware with your secret key."}),e.jsx("li",{children:"Apply it to routes you want to protect."}),e.jsxs("li",{children:["The middleware verifies the JWT and attaches user data to ",e.jsx("code",{children:"req.user"}),"."]})]}),e.jsx(u,{code:`
import { createAuthMiddleware } from '@voilajsx/appkit/auth';
import express from 'express';

const app = express();
const auth = createAuthMiddleware({ secret: 'your-secret-key' });

// Protect the dashboard route
app.get('/dashboard', auth, (req, res) => {
  res.json({ message: 'Welcome to the dashboard', user: req.user });
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["The middleware expects a JWT in the ",e.jsx("code",{children:"Authorization"})," header (e.g., ",e.jsx("code",{children:"Bearer your-token"}),"). If the token is invalid or missing, it returns a 401 error."]}),e.jsx("h3",{className:"text-lg font-semibold my-3",children:"Custom Token Extraction"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["By default, the middleware looks for tokens in the ",e.jsx("code",{children:"Authorization"})," header. To use cookies or custom headers, customize the ",e.jsx("code",{children:"getToken"})," function:"]}),e.jsx(u,{code:`
import { createAuthMiddleware } from '@voilajsx/appkit/auth';

const auth = createAuthMiddleware({
  secret: 'your-secret-key',
  getToken: (req) => req.cookies.token || req.headers['x-api-key'],
});
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"This flexibility lets you adapt the middleware to your app’s needs, like supporting API keys or session cookies."})]}),e.jsxs("section",{id:"role-based-access",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Role-Based Access"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Control what users can do based on their roles (e.g., admin, user). The ",e.jsx("code",{children:"createAuthorizationMiddleware()"})," function restricts routes to specific roles. Here’s how to set it up:"]}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Include the user’s role in the JWT payload during login."}),e.jsx("li",{children:"Create middleware to allow only specific roles."}),e.jsx("li",{children:"Apply the middleware to restricted routes."})]}),e.jsx(u,{code:`
import { generateToken, createAuthorizationMiddleware } from '@voilajsx/appkit/auth';
import express from 'express';

const app = express();

// Generate token with role
const token = generateToken(
  { userId: '123', role: 'admin' },
  { secret: 'your-secret-key' }
);

// Restrict to admins
const adminOnly = createAuthorizationMiddleware({ roles: ['admin'] });
app.get('/admin', adminOnly, (req, res) => {
  res.json({ message: 'Admin access granted' });
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["Users without the required role will get a 403 error. You can also allow multiple roles by listing them in the ",e.jsx("code",{children:"roles"})," array."]})]}),e.jsxs("section",{id:"configuration",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Configuration"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The Auth module is highly customizable. You can tweak token generation, middleware behavior, and more to fit your app. Here are the key options:"}),e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Token Generation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Control how JWTs are created with these options:"}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"secret"}),": A secret key for signing tokens (required, keep it secure)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"expiresIn"}),": How long the token is valid (e.g., '24h' for 24 hours, default: '7d')."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"algorithm"}),": The signing algorithm (e.g., 'HS256', default: 'HS256')."]})]}),e.jsx(u,{code:`
import { generateToken } from '@voilajsx/appkit/auth';

const token = generateToken(
  { userId: '123', email: 'user@example.com' },
  {
    secret: 'your-secret-key',
    expiresIn: '24h',
    algorithm: 'HS256',
  }
);
            `,language:"javascript",showCopyButton:!0}),e.jsx("h3",{className:"text-lg font-semibold mb-3 mt-6",children:"Middleware"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Customize middleware behavior with these options:"}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"secret"}),": The key for verifying tokens (required)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getToken"}),": A function to extract tokens from requests (default: checks headers, cookies, query)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onError"}),": A custom error handler (default: returns 401 with JSON error)."]})]}),e.jsx(u,{code:`
import { createAuthMiddleware } from '@voilajsx/appkit/auth';

const auth = createAuthMiddleware({
  secret: 'your-secret-key',
  getToken: (req) => req.headers['x-api-key'],
  onError: (error, req, res) => {
    res.status(401).json({ error: 'Please authenticate' });
  },
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["For advanced options, see the"," ",e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/src/auth/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"}),"."]})]}),e.jsxs("section",{id:"common-scenarios",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Common Scenarios"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here are detailed examples for everyday authentication tasks you’ll likely need in your app:"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Password Reset"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Allow users to reset their password securely with a time-limited token:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Generate a reset token and send it via email."}),e.jsx("li",{children:"Verify the token when the user submits a new password."}),e.jsx("li",{children:"Update the password in the database."})]}),e.jsx(u,{code:`
import { generateToken, hashPassword } from '@voilajsx/appkit/auth';

async function requestPasswordReset(email) {
  const user = await db.users.findOne({ email });
  if (!user) throw new Error('User not found');

  const resetToken = generateToken(
    { userId: user.id, action: 'reset' },
    { secret: 'reset-secret-key', expiresIn: '1h' }
  );
  // Send resetToken to user via email (use a service like SendGrid)
  await sendEmail(user.email, resetToken', resetToken);
}

async function resetPassword(userId, newPassword) {
  const hashedPassword = await hashPassword(newPassword, 10);
  await db.users.update({ id: 'userId', password: hashedPassword });
}
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Token Refresh"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Keep users logged in by refreshing their access tokens using a long-lived refresh token:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 text-dark-gray-300 dark:text-gray-300",children:[e.jsx("li",{children:"Verify the refresh token."}),e.jsx("li",{children:"Generate a new access token."}),e.jsx("li",{children:"Return the new token to the client."})]}),e.jsx(u,{code:`
import { generateToken, verifyToken } from '@voilajsx/appkit/auth';

async function refreshToken(refreshToken) {
  try {
    // Verify refresh token
    const payload = await verifyToken(refreshToken, { secret: 'your-refresh-secret' });
    // Generate new access token
    const newAccessToken = generateToken(
      { userId: payload.userId },
      { secret: 'your-secret-key', expiresIn: '15m' }
    );
    return { accessToken: newAccessToken };
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
}
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Email Verification"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Ensure users verify their email before accessing your app:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Generate a verification token during registration."}),e.jsx("li",{children:"Send the token via email."}),e.jsx("li",{children:"Verify the token when the user clicks the link."})]}),e.jsx(u,{code:`
import { generateToken, verifyToken } from '@voilajsx/appkit/auth';

async function sendVerificationEmail(email) {
  const user = await db.users.findOne({ email });
  if (!user) throw new Error('User not found');

  const verificationToken = generateToken(
    { userId: user.id, action: 'verify-email' },
    { secret: 'verify-secret-key', expiresIn: '1d' }
  );
  // Send email with verification link
  await sendEmail(email, 'Verify your email', \`/verify?token=\${verificationToken}\`);
}

async function verifyEmail(token) {
  try {
    const payload = await verifyToken(token, { secret: 'verify-secret-key' });
    await db.users.update({ id: payload.userId }, { verified: true });
    return { success: true, message: 'Email verified' };
  } catch (error) {
    throw new Error('Invalid verification token');
  }
}
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Follow these tips to keep your authentication system secure and user-friendly:"}),e.jsxs("ul",{className:"space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Store Secrets Safely:"})," Use environment variables (",e.jsx("code",{children:".env"})," files) for sensitive data like token secrets to prevent accidental exposure in your code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use HTTPS:"})," Always enable HTTPS in production to encrypt data in transit and protect tokens from being intercepted."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limit Token Lifespan:"})," Set short expiration times for JWTs (e.g., 24 hours) to reduce the risk if a token is stolen. Use refresh tokens for longer sessions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enforce Strong Passwords:"})," Require passwords to be at least 8 characters with a mix of letters, numbers, and symbols to improve security."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep Errors Vague:"})," Use generic error messages like “Invalid credentials” for failed logins to avoid giving hackers useful information."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Monitor and Log:"})," Log authentication attempts and errors (without sensitive data) to detect suspicious activity early."]})]})]}),e.jsxs("section",{id:"error-handling",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Error Handling"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Proper error handling keeps your app secure and improves the user experience. The Auth module throws clear errors for common issues like invalid tokens or incorrect passwords. Here’s how to handle them:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Catch errors from Auth module functions like ",e.jsx("code",{children:"verifyToken()"}),"."]}),e.jsx("li",{children:"Check the error message to identify the issue (e.g., expired token)."}),e.jsx("li",{children:"Return user-friendly responses without exposing sensitive details."})]}),e.jsx(u,{code:`
import { verifyToken } from '@voilajsx/appkit/auth';

try {
  const payload = await verifyToken(token, { secret: 'your-secret-key' });
  // Proceed with request
} catch (error) {
  if (error.message === 'Token has expired') {
    return res.status(401).json({ error: 'Your session has expired. Please log in again.' });
  }
  return res.status(401).json({ error: 'Invalid token. Please authenticate.' });
}
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"Always log errors internally for debugging, but keep user-facing messages generic to avoid leaking information."})]}),e.jsxs("section",{id:"further-reading",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Further Reading"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Want to learn more? Check out these resources for deeper insights:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Developer Reference",desc:"Detailed guide with advanced configurations and examples",url:"https://github.com/voilajsx/appkit/blob/main/src/auth/docs/DEVELOPER_REFERENCE.md"},{title:"API Reference",desc:"Complete documentation of all Auth module functions and options",url:"https://github.com/voilajsx/appkit/blob/main/src/auth/docs/API_REFERENCE.md"}].map((a,i)=>e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",children:[e.jsx("h2",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("ul",{className:"space-y-2 text-sm",children:o.map((a,i)=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>n(a.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===a.id?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,"aria-current":t===a.id?"true":"false",children:a.name})},i))})]})})})]})}function ir(){const[t,s]=j.useState("introduction"),r=D(),o=[{name:"Introduction",id:"introduction"},{name:"Module Overview",id:"module-overview"},{name:"Features",id:"features"},{name:"Installation",id:"installation"},{name:"Quick Start",id:"quick-start"},{name:"Cache Creation",id:"cache-creation"},{name:"Basic Operations",id:"basic-operations"},{name:"Batch Operations",id:"batch-operations"},{name:"Advanced Features",id:"advanced-features"},{name:"Configuration Options",id:"configuration"},{name:"Common Use Cases",id:"use-cases"},{name:"Code Generation",id:"code-generation"},{name:"Example Code",id:"example-code"},{name:"Caching Best Practices",id:"caching-practices"},{name:"Performance Considerations",id:"performance"},{name:"Error Handling",id:"error-handling"},{name:"Documentation Links",id:"documentation"}],l=(a,i)=>{let m;return(...x)=>{clearTimeout(m),m=setTimeout(()=>a.apply(this,x),i)}},d=j.useCallback(l(()=>{for(const a of o){const i=document.getElementById(a.id);if(!i)continue;const m=i.getBoundingClientRect();if(m.top<=120&&m.bottom>=120){s(a.id),window.history.replaceState(null,"",`#${a.id}`);break}}},100),[]);j.useEffect(()=>(window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)),[d]),j.useEffect(()=>{if(r.hash){const a=r.hash.replace("#","");n(a)}},[r.hash]);const n=a=>{const i=document.getElementById(a);i&&(window.scrollTo({top:i.offsetTop-80,behavior:"smooth"}),s(a))};return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-6 lg:pr-16",children:[e.jsxs("header",{className:"flex items-center mb-6",children:[e.jsx("span",{className:"text-4xl mr-4","aria-hidden":"true",children:"🚀"}),e.jsx("h1",{className:"text-4xl font-bold",children:"Cache Module"})]}),e.jsxs("div",{className:"flex space-x-2 mb-8",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajs/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"View @voilajs/appkit on npm",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajs/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]}),e.jsxs("section",{id:"introduction",className:"mb-12 scroll-mt-20",children:[e.jsx("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 rounded mb-6",children:e.jsx("p",{className:"text-blue-800 dark:text-blue-200 text-lg font-medium",children:"A unified caching interface to boost application performance"})}),e.jsxs("p",{className:"mb-4",children:["The Cache module of ",e.jsx("code",{children:"@voilajs/appkit"})," provides a flexible and powerful caching solution for Node.js applications. It supports in-memory, Redis, and Memcached backends with a consistent API for storing, retrieving, and managing cached data, complete with automatic serialization and TTL management."]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("a",{href:"#quick-start",onClick:()=>n("quick-start"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Jump to Quick Start"})," ","or explore the"," ",e.jsx("a",{href:"#features",onClick:()=>n("features"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"key features"})," ","below."]})]}),e.jsxs("section",{id:"module-overview",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Module Overview"}),e.jsx("p",{className:"mb-6",children:"The Cache module offers a unified interface for caching in Node.js applications, supporting multiple backends like in-memory, Redis, and Memcached. It’s designed for performance and ease of use, making it ideal for APIs, web apps, and microservices."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Feature"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Description"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Main Functions"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:"Cache Creation"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Initialize caches with different backends"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"createCache()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:"Basic Operations"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Store and retrieve cached values"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"get()"}),", ",e.jsx("code",{children:"set()"}),", ",e.jsx("code",{children:"has()"}),", ",e.jsx("code",{children:"delete()"}),", ",e.jsx("code",{children:"clear()"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:"Batch Operations"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Manage multiple cache entries efficiently"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"getMany()"}),", ",e.jsx("code",{children:"setMany()"}),", ",e.jsx("code",{children:"deleteMany()"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:"Smart Patterns"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Implement common caching patterns"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"getOrSet()"}),", ",e.jsx("code",{children:"namespace()"}),", ",e.jsx("code",{children:"deletePattern()"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:"TTL Management"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Control cache expiration"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"expire()"}),", ",e.jsx("code",{children:"ttl()"})]})]})]})]})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Caching Flow"}),e.jsx(Mermaid,{chart:`
                sequenceDiagram
                  participant Client
                  participant App
                  participant Cache
                  participant DB
                  Client->>App: Request data
                  App->>Cache: Check cache (get)
                  alt Cache Hit
                    Cache-->>App: Return cached data
                    App-->>Client: Send data
                  else Cache Miss
                    Cache-->>App: Null
                    App->>DB: Query database
                    DB-->>App: Return data
                    App->>Cache: Store data (set)
                    App-->>Client: Send data
                  end
              `})]})]}),e.jsxs("section",{id:"features",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🚀 Features"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{emoji:"💾",title:"Multiple Backend Support",desc:"Supports in-memory, Redis, and Memcached backends with a consistent API."},{emoji:"⏱️",title:"TTL Management",desc:"Automatic expiration of cached items with flexible TTL settings."},{emoji:"🗂️",title:"Namespaces",desc:"Organize cache keys with logical grouping for better management."},{emoji:"🔄",title:"Batch Operations",desc:"Efficiently manage multiple cache entries with bulk operations."},{emoji:"🧠",title:"Smart Patterns",desc:"Built-in cache-aside pattern with getOrSet for simplified caching."},{emoji:"🔍",title:"Pattern Matching",desc:"Find and delete keys using glob patterns for advanced cache management."},{emoji:"🧩",title:"Consistent API",desc:"Unified interface across all backends for seamless integration."},{emoji:"🔌",title:"Framework Agnostic",desc:"Works with any Node.js framework, including Express, Fastify, and Koa."}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2","aria-hidden":"true",children:a.emoji}),a.title]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"📦 Installation"}),e.jsx("p",{className:"mb-4",children:"Install the package using your preferred package manager:"}),e.jsx(u,{code:`
npm install @voilajs/appkit

# Optional: Install backend-specific dependencies
npm install redis       # For Redis support
npm install memcached   # For Memcached support
            `,language:"bash",showCopyButton:!0}),e.jsx("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-300",children:"Requires Node.js 14+ and supports both CommonJS and ES Modules."}),e.jsxs("p",{className:"mt-2",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for advanced setup options."]})]}),e.jsxs("section",{id:"quick-start",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🏃‍♂️ Quick Start"}),e.jsx("p",{className:"mb-4",children:"Get started with caching in just a few lines. The Cache module works the same way whether you use in-memory, Redis, or Memcached, so you can switch backends without changing your code."}),e.jsx(u,{code:`
import { createCache } from '@voilajs/appkit/cache';

// Set up a memory cache
const cache = await createCache({ strategy: 'memory' });

// Save a user with a 1-hour expiration
await cache.set('user:1', { name: 'Alice', role: 'admin' }, 3600);

// Get the user
const user = await cache.get('user:1');
console.log(user.name); // Alice
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"mt-4",children:"Want to cache database queries? Try the cache-aside pattern:"}),e.jsx(u,{code:`
const user = await cache.getOrSet('user:1', async () => {
  return await db.findUser(1); // Only runs if cache is empty
}, 3600);
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"mt-4",children:["Check out"," ",e.jsx("a",{href:"#basic-operations",onClick:()=>n("basic-operations"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Basic Operations"})," ","for more examples or the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for details."]})]}),e.jsxs("section",{id:"cache-creation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🔨 Cache Creation"}),e.jsx("p",{className:"mb-4",children:"Set up your cache with the backend that fits your app. Use in-memory for quick development, Redis for production, or Memcached for simple, high-speed caching."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Memory Cache"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Great for testing or small apps. Stores data in your Node.js process."}),e.jsx(u,{code:`
const cache = await createCache({
  strategy: 'memory',
  maxItems: 1000, // Limit to 1000 items
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Redis Cache"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Perfect for production. Shares cache across servers."}),e.jsx(u,{code:`
const cache = await createCache({
  strategy: 'redis',
  url: 'redis://localhost:6379',
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Namespaced Cache"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Group related keys with a prefix to keep things organized."}),e.jsx(u,{code:`
const userCache = cache.namespace('user');
await userCache.set('1', { name: 'Alice' }); // Saves as 'user:1'
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("p",{className:"mt-4",children:["See"," ",e.jsx("a",{href:"#configuration",onClick:()=>n("configuration"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Configuration Options"})," ","for more setup details."]})]}),e.jsxs("section",{id:"basic-operations",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🔄 Basic Operations"}),e.jsx("p",{className:"mb-4",children:"Use these simple methods to store, fetch, and remove cached data. They work the same across all backends."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save and Fetch Data"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Store data with ",e.jsx("code",{children:"set"})," and retrieve it with ",e.jsx("code",{children:"get"}),"."]}),e.jsx(u,{code:`
await cache.set('post:1', { title: 'My Post', views: 100 }, 3600);
const post = await cache.get('post:1');
console.log(post.title); // My Post
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Check If Data Exists"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"has"})," to see if a key is in the cache."]}),e.jsx(u,{code:`
const exists = await cache.has('post:1');
console.log(exists); // true or false
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Remove Data"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Delete a single key with ",e.jsx("code",{children:"delete"})," or clear everything with ",e.jsx("code",{children:"clear"}),"."]}),e.jsx(u,{code:`
await cache.delete('post:1'); // Remove one post
await cache.clear(); // Remove all data
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("p",{className:"mt-4",children:["Need to cache multiple items at once? Check out"," ",e.jsx("a",{href:"#batch-operations",onClick:()=>n("batch-operations"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Batch Operations"}),"."]})]}),e.jsxs("section",{id:"batch-operations",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"📚 Batch Operations"}),e.jsx("p",{className:"mb-4",children:"Work with multiple cache entries at once to save time and reduce network calls."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Fetch Multiple Items"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Get several values in one go with ",e.jsx("code",{children:"getMany"}),"."]}),e.jsx(u,{code:`
const posts = await cache.getMany(['post:1', 'post:2']);
console.log(posts); // [{ title: 'Post 1' }, { title: 'Post 2' }]
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Save Multiple Items"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Store multiple values with ",e.jsx("code",{children:"setMany"}),"."]}),e.jsx(u,{code:`
await cache.setMany({
  'post:1': { title: 'Post 1', views: 100 },
  'post:2': { title: 'Post 2', views: 50 }
}, 3600);
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Delete Multiple Items"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Remove several keys at once with ",e.jsx("code",{children:"deleteMany"}),"."]}),e.jsx(u,{code:`
await cache.deleteMany(['post:1', 'post:2']);
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("p",{className:"mt-4",children:["For more advanced caching, see"," ",e.jsx("a",{href:"#advanced-features",onClick:()=>n("advanced-features"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Advanced Features"}),"."]})]}),e.jsxs("section",{id:"advanced-features",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 Advanced Features"}),e.jsx("p",{className:"mb-4",children:"Use these tools for smarter caching, like automatic data fetching or clearing groups of keys."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Cache-Aside Pattern"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:[e.jsx("code",{children:"getOrSet"})," fetches data or loads it if missing, perfect for database queries."]}),e.jsx(u,{code:`
const post = await cache.getOrSet('post:1', async () => {
  return await db.findPost(1);
}, 3600);
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Clear Keys by Pattern"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Remove related keys with ",e.jsx("code",{children:"deletePattern"})," using wildcards."]}),e.jsx(u,{code:`
await cache.deletePattern('post:1:*'); // Clears all keys like post:1:comments
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Manage Expiration"}),e.jsxs("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:["Check or update how long a key lives with ",e.jsx("code",{children:"ttl"})," and ",e.jsx("code",{children:"expire"}),"."]}),e.jsx(u,{code:`
const timeLeft = await cache.ttl('post:1'); // Seconds remaining
await cache.expire('post:1', 7200); // Extend to 2 hours
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for more advanced options."]})]}),e.jsxs("section",{id:"configuration",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🔧 Configuration Options"}),e.jsx("p",{className:"mb-4",children:"Tweak your cache setup to match your app’s needs, like setting expiration times or adding key prefixes."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Basic Setup"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Choose a backend and add a prefix to keep keys organized."}),e.jsx(u,{code:`
const cache = await createCache({
  strategy: 'redis',
  keyPrefix: 'app:', // All keys start with 'app:'
  defaultTTL: 3600 // Default 1-hour expiration
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Memory Cache Limits"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Control how much data the memory cache holds."}),e.jsx(u,{code:`
const cache = await createCache({
  strategy: 'memory',
  maxItems: 500, // Max 500 items
  maxSize: 52428800 // 50MB limit
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Redis Connection"}),e.jsx("p",{className:"mb-2 text-gray-600 dark:text-gray-300",children:"Connect to Redis with a URL and custom settings."}),e.jsx(u,{code:`
const cache = await createCache({
  strategy: 'redis',
  url: 'redis://localhost:6379',
  options: { connectTimeout: 5000 }
});
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("p",{className:"mt-4",children:["Check the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for all configuration options."]})]}),e.jsxs("section",{id:"use-cases",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"💡 Common Use Cases"}),e.jsx("p",{className:"mb-4",children:"The Cache module supports a variety of caching scenarios to improve performance and scalability."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Category"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Use Case"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Description"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b",children:"Components Used"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{category:"Database Layer",useCase:"Query Results",desc:"Cache expensive database query results",components:"<code>getOrSet()</code>, TTL management"},{category:"Database Layer",useCase:"Object Hydration",desc:"Cache fully hydrated objects from database",components:"<code>set()</code>, <code>get()</code>, namespaces"},{category:"API Integrations",useCase:"External API Responses",desc:"Cache responses from third-party APIs",components:"<code>getOrSet()</code> with appropriate TTL"},{category:"API Integrations",useCase:"Rate Limit Tracking",desc:"Track API usage limits and quotas",components:"<code>set()</code> with TTL, <code>expire()</code>"},{category:"Web Applications",useCase:"HTTP Response Caching",desc:"Cache rendered pages or API responses",components:"<code>set()</code> with varying TTLs"},{category:"Web Applications",useCase:"Session Storage",desc:"Store user session data",components:"Namespaces, <code>expire()</code>"},{category:"Application Logic",useCase:"Computed Values",desc:"Cache results of expensive calculations",components:"<code>getOrSet()</code> with appropriate TTL"},{category:"Application Logic",useCase:"Feature Flags",desc:"Store and share feature flag settings",components:"<code>get()</code> with defaults, short TTL"}].map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:a.category}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:a.useCase}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:a.desc}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",dangerouslySetInnerHTML:{__html:a.components}})]},i))})]})}),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for more use cases."]})]}),e.jsxs("section",{id:"code-generation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🤖 Code Generation with LLMs"}),e.jsxs("p",{className:"mb-6",children:["Use AI tools like ChatGPT or Claude to generate caching code with the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/PROMPT_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"PROMPT_REFERENCE.md"})," ","guide. These prompts help you quickly build optimized caching solutions."]}),[{title:"Basic Database Caching",prompt:`
Please read the API reference at https://github.com/voilajs/appkit/blob/main/src/cache/docs/PROMPT_REFERENCE.md and then create a caching layer for database queries using @voilajs/appkit/cache with the following features:
- Redis cache configuration for production
- Memory cache fallback for development
- Cache-aside pattern for common queries
- Automatic cache invalidation on data updates
- Type-safe functions for TypeScript projects
              `},{title:"API Response Caching",prompt:`
Please read the API reference at https://github.com/voilajs/appkit/blob/main/src/cache/docs/PROMPT_REFERENCE.md and then implement an Express middleware for caching API responses using @voilajs/appkit/cache that includes:
- Configurable TTL based on route
- Cache bypass for authenticated requests
- Vary cache by query parameters
- Cache status in response headers
- Batch invalidation for related resources
              `},{title:"Advanced Caching Patterns",prompt:`
Please read the API reference at https://github.com/voilajs/appkit/blob/main/src/cache/docs/PROMPT_REFERENCE.md and then implement advanced caching patterns using @voilajs/appkit/cache with:
- Write-through and write-behind caching
- Two-level caching (memory + Redis)
- Circuit breaker for cache backend failures
- Stampede protection for high-traffic keys
- Cache warming for predictable access patterns
              `}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:a.title}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-800 dark:text-gray-200 mb-2",children:a.prompt.trim().split(`
`).map((m,x)=>e.jsxs("span",{children:[m,e.jsx("br",{})]},x))}),e.jsxs("button",{onClick:()=>navigator.clipboard.writeText(a.prompt.trim()),className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center mt-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy to clipboard"]})]},i)),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for more LLM prompt examples."]})]}),e.jsxs("section",{id:"example-code",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"📋 Example Code"}),e.jsx("p",{className:"mb-6",children:"Explore practical examples to see how the Cache module works in real applications:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"Cache Basics",desc:"Basic cache operations and configuration.",url:"https://github.com/voilajs/appkit/blob/main/src/cache/examples/01-cache-basics.js"},{title:"Redis Cache",desc:"Working with Redis as a cache backend.",url:"https://github.com/voilajs/appkit/blob/main/src/cache/examples/02-redis-cache.js"},{title:"Cache Patterns",desc:"Common caching patterns and techniques.",url:"https://github.com/voilajs/appkit/blob/main/src/cache/examples/03-cache-patterns.js"},{title:"API Caching",desc:"Caching API responses for improved performance.",url:"https://github.com/voilajs/appkit/blob/main/src/cache/examples/04-api-caching.js"},{title:"Rate Limiting",desc:"Using caching for API rate limiting.",url:"https://github.com/voilajs/appkit/blob/main/src/cache/examples/05-rate-limiting.js"}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:a.desc}),e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["View example",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]},i))})]}),e.jsxs("section",{id:"caching-practices",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🛡️ Caching Best Practices"}),e.jsx("p",{className:"mb-4",children:"Follow these practices to ensure your caching system is effective and efficient:"}),e.jsx("ul",{className:"space-y-4 mb-6 list-disc pl-0",children:[{title:"Choose the Right TTL",desc:"Set expiration times based on data volatility and freshness requirements."},{title:"Design Good Cache Keys",desc:"Use consistent, hierarchical naming patterns (e.g., user:123:profile)."},{title:"Implement Proper Invalidation",desc:"Update or delete cached data when the source changes."},{title:"Handle Cache Misses Gracefully",desc:"Always have a fallback when data isn’t in cache."},{title:"Monitor Cache Performance",desc:"Track hit rates, miss rates, and memory usage."},{title:"Use Namespaces",desc:"Organize related cache keys to simplify management and invalidation."},{title:"Set Cache Size Limits",desc:"Configure appropriate limits to prevent memory issues."}].map((a,i)=>e.jsxs("li",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border list-none border-gray-200 dark:border-gray-700",children:[e.jsxs("span",{className:"font-semibold",children:[a.title,":"]})," ",a.desc]},i))}),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for advanced caching guidelines."]})]}),e.jsxs("section",{id:"performance",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"📊 Performance Considerations"}),e.jsx("p",{className:"mb-4",children:"Optimize your caching system with these performance tips:"}),e.jsx("ul",{className:"space-y-4 mb-6 list-disc pl-0",children:[{title:"Use Batch Operations",desc:"Leverage getMany and setMany to reduce network round-trips."},{title:"Choose Appropriate Serialization",desc:"Optimize for complex objects or binary data."},{title:"Implement Two-Level Caching",desc:"Combine memory and distributed caches for frequently accessed data."},{title:"Limit Large Values",desc:"Avoid storing oversized values in distributed caches."},{title:"Consider Compression",desc:"Compress large textual or JSON data to save space."}].map((a,i)=>e.jsxs("li",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border list-none border-gray-200 dark:border-gray-700",children:[e.jsxs("span",{className:"font-semibold",children:[a.title,":"]})," ",a.desc]},i))}),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for more performance optimizations."]})]}),e.jsxs("section",{id:"error-handling",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🔍 Error Handling"}),e.jsx("p",{className:"mb-4",children:"Handle errors gracefully to ensure application resilience when cache operations fail."}),e.jsx(u,{code:`
try {
  const result = await cache.get('important-data');
} catch (error) {
  console.error('Cache operation failed:', error.message);
  const result = await fetchDataFromOriginalSource();
  try {
    await cache.set('important-data', result);
  } catch (cacheError) {
    console.warn('Failed to restore cache:', cacheError.message);
  }
}
            `,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 dark:border-yellow-400 rounded",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200",children:[e.jsx("strong",{children:"Best Practice:"})," Always provide a fallback to the original data source and avoid exposing cache errors to users."]})}),e.jsxs("p",{className:"mt-4",children:["See the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"})," ","for advanced error handling strategies."]})]}),e.jsxs("section",{id:"documentation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"📚 Documentation Links"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[{emoji:"📘",title:"Developer Reference",desc:"Detailed implementation guide with examples and best practices",url:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/DEVELOPER_REFERENCE.md"},{emoji:"📗",title:"API Reference",desc:"Complete API documentation with parameters and error details",url:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/API_REFERENCE.md"},{emoji:"📙",title:"LLM Code Generation",desc:"Guide for using AI tools to generate caching code",url:"https://github.com/voilajs/appkit/blob/main/src/cache/docs/PROMPT_REFERENCE.md"}].map((a,i)=>e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"text-lg font-semibold mb-2 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2","aria-hidden":"true",children:a.emoji}),a.title]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Contributing"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:["Join our community to improve ",e.jsx("code",{children:"@voilajs/appkit"})," by fixing bugs, enhancing docs, or adding features."]}),e.jsxs("a",{href:"https://github.com/voilajs/appkit/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center",children:["View Contributing Guide",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",children:[e.jsx("h2",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("ul",{className:"space-y-2 text-sm",children:o.map((a,i)=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>n(a.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===a.id?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,"aria-current":t===a.id?"true":"false",children:a.name})},i))})]})})})]})}const or=(t,s)=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>t.apply(void 0,o),s)}};function lr(){const[t,s]=j.useState("getting-started"),r=D(),o=j.useMemo(()=>[{name:"Getting Started",id:"getting-started"},{name:"Core Concepts",id:"core-concepts"},{name:"Installation",id:"installation"},{name:"Basic Usage",id:"basic-usage"},{name:"Configuration Options",id:"configuration-options"},{name:"Accessing Configs",id:"accessing-configs"},{name:"Schema Validation",id:"schema-validation"},{name:"Common Use Cases",id:"use-cases"},{name:"Advanced Features",id:"advanced-features"},{name:"Performance Tips",id:"performance-tips"},{name:"Best Practices",id:"best-practices"},{name:"Error Handling",id:"error-handling"},{name:"Futher Reading",id:"further-reading"}],[]),l=j.useCallback(or(()=>{for(const n of o){const a=document.getElementById(n.id);if(!a)continue;const i=a.getBoundingClientRect();if(i.top<=120&&i.bottom>=120){s(n.id),window.history.replaceState(null,"",`#${n.id}`);break}}},100),[o]),d=j.useCallback(n=>{const a=document.getElementById(n);a&&(window.scrollTo({top:a.offsetTop-80,behavior:"smooth"}),s(n),window.history.replaceState(null,"",`#${n}`))},[]);return j.useEffect(()=>{if(r.hash){const n=r.hash.replace("#","");d(n)}return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[r.hash,l,d]),e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-8 lg:pr-16",children:[e.jsxs("header",{className:"mb-10",children:[e.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"🔧"})," Config Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Simplify and secure your Node.js application’s configuration management."}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"npm package",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Config module is your go-to tool for managing settings in Node.js applications. Whether you’re setting up a small API or a complex microservices system, this module makes it easy to load, validate, and access configurations from various sources like JSON files, environment variables, or JavaScript objects. It’s designed to be as intuitive as possible, with a simple configuration system, with flexibility for advanced use cases."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Why use the Config module? It saves you from the headache of juggling settings across development, staging, and production environments. It ensures your configs are valid before your app starts, supports dynamic updates during development, and integrates seamlessly with environment variables for secure secret management."}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Load configs from multiple formats (JSON, YAML, .env)."}),e.jsx("li",{children:"Validate settings with JSON schemas to prevent errors."}),e.jsx("li",{children:"Override configs with environment variables for flexibility."}),e.jsx("li",{children:"Enable auto-reload for rapid development."}),e.jsx("li",{children:"Use dot-notation for easy access to nested settings."})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to dive in?"," ",e.jsx("button",{onClick:()=>d("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Start with Installation"}),"."]})]}),e.jsxs("section",{id:"core-concepts",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Concepts"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Before diving into the code, let’s cover the essential ideas behind the Config module. Grasping these will help you manage your app’s settings with ease:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"Centralized Settings",desc:"The Config module keeps all your app’s settings, like database or API details, in one place. This makes it simple to access and update them without digging through your code."},{title:"Environment Flexibility",desc:"Your app may need different settings for development, testing, or production. The module uses environment variables to adapt settings based on where your app is running."},{title:"Dynamic Updates",desc:"Need to change a setting while your app is live? The Config module lets you update settings on the fly, offering flexibility for real-time adjustments."},{title:"Safe Defaults",desc:"Missing a setting? The module provides default values to keep your app running smoothly, preventing crashes due to undefined configurations."}].map((n,a)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:n.desc})]},a))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These concepts make configuration management straightforward and reliable. In the next sections, we’ll show you how to apply them with practical examples."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Installation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Setting up the Config module is straightforward. You’ll need Node.js 14 or higher and a package manager like npm, yarn, or pnpm. Follow these steps to get started."}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 1: Install the Package"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Run the following command in your project directory:"}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 2: Import the Module"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Import the Config module in your JavaScript or TypeScript file:"}),e.jsx(u,{code:"import { loadConfig, getConfig } from '@voilajsx/appkit/config';",language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["For CommonJS, use:"," ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm",children:"const { loadConfig, getConfig } = require('@voilajsx/appkit/config');"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 3: Prepare Your Config"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Create a configuration file (e.g., ",e.jsx("code",{children:"config.json"}),") or use environment variables to store your settings. We’ll cover this in the next section."]})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"That’s all you need to start! Let’s move on to using the module."})]}),e.jsxs("section",{id:"basic-usage",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Basic Usage"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let’s walk through a simple example to load a configuration file and access its values. This is perfect for getting started and understanding the core features of the Config module."}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 1: Create a Config File"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["Create a file named ",e.jsx("code",{children:"config.json"})," in your project root:"]}),e.jsx(u,{code:`
{
  "server": {
    "host": "localhost",
    "port": 3000
  },
  "database": {
    "url": "mysql://user:pass@localhost/db",
    "pool": 10
  }
}
              `,language:"json",showCopyButton:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 2: Load the Config"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Load the config file and set defaults or required fields:"}),e.jsx(u,{code:`
import { loadConfig, getConfig } from '@voilajsx/appkit/config';

// Load the configuration
await loadConfig('./config.json', {
  defaults: {
    server: { port: 8080, host: '0.0.0.0' }
  },
  required: ['database.url']
});

// Access values
const port = getConfig('server.port'); // 3000
const dbUrl = getConfig('database.url');
console.log(\`Server running on \${port}, DB: \${dbUrl}\`);
              `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"What’s Happening?"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["The ",e.jsx("code",{children:"loadConfig"})," function reads ",e.jsx("code",{children:"config.json"}),", merges it with defaults, and checks for required fields. If ",e.jsx("code",{children:"database.url"})," is missing, it throws an error. The ",e.jsx("code",{children:"getConfig"})," function retrieves values using dot-notation, making it easy to access nested settings."]})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"This is the foundation of the Config module. Next, we’ll explore how to customize its behavior."})]}),e.jsxs("section",{id:"configuration-options",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Configuration Options"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The Config module is highly customizable. You can load configs from multiple sources, override settings with environment variables, and enable features like auto-reload. Here’s a detailed look at the options available for ",e.jsx("code",{children:"loadConfig"}),"."]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Available Options"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Option"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Description"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Default"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"defaults"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Fallback values for missing settings"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:JSON.stringify({},null,2)})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:JSON.stringify({server:{port:8080,host:"0.0.0.0"}},null,2)})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"required"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Settings that must exist"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"[]"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"['database.url']"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"env"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Enable environment variable overrides"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"true"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"watch"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Reload configs on file changes"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"false"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"true"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"interpolate"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Enable variable interpolation"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"true"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"schema"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Schema for validation"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'app'"})})]})]})]})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Custom Configuration"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Load a config with all options:"}),e.jsx(u,{code:`
import { loadConfig } from '@voilajsx/appkit/config';

await loadConfig('./config.json', {
  defaults: {
    server: { port: 3000, host: 'localhost' },
    logging: { level: 'info' }
  },
  required: ['database.url', 'api.key'],
  env: true,
  watch: process.env.NODE_ENV === 'development',
  interpolate: true,
  schema: 'app'
});
              `,language:"javascript",showCopyButton:!0})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"These options let you tailor the Config module to your needs, from simple apps to complex systems."})]}),e.jsxs("section",{id:"accessing-configs",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Accessing Configs"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Once your configs are loaded, accessing them is a breeze with dot-notation. The module provides several functions to retrieve settings, check their existence, or fetch environment variables directly."}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Key Functions"}),e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("code",{children:"getConfig(path, default)"}),": Get a config value, with an optional fallback."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hasConfig(path)"}),": Check if a config path exists."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getEnv(name, default)"}),": Get an environment variable, with a fallback."]})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Accessing Settings"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Here’s how to use these functions:"}),e.jsx(u,{code:`
import { getConfig, hasConfig, getEnv } from '@voilajsx/appkit/config';

// Get a single value
const port = getConfig('server.port', 3000); // 3000 or fallback

// Get a nested object
const db = getConfig('database'); // { url: '...', pool: 10 }

// Check for a setting (great for feature flags)
if (hasConfig('features.darkMode') && getConfig('features.darkMode')) {
  enableDarkMode();
}

// Get an environment variable
const nodeEnv = getEnv('NODE_ENV', 'development');
              `,language:"javascript",showCopyButton:!0})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["Dot-notation simplifies accessing nested settings, and fallbacks ensure your app doesn’t crash if a value is missing. Use ",e.jsx("code",{children:"hasConfig"})," for conditional logic, like enabling optional features."]})]}),e.jsxs("section",{id:"schema-validation",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Schema Validation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Schema validation ensures your configs are correct before your app runs. This prevents runtime errors from missing or invalid settings, like a missing database URL or an invalid port number."}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"How It Works"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["Define a schema using ",e.jsx("code",{children:"defineSchema"}),", then pass it to ",e.jsx("code",{children:"loadConfig"}),". The module checks your config against the schema and throws an error if it doesn’t match."]}),e.jsxs("ol",{className:"list-decimal pl-5 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Define a schema with types, required fields, and constraints."}),e.jsx("li",{children:"Load your config with the schema."}),e.jsx("li",{children:"Handle validation errors if needed."})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Validating a Config"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Here’s a schema for a server and database config:"}),e.jsx(u,{code:`
import { defineSchema, loadConfig } from '@voilajsx/appkit/config';

// Define the schema
defineSchema('app', {
  type: 'object',
  required: ['server.port', 'database.url'],
  properties: {
    server: {
      type: 'object',
      properties: {
        port: { type: 'number', minimum: 1024, maximum: 65535 },
        host: { type: 'string', default: 'localhost' }
      }
    },
    database: {
      type: 'object',
      properties: {
        url: { type: 'string', format: 'uri' },
        pool: { type: 'number', minimum: 1, maximum: 100 }
      }
    }
  }
});

// Load with validation
try {
  await loadConfig('./config.json', { schema: 'app' });
  console.log('Config is valid!');
} catch (error) {
  console.error('Validation failed:', error.details.errors);
}
              `,language:"javascript",showCopyButton:!0})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"Validation ensures your app starts with correct settings. Use it for critical configs like database connections or API endpoints."})]}),e.jsxs("section",{id:"use-cases",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Common Use Cases"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The Config module shines in real-world scenarios. Here are detailed examples to help you apply it effectively."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Multi-Environment Configurations"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Manage different settings for development, staging, and production environments, ensuring you have env-specific configs."}),e.jsx(u,{code:`
import { loadConfig } from '@voilajsx/appkit/config';

const env = process.env.NODE_ENV || 'development';
await loadConfig([
  './config/base.json', // Shared settings
  \`./config/\${env}.json\` // Environment-specific overrides
], {
  defaults: { server: { port: 3000 } },
  required: ['database.url'],
  env: true
});
                `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"This loads a base config and overlays environment-specific settings, ensuring flexibility across environments."})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Feature Flags"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Toggle features dynamically without code changes, like feature flags."}),e.jsx(u,{code:`
import { getConfig, hasConfig } from '@voilajsx/appkit/config';

// config.json: { "features": { "darkMode": true, "beta": false } }
if (hasConfig('features.darkMode') && getConfig('features.darkMode')) {
  enableDarkMode();
}

if (hasConfig('features.beta') && getConfig('features.beta')) {
  enableBetaFeatures();
}
                `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"Use feature flags to roll out new features gradually or test them in specific environments."})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Secret Management"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Securely handle sensitive data like API keys using environment variables."}),e.jsx(u,{code:`
import { loadConfig, getEnv } from '@voilajsx/appkit/config';

// .env: API_KEY=your-secret-key
await loadConfig('./config.json', {
  env: true, // Maps API_KEY to api.key
  required: ['api.key']
});

const apiKey = getEnv('API_KEY', 'default-key');
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Keep secrets out of version control by using ",e.jsx("code",{children:".env"})," files, and validate their presence."]})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"TypeScript Integration"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Use TypeScript for type-safe config access, enhancing developer experience."}),e.jsx(u,{code:`
import { loadConfig, getConfig } from '@voilajsx/appkit/config';

interface AppConfig {
  server: { port: number; host: string };
  database: { url: string; pool: number };
}

await loadConfig<AppConfig>('./config.json');

const port = getConfig('server.port'); // Type: number
const db = getConfig('database'); // Type: { url: string; pool: number }
              `,language:"typescript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"TypeScript ensures your config matches the expected structure, reducing errors and improving IDE support."})]})]})]}),e.jsxs("section",{id:"advanced-features",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Advanced Features"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"For advanced users, the Config module offers powerful features to handle complex scenarios."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Variable Interpolation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Reference values within your config."}),e.jsx(u,{code:`
{
  "baseUrl": "https://api.example.com",
  "endpoint": "\${baseUrl}/v1/users",
  "timeout": 5000,
  "retryUrl": "\${endpoint}?retry=\${timeout}"
}
              `,language:"json",showCopyButton:!0}),e.jsx(u,{code:`
import { loadConfig, getConfig } from '@voilajsx/appkit/config';

await loadConfig('./config.json', { interpolate: true });
const endpoint = getConfig('endpoint'); // https://api.example.com/v1/users
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Interpolation simplifies dynamic configs, but disable it (",e.jsx("code",{children:"interpolate: false"}),") if you don’t need it to improve performance."]})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Dynamic Config Updates"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Update configs at runtime without restarting your app."}),e.jsx(u,{code:`
import { setConfig, reloadConfig } from '@voilajsx/appkit/config';

// Update a single value
setConfig('logging.level', 'debug');

// Reload from file
await reloadConfig('./config.json');
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Use ",e.jsx("code",{children:"setConfig"})," for temporary changes and ",e.jsx("code",{children:"reloadConfig"})," to refresh from the source. Be cautious with runtime updates in production."]})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Code Generation with LLMs"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["Use AI tools like Grok to generate Config module code. Refer to the"," ",e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/src/config/docs/PROMPT_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"PROMPT_REFERENCE.md"}),"."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Example prompt: “Generate a Node.js config system using @voilajsx/appkit with environment-specific settings and schema validation.”"})]})]})]}),e.jsxs("section",{id:"performance-tips",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Performance Tips"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Optimize your use of the Config module to keep your app running smoothly, especially in high-performance environments."}),e.jsxs("div",{className:"",children:[e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cache Values:"})," Store frequently accessed configs in variables to avoid repeated ",e.jsx("code",{children:"getConfig"})," calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Disable Watching in Production:"})," Set ",e.jsx("code",{children:"watch: false"})," to avoid file system overhead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Simplify Schemas:"})," Use minimal validation rules for non-critical settings to speed up loading."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Profile Load Time:"})," Measure config loading during startup to identify bottlenecks."]})]}),e.jsx(u,{code:`
import { getConfig } from '@voilajsx/appkit/config';

// Cache a value
const port = getConfig('server.port', 3000);
// Use port directly instead of calling getConfig repeatedly
              `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Follow these guidelines to keep your configuration system secure, maintainable, and efficient."}),e.jsx("div",{className:"",children:e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use Environment Variables for Secrets:"})," Store API keys and database credentials in ",e.jsx("code",{children:".env"})," files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validate Critical Settings:"})," Use schemas to ensure required fields are present and correct."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separate Environments:"})," Maintain separate config files for each environment to prevent mix-ups."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep Configs Shallow:"})," Limit nesting to 2-3 levels for easier access and maintenance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document Settings:"})," Include comments or a README explaining each config option."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Config Loading:"})," Verify configs load correctly in all environments during CI/CD."]})]})})]}),e.jsxs("section",{id:"error-handling",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Error Handling"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Encountering issues? Here are solutions to common problems, with detailed steps to resolve them."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Config File Not Found"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["If ",e.jsx("code",{children:"loadConfig"})," can’t find your config file, check the path and handle the error:"]}),e.jsx(u,{code:`
import { loadConfig } from '@voilajsx/appkit/config';

try {
  await loadConfig('./config.json');
} catch (error) {
  if (error.code === 'FILE_NOT_FOUND') {
    console.error('Config file not found:', error.message);
    // Fallback to defaults or exit
  }
}
              `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Validation Errors"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"If validation fails, inspect the error details:"}),e.jsx(u,{code:`
import { loadConfig } from '@voilajsx/appkit/config';

try {
  await loadConfig('./config.json', { schema: 'app' });
} catch (error) {
  if (error.code === 'VALIDATION_ERROR') {
    console.error('Invalid config:', error.details.errors);
  }
}
              `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Missing Required Fields"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Ensure all required fields are present:"}),e.jsx(u,{code:`
import { loadConfig } from '@voilajsx/appkit/config';

try {
  await loadConfig('./config.json', { required: ['database.url'] });
} catch (error) {
  if (error.code === 'MISSING_REQUIRED_FIELDS') {
    console.error('Missing fields:', error.details.missing);
  }
}
              `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"further-reading",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Further Reading"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Want to learn more? Check out these resources for deeper insights:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Developer Reference",desc:"Detailed guide with advanced configurations and examples",url:"https://github.com/voilajsx/appkit/blob/main/src/config/docs/DEVELOPER_REFERENCE.md"},{title:"API Reference",desc:"Complete documentation of all Auth module functions and options",url:"https://github.com/voilajsx/appkit/blob/main/src/config/docs/API_REFERENCE.md"}].map((n,a)=>e.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:n.desc})]},a))})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4 p-8",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",role:"navigation",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"On This Page"}),e.jsx("ul",{className:"space-y-1 text-sm",children:o.map(n=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>d(n.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===n.id?"bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white font-medium":"text-gray-600 dark:text-gray-300"}`,"aria-current":t===n.id?"true":"false","aria-label":`Go to ${n.name} section`,children:n.name})},n.id))})]})})})]})}const dr=(t,s)=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>t.apply(void 0,o),s)}};let cr=class extends ee.Component{constructor(){super(...arguments);ie(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}render(){var r;return this.state.hasError?e.jsxs("div",{className:"my-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Something went wrong"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"An error occurred while rendering the documentation. Please check the console for details or try refreshing the page."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Error: ",(r=this.state.error)==null?void 0:r.message]})]}):this.props.children}};function mr(){const[t,s]=j.useState("getting-started"),r=D(),o=j.useMemo(()=>[{name:"Getting Started",id:"getting-started"},{name:"Core Concepts",id:"core-concepts"},{name:"Installation",id:"installation"},{name:"Basic Usage",id:"basic-usage"},{name:"Configuration Options",id:"configuration-options"},{name:"Logging Methods",id:"logging-methods"},{name:"Child Loggers",id:"child-loggers"},{name:"Common Use Cases",id:"use-cases"},{name:"Advanced Features",id:"advanced-features"},{name:"Performance Tips",id:"performance-tips"},{name:"Best Practices",id:"best-practices"},{name:"Troubleshooting",id:"troubleshooting"},{name:"API Reference",id:"api-reference"}],[]),l=j.useCallback(dr(()=>{for(const n of o){const a=document.getElementById(n.id);if(!a)continue;const i=a.getBoundingClientRect();if(i.top<=120&&i.bottom>=120){s(n.id),window.history.replaceState(null,"",`#${n.id}`);break}}},100),[o]),d=j.useCallback(n=>{const a=document.getElementById(n);a&&(window.scrollTo({top:a.offsetTop-80,behavior:"smooth"}),s(n),window.history.replaceState(null,"",`#${n}`))},[]);return j.useEffect(()=>{if(r.hash){const n=r.hash.replace("#","");d(n)}return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[r.hash,l,d]),e.jsx(cr,{children:e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-8 lg:pr-16",children:[e.jsxs("header",{className:"mb-10",children:[e.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"📝"})," Logging Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Structured logging for Node.js with file storage and retention policies."}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"npm package",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Logging module provides a robust, structured logging system for Node.js applications. It simplifies logging with features like multiple log levels, file rotation, retention policies, and contextual logging via child loggers. Whether you’re debugging a small app or monitoring a microservices architecture, this module ensures your logs are organized, searchable, and efficient."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"With zero-configuration defaults, you can start logging immediately, while advanced options let you customize storage, formatting, and behavior. The module supports console output, file storage, and integration with log aggregation systems, making it versatile for development and production environments."}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple log levels: error, warn, info, debug."}),e.jsx("li",{children:"Automatic file rotation and retention management."}),e.jsx("li",{children:"Contextual logging with child loggers for request or operation tracing."}),e.jsx("li",{children:"Pretty console output for development."}),e.jsx("li",{children:"Customizable formats for machine-readable logs."})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to start logging?"," ",e.jsx("button",{onClick:()=>d("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Jump to Installation"}),"."]})]}),e.jsxs("section",{id:"core-concepts",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Concepts"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Before exploring the code, let’s understand the key ideas behind the Logging module. These concepts will help you make sense of how logging works in your app:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"Structured Logging",desc:"The Logging module organizes logs as clear, structured data, like a detailed journal. This makes it easy to find and analyze information when debugging or monitoring your app."},{title:"Log Levels",desc:"Logs are categorized by importance, from critical errors to minor debug details. This lets you focus on what matters most, like fixing issues or tracking app behavior."},{title:"File Rotation",desc:"To keep logs manageable, the module automatically splits them into smaller files over time, like daily journals. Old logs are cleaned up to save space."},{title:"Contextual Logging",desc:"Add extra details to logs, like user IDs or request info, to track specific actions. It’s like adding sticky notes to your journal for better context."}].map((n,a)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:n.desc})]},a))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These concepts make logging powerful and organized. In the next sections, we’ll show you how to put them to work with practical examples."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Installation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Installing the Logging module is straightforward. You’ll need Node.js 14 or higher and a package manager like npm, yarn, or pnpm. Follow these steps to add it to your project."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 1: Install the Package"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Run this command in your project directory:"}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Verify the package is installed by checking your ",e.jsx("code",{children:"package.json"}),"."]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 2: Import the Module"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Import the Logging module in your JavaScript or TypeScript file:"}),e.jsx(u,{code:"import { createLogger } from '@voilajsx/appkit/logging';",language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["For CommonJS: ",e.jsx("code",{children:"  const { createLogger } = require('@voilajsx/appkit/logging');"})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["You’re ready to start logging. If you run into issues, see the"," ",e.jsx("button",{onClick:()=>d("troubleshooting"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Troubleshooting"})," ","section."]})]}),e.jsxs("section",{id:"basic-usage",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Basic Usage"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let’s create a logger and log messages at different levels. This example uses default settings, but you can customize them later."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("strong",{children:"Note:"})," The following code examples are for illustration. Copy them into your application, ensuring ",e.jsx("code",{children:"@voilajsx/appkit/logging"})," is installed and imported."]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Create and Use a Logger"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger with default settings
const logger = createLogger();

// Log messages at different levels
logger.info('Application started successfully');
logger.warn('API rate limit approaching', { current: 950, limit: 1000 });
logger.error('Database connection failed', { error: 'Timeout' });
logger.debug('Processing user data', { userId: '123' });
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["This creates a logger that writes to ",e.jsx("code",{children:"logs/app.log"})," with daily rotation and outputs to the console in development."]})]})]}),e.jsxs("section",{id:"configuration-options",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Configuration Options"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Customize your logger with options for log levels, file storage, rotation, and formatting. Here’s a detailed overview of ",e.jsx("code",{children:"createLogger"})," options."]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Available Options"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Option"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Description"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Default"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"level"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Minimum log level to record"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'info'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'debug'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"dirname"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Directory for log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'logs'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'/var/log/app'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"filename"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Base name for log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'app.log'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'server.log'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"retentionDays"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Days to keep log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"7"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"30"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"maxSize"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Max file size before rotation (bytes)"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"10485760"})," (10MB)"]}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"52428800"})," (50MB)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"enableFileLogging"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Write logs to files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"true"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"customFormat"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Custom log formatter function"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-xs",children:e.jsxs("code",{children:["(info) => `$","{","info.level","}",": $","{","info.message","}","`"]})})})]})]})]})})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Custom Logger"}),e.jsx(u,{code:`import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger with custom options
const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  dirname: 'logs',
  filename: 'application.log',
  retentionDays: 30,
  maxSize: 52428800, // 50MB
  enableFileLogging: true,
  customFormat: (info) => \\\`\${info.timestamp} [\${info.level.toUpperCase()}] \${info.message}\\\`
});`,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("section",{id:"logging-methods",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Logging Methods"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The logger provides methods for different severity levels, allowing you to categorize messages based on importance."}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Available Methods"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Method"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Purpose"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"When to Use"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.error()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs critical issues"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Exceptions, security breaches"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.warn()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs potential problems"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Rate limits, deprecations"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.info()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs operational info"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Startup, user actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.debug()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs detailed debug info"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Troubleshooting, development"})]})]})]})})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Logging Levels"}),e.jsx(u,{code:`
const logger = createLogger();

logger.error('Database connection failed', {
  error: 'Timeout',
  host: 'db.example.com'
});
logger.warn('Memory usage high', {
  usage: '85%',
  threshold: '90%'
});
logger.info('User logged in', {
  userId: '123',
  timestamp: new Date()
});
logger.debug('Query executed', {
  query: 'SELECT * FROM users',
  duration: '50ms'
});
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("section",{id:"child-loggers",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Child Loggers"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Child loggers add context to logs, making it easier to trace requests or operations across your application."}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Request Logging"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

const logger = createLogger();

// Create a child logger for a request
const requestLogger = logger.child({
  requestId: 'req-123',
  userId: 'user-456'
});

requestLogger.info('Processing API request');
requestLogger.error('Request failed', { error: 'Invalid input' });
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["The child logger includes ",e.jsx("code",{children:"requestId"})," and ",e.jsx("code",{children:"userId"})," in all logs, improving traceability."]})]})]}),e.jsxs("section",{id:"use-cases",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Common Use Cases"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The Logging module supports various scenarios. Here are practical examples."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"API Request Logging"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

const logger = createLogger();

app.use((req, res, next) => {
  const requestLogger = logger.child({
    requestId: crypto.randomUUID(),
    method: req.method,
    path: req.path
  });
  requestLogger.info('Received request');
  req.logger = requestLogger;
  next();
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Error Tracking"}),e.jsx(u,{code:`
try {
  await db.connect();
} catch (error) {
  logger.error('Database error', {
    error: error.message,
    stack: error.stack,
    connection: db.config
  });
}
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Performance Monitoring"}),e.jsx(u,{code:`
const start = Date.now();
await processHeavyTask();
logger.info('Task completed', {
  duration: \`\${Date.now() - start}ms\`
});
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"advanced-features",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Advanced Features"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Explore advanced capabilities for complex logging needs."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Custom Formatting"}),e.jsx(u,{code:`
const logger = createLogger({
  customFormat: (info) => {
    return JSON.stringify({
      timestamp: info.timestamp,
      level: info.level,
      message: info.message,
      ...info.meta
    });
  }
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Log Aggregation"}),e.jsx(u,{code:`
const logger = createLogger({
  customFormat: (info) => {
    return JSON.stringify({
      '@timestamp': info.timestamp,
      level: info.level,
      message: info.message,
      service: 'my-app',
      ...info.meta
    });
  }
});
                `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"This format is compatible with ELK Stack for centralized logging."})]})]})]}),e.jsxs("section",{id:"performance-tips",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Performance Tips"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Optimize logging for high-performance applications."}),e.jsx("div",{className:"my-4",children:e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"info"})," or ",e.jsx("code",{children:"warn"})," in production to reduce log volume."]}),e.jsx("li",{children:"Reuse child loggers instead of creating new ones per request."}),e.jsxs("li",{children:["Configure reasonable ",e.jsx("code",{children:"maxSize"})," to avoid disk I/O bottlenecks."]}),e.jsx("li",{children:"Consider async logging for high-throughput apps."})]})})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Follow these guidelines for effective logging."}),e.jsx("div",{className:"my-4",children:e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Avoid logging sensitive data (e.g., passwords, API keys)."}),e.jsx("li",{children:"Use structured metadata for searchable logs."}),e.jsx("li",{children:"Implement retention policies to comply with regulations."}),e.jsx("li",{children:"Standardize log formats across services."})]})})]}),e.jsxs("section",{id:"troubleshooting",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Troubleshooting"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Common issues and solutions for the Logging module."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Module Not Found"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["If you see ",e.jsx("code",{children:"createLogger is not defined"}),":"]}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Verify the import:"," ",e.jsx("code",{children:"import { createLogger } from '@voilajsx/appkit/logging';"})]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"File Permission Errors"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["If logs aren’t written to the ",e.jsx("code",{children:"logs"})," directory:"]}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

try {
  const logger = createLogger({ dirname: 'logs' });
} catch (error) {
  if (error.code === 'EACCES') {
    console.error('Permission denied for log directory:', error.message);
  }
}
                  `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"Ensure the app has write permissions for the log directory."})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No Logs in Production"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"If logs aren’t appearing, check the log level:"}),e.jsx(u,{code:`
const logger = createLogger({
  level: 'info' // Ensure this isn’t set to 'error' in production
});
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"api-reference",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"API Reference"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["For complete details, see the"," ",e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/src/logging/docs/API_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"API Reference"}),"."]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Core Functions"}),e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("code",{children:"createLogger(options)"}),": Create a logger instance."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.child(meta)"}),": Create a child logger with context."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.error(message, meta)"}),": Log an error."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.warn(message, meta)"}),": Log a warning."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.info(message, meta)"}),": Log info."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.debug(message, meta)"}),": Log debug info."]})]})]})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4 p-8",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",role:"navigation",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"On This Page"}),e.jsx("ul",{className:"space-y-1 text-sm",children:o.map(n=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>d(n.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===n.id?"bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white font-medium":"text-gray-600 dark:text-gray-300"}`,"aria-current":t===n.id?"true":"false","aria-label":`Go to ${n.name} section`,children:n.name})},n.id))})]})})})]})})}function gr(){const[t,s]=j.useState("introduction"),r=D(),o=[{name:"Introduction",id:"introduction"},{name:"Getting Started",id:"getting-started"},{name:"Core Concepts",id:"core-concepts"},{name:"Installation",id:"installation"},{name:"Data Validation",id:"data-validation"},{name:"Data Sanitization",id:"data-sanitization"},{name:"Schema Management",id:"schema-management"},{name:"Error Handling",id:"error-handling"},{name:"Best Practices",id:"best-practices"},{name:"Further Reading",id:"further-reading"}],l=(a,i)=>{let m;return(...x)=>{clearTimeout(m),m=setTimeout(()=>a.apply(this,x),i)}},d=j.useCallback(l(()=>{for(const a of o){const i=document.getElementById(a.id);if(!i)continue;const m=i.getBoundingClientRect();if(m.top<=120&&m.bottom>=120){s(a.id),window.history.replaceState(null,"",`#${a.id}`);break}}},100),[]);j.useEffect(()=>(window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)),[d]),j.useEffect(()=>{if(r.hash){const a=r.hash.replace("#","");n(a)}},[r.hash]);const n=a=>{const i=document.getElementById(a);i&&(window.scrollTo({top:i.offsetTop-80,behavior:"smooth"}),s(a))};return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-6 lg:pr-16",children:[e.jsxs("header",{className:"mb-8",children:[e.jsxs("h1",{className:"text-4xl font-bold flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"✅"})," Validation Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Safeguard your Node.js app’s data with simple, powerful validation tools"}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"View @voilajsx/appkit on npm",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"introduction",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Welcome to the Validation Module"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Validation module is like a gatekeeper for your Node.js app, ensuring that data entering your system—whether from web forms, APIs, or file uploads—is correct, safe, and reliable. It helps you avoid errors, protect against security threats, and keep your app running smoothly."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Imagine you’re building a signup form or an API endpoint. This module lets you check if emails are valid, passwords are strong, or numbers are within range, all with minimal code. It works seamlessly with frameworks like Express, Fastify, or Koa, making it a great fit for any Node.js project, whether you’re just starting out or scaling up."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"With features like data validation, sanitization, and reusable schemas, you’ll save time and build confidence in your app’s data. This guide will walk you through setup, key features, and practical examples to get you started."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Let’s make your data rock-solid! Begin with"," ",e.jsx("a",{href:"#getting-started",onClick:()=>n("getting-started"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Getting Started"}),"."]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The Validation module, part of ",e.jsx("code",{children:"@voilajsx/appkit"}),", is your toolkit for checking and cleaning data in Node.js apps. Whether you’re validating user registrations, API payloads, or form inputs, it’s designed to be straightforward and effective, like a trusty filter for your data."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"To start, you’ll need:"}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Node.js 14 or higher (run ",e.jsx("code",{children:"node -v"})," to check)."]}),e.jsx("li",{children:"A Node.js project set up with npm or yarn."}),e.jsx("li",{children:"Basic JavaScript knowledge (objects, functions)."}),e.jsx("li",{children:"Optional: A framework like Express for handling inputs."})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here’s a quick example to validate a user signup form with email and password:"}),e.jsx(u,{code:`
import { validate } from '@voilajsx/appkit/validation';

const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', email: true },
    password: { type: 'string', minLength: 6 },
  },
  required: ['email', 'password'],
};

const userData = { email: 'user@example.com', password: 'secure123' };
const result = validate(userData, userSchema);

console.log(result.valid ? 'Ready to sign up!' : result.errors);
            `,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Validate data early, like when it enters your app, to catch issues before they cause problems."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to install? Head to the"," ",e.jsx("a",{href:"#installation",onClick:()=>n("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Installation"})," ","section."]})]}),e.jsxs("section",{id:"core-concepts",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Concepts"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Before diving into the code, let’s explore the key ideas behind the Validation module. Understanding these will help you keep your app’s data safe and reliable:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"Data Validation",desc:"Validation checks if your data follows the rules, like ensuring an email is valid or a password is strong. It’s like a bouncer making sure only the right data gets into your app."},{title:"Data Sanitization",desc:"Sanitization cleans up data by removing harmful content, like rogue HTML or extra spaces. Think of it as a filter that keeps your data safe and tidy."},{title:"Schema Management",desc:"Schemas are reusable blueprints that define how data should look. They ensure consistent validation across your app, like a recipe for perfect data every time."},{title:"Error Handling",desc:"When data doesn’t pass validation, clear error messages guide users to fix issues. It’s like a friendly coach helping you correct mistakes."}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These concepts make data validation simple and secure. In the next sections, we’ll show you how to apply them with practical examples."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Installation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Installing the Validation module is like adding a sturdy lock to your Node.js app’s data. It takes just a few steps to get started, and it works with any Node.js project, including those using Express or other frameworks."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here’s how to set it up:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Install the package:",e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0})]}),e.jsxs("li",{children:["Import the validation tools:",e.jsx(u,{code:"import { validate, sanitize, createSchema } from '@voilajsx/appkit/validation';",language:"javascript",showCopyButton:!0})]}),e.jsxs("li",{children:["Optional: If using Express, add middleware to parse JSON inputs:",e.jsx(u,{code:"app.use(express.json());",language:"javascript",showCopyButton:!0})]})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"To confirm it’s working, try this test:"}),e.jsx(u,{code:`
import { validate } from '@voilajsx/appkit/validation';
const result = validate('test@example.com', { type: 'string', email: true });
console.log(result.valid ? 'Success!' : result.errors);
            `,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200 text-sm",children:[e.jsx("strong",{children:"Gotcha"}),": Ensure Node.js is version 14 or higher, or you may see compatibility errors."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Now you’re set! Explore"," ",e.jsx("a",{href:"#data-validation",onClick:()=>n("data-validation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Data Validation"})," ","to start checking your data."]})]}),e.jsxs("section",{id:"data-validation",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Data Validation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Data validation is like a checkpoint that ensures user inputs, such as form submissions or API requests, follow your app’s rules. It’s essential for keeping your app secure and reliable, whether you’re validating emails, numbers, or custom formats."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here’s how to validate a user form in an Express app, ensuring a valid email and strong password:"}),e.jsx(u,{code:`
import express from 'express';
import { validate } from '@voilajsx/appkit/validation';

const app = express();
app.use(express.json());

const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', email: true },
    password: { type: 'string', minLength: 8 },
  },
  required: ['email', 'password'],
};

app.post('/signup', (req, res) => {
  const result = validate(req.body, userSchema);
  if (result.valid) {
    res.json({ message: 'User validated!', data: result.value });
  } else {
    res.status(400).json({ errors: result.errors });
  }
});
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"This checks the form data and returns errors if the email is invalid or the password is too short, making it easy to protect your signup endpoint."}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Validate data at your app’s entry points, like API routes, to catch issues early."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Next, clean your data with"," ",e.jsx("a",{href:"#data-sanitization",onClick:()=>n("data-sanitization"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Data Sanitization"}),"."]})]}),e.jsxs("section",{id:"data-sanitization",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Data Sanitization"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Sanitization is like a filter that cleans up user inputs to remove harmful or unwanted content, such as malicious HTML or extra spaces. It’s a key step to protect your app from security risks and ensure data consistency."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"For example, when users submit a profile form, you can clean their name and bio to keep the data safe and tidy:"}),e.jsx(u,{code:`
import { sanitize } from '@voilajsx/appkit/validation';

const rawInput = {
  name: '  John <script>Doe<\/script>  ',
  bio: ' Loves coding!!  ',
};

const cleanInput = sanitize(rawInput, {
  name: { trim: true, stripTags: true },
  bio: { trim: true, stripTags: true },
});

console.log(cleanInput);
// { name: 'John Doe', bio: 'Loves coding!!' }
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"This removes harmful tags and extra spaces, making the data safe for storage or display."}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200 text-sm",children:[e.jsx("strong",{children:"Gotcha"}),": Always sanitize before validating to ensure you’re checking clean data."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Want to reuse validation rules? Check out"," ",e.jsx("a",{href:"#schema-management",onClick:()=>n("schema-management"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Schema Management"}),"."]})]}),e.jsxs("section",{id:"schema-management",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Schema Management"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Schemas are like blueprints that define how your data should look, making it easy to validate consistently across your app. They’re perfect for reusing rules, such as for user profiles or product entries."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here’s how to create a schema for a user profile:"}),e.jsx(u,{code:`
import { createSchema } from '@voilajsx/appkit/validation';

const profileSchema = createSchema({
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 3, maxLength: 20 },
    age: { type: 'number', minimum: 18 },
  },
  required: ['username'],
});

const profile = { username: 'john_doe', age: 25 };
const result = validate(profile, profileSchema);

console.log(result.valid ? 'Profile valid!' : result.errors);
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"This schema ensures usernames are valid and ages are appropriate, saving you time by reusing the rules elsewhere."}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Save schemas in a separate file (e.g., ",e.jsx("code",{children:"schemas.js"}),") to share them across your app."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Learn how to handle issues in"," ",e.jsx("a",{href:"#error-handling",onClick:()=>n("error-handling"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Error Handling"}),"."]})]}),e.jsxs("section",{id:"error-handling",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Error Handling"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"When data fails validation, the module provides clear error messages to help users fix their inputs, like a friendly guide pointing out mistakes. This is crucial for creating a smooth user experience in forms or APIs."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here’s how to handle errors in an Express API for a signup form:"}),e.jsx(u,{code:`
import express from 'express';
import { validate } from '@voilajsx/appkit/validation';

const app = express();
app.use(express.json());

const schema = {
  type: 'object',
  properties: {
    email: { type: 'string', email: true },
  },
  required: ['email'],
};

app.post('/signup', (req, res) => {
  const result = validate(req.body, schema);
  if (!result.valid) {
    const errors = result.errors.map(err => ({
      field: err.path,
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
  res.json({ message: 'Valid email!' });
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["This returns a user-friendly error like"," ",e.jsx("code",{children:'{"errors": [{"field": "email", "message": "must be a valid email address"}]}'}),", helping users correct their input."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Use clear error messages to guide users, like “Please enter a valid email.”"]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Improve your validation with"," ",e.jsx("a",{href:"#best-practices",onClick:()=>n("best-practices"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Best Practices"}),"."]})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"To get the most out of the Validation module, follow these tips to keep your app secure, efficient, and user-friendly, like a well-oiled machine."}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sanitize First"}),": Clean data before validating to avoid processing unsafe inputs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use Simple Schemas"}),": Create focused schemas for specific tasks, like signups or updates."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validate Early"}),": Check data at entry points, such as API routes or forms, to catch errors fast."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Make Errors Clear"}),": Provide user-friendly error messages to help users fix issues."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test Your Schemas"}),": Try sample data to ensure your schemas catch the right errors."]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200 text-sm",children:[e.jsx("strong",{children:"Gotcha"}),": Overly strict schemas can frustrate users, so balance rules with flexibility."]})}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Dive deeper with"," ",e.jsx("a",{href:"#further-reading",onClick:()=>n("further-reading"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Further Reading"}),"."]})]}),e.jsxs("section",{id:"further-reading",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Further Reading"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Ready to level up? These resources offer more insights into the Validation module and its features."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Developer Reference",desc:"A detailed guide with examples for using the Validation module effectively.",url:"https://github.com/voilajsx/appkit/blob/main/src/validation/docs/DEVELOPER_REFERENCE.md"},{title:"API Reference",desc:"Complete documentation of all functions and their options.",url:"https://github.com/voilajsx/appkit/blob/main/src/validation/docs/API_REFERENCE.md"},{title:"GitHub Repository",desc:"Explore the source code and find additional examples for @voilajsx/appkit.",url:"https://github.com/voilajsx/appkit"}].map((a,i)=>e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",children:[e.jsx("h2",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("ul",{className:"space-y-2 text-sm",children:o.map((a,i)=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>n(a.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===a.id?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,"aria-current":t===a.id?"true":"false",children:a.name})},i))})]})})})]})}const ur=(t,s)=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>t.apply(void 0,o),s)}};class xr extends ee.Component{constructor(){super(...arguments);ie(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(r){return{hasError:!0,error:r}}render(){var r;return this.state.hasError?e.jsxs("div",{className:"my-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Something went wrong"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"An error occurred while rendering the documentation. Please check the console for details or try refreshing the page."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Error: ",(r=this.state.error)==null?void 0:r.message]})]}):this.props.children}}function pr(){const[t,s]=j.useState("getting-started"),r=D(),o=j.useMemo(()=>[{name:"Getting Started",id:"getting-started"},{name:"Core Concepts",id:"core-concepts"},{name:"Installation",id:"installation"},{name:"Basic Usage",id:"basic-usage"},{name:"Configuration Options",id:"configuration-options"},{name:"Logging Methods",id:"logging-methods"},{name:"Child Loggers",id:"child-loggers"},{name:"Common Use Cases",id:"use-cases"},{name:"Advanced Features",id:"advanced-features"},{name:"Performance Tips",id:"performance-tips"},{name:"Best Practices",id:"best-practices"},{name:"Troubleshooting",id:"troubleshooting"},{name:"API Reference",id:"api-reference"}],[]),l=j.useCallback(ur(()=>{for(const n of o){const a=document.getElementById(n.id);if(!a)continue;const i=a.getBoundingClientRect();if(i.top<=120&&i.bottom>=120){s(n.id),window.history.replaceState(null,"",`#${n.id}`);break}}},100),[o]),d=j.useCallback(n=>{const a=document.getElementById(n);a&&(window.scrollTo({top:a.offsetTop-80,behavior:"smooth"}),s(n),window.history.replaceState(null,"",`#${n}`))},[]);return j.useEffect(()=>{if(r.hash){const n=r.hash.replace("#","");d(n)}return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[r.hash,l,d]),e.jsx(xr,{children:e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-8 lg:pr-16",children:[e.jsxs("header",{className:"mb-10",children:[e.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"📝"})," Logging Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Structured logging for Node.js with file storage and retention policies."}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"npm package",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Logging module provides a robust, structured logging system for Node.js applications. It simplifies logging with features like multiple log levels, file rotation, retention policies, and contextual logging via child loggers. Whether you’re debugging a small app or monitoring a microservices architecture, this module ensures your logs are organized, searchable, and efficient."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"With zero-configuration defaults, you can start logging immediately, while advanced options let you customize storage, formatting, and behavior. The module supports console output, file storage, and integration with log aggregation systems, making it versatile for development and production environments."}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Multiple log levels: error, warn, info, debug."}),e.jsx("li",{children:"Automatic file rotation and retention management."}),e.jsx("li",{children:"Contextual logging with child loggers for request or operation tracing."}),e.jsx("li",{children:"Pretty console output for development."}),e.jsx("li",{children:"Customizable formats for machine-readable logs."})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to start logging?"," ",e.jsx("button",{onClick:()=>d("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Jump to Installation"}),"."]})]}),e.jsxs("section",{id:"core-concepts",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Concepts"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Before exploring the code, let’s understand the key ideas behind the Logging module. These concepts will help you make sense of how logging works in your app:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"Structured Logging",desc:"The Logging module organizes logs as clear, structured data, like a detailed journal. This makes it easy to find and analyze information when debugging or monitoring your app."},{title:"Log Levels",desc:"Logs are categorized by importance, from critical errors to minor debug details. This lets you focus on what matters most, like fixing issues or tracking app behavior."},{title:"File Rotation",desc:"To keep logs manageable, the module automatically splits them into smaller files over time, like daily journals. Old logs are cleaned up to save space."},{title:"Contextual Logging",desc:"Add extra details to logs, like user IDs or request info, to track specific actions. It’s like adding sticky notes to your journal for better context."}].map((n,a)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:n.desc})]},a))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These concepts make logging powerful and organized. In the next sections, we’ll show you how to put them to work with practical examples."})]}),e.jsxs("section",{id:"installation",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Installation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Installing the Logging module is straightforward. You’ll need Node.js 14 or higher and a package manager like npm, yarn, or pnpm. Follow these steps to add it to your project."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 1: Install the Package"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Run this command in your project directory:"}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Verify the package is installed by checking your ",e.jsx("code",{children:"package.json"}),"."]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Step 2: Import the Module"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Import the Logging module in your JavaScript or TypeScript file:"}),e.jsx(u,{code:"import { createLogger } from '@voilajsx/appkit/logging';",language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["For CommonJS: ",e.jsx("code",{children:"  const { createLogger } = require('@voilajsx/appkit/logging');"})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["You’re ready to start logging. If you run into issues, see the"," ",e.jsx("button",{onClick:()=>d("troubleshooting"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Troubleshooting"})," ","section."]})]}),e.jsxs("section",{id:"basic-usage",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Basic Usage"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let’s create a logger and log messages at different levels. This example uses default settings, but you can customize them later."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("strong",{children:"Note:"})," The following code examples are for illustration. Copy them into your application, ensuring ",e.jsx("code",{children:"@voilajsx/appkit/logging"})," is installed and imported."]}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Create and Use a Logger"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger with default settings
const logger = createLogger();

// Log messages at different levels
logger.info('Application started successfully');
logger.warn('API rate limit approaching', { current: 950, limit: 1000 });
logger.error('Database connection failed', { error: 'Timeout' });
logger.debug('Processing user data', { userId: '123' });
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["This creates a logger that writes to ",e.jsx("code",{children:"logs/app.log"})," with daily rotation and outputs to the console in development."]})]})]}),e.jsxs("section",{id:"configuration-options",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Configuration Options"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["Customize your logger with options for log levels, file storage, rotation, and formatting. Here’s a detailed overview of ",e.jsx("code",{children:"createLogger"})," options."]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Available Options"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Option"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Description"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Default"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"level"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Minimum log level to record"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'info'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'debug'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"dirname"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Directory for log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'logs'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'/var/log/app'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"filename"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Base name for log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'app.log'"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"'server.log'"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"retentionDays"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Days to keep log files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"7"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"30"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"maxSize"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Max file size before rotation (bytes)"}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"10485760"})," (10MB)"]}),e.jsxs("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:[e.jsx("code",{children:"52428800"})," (50MB)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"enableFileLogging"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Write logs to files"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"true"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"customFormat"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Custom log formatter function"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-xs",children:e.jsxs("code",{children:["(info) => `$","{","info.level","}",": $","{","info.message","}","`"]})})})]})]})]})})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Custom Logger"}),e.jsx(u,{code:`import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger with custom options
const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  dirname: 'logs',
  filename: 'application.log',
  retentionDays: 30,
  maxSize: 52428800, // 50MB
  enableFileLogging: true,
  customFormat: (info) => \\\`\${info.timestamp} [\${info.level.toUpperCase()}] \${info.message}\\\`
});`,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("section",{id:"logging-methods",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Logging Methods"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The logger provides methods for different severity levels, allowing you to categorize messages based on importance."}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Available Methods"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Method"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"Purpose"}),e.jsx("th",{className:"py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase",children:"When to Use"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.error()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs critical issues"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Exceptions, security breaches"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.warn()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs potential problems"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Rate limits, deprecations"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.info()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs operational info"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Startup, user actions"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-4 px-4 text-sm font-medium text-gray-900 dark:text-white",children:e.jsx("code",{children:"logger.debug()"})}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Logs detailed debug info"}),e.jsx("td",{className:"py-4 px-4 text-sm text-gray-500 dark:text-gray-300",children:"Troubleshooting, development"})]})]})]})})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Logging Levels"}),e.jsx(u,{code:`
const logger = createLogger();

logger.error('Database connection failed', {
  error: 'Timeout',
  host: 'db.example.com'
});
logger.warn('Memory usage high', {
  usage: '85%',
  threshold: '90%'
});
logger.info('User logged in', {
  userId: '123',
  timestamp: new Date()
});
logger.debug('Query executed', {
  query: 'SELECT * FROM users',
  duration: '50ms'
});
                `,language:"javascript",showCopyButton:!0})]})]}),e.jsxs("section",{id:"child-loggers",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Child Loggers"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Child loggers add context to logs, making it easier to trace requests or operations across your application."}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Example: Request Logging"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

const logger = createLogger();

// Create a child logger for a request
const requestLogger = logger.child({
  requestId: 'req-123',
  userId: 'user-456'
});

requestLogger.info('Processing API request');
requestLogger.error('Request failed', { error: 'Invalid input' });
                `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["The child logger includes ",e.jsx("code",{children:"requestId"})," and ",e.jsx("code",{children:"userId"})," in all logs, improving traceability."]})]})]}),e.jsxs("section",{id:"use-cases",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Common Use Cases"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The Logging module supports various scenarios. Here are practical examples."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"API Request Logging"}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

const logger = createLogger();

app.use((req, res, next) => {
  const requestLogger = logger.child({
    requestId: crypto.randomUUID(),
    method: req.method,
    path: req.path
  });
  requestLogger.info('Received request');
  req.logger = requestLogger;
  next();
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Error Tracking"}),e.jsx(u,{code:`
try {
  await db.connect();
} catch (error) {
  logger.error('Database error', {
    error: error.message,
    stack: error.stack,
    connection: db.config
  });
}
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Performance Monitoring"}),e.jsx(u,{code:`
const start = Date.now();
await processHeavyTask();
logger.info('Task completed', {
  duration: \`\${Date.now() - start}ms\`
});
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"advanced-features",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Advanced Features"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Explore advanced capabilities for complex logging needs."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Custom Formatting"}),e.jsx(u,{code:`
const logger = createLogger({
  customFormat: (info) => {
    return JSON.stringify({
      timestamp: info.timestamp,
      level: info.level,
      message: info.message,
      ...info.meta
    });
  }
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Log Aggregation"}),e.jsx(u,{code:`
const logger = createLogger({
  customFormat: (info) => {
    return JSON.stringify({
      '@timestamp': info.timestamp,
      level: info.level,
      message: info.message,
      service: 'my-app',
      ...info.meta
    });
  }
});
                `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"This format is compatible with ELK Stack for centralized logging."})]})]})]}),e.jsxs("section",{id:"performance-tips",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Performance Tips"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Optimize logging for high-performance applications."}),e.jsx("div",{className:"my-4",children:e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"info"})," or ",e.jsx("code",{children:"warn"})," in production to reduce log volume."]}),e.jsx("li",{children:"Reuse child loggers instead of creating new ones per request."}),e.jsxs("li",{children:["Configure reasonable ",e.jsx("code",{children:"maxSize"})," to avoid disk I/O bottlenecks."]}),e.jsx("li",{children:"Consider async logging for high-throughput apps."})]})})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Follow these guidelines for effective logging."}),e.jsx("div",{className:"my-4",children:e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Avoid logging sensitive data (e.g., passwords, API keys)."}),e.jsx("li",{children:"Use structured metadata for searchable logs."}),e.jsx("li",{children:"Implement retention policies to comply with regulations."}),e.jsx("li",{children:"Standardize log formats across services."})]})})]}),e.jsxs("section",{id:"troubleshooting",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"Troubleshooting"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Common issues and solutions for the Logging module."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Module Not Found"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["If you see ",e.jsx("code",{children:"createLogger is not defined"}),":"]}),e.jsx(u,{code:"npm install @voilajsx/appkit",language:"bash",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:["Verify the import:"," ",e.jsx("code",{children:"import { createLogger } from '@voilajsx/appkit/logging';"})]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"File Permission Errors"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:["If logs aren’t written to the ",e.jsx("code",{children:"logs"})," directory:"]}),e.jsx(u,{code:`
import { createLogger } from '@voilajsx/appkit/logging';

try {
  const logger = createLogger({ dirname: 'logs' });
} catch (error) {
  if (error.code === 'EACCES') {
    console.error('Permission denied for log directory:', error.message);
  }
}
                  `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-2",children:"Ensure the app has write permissions for the log directory."})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No Logs in Production"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"If logs aren’t appearing, check the log level:"}),e.jsx(u,{code:`
const logger = createLogger({
  level: 'info' // Ensure this isn’t set to 'error' in production
});
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"api-reference",className:"mb-12 scroll-mt-24",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"API Reference"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["For complete details, see the"," ",e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/src/logging/docs/API_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"API Reference"}),"."]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"Core Functions"}),e.jsxs("ul",{className:"list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("code",{children:"createLogger(options)"}),": Create a logger instance."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.child(meta)"}),": Create a child logger with context."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.error(message, meta)"}),": Log an error."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.warn(message, meta)"}),": Log a warning."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.info(message, meta)"}),": Log info."]}),e.jsxs("li",{children:[e.jsx("code",{children:"logger.debug(message, meta)"}),": Log debug info."]})]})]})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4 p-8",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",role:"navigation",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"On This Page"}),e.jsx("ul",{className:"space-y-1 text-sm",children:o.map(n=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>d(n.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===n.id?"bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white font-medium":"text-gray-600 dark:text-gray-300"}`,"aria-current":t===n.id?"true":"false","aria-label":`Go to ${n.name} section`,children:n.name})},n.id))})]})})})]})})}function hr(){const[t,s]=j.useState("introduction"),r=D(),o=[{name:"Getting Started",id:"getting-started"},{name:"Core Features",id:"core-features"},{name:"Setup",id:"setup"},{name:"CSRF Protection",id:"csrf-protection"},{name:"Rate Limiting",id:"rate-limiting"},{name:"Input Sanitization",id:"input-sanitization"},{name:"Data Encryption",id:"data-encryption"},{name:"Common Use Cases",id:"common-use-cases"},{name:"Best Practices",id:"best-practices"},{name:"Error Handling",id:"error-handling"},{name:"Further Reading",id:"further-reading"}],l=(a,i)=>{let m;return(...x)=>{clearTimeout(m),m=setTimeout(()=>a.apply(this,x),i)}},d=j.useCallback(l(()=>{for(const a of o){const i=document.getElementById(a.id);if(!i)continue;const m=i.getBoundingClientRect();if(m.top<=120&&m.bottom>=120){s(a.id),window.history.replaceState(null,"",`#${a.id}`);break}}},100),[]);j.useEffect(()=>(window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)),[d]),j.useEffect(()=>{if(r.hash){const a=r.hash.replace("#","");n(a)}},[r.hash]);const n=a=>{const i=document.getElementById(a);i&&(window.scrollTo({top:i.offsetTop-80,behavior:"smooth"}),s(a))};return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsxs("div",{className:"w-full lg:w-3/4 p-6 lg:pr-16",children:[e.jsxs("header",{className:"mb-8",children:[e.jsxs("h1",{className:"text-4xl font-bold flex items-center",children:[e.jsx("span",{className:"mr-3","aria-hidden":"true",children:"🔒"})," Security Module"]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2",children:"Defend your Node.js apps with simple, robust security tools"}),e.jsxs("div",{className:"flex space-x-3 mt-4",children:[e.jsx("a",{href:"https://www.npmjs.com/package/@voilajsx/appkit",target:"_blank",rel:"noopener noreferrer","aria-label":"View @voilajsx/appkit on npm",children:e.jsx("img",{src:"https://img.shields.io/npm/v/@voilajsx/appkit.svg",alt:"npm version"})}),e.jsx("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer","aria-label":"MIT License",children:e.jsx("img",{src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})})]})]}),e.jsxs("section",{id:"getting-started",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Getting Started"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The ",e.jsx("code",{children:"@voilajsx/appkit"})," Security module helps you safeguard your application from common web threats like CSRF, XSS, brute-force attacks, and data exposure. It works seamlessly with Express, Fastify, and Koa, and is designed to make security implementation simple—without compromising on best practices."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"With built-in support for CSRF protection, request rate limiting, input sanitization, and AES-256-GCM encryption, this module makes it easier to enforce secure defaults across your routes, forms, and APIs. It’s especially useful when handling user input, file uploads, and any sensitive information."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Whether you're working on a hobby project or deploying a full-scale production app, this guide will walk you through essential features, setup instructions, and real-world examples to help you secure your app effectively."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Ready to get started?"," ",e.jsx("a",{href:"#installation",onClick:()=>n("installation"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Let’s begin"}),"."]})]}),e.jsxs("section",{id:"core-features",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Core Features"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"The Security Module provides four key tools to protect your app:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[{title:"CSRF Protection",desc:"Uses secure tokens to verify form submissions, preventing malicious requests from other sites."},{title:"Rate Limiting",desc:"Controls request frequency to block brute force and DoS attacks on your APIs."},{title:"Input Sanitization",desc:"Cleans user inputs to stop XSS and injection attacks, ensuring safe data handling."},{title:"Data Encryption",desc:"Secures sensitive data with AES-256-GCM encryption for confidentiality and integrity."}].map((a,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"These features form a solid defense. Let’s dive into each one next."})]}),e.jsxs("section",{id:"setup",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Setup"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Setting up the Security Module is quick and straightforward. Follow these steps to get started:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Install the package"}),": Add the module to your project:",e.jsx(u,{code:"npm install @voilajsx/appkit express express-session",language:"bash",showCopyButton:!0})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Import security functions"}),": Use ES Modules to access the tools:",e.jsx(u,{code:`
import { generateCsrfToken, createCsrfMiddleware, createRateLimiter, sanitizeHtml, encrypt } from '@voilajsx/appkit/security';
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Configure your app"}),": Set up Express with session middleware for CSRF protection."]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["The module supports Node.js 14+ and works with ES Modules or CommonJS (use ",e.jsx("code",{children:"require"})," for CommonJS)."]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["For more details, see the"," ",e.jsx("a",{href:"https://github.com/voilajs/appkit/blob/main/src/security/docs/DEVELOPER_REFERENCE.md",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Developer Reference"}),"."]})]}),e.jsxs("section",{id:"csrf-protection",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"CSRF Protection"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Cross-site request forgery (CSRF) protection acts like a gatekeeper, ensuring form submissions come from your app. The Security Module uses cryptographically secure tokens to verify requests."}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Configure session middleware for stateful CSRF."}),e.jsxs("li",{children:["Apply ",e.jsx("code",{children:"createCsrfMiddleware"})," to POST/PUT/DELETE routes."]}),e.jsxs("li",{children:["Generate tokens with ",e.jsx("code",{children:"generateCsrfToken"})," for forms."]})]}),e.jsx(u,{code:`
import express from 'express';
import session from 'express-session';
import { generateCsrfToken, createCsrfMiddleware } from '@voilajsx/appkit/security';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-super-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'Lax' }
}));
app.use(createCsrfMiddleware());

app.get('/form', (req, res) => {
  const csrfToken = generateCsrfToken(req.session);
  res.send(\`
    <form method="POST" action="/submit">
      <input type="hidden" name="_csrf" value="\${csrfToken}">
      <input name="message" required>
      <button>Submit</button>
    </form>
  \`);
});

app.post('/submit', (req, res) => {
  res.json({ message: 'Form submitted successfully' });
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:["Invalid tokens trigger a 403 error, covered in ",e.jsx("a",{href:"#error-handling",onClick:()=>n("error-handling"),className:"text-blue-600 dark:text-blue-400 hover:underline",children:"Error Handling"}),"."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Use the ",e.jsx("code",{children:"headerField"})," option to send CSRF tokens via headers for API requests."]})})]}),e.jsxs("section",{id:"rate-limiting",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Rate Limiting"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Rate limiting protects your APIs from abuse, like a bouncer at a club. It restricts how many requests a client can make in a time window, preventing brute force or DoS attacks."}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Create a limiter with ",e.jsx("code",{children:"createRateLimiter"}),"."]}),e.jsx("li",{children:"Apply it to specific routes or globally."}),e.jsx("li",{children:"Handle 429 errors for exceeded limits."})]}),e.jsx(u,{code:`
import express from 'express';
import { createRateLimiter } from '@voilajsx/appkit/security';

const app = express();
const limiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later'
});

app.use('/api', limiter);
app.get('/api/data', (req, res) => {
  res.json({ data: 'Protected endpoint' });
});
            `,language:"javascript",showCopyButton:!0}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:"This limits clients to 100 requests every 15 minutes per IP."})]}),e.jsxs("section",{id:"input-sanitization",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Input Sanitization"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Input sanitization acts like a filter, cleaning user inputs to prevent XSS and injection attacks. The Security Module provides tools to safely handle text, HTML, and filenames."}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"escapeString"})," for plain text display."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sanitizeHtml"})," for limited HTML (e.g., comments)."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sanitizeFilename"})," for safe file uploads."]})]}),e.jsx(u,{code:`
import express from 'express';
import { escapeString, sanitizeHtml, sanitizeFilename } from '@voilajsx/appkit/security';

const app = express();
app.use(express.json());

app.post('/comment', (req, res) => {
  const { comment, username, filename } = req.body;
  const safeComment = sanitizeHtml(comment || '', {
    allowedTags: ['p', 'b', 'i', 'a'],
    allowedAttributes: { 'a': ['href'] }
  });
  const safeUsername = escapeString(username?.trim() || '');
  const safeFilename = sanitizeFilename(filename || '');

  // Save to database
  // await db.comments.insert({ username: safeUsername, comment: safeComment, file: safeFilename });
  res.json({ username: safeUsername, comment: safeComment, file: safeFilename });
});
            `,language:"javascript",showCopyButton:!0}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-4",children:[e.jsx("strong",{children:"Output"}),": Input ",e.jsx("code",{children:`username: "<script>alert('xss')<\/script>"`}),", ",e.jsx("code",{children:'comment: "<p>Hello</p>"'}),", ",e.jsx("code",{children:'filename: "../../etc/passwd"'})," becomes:"]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 text-sm rounded p-4 mt-2 overflow-x-auto text-gray-800 dark:text-gray-200",children:e.jsx("code",{children:`{
  "username": "<script>alert('xss')<\/script>",
  "comment": "<p>Hello</p>",
  "file": "etc_passwd"
}`})}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200 text-sm",children:[e.jsx("strong",{children:"Gotcha"}),": Always sanitize inputs before validation to catch malicious content early."]})})]}),e.jsxs("section",{id:"data-encryption",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Data Encryption"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Data encryption is like a vault, securing sensitive information (e.g., emails, SSNs) with AES-256-GCM for confidentiality and integrity."}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Generate or load a secure encryption key."}),e.jsxs("li",{children:["Encrypt data with ",e.jsx("code",{children:"encrypt"}),", optionally using associated data (AAD)."]}),e.jsxs("li",{children:["Decrypt data with ",e.jsx("code",{children:"decrypt"})," when needed."]})]}),e.jsx(u,{code:`
import express from 'express';
import { generateEncryptionKey, encrypt, decrypt } from '@voilajsx/appkit/security';

const app = express();
app.use(express.json());
const key = process.env.ENCRYPTION_KEY || generateEncryptionKey();

app.post('/user', async (req, res) => {
  const { ssn } = req.body;
  const encryptedSSN = encrypt(ssn, key, 'user_data');
  // Save to database
  // await db.users.insert({ id: 'userId', ssn: encryptedSSN });
  res.json({ message: 'Data saved' });
});

app.get('/user', async (req, res) => {
  // Fetch from database
  const user = { ssn: encryptedSSN }; // Example
  try {
    const ssn = decrypt(user.ssn, key, 'user_data');
    res.json({ ssn });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});
            `,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:[e.jsx("strong",{children:"Pro Tip"}),": Use associated data (AAD) to bind encrypted data to a specific context, like a user ID."]})})]}),e.jsxs("section",{id:"common-use-cases",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Common Use Cases"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Here are practical examples to secure your app in real-world scenarios:"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Securing a Contact Form"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Prevent forged form submissions with CSRF protection:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Generate a CSRF token."}),e.jsx("li",{children:"Apply CSRF middleware."}),e.jsx("li",{children:"Process valid submissions."})]}),e.jsx(u,{code:`
import express from 'express';
import session from 'express-session';
import { generateCsrfToken, createCsrfMiddleware } from '@voilajsx/appkit/security';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: false }));
app.use(createCsrfMiddleware());

app.get('/contact', (req, res) => {
  const csrfToken = generateCsrfToken(req.session);
  res.send(\`
    <form method="POST" action="/contact">
      <input type="hidden" name="_csrf" value="\${csrfToken}">
      <input name="message" required>
      <button>Send</button>
    </form>
  \`);
});

app.post('/contact', (req, res) => {
  res.json({ message: 'Message received' });
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Protecting a Public API"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Limit API requests to prevent abuse:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Configure a rate limiter."}),e.jsx("li",{children:"Apply it to API routes."}),e.jsx("li",{children:"Return data for valid requests."})]}),e.jsx(u,{code:`
import express from 'express';
import { createRateLimiter } from '@voilajsx/appkit/security';

const app = express();
const limiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1000,
  message: 'Too many requests'
});

app.use('/api', limiter);
app.get('/api/data', (req, res) => {
  res.json({ data: 'Protected data' });
});
                `,language:"javascript",showCopyButton:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Encrypting Sensitive Data"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Securely store sensitive user data:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Encrypt data with a key."}),e.jsx("li",{children:"Store the encrypted data."}),e.jsx("li",{children:"Decrypt when needed."})]}),e.jsx(u,{code:`
import express from 'express';
import { generateEncryptionKey, encrypt, decrypt } from '@voilajsx/appkit/security';

const app = express();
app.use(express.json());
const key = process.env.ENCRYPTION_KEY || generateEncryptionKey();

app.post('/user', async (req, res) => {
  const { email } = req.body;
  const encryptedEmail = encrypt(email, key, 'user_profile');
  // Save to database
  // await db.users.insert({ id: 'userId', email: encryptedEmail });
  res.json({ message: 'Data saved' });
});

app.get('/user', async (req, res) => {
  // Fetch from database
  const user = { email: encryptedEmail }; // Example
  try {
    const email = decrypt(user.email, key, 'user_profile');
    res.json({ email });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});
                `,language:"javascript",showCopyButton:!0})]})]})]}),e.jsxs("section",{id:"best-practices",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Best Practices"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Follow these tips to keep your app secure, like maintaining a fortified vault:"}),e.jsxs("ul",{className:"space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use HTTPS"}),": Enable HTTPS in production to protect data in transit."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Secure Secrets"}),": Store encryption keys and session secrets in environment variables."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Layered Defense"}),": Combine CSRF, rate limiting, and sanitization for robust protection."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Server-Side Validation"}),": Always validate inputs on the server."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stay Updated"}),": Keep dependencies patched for security fixes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Generic Errors"}),": Avoid leaking implementation details in error messages."]})]})]}),e.jsxs("section",{id:"error-handling",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Error Handling"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Handle security errors gracefully to maintain security and user trust. The Security Module provides clear error codes for common issues:"}),e.jsxs("ol",{className:"list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Catch errors from middleware or functions."}),e.jsxs("li",{children:["Check error codes like ",e.jsx("code",{children:"EBADCSRFTOKEN"})," or 429."]}),e.jsx("li",{children:"Return vague, user-friendly messages."})]}),e.jsx(u,{code:`
import express from 'express';
import session from 'express-session';
import { createCsrfMiddleware, createRateLimiter } from '@voilajsx/appkit/security';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: false }));
app.use(createCsrfMiddleware());
app.use('/api', createRateLimiter({ windowMs: 60 * 60 * 1000, max: 100 }));

app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({ error: 'Invalid form submission. Please try again.' });
  }
  if (err.code === 'ENOSESSION') {
    return res.status(500).json({ error: 'Server error: Session not configured.' });
  }
  if (err.statusCode === 429) {
    return res.status(429).json({ error: 'Too many requests. Try again later.' });
  }
  next(err);
});
            `,language:"javascript",showCopyButton:!0}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-200 text-sm",children:[e.jsx("strong",{children:"Gotcha"}),": Log errors internally for debugging, but keep user-facing messages generic."]})})]}),e.jsxs("section",{id:"further-reading",className:"mb-12 scroll-mt-20",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Further Reading"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Dive deeper with these resources:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Developer Reference",desc:"Detailed implementation guide with examples",url:"https://github.com/voilajs/appkit/blob/main/src/security/docs/DEVELOPER_REFERENCE.md"},{title:"API Reference",desc:"Complete documentation of Security Module functions",url:"https://github.com/voilajs/appkit/blob/main/src/security/docs/API_REFERENCE.md"},{title:"LLM Prompt Reference",desc:"Guide for AI-assisted secure code generation",url:"https://github.com/voilajs/appkit/blob/main/src/security/docs/PROMPT_REFERENCE.md"}].map((a,i)=>e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:a.desc})]},i))}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-center mt-6",children:["Built with ❤️ in India by the"," ",e.jsx("a",{href:"https://github.com/orgs/voilajsx/people",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"VoilaJSX Team"})]})]})]}),e.jsx("aside",{className:"hidden lg:block lg:w-1/4",children:e.jsx("div",{className:"sticky top-20",children:e.jsxs("nav",{className:"toc","aria-label":"Table of contents",children:[e.jsx("h2",{className:"text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200",children:"On this page"}),e.jsx("ul",{className:"space-y-2 text-sm",children:o.map((a,i)=>e.jsx("li",{className:"list-none",children:e.jsx("button",{onClick:()=>n(a.id),className:`w-full text-left py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${t===a.id?"bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium":"text-gray-700 dark:text-gray-300"}`,"aria-current":t===a.id?"true":"false",children:a.name})},i))})]})})})]})}function yr(){return[{title:"Getting Started",items:[{title:"Introduction",path:"/docs/getting-started"},{title:"Installation",path:"/docs/installation"},{title:"Contributing",path:"/docs/contributing"}]},{title:"Auth Module",items:[{title:"Overview",path:"/docs/auth"},{title:"API Reference",path:"/docs/auth/api-reference"},{title:"Examples",path:"/docs/auth/examples"}]},{title:"Logging Module",items:[{title:"Overview",path:"/docs/logging"},{title:"API Reference",path:"/docs/logging/api-reference"},{title:"Examples",path:"/docs/logging/examples"}]}]}function br(t){if(!t||t==="/")return[{label:"Home",href:"/appkit/"}];const s=t.split("/").filter(Boolean),r=[{label:"Home",href:"/appkit/"}];let o="/appkit";for(let l=0;l<s.length;l++){const d=s[l];if(o+=`/${d}`,d==="docs"&&l===0){r.push({label:"Documentation",href:o});continue}const n=fr(d,o,s.slice(0,l));r.push({label:n,href:o})}return r}function fr(t,s,r){if(r.includes("docs")&&!r.includes("auth")&&!r.includes("logging"))switch(t){case"auth":return"Auth Module";case"logging":return"Logging Module"}switch(t){case"api-reference":return"API Reference";case"getting-started":return"Getting Started";default:return t.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}}function jr(t,s){const o=yr().flatMap(i=>i.items);let l="";t==="general"?l=`/docs/${s}`:l=s?`/docs/${t}/${s}`:`/docs/${t}`;const d=o.findIndex(i=>i.path===l);if(d===-1)return{prev:null,next:null};const n=d>0?o[d-1]:null,a=d<o.length-1?o[d+1]:null;return{prev:n,next:a}}function kr(){const t=D(),s=br(t.pathname);return e.jsxs("div",{className:"documentation-container",children:[e.jsx("div",{className:"",children:e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsx("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:s.map((r,o)=>e.jsxs("li",{className:"inline-flex items-center",children:[o>0&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx("a",{href:r.href,className:`ml-1 md:ml-2 text-sm font-medium ${o===s.length-1?"text-gray-700 dark:text-gray-300 cursor-default pointer-events-none":"text-voila-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"}`,"aria-current":o===s.length-1?"page":void 0,children:r.label})]},r.href))})})}),e.jsx("div",{className:"",children:e.jsx(Oe,{})}),e.jsx("div",{className:"mt-6 pt-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center",children:[e.jsx("div",{children:"Version: 1.0.0 | Last updated: May 15, 2025"}),e.jsx("div",{className:"mt-2 md:mt-0",children:e.jsx("a",{href:"https://github.com/voilajsx/appkit/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",className:"text-voila-blue dark:text-blue-400 hover:underline",children:"MIT License"})})]})})]})}function vr(t){if(!t)return"";const s=t.replace(/^---\n([\s\S]*?)\n---\n/,"");return s}function wr(t){if(!t)return{};const s=t.match(/^---\n([\s\S]*?)\n---\n/);if(!s)return{};const r=s[1],o={};return r.split(`
`).forEach(l=>{const d=l.match(/^([^:]+):\s*(.+)$/);if(d){const[,n,a]=d;let i=a.trim();/^\d+$/.test(i)?i=parseInt(i,10):/^\d+\.\d+$/.test(i)?i=parseFloat(i):i==="true"?i=!0:i==="false"?i=!1:i.startsWith("[")&&i.endsWith("]")&&(i=i.slice(1,-1).split(",").map(m=>m.trim())),o[n.trim()]=i}}),o}function Nr(t){if(!t)return 0;const r=t.replace(/```[\s\S]*?```/g,"").trim().split(/\s+/).length,o=Math.ceil(r/225);return Math.max(1,o)}function Le(t,s){const[r,o]=j.useState(""),[l,d]=j.useState({}),[n,a]=j.useState(!0),[i,m]=j.useState(null);return j.useEffect(()=>{async function x(){a(!0),m(null);try{let y="";if(t==="general")switch(s){case"getting-started":y=Cr();break;case"installation":y=Er();break;case"contributing":y=Sr();break;default:throw new Error(`Document '${s}' not found in 'general' module`)}else if(t==="auth")switch(s){case null:case void 0:case"index":y=Tr();break;case"api-reference":y=Lr();break;case"examples":y=Ar();break;default:throw new Error(`Document '${s}' not found in 'auth' module`)}else if(t==="logging")switch(s){case null:case void 0:case"index":y=Ir();break;case"api-reference":y=Rr();break;case"examples":y=Fr();break;default:throw new Error(`Document '${s}' not found in 'logging' module`)}else throw new Error(`Module '${t}' not found`);const w=vr(y),N=wr(y);o(w),d(N)}catch(y){console.error("Error loading documentation content:",y),m(y.message)}finally{a(!1)}}x()},[t,s]),{content:r,metadata:l,isLoading:n,error:i}}function Cr(){return`---
title: Getting Started
description: Quick introduction to @voilajsx/appkit
order: 1
---

# Getting Started with @voilajsx/appkit

Welcome to the @voilajsx/appkit documentation! This guide will help you get started with the library and introduce you to its main features.

## What is @voilajsx/appkit?

@voilajsx/appkit is a collection of utilities and tools for building Node.js applications. It provides a set of modules for common tasks like authentication, logging, configuration management, and more.

## Installation

You can install @voilajsx/appkit via npm or yarn:

\`\`\`bash
npm install @voilajsx/appkit
\`\`\`

Or with yarn:

\`\`\`bash
yarn add @voilajsx/appkit
\`\`\`

## Key Features

- 🔐 **Auth Module**: JWT tokens, password hashing, and authentication middleware
- 📊 **Logging Module**: Structured logging with multiple transports
- ⚙️ **Config Module**: Configuration management with environment variables
- 🌐 **HTTP Module**: HTTP utilities for building and consuming APIs

## Next Steps

- Check out the [Installation Guide](/docs/installation) for detailed installation instructions
- Explore the [Auth Module](/docs/auth) for authentication utilities
- Learn about structured logging with the [Logging Module](/docs/logging)
`}function Er(){return`---
title: Installation
description: Detailed installation instructions for @voilajsx/appkit
order: 2
---

# Installation Guide

This guide provides detailed instructions for installing and setting up @voilajsx/appkit in your project.

## Prerequisites

- Node.js 14.x or later
- npm 6.x or later (or yarn 1.x)

## Basic Installation

You can install the entire @voilajsx/appkit package:

\`\`\`bash
npm install @voilajsx/appkit
\`\`\`

## Module-Specific Installation

If you only need specific modules, you can import them individually:

\`\`\`javascript
// Only import what you need
import { generateToken, verifyToken } from '@voilajsx/appkit/auth';
import { createLogger } from '@voilajsx/appkit/logging';
\`\`\`

## Setting Up Environment Variables

Some modules require environment variables to be set. Create a \`.env\` file in your project root:

\`\`\`
JWT_SECRET=your-secret-key
LOG_LEVEL=info
\`\`\`

## Verifying Installation

You can verify your installation with this simple test:

\`\`\`javascript
import { createLogger } from '@voilajsx/appkit/logging';

const logger = createLogger({ name: 'test' });
logger.info('Installation successful!');
\`\`\`

If you see the log message, everything is working correctly!
`}function Sr(){return`---
title: Contributing
description: Guidelines for contributing to @voilajsx/appkit
order: 3
---

# Contributing to @voilajsx/appkit

We welcome contributions to @voilajsx/appkit! This guide will help you get started with the development process.

## Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies

\`\`\`bash
git clone https://github.com/your-username/appkit.git
cd appkit
npm install
\`\`\`

## Running Tests

We use Jest for testing. Run the test suite with:

\`\`\`bash
npm test
\`\`\`

## Code Style

We use ESLint and Prettier to maintain code quality. Format your code with:

\`\`\`bash
npm run format
\`\`\`

## Pull Request Process

1. Create a new branch for your feature or bugfix
2. Make your changes
3. Add tests for your changes
4. Run the test suite to ensure everything passes
5. Submit a pull request

## Documentation

Please update the documentation for any new features or changes. We use JSDoc for API documentation and Markdown for guides.

## License

By contributing to @voilajsx/appkit, you agree that your contributions will be licensed under the MIT License.
`}function Tr(){return`---
  title: Auth Module
  description: Authentication utilities for Node.js applications
  icon: 🔐
  order: 1
  ---
  
  # Auth Module
  
  The Auth module provides secure authentication utilities for Node.js applications. It offers JWT token generation and verification, password hashing with bcrypt, and customizable middleware for protecting routes.
  
  ## Features
  
  - **JWT Token Management**: Generate and verify JWT tokens
  - **Password Security**: Hash and compare passwords using bcrypt
  - **Authentication Middleware**: Protect routes with JWT verification
  - **Role-Based Access Control**: Control access based on user roles
  
  ## Installation
  
  \`\`\`bash
  npm install @voilajsx/appkit
  \`\`\`
  
  ## Quick Start
  
  \`\`\`javascript
  import {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
    createAuthMiddleware,
  } from '@voilajsx/appkit/auth';
  
  // Generate a JWT token
  const token = generateToken(
    { userId: '123', email: 'user@example.com' },
    { secret: 'your-secret-key' }
  );
  
  // Verify a token
  const payload = verifyToken(token, { secret: 'your-secret-key' });
  
  // Hash a password
  const hash = await hashPassword('myPassword123');
  
  // Verify a password
  const isValid = await comparePassword('myPassword123', hash);
  
  // Protect routes with middleware
  app.get('/profile', createAuthMiddleware({ secret: 'your-secret-key' }), (req, res) => {
    res.json({ user: req.user });
  });
  \`\`\`
  
  ## Documentation
  
  - [API Reference](/docs/auth/api-reference)
  - [Examples](/docs/auth/examples)
  `}function Lr(){return`---
  title: Auth API Reference
  description: Complete API documentation for the Auth module
  order: 2
  ---
  
  # Auth API Reference
  
  This reference documents all functions and parameters in the Auth module.
  
  ## JWT Functions
  
  ### generateToken(payload, options)
  
  Generates a JWT token with the specified payload and options.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`payload\` | \`Object\` | Yes | - | The payload to encode in the JWT token |
  | \`options\` | \`Object\` | Yes | - | Configuration options |
  | \`options.secret\` | \`string\` | Yes | - | Secret key used to sign the JWT token |
  | \`options.expiresIn\` | \`string\` | No | \`'7d'\` | Token expiration time (e.g., '1h', '7d') |
  | \`options.algorithm\` | \`string\` | No | \`'HS256'\` | JWT signing algorithm |
  
  #### Returns
  
  - \`string\` - The generated JWT token
  
  #### Example
  
  \`\`\`javascript
  const token = generateToken(
    { userId: '123', email: 'user@example.com' },
    { secret: 'your-secret-key', expiresIn: '24h' }
  );
  \`\`\`
  
  ### verifyToken(token, options)
  
  Verifies and decodes a JWT token.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`token\` | \`string\` | Yes | - | JWT token to verify |
  | \`options\` | \`Object\` | Yes | - | Verification options |
  | \`options.secret\` | \`string\` | Yes | - | Secret key used to verify the JWT token |
  | \`options.algorithms\` | \`string[]\` | No | \`['HS256']\` | Array of allowed algorithms |
  
  #### Returns
  
  - \`Object\` - The decoded token payload
  
  #### Example
  
  \`\`\`javascript
  try {
    const payload = verifyToken(token, { secret: 'your-secret-key' });
    console.log(payload.userId); // '123'
  } catch (error) {
    console.error('Invalid token');
  }
  \`\`\`
  
  ## Password Functions
  
  ### hashPassword(password, rounds)
  
  Hashes a password using bcrypt.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`password\` | \`string\` | Yes | - | Password to hash |
  | \`rounds\` | \`number\` | No | \`10\` | Number of salt rounds for bcrypt |
  
  #### Returns
  
  - \`Promise<string>\` - The hashed password
  
  #### Example
  
  \`\`\`javascript
  const hashedPassword = await hashPassword('myPassword123', 12);
  \`\`\`
  
  ### comparePassword(password, hash)
  
  Compares a plain text password with a bcrypt hash.
  
  #### Parameters
  
  | Name | Type | Required | Description |
  | ---- | ---- | -------- | ----------- |
  | \`password\` | \`string\` | Yes | Plain text password to compare |
  | \`hash\` | \`string\` | Yes | Bcrypt hash to compare against |
  
  #### Returns
  
  - \`Promise<boolean>\` - \`true\` if password matches the hash, \`false\` otherwise
  
  #### Example
  
  \`\`\`javascript
  const isValid = await comparePassword('myPassword123', hashedPassword);
  if (isValid) {
    // Password is correct
  }
  \`\`\`
  
  ## Middleware Functions
  
  ### createAuthMiddleware(options)
  
  Creates an authentication middleware that verifies JWT tokens.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`options\` | \`Object\` | Yes | - | Middleware configuration |
  | \`options.secret\` | \`string\` | Yes | - | JWT secret key |
  | \`options.getToken\` | \`Function\` | No | See docs | Custom function to extract token from request |
  | \`options.onError\` | \`Function\` | No | See docs | Custom error handler |
  
  #### Returns
  
  - \`Function\` - Express middleware function
  
  #### Example
  
  \`\`\`javascript
  const auth = createAuthMiddleware({
    secret: process.env.JWT_SECRET,
    getToken: (req) => req.headers['x-api-key'],
    onError: (error, req, res) => {
      res.status(401).json({ error: error.message });
    },
  });
  
  app.get('/profile', auth, (req, res) => {
    // req.user contains the JWT payload
    res.json({ userId: req.user.userId });
  });
  \`\`\`
  
  ### createAuthorizationMiddleware(allowedRoles, options)
  
  Creates middleware for role-based access control.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`allowedRoles\` | \`string[]\` | Yes | - | Array of roles that are allowed access |
  | \`options\` | \`Object\` | No | \`{}\` | Middleware options |
  | \`options.getRoles\` | \`Function\` | No | See docs | Custom function to extract roles from request |
  
  #### Returns
  
  - \`Function\` - Express middleware function
  
  #### Example
  
  \`\`\`javascript
  const adminOnly = createAuthorizationMiddleware(['admin']);
  
  app.get('/admin', auth, adminOnly, (req, res) => {
    res.json({ message: 'Admin access granted' });
  });
  \`\`\`
  `}function Ar(){return`---
  title: Auth Examples
  description: Usage examples for the Auth module
  order: 3
  ---
  
  # Auth Module Examples
  
  This page provides practical examples of using the Auth module in various scenarios.
  
  ## User Registration and Login
  
  This example shows how to implement user registration and login with password hashing and JWT tokens.
  
  \`\`\`javascript
  import { hashPassword, comparePassword, generateToken } from '@voilajsx/appkit/auth';
  
  // User Registration
  async function registerUser(email, password) {
    // 1. Validate password strength (your logic)
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
  
    // 2. Hash the password
    const hashedPassword = await hashPassword(password);
  
    // 3. Save to database (your implementation)
    const user = await db.createUser({
      email,
      password: hashedPassword,
    });
  
    // 4. Return user (without password)
    return { id: user.id, email: user.email };
  }
  
  // User Login
  async function loginUser(email, password) {
    // 1. Find user by email
    const user = await db.findUserByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
  
    // 2. Verify password
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
  
    // 3. Generate JWT token
    const token = generateToken(
      { userId: user.id, email: user.email },
      { secret: process.env.JWT_SECRET }
    );
  
    // 4. Return token and user info
    return {
      token,
      user: { id: user.id, email: user.email }
    };
  }
  \`\`\`
  
  ## Protected API Routes
  
  This example demonstrates how to protect API routes using the authentication middleware.
  
  \`\`\`javascript
  import express from 'express';
  import { createAuthMiddleware, createAuthorizationMiddleware } from '@voilajsx/appkit/auth';
  
  const app = express();
  app.use(express.json());
  
  // Create middleware
  const auth = createAuthMiddleware({
    secret: process.env.JWT_SECRET,
  });
  
  // Role-based middleware
  const adminOnly = createAuthorizationMiddleware(['admin']);
  const editorAccess = createAuthorizationMiddleware(['editor', 'admin']);
  
  // Public routes
  app.post('/auth/login', loginHandler);
  app.post('/auth/register', registerHandler);
  
  // Protected routes - any authenticated user
  app.get('/api/profile', auth, (req, res) => {
    // req.user contains the decoded token payload
    res.json({ user: req.user });
  });
  
  // Admin only routes
  app.get('/api/admin/users', auth, adminOnly, (req, res) => {
    // Only accessible by admin users
    res.json({ message: 'Admin dashboard' });
  });
  
  // Editor access routes
  app.put('/api/content', auth, editorAccess, (req, res) => {
    // Accessible by editors and admins
    res.json({ message: 'Content updated' });
  });
  
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  \`\`\`
  `}function Ir(){return`---
  title: Logging Module
  description: Structured logging system for Node.js applications
  icon: 📊
  order: 1
  ---
  
  # Logging Module
  
  The Logging module provides a structured logging system for Node.js applications with multiple transports, log levels, and context management.
  
  ## Features
  
  - **Structured Logging**: JSON-formatted logs for easy parsing and analysis
  - **Multiple Transports**: Console, file, and custom transports
  - **Log Levels**: DEBUG, INFO, WARN, ERROR, etc. with proper filtering
  - **Context Tracking**: Attach and track context through async operations
  - **Performance Metrics**: Built-in support for timing and metric reporting
  
  ## Installation
  
  \`\`\`bash
  npm install @voilajsx/appkit
  \`\`\`
  
  ## Quick Start
  
  \`\`\`javascript
  import { createLogger } from '@voilajsx/appkit/logging';
  
  // Create a logger
  const logger = createLogger({
    name: 'my-app',
    level: 'info',
    transports: ['console'],
  });
  
  // Basic logging
  logger.info('Application started');
  logger.warn('Deprecated feature used', { feature: 'oldApi' });
  logger.error('Failed to connect to database', { error: err });
  
  // With context
  const requestLogger = logger.withContext({ requestId: '123' });
  requestLogger.info('Processing request');
  
  // Performance tracking
  const timer = logger.startTimer();
  // ... do some work ...
  timer.done({ message: 'Operation completed' });
  \`\`\`
  
  ## Documentation
  
  - [API Reference](/docs/logging/api-reference)
  - [Examples](/docs/logging/examples)
  `}function Rr(){return`---
  title: Logging API Reference
  description: Complete API documentation for the Logging module
  order: 2
  ---
  
  # Logging API Reference
  
  This reference documents all functions and parameters in the Logging module.
  
  ## Core Functions
  
  ### createLogger(options)
  
  Creates a new logger instance with the specified options.
  
  #### Parameters
  
  | Name | Type | Required | Default | Description |
  | ---- | ---- | -------- | ------- | ----------- |
  | \`options\` | \`Object\` | Yes | - | Logger configuration options |
  | \`options.name\` | \`string\` | Yes | - | Name of the logger (appears in logs) |
  | \`options.level\` | \`string\` | No | \`'info'\` | Minimum log level to output |
  | \`options.transports\` | \`Array\` | No | \`['console']\` | Array of transport names or objects |
  | \`options.format\` | \`Function\` | No | \`null\` | Custom format function |
  | \`options.context\` | \`Object\` | No | \`{}\` | Default context for all log entries |
  
  #### Returns
  
  - \`Object\` - Logger instance with logging methods
  
  #### Example
  
  \`\`\`javascript
  const logger = createLogger({
    name: 'api-server',
    level: 'debug',
    transports: ['console', { type: 'file', filename: 'app.log' }],
    context: { environment: 'production' }
  });
  \`\`\`
  
  ## Logger Methods
  
  ### logger.log(level, message, context)
  
  Logs a message at the specified level.
  
  #### Parameters
  
  | Name | Type | Required | Description |
  | ---- | ---- | -------- | ----------- |
  | \`level\` | \`string\` | Yes | Log level (debug, info, warn, error) |
  | \`message\` | \`string\` | Yes | Message to log |
  | \`context\` | \`Object\` | No | Additional context for this log entry |
  
  #### Example
  
  \`\`\`javascript
  logger.log('info', 'User logged in', { userId: '123' });
  \`\`\`
  `}function Fr(){return`---
  title: Logging Examples
  description: Usage examples for the Logging module
  order: 3
  ---
  
  # Logging Module Examples
  
  This page provides practical examples of using the Logging module in various scenarios.
  
  ## Basic Logging
  
  Simple example of creating a logger and using different log levels.
  
  \`\`\`javascript
  import { createLogger } from '@voilajsx/appkit/logging';
  
  // Create a basic logger
  const logger = createLogger({
    name: 'example-app',
    level: 'info',
  });
  
  // Log at different levels
  logger.debug('This is a debug message'); // Won't be output (below 'info' level)
  logger.info('Application started');
  logger.info('User registered', { userId: '123', email: 'user@example.com' });
  logger.warn('API rate limit approaching', { current: 80, limit: 100 });
  logger.error('Failed to process payment', { orderId: 'ORD-123', error: 'Insufficient funds' });
  \`\`\`
  
  ## Performance Monitoring
  
  Example of using timers for performance monitoring.
  
  \`\`\`javascript
  import { createLogger } from '@voilajsx/appkit/logging';
  
  const logger = createLogger({ name: 'performance-monitor' });
  
  async function processData(data) {
    // Start a timer
    const timer = logger.startTimer();
    
    logger.info('Starting data processing', { dataSize: data.length });
    
    // Phase 1
    const phase1Timer = logger.startTimer();
    await doPhase1(data);
    phase1Timer.done({ message: 'Phase 1 completed' });
    
    // Phase 2
    const phase2Timer = logger.startTimer();
    await doPhase2(data);
    phase2Timer.done({ message: 'Phase 2 completed' });
    
    // Overall time
    timer.done({ 
      message: 'Data processing completed',
      dataSize: data.length,
      operation: 'process-data'
    });
  }
  
  // Example usage
  processData(largeDataset)
    .catch(err => logger.error('Data processing failed', { error: err.message }));
  \`\`\`
  `}function fe({module:t}){const s=ke(),r=t||s.module,o=ve(),[l,d]=j.useState(null),{content:n,isLoading:a,error:i}=Le(r,null);if(j.useEffect(()=>{if(o.length>0&&r){const x=o.find(y=>y.slug===r);x&&d(x)}},[o,r]),!a&&(!l||i))return e.jsxs("div",{className:"py-8 px-4 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-4",children:"Module Not Found"}),e.jsxs("p",{className:"text-lg text-gray-600 dark:text-gray-400 mb-8",children:['Sorry, the module "',r,'" could not be found.']}),e.jsx(U,{to:"/docs/getting-started",variant:"primary",children:"Back to Documentation"})]});if(a||!l)return e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"}),e.jsx("div",{className:"h-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("div",{className:"h-32 bg-gray-200 dark:bg-gray-700 rounded"}),e.jsx("div",{className:"h-32 bg-gray-200 dark:bg-gray-700 rounded"})]})]});const m=()=>{switch(r){case"auth":return`import { generateToken, verifyToken } from '@voilajsx/appkit/auth';

// Generate a JWT token
const token = generateToken(
  { userId: '123', email: 'user@example.com' },
  { secret: 'your-secret-key' }
);

// Verify a token
const payload = verifyToken(token, { secret: 'your-secret-key' });
console.log(payload.userId); // '123'`;case"logging":return`import { createLogger } from '@voilajsx/appkit/logging';

// Create a logger
const logger = createLogger({
  name: 'my-app',
  level: 'info',
  transports: ['console']
});

// Basic logging
logger.info('Application started');
logger.warn('Deprecated feature used', { feature: 'oldApi' });
logger.error('Failed to connect to database', { error: err });`;default:return`import { ... } from '@voilajsx/appkit/${r}';

// See the documentation for usage examples`}};return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-4xl mr-3",children:l.icon}),e.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:[l.name," Module"]})]}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-6",children:l.description}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(U,{to:`/docs/${r}/api-reference`,variant:"primary",children:"API Reference"}),e.jsx(U,{to:`/docs/${r}/examples`,variant:"secondary",children:"Examples"}),e.jsx(U,{href:`https://github.com/voilajsx/appkit/tree/main/src/${r}`,variant:"outline",children:"View Source"})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Quick Example"}),e.jsx(Q,{padding:"none",className:"overflow-hidden",children:e.jsx(u,{code:m(),language:"javascript",showLineNumbers:!0,showCopyButton:!0})})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Key Features"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:l.features.map((x,y)=>e.jsx(Q,{padding:"md",className:"h-full",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"mr-3 pt-0.5 text-voila-blue dark:text-voila-purple",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),e.jsx("div",{children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:x})})]})},y))})]}),n&&e.jsx("div",{className:"prose prose-blue dark:prose-invert max-w-none mt-8",dangerouslySetInnerHTML:{__html:n}}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(Q,{padding:"md",bordered:!0,hover:!0,children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"API Reference"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Comprehensive documentation of all functions, parameters, and return values."}),e.jsx(U,{to:`/docs/${r}/api-reference`,variant:"secondary",className:"w-full",children:"View API Reference"})]}),e.jsxs(Q,{padding:"md",bordered:!0,hover:!0,children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Usage Examples"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Practical examples and code snippets demonstrating common use cases."}),e.jsx(U,{to:`/docs/${r}/examples`,variant:"secondary",className:"w-full",children:"View Examples"})]})]})]})}function Pr({headings:t,className:s=""}){const[r,o]=j.useState("");j.useEffect(()=>{if(t.length===0)return;const d=new IntersectionObserver(n=>{const a=n.filter(i=>i.isIntersecting);if(a.length>0){const m=[...a].sort((x,y)=>x.boundingClientRect.y-y.boundingClientRect.y)[0];o(m.target.id)}},{rootMargin:"0px 0px -80% 0px",threshold:.2});return t.forEach(({id:n})=>{const a=document.getElementById(n);a&&d.observe(a)}),()=>{t.forEach(({id:n})=>{const a=document.getElementById(n);a&&d.unobserve(a)})}},[t]);const l=(d,n)=>{d.preventDefault();const a=document.getElementById(n);a&&(a.scrollIntoView({behavior:"smooth"}),o(n),window.history.pushState(null,null,`#${n}`))};return t.length===0?null:e.jsxs("nav",{className:`toc ${s}`,"aria-label":"Table of contents",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"On this page"}),e.jsx("ul",{className:"space-y-1 text-sm",children:t.map(({id:d,text:n,level:a})=>e.jsx("li",{className:`toc-item toc-level-${a}`,children:e.jsx("a",{href:`#${d}`,onClick:i=>l(i,d),className:`
                block py-1 pl-${(a-1)*3} transition-colors
                ${r===d?"text-voila-blue dark:text-blue-400 font-medium":"text-gray-600 hover:text-voila-blue dark:text-gray-400 dark:hover:text-blue-400"}
              `,children:n})},d))})]})}function Mr(t){const[s,r]=j.useState([]);return j.useEffect(()=>{if(!t){r([]);return}const o=/^(#{1,6})\s+(.+)$/gm,l=[];let d;for(;(d=o.exec(t))!==null;){const n=d[1].length,a=d[2].trim();if(n===1)continue;const i=a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");l.push({id:i,text:a,level:n})}r(l)},[t]),s}function je({module:t,doc:s}){const r=ke(),o=t||r.module,l=s||r.doc,{content:d,metadata:n,isLoading:a,error:i}=Le(o,l),m=Mr(d),{prev:x,next:y}=jr(o,l),w=Nr(d);return j.useEffect(()=>{window.scrollTo(0,0)},[o,l]),j.useEffect(()=>{if(window.location.hash&&!a){const N=window.location.hash.substring(1),g=document.getElementById(N);g&&setTimeout(()=>{g.scrollIntoView({behavior:"smooth"})},100)}},[a,d]),j.useEffect(()=>{n.title?document.title=`${n.title} | @voilajsx/appkit Documentation`:document.title="@voilajsx/appkit Documentation"},[n]),i?e.jsxs("div",{className:"py-8 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-4",children:"Documentation Not Found"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mb-8",children:"Sorry, the requested documentation could not be found."}),e.jsx(U,{to:"/docs/getting-started",variant:"primary",children:"Back to Documentation"})]}):a?e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"}),e.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"})]})]}):e.jsx("div",{className:"doc-page",children:e.jsxs("div",{className:"lg:grid lg:grid-cols-4 lg:gap-8",children:[e.jsxs("div",{className:"lg:col-span-3",children:[n.title&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:n.title}),n.description&&e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300",children:n.description}),e.jsxs("div",{className:"mt-3 text-sm text-gray-500 dark:text-gray-400",children:[w>0&&e.jsxs("span",{className:"mr-4",children:[w," min read"]}),n.author&&e.jsxs("span",{className:"mr-4",children:["By ",n.author]}),n.lastUpdated&&e.jsxs("span",{children:["Last updated: ",new Date(n.lastUpdated).toLocaleDateString()]})]})]}),d&&e.jsx("div",{className:"prose prose-blue dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:d}}),e.jsx("div",{className:"mt-10 pt-6 border-t border-gray-200 dark:border-gray-800",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between",children:[x&&e.jsxs("div",{className:"mb-4 sm:mb-0",children:[e.jsx("span",{className:"block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"Previous"}),e.jsxs(T,{to:x.path,className:"text-voila-blue hover:underline dark:text-blue-400 flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),x.title]})]}),y&&e.jsxs("div",{className:"text-right ml-auto",children:[e.jsx("span",{className:"block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"Next"}),e.jsxs(T,{to:y.path,className:"text-voila-blue hover:underline dark:text-blue-400 flex items-center justify-end",children:[y.title,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})})]}),e.jsx("div",{className:"hidden lg:block",children:e.jsx("div",{className:"sticky top-20",children:m.length>0&&e.jsx(Pr,{headings:m})})})]})})}function Br(){return e.jsx("div",{className:"flex flex-col items-center justify-center py-16 px-4 text-center",children:e.jsxs("div",{className:"max-w-md mx-auto",children:[e.jsx("div",{className:"mb-8 text-gray-400 dark:text-gray-500",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"w-32 h-32 mx-auto",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),e.jsx("h1",{className:"text-5xl font-bold text-gray-900 dark:text-white mb-4",children:"404"}),e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Page Not Found"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mb-8",children:"Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed."}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[e.jsx(U,{to:"/",variant:"primary",children:"Go to Homepage"}),e.jsx(U,{to:"/docs/getting-started",variant:"secondary",children:"View Documentation"})]}),e.jsxs("div",{className:"mt-10 text-gray-600 dark:text-gray-400",children:[e.jsx("p",{className:"mb-2",children:"Looking for something specific?"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:e.jsx(T,{to:"/docs/getting-started",className:"text-voila-blue hover:underline dark:text-blue-400",children:"Getting Started Guide"})}),e.jsx("li",{children:e.jsx(T,{to:"/docs/auth",className:"text-voila-blue hover:underline dark:text-blue-400",children:"Auth Module"})}),e.jsx("li",{children:e.jsx(T,{to:"/docs/logging",className:"text-voila-blue hover:underline dark:text-blue-400",children:"Logging Module"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/voilajsx/appkit/issues/new",target:"_blank",rel:"noopener noreferrer",className:"text-voila-blue hover:underline dark:text-blue-400",children:"Report an Issue"})})]})]})]})})}function Dr(){const t=D();return ee.useEffect(()=>{console.log("Current path:",t.pathname)},[t]),e.jsxs(qe,{children:[e.jsx(P,{path:"/",element:e.jsx(sr,{})}),e.jsxs(P,{path:"/docs",element:e.jsx(kr,{}),children:[e.jsx(P,{index:!0,element:e.jsx(be,{})}),e.jsx(P,{path:"getting-started",element:e.jsx(be,{})}),e.jsx(P,{path:"overview",element:e.jsx(ar,{})}),e.jsx(P,{path:"auth",element:e.jsx(nr,{})}),e.jsx(P,{path:"cache",element:e.jsx(ir,{})}),e.jsx(P,{path:"config",element:e.jsx(lr,{})}),e.jsx(P,{path:"logging",element:e.jsx(mr,{})}),e.jsx(P,{path:"security",element:e.jsx(hr,{})}),e.jsx(P,{path:"validation",element:e.jsx(gr,{})}),e.jsx(P,{path:"error",element:e.jsx(pr,{})}),e.jsx(P,{path:"auth",element:e.jsx(fe,{module:"auth"})}),e.jsx(P,{path:"logging",element:e.jsx(fe,{module:"logging"})}),e.jsx(P,{path:"auth/:doc",element:e.jsx(je,{module:"auth"})}),e.jsx(P,{path:"logging/:doc",element:e.jsx(je,{module:"logging"})})]}),e.jsx(P,{path:"*",element:e.jsx(Br,{})})]})}function _r(){const t=D();return j.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),e.jsx(Ke,{children:e.jsx(Dr,{})})}const Ae="/appkit/";console.log("Base URL for routing:",Ae);Ge.createRoot(document.getElementById("root")).render(e.jsx(ee.StrictMode,{children:e.jsx(Ue,{basename:Ae,children:e.jsx(_r,{})})}));
