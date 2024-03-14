import{r as d,q as S,l as D,a as C,j as n,L as _,d as k,g as E,s as B,u as c,R as u}from"./index-ClXUFqfX.js";import{T as F,a as W,L as M}from"./TeachersListItem-BQhoHDlw.js";import{S as R,C as $}from"./SharedLayout.styled-CwKUvRJu.js";const G=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],K=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],q=()=>{const[e,t]=d.useState([]);d.useEffect(()=>{const i=S(C(k,"teachers"),D(4));(async()=>{try{const a=await E(i);if(a.exists()){const h=Object.entries(a.val()).map(([g,l])=>({id:g,...l}));t(h)}else console.log("No data")}catch(a){console.log(a.message)}})()},[]);const r=async()=>{const i=S(C(k,"teachers"),B(4));console.log(i);try{(await E(i)).exists()||console.log("No data")}catch(s){console.log(s.message)}};return n.jsxs(n.Fragment,{children:[" ",n.jsx(F,{children:n.jsx("ul",{children:e.length>0?e.map(i=>n.jsx(W,{teacher:i},i)):n.jsx(_,{})})}),e.length>0&&n.jsx(M,{type:"button",onClick:r,children:"Load More"})]})},U=c.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`,x=c.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=c.span`
  color: ${({theme:{colors:e}})=>e.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;c.div`
  position: relative;
  margin: 0;
  width: 224px;
`;const b=c.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({theme:{transitions:e}})=>e.cubic};
`,V=c.div`
  margin-bottom: 32px;
`,v=c.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${({theme:{colors:e}})=>e.mainBlack};
`,y=c.input`
  border: none;
  width: ${({width:e})=>e}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
`,w=c.li`
  /* background-color: ${({theme:{colors:e}})=>e.mainWhite}; */
`,O=c.ul`
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
`;var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=u.createContext&&u.createContext(z),Y=["attr","size","title"];function H(e,t){if(e==null)return{};var r=J(e,t),i,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function J(e,t){if(e==null)return{};var r={},i=Object.keys(e),s,a;for(a=0;a<i.length;a++)s=i[a],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f.apply(this,arguments)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(i){Q(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Q(e,t,r){return t=X(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){var t=Z(e,"string");return typeof t=="symbol"?t:String(t)}function Z(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A(e){return e&&e.map((t,r)=>u.createElement(t.tag,m({key:r},t.attr),A(t.child)))}function ee(e){return t=>u.createElement(te,f({attr:m({},e.attr)},t),A(e.child))}function te(e){var t=r=>{var{attr:i,size:s,title:a}=e,h=H(e,Y),g=s||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),u.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,h,{className:l,style:m(m({color:e.color||r.color},r.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),a&&u.createElement("title",null,a),e.children)};return T!==void 0?u.createElement(T.Consumer,null,r=>t(r)):t(z)}function L(e){return ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}const ne=Array.from({length:9},(e,t)=>t*5),re=()=>{//! Дописати скрізь setlanguageSelect,setlevelSelect,setPriceSelect
const[e,t]=d.useState("All"),[r]=d.useState("All"),[i]=d.useState("All"),[s,a]=d.useState(!1),[h,g]=d.useState(!1),[l,N]=d.useState(!1),p=o=>()=>{o==="language"&&a(!s),o==="level"&&g(!h),o==="price"&&N(!l)},P=o=>{t(o)};return n.jsx(V,{children:n.jsxs(U,{children:[n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Languages"}),n.jsxs(v,{children:[n.jsx(y,{name:"language",type:"text",value:e,width:221,onClick:p("language")}),n.jsx(b,{onClick:p("language"),children:n.jsx(L,{})}),n.jsx(O,{children:s&&G.map(o=>n.jsx(w,{onClick:()=>P(o),children:o},o))})]})]})}),n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Level of knowledge"}),n.jsxs(v,{children:[" ",n.jsx(y,{width:194,name:"level",type:"text",value:r}),n.jsx(b,{onClick:p("level"),children:n.jsx(L,{})}),n.jsxs(O,{children:[" ",h&&K.map(o=>n.jsx(w,{onClick:()=>P(o),children:o},o))]})]})]})}),n.jsx("li",{children:n.jsxs(x,{children:[n.jsx(j,{children:"Price"}),n.jsxs(v,{children:[" ",n.jsx(y,{width:123,name:"price",type:"text",value:i}),n.jsx(b,{onClick:p("price"),children:n.jsx(L,{})}),n.jsx(O,{children:l&&ne.map(o=>n.jsx(w,{children:o},o))})]})]})})]})})},oe=()=>n.jsx(n.Fragment,{children:n.jsxs(R,{children:[n.jsx($,{children:n.jsx(re,{})}),n.jsx(q,{})]})});export{oe as default};
