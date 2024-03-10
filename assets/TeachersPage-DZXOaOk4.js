import{r as d,q as T,l as A,a as I,j as n,C,L as z,d as D,g as N,u as o,R as p,S as _}from"./index-Bm9m3Phf.js";import{T as B,a as F,L as W}from"./TeachersListItem-DB8YyXHq.js";const M=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],$=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],R=()=>{const[e,t]=d.useState([]);d.useEffect(()=>{const i=T(I(D,"teachers"),A(4));(async()=>{try{const s=await N(i);if(s.exists()){const h=Object.entries(s.val()).map(([u,c])=>({id:u,...c}));t(h)}else console.log("No data")}catch(s){console.log(s.message)}})()},[]);const r=async()=>{};return n.jsxs(n.Fragment,{children:[" ",n.jsx(B,{children:n.jsxs(C,{children:[n.jsx("ul",{children:e.length>0?e.map(i=>n.jsx(F,{teacher:i},i)):n.jsx(z,{})}),e.length>0&&n.jsx(W,{type:"button",onClick:r,children:"Load More"})]})})]})},G=o.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`,x=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=o.span`
  color: ${({theme:{colors:e}})=>e.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;o.div`
  position: relative;
  margin: 0;
  width: 224px;
`;const b=o.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({theme:{transitions:e}})=>e.cubic};
`,K=o.div`
  margin-bottom: 32px;
`,v=o.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${({theme:{colors:e}})=>e.mainBlack};
`,y=o.input`
  border: none;
  width: ${({width:e})=>e}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
`,w=o.li`
  /* background-color: ${({theme:{colors:e}})=>e.mainWhite}; */
`,O=o.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(4px);
  padding: 0;
  margin: 0;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
`;var E={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=p.createContext&&p.createContext(E),q=["attr","size","title"];function U(e,t){if(e==null)return{};var r=V(e,t),i,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function V(e,t){if(e==null)return{};var r={},i=Object.keys(e),a,s;for(s=0;s<i.length;s++)a=i[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},m.apply(this,arguments)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,i)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?S(Object(r),!0).forEach(function(i){Y(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Y(e,t,r){return t=H(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){var t=J(e,"string");return typeof t=="symbol"?t:String(t)}function J(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return e&&e.map((t,r)=>p.createElement(t.tag,f({key:r},t.attr),k(t.child)))}function Q(e){return t=>p.createElement(X,m({attr:f({},e.attr)},t),k(e.child))}function X(e){var t=r=>{var{attr:i,size:a,title:s}=e,h=U(e,q),u=a||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),p.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,h,{className:c,style:f(f({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&p.createElement("title",null,s),e.children)};return L!==void 0?p.createElement(L.Consumer,null,r=>t(r)):t(E)}function P(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}const Z=Array.from({length:9},(e,t)=>t*5),ee=()=>{//! Дописати скрізь setlanguageSelect,setlevelSelect,setPriceSelect
const[e]=d.useState("All"),[t]=d.useState("All"),[r]=d.useState("All"),[i,a]=d.useState(!1),[s,h]=d.useState(!1),[u,c]=d.useState(!1),g=l=>()=>{l==="language"&&a(!i),l==="level"&&h(!s),l==="price"&&c(!u)};return n.jsx(K,{children:n.jsxs(G,{children:[n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Languages"}),n.jsxs(v,{children:[n.jsx(y,{name:"language",type:"text",value:e||"All",width:221,onClick:g("language")}),n.jsx(b,{onClick:g("language"),children:n.jsx(P,{})}),n.jsx(O,{children:i&&M.map(l=>n.jsx(w,{children:l},l))})]})]})}),n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Level of knowledge"}),n.jsxs(v,{children:[" ",n.jsx(y,{width:194,name:"level",type:"text",value:t||"All"}),n.jsx(b,{onClick:g("level"),children:n.jsx(P,{})}),n.jsxs(O,{children:[" ",s&&$.map(l=>n.jsx(w,{children:l},l))]})]})]})}),n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Price"}),n.jsxs(v,{children:[" ",n.jsx(y,{width:123,name:"price",type:"text",value:r||"All"}),n.jsx(b,{onClick:g("price"),children:n.jsx(P,{})}),n.jsx(O,{children:u&&Z.map(l=>n.jsx(w,{children:l},l))})]})]})})]})})},re=()=>n.jsx(n.Fragment,{children:n.jsxs(_,{children:[" ",n.jsx(C,{children:n.jsx(ee,{})}),n.jsx(R,{})]})});export{re as default};
