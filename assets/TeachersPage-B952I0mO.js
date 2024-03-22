import{a as v,r as d,j as t,L as M,q as R,s as G,b as q,d as U,g as Y,u as n,c as D,e as _,f as K,h as H}from"./index-C3Wnt1GQ.js";import{s as J,a as Q,T as X,b as Z,E as N,L as V}from"./TeachersListItem-BvvNHsHx.js";import{S as ee,C as te}from"./SharedLayout.styled-BD345nJq.js";const P=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],E=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],B=[0,5,10,15,20,25,30,35,40],z=e=>e.filters;function se(e,r){const{language:h,level:l,price:o}=r;return e.filter(i=>!(h&&!i.languages.includes(h)||l&&!i.levels.includes(l)||o&&i.price_per_hour>Number(o)))}const re=()=>{const{language:e,level:r,price:h}=v(z),l=v(J),o=v(Q),[i,x]=d.useState([]);d.useEffect(()=>{if(e||r||h){const c=se(l,{language:e,level:r,price:h});x(c)}else x(l)},[e,r,l,h]);const f=async()=>{const c=R(q(U,"teachers"),G(4));console.log(c);try{(await Y(c)).exists()||console.log("No data")}catch(m){console.log(m.message)}};return t.jsxs(t.Fragment,{children:[o&&t.jsx(M,{}),t.jsx(X,{children:t.jsx("ul",{children:i.length>0&&!o?i.map(c=>t.jsx(Z,{teacher:c},c.id)):t.jsx(N,{children:"No teachers found, try change filters 😢"})})}),l.length>0&&i.length>0&&t.jsx(V,{type:"button",onClick:f,children:"Load More"})]})},u=(e,r)=>({...e,[r]:!e[r]});n.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 4px);
  left: 0;

  width: 100%;
  max-height: 272px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 14px 8px 4px 18px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: ${({theme:{colors:e}})=>e.primeryWhite};
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;const w=n.div`
  position: absolute;
  z-index: 100;
  top: calc(100% - 4px);
  left: 0;
  width: 190px;
  padding: 14px;
  overflow: auto;
  border: 1px solid ${({theme:{colors:e}})=>e.secondaryAccentBlack};
  border-radius: 14px;
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
  box-shadow: ${({theme:{colors:e}})=>e.accentBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${({theme:{colors:e}})=>e.mainBlack};
`,ne=n.form`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;n.ul`
  display: flex;
  gap: 20px;
`;n.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;const k=n.span`
  color: ${({theme:{colors:e}})=>e.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`,$=n.div`
  position: relative;
`,S=n.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-left: 18px;
  width: 198px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: ${({theme:{colors:e}})=>e.addWhite};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;n.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({theme:{transitions:e}})=>e.cubic};
`;n.div`
  margin-bottom: 32px;
`;const y=n.img`
  position: absolute;
  top: 25px;
  right: 14px;
  cursor: pointer;

  transform: rotate(${({$isOpen:e})=>e?"180deg":"360deg"})
    translateY(-50%);

  &:hover,
  &:focus {
    scale: 1.3;
  }

  transition: transform 250ms
      ${({theme:{transitions:e}})=>e.cubic},
    scale 250ms ${({theme:{transitions:e}})=>e.cubic};
  transform-origin: top;
`,L=n.li`
  cursor: pointer;

  color: ${({$isActive:e,theme:{colors:r}})=>e?r.mainBlack:r.mainGrey};

  &:hover,
  &:focus {
    color: ${({theme:{colors:e}})=>e.mainBlack};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  transition: color 250ms ${({theme:{transitions:e}})=>e.cubic};
`;n.input`
  border: none;
  width: ${({width:e})=>e}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
`;n.ul`
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
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
`;const C="/icons/chevron-down.svg",ae=()=>{const e=D(),[r,h]=_(),{language:l,level:o,price:i}=v(z),[x,f]=d.useState(P),[c,m]=d.useState(E),[A,F]=d.useState(B),[p,g]=d.useState({language:!1,level:!1,price:!1});d.useEffect(()=>{f(l),m(o),F(i)},[l,o,i]),d.useEffect(()=>{e(K({language:r.get("language"),level:r.get("level"),price:r.get("price")}))},[r,e]);const j=(s,a)=>{if(!(s==="language"&&l===a||s==="level"&&o===a||s==="price"&&i===a)){switch(s){case"language":f(a);break;case"level":m(a);break;case"price":F(a);break}g(b=>u(b,s)),h(b=>{const T=new URLSearchParams(b);return T.set(s,a),T})}},I=s=>{const a=s.target.attributes.value.value;j("language",a)},O=s=>{const a=s.target.attributes.value.value;j("level",a)},W=s=>{const a=s.target.attributes.value.value,b=parseInt(a);j("price",b)};return t.jsx(t.Fragment,{children:t.jsxs(ne,{children:[" ",t.jsxs("label",{htmlFor:"",children:[t.jsx(k,{children:"Languages"}),t.jsxs($,{children:[t.jsx(S,{$isOpen:p.language,children:x||"All languages"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"language")),children:[" ",t.jsx(y,{src:C,$isOpen:p.language})]}),p.language&&t.jsx(w,{close:()=>g(s=>u(s,"language")),children:t.jsx("ul",{children:P.map(s=>t.jsx(L,{onClick:I,value:s,$isActive:x===s,children:s},s))})})]})]}),t.jsxs("label",{children:[t.jsx(k,{children:"Levels"}),t.jsxs($,{children:[t.jsx(S,{$isOpen:p.level,children:c||"All levels"}),t.jsx("button",{type:"button",onClick:()=>g(s=>u(s,"level")),children:t.jsx(y,{src:C,$isOpen:p.level})}),p.level&&t.jsx(w,{close:()=>g(s=>u(s,"level")),children:t.jsx("ul",{children:E.map(s=>t.jsx(L,{onClick:O,value:s,$isActive:c===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"",children:[t.jsx(k,{children:"Price"}),t.jsxs($,{children:[t.jsx(S,{$isOpen:p.price,children:A||"All prices"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"price")),children:[" ",t.jsx(y,{src:C,$isOpen:p.price})]}),p.price&&t.jsx(w,{close:()=>g(s=>u(s,"price")),children:t.jsx("ul",{children:B.map(s=>t.jsx(L,{onClick:W,value:s,$isActive:A===s,children:s},s))})})]})]})]})})},oe=()=>{const e=D();return d.useEffect(()=>{e(H())},[e]),t.jsx(t.Fragment,{children:t.jsx(ee,{children:t.jsxs(te,{containerwidth:1216,children:[t.jsx(ae,{}),t.jsx(re,{})]})})})};export{oe as default};
