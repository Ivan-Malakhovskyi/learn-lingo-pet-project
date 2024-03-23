import{a as j,r as d,j as t,L as q,q as Y,s as _,b as K,d as H,g as J,u as r,c as I,e as Q,f as V,h as X}from"./index-BhPIIRIn.js";import{s as Z,a as N,T as ee,b as te,E as se,L as ne}from"./TeachersListItem-zbj_IiTy.js";import{S as re,C as ae}from"./SharedLayout.styled-BLJ2xM60.js";const E=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],z=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],D=[0,5,10,15,20,25,30,35,40],O=e=>e.filters;function le(e,n){const{language:p,level:l,price:h}=n;return e.filter(i=>!(p&&!i.languages.includes(p)||l&&!i.levels.includes(l)||h&&i.price_per_hour>Number(h)))}const ie=()=>{const{language:e,level:n,price:p}=j(O),l=j(Z),h=j(N),[i,x]=d.useState([]),[m,f]=d.useState(!1),b=()=>{f(!m)};d.useEffect(()=>{if(e||n||p){const o=le(l,{language:e,level:n,price:p});x(o)}else x(l)},[e,n,l,p]);const v=async()=>{const o=Y(K(H,"teachers"),_(4));console.log(o);try{(await J(o)).exists()||console.log("No data")}catch(a){console.log(a.message)}};return t.jsxs(t.Fragment,{children:[h&&t.jsx(q,{}),t.jsx(ee,{children:t.jsx("ul",{children:i.length>0&&!h?i.map(o=>t.jsx(te,{close:b,teacher:o},o.id)):t.jsx(se,{children:"No teachers found, try change filters 😢"})})}),l.length>0&&i.length>0&&t.jsx(ne,{type:"button",onClick:v,children:"Load More"})]})},u=(e,n)=>({...e,[n]:!e[n]});r.div`
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
`;const S=r.div`
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
`,oe=r.form`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;r.ul`
  display: flex;
  gap: 20px;
`;const y=r.span`
  color: ${({theme:{colors:e}})=>e.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`,L=r.div`
  position: relative;
`,C=r.div`
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
`;r.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 14px;
  pointer-events: none;

  transform-origin: top;
  transition: transform 250ms
    ${({theme:{transitions:e}})=>e.cubic};
`;r.div`
  margin-bottom: 32px;
`;const F=r.img`
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
`,A=r.li`
  cursor: pointer;

  color: ${({$isActive:e,theme:{colors:n}})=>e?n.mainBlack:n.mainGrey};

  &:hover,
  &:focus {
    color: ${({theme:{colors:e}})=>e.mainBlack};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  transition: color 250ms ${({theme:{transitions:e}})=>e.cubic};
`;r.input`
  border: none;
  width: ${({width:e})=>e}px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border-radius: 14px;
  padding: 18px 16px;
  background-color: ${({theme:{colors:e}})=>e.mainWhite};
`;r.ul`
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
`;const ce=r.button`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: ${({theme:{colors:e},disabled:n})=>n?e.mainGrey:e.mainBlack};
  color: ${({theme:{colors:e}})=>e.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  transition: background-color 250ms
    ${({theme:{transitions:e}})=>e.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:e},disabled:n})=>n?null:e.mainBgBlack};
  }

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,B="/icons/chevron-down.svg",de=()=>{const e=I(),[n,p]=Q(),{language:l,level:h,price:i}=j(O),[x,m]=d.useState(E),[f,b]=d.useState(z),[v,o]=d.useState(D),[a,g]=d.useState({language:!1,level:!1,price:!1}),[R,P]=d.useState(!1);d.useEffect(()=>{m(l),b(h),o(i)},[l,h,i]),d.useEffect(()=>{e(V({language:n.get("language"),level:n.get("level"),price:n.get("price")}))},[n,e]);const w=(s,c)=>{const k=c&&(s==="language"||s==="level"||s==="price");switch(s){case"language":m(c);break;case"level":b(c);break;case"price":o(c);break}g($=>u($,s)),P(k),p($=>{const T=new URLSearchParams($);return T.set(s,c),T})},M=s=>{const c=s.target.attributes.value.value;w("language",c)},W=s=>{const c=s.target.attributes.value.value;w("level",c)},G=s=>{const c=s.target.attributes.value.value,k=parseInt(c);w("price",k)},U=()=>{m(l),b(h),o(i),P(!1),p(new URLSearchParams)};return t.jsx(t.Fragment,{children:t.jsxs(oe,{children:[" ",t.jsxs("label",{htmlFor:"language",children:[t.jsx(y,{id:"language",children:"Languages"}),t.jsxs(L,{children:[t.jsx(C,{$isOpen:a.language,children:x||"All languages"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"language")),children:[" ",t.jsx(F,{src:B,$isOpen:a.language})]}),a.language&&t.jsx(S,{close:()=>g(s=>u(s,"language")),children:t.jsx("ul",{children:E.map(s=>t.jsx(A,{onClick:M,value:s,$isActive:x===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"level",children:[t.jsx(y,{id:"level",children:"Levels"}),t.jsxs(L,{children:[t.jsx(C,{$isOpen:a.level,children:f||"All levels"}),t.jsx("button",{type:"button",onClick:()=>g(s=>u(s,"level")),children:t.jsx(F,{src:B,$isOpen:a.level})}),a.level&&t.jsx(S,{close:()=>g(s=>u(s,"level")),children:t.jsx("ul",{children:z.map(s=>t.jsx(A,{onClick:W,value:s,$isActive:f===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"price",children:[t.jsx(y,{id:"price",children:"Price"}),t.jsxs(L,{children:[t.jsx(C,{$isOpen:a.price,children:v||"All prices"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"price")),children:[" ",t.jsx(F,{src:B,$isOpen:a.price})]}),a.price&&t.jsx(S,{close:()=>g(s=>u(s,"price")),children:t.jsx("ul",{children:D.map(s=>(console.log(typeof s),t.jsx(A,{onClick:G,value:s,$isActive:v===s,children:s},s)))})})]})]}),t.jsx(ce,{type:"button",disabled:!R,onClick:U,children:"Reset filters"})]})})},ue=()=>{const e=I();return d.useEffect(()=>{e(X())},[e]),t.jsx(t.Fragment,{children:t.jsx(re,{children:t.jsxs(ae,{containerwidth:1216,children:[t.jsx(de,{}),t.jsx(ie,{})]})})})};export{ue as default};
