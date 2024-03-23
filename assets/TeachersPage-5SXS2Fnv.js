import{a as v,r as o,j as t,L as q,q as Y,s as _,b as K,d as H,g as J,u as r,c as I,e as Q,f as V,h as X}from"./index-BKRvSEq0.js";import{s as Z,a as N,T as ee,b as te,E as se,L as ne}from"./TeachersListItem-BpD_FOtH.js";import{S as re,C as ae}from"./SharedLayout.styled-d3ZBRlzW.js";const E=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],z=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],D=[0,5,10,15,20,25,30,35,40],O=e=>e.filters;function le(e,n){const{language:d,level:a,price:p}=n;return e.filter(l=>!(d&&!l.languages.includes(d)||a&&!l.levels.includes(a)||p&&l.price_per_hour>Number(p)))}const ie=()=>{const{language:e,level:n,price:d}=v(O),a=v(Z),p=v(N),[l,m]=o.useState([]);o.useEffect(()=>{if(e||n||d){const c=le(a,{language:e,level:n,price:d});m(c)}else m(a)},[e,n,a,d]);const b=async()=>{const c=Y(K(H,"teachers"),_(4));console.log(c);try{(await J(c)).exists()||console.log("No data")}catch(x){console.log(x.message)}};return t.jsxs(t.Fragment,{children:[p&&t.jsx(q,{}),t.jsx(ee,{children:t.jsx("ul",{children:l.length>0&&!p?l.map(c=>t.jsx(te,{teacher:c},c.id)):t.jsx(se,{children:"No teachers found, try change filters 😢"})})}),a.length>0&&l.length>0&&t.jsx(ne,{type:"button",onClick:b,children:"Load More"})]})},u=(e,n)=>({...e,[n]:!e[n]});r.div`
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
`;const $=r.div`
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
`,ce=r.form`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;r.ul`
  display: flex;
  gap: 20px;
`;const S=r.span`
  color: ${({theme:{colors:e}})=>e.mainGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`,y=r.div`
  position: relative;
`,L=r.div`
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
`;const C=r.img`
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
`,F=r.li`
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
`;const oe=r.button`
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
`,A="/icons/chevron-down.svg",de=()=>{const e=I(),[n,d]=Q(),{language:a,level:p,price:l}=v(O),[m,b]=o.useState(E),[c,x]=o.useState(z),[B,j]=o.useState(D),[h,g]=o.useState({language:!1,level:!1,price:!1}),[R,P]=o.useState(!1);o.useEffect(()=>{b(a),x(p),j(l)},[a,p,l]),o.useEffect(()=>{e(V({language:n.get("language"),level:n.get("level"),price:n.get("price")}))},[n,e]);const w=(s,i)=>{const f=i&&(s==="language"||s==="level"||s==="price");switch(s){case"language":b(i);break;case"level":x(i);break;case"price":j(i);break}g(k=>u(k,s)),P(f),console.log(f),d(k=>{const T=new URLSearchParams(k);return T.set(s,i),T})},W=s=>{const i=s.target.attributes.value.value;w("language",i)},G=s=>{const i=s.target.attributes.value.value;w("level",i)},M=s=>{const i=s.target.attributes.value.value,f=parseInt(i);w("price",f)},U=()=>{b(a),x(p),j(l),P(!1),d(new URLSearchParams)};return t.jsx(t.Fragment,{children:t.jsxs(ce,{children:[" ",t.jsxs("label",{htmlFor:"language",children:[t.jsx(S,{id:"language",children:"Languages"}),t.jsxs(y,{children:[t.jsx(L,{$isOpen:h.language,children:m||"All languages"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"language")),children:[" ",t.jsx(C,{src:A,$isOpen:h.language})]}),h.language&&t.jsx($,{close:()=>g(s=>u(s,"language")),children:t.jsx("ul",{children:E.map(s=>t.jsx(F,{onClick:W,value:s,$isActive:m===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"level",children:[t.jsx(S,{id:"level",children:"Levels"}),t.jsxs(y,{children:[t.jsx(L,{$isOpen:h.level,children:c||"All levels"}),t.jsx("button",{type:"button",onClick:()=>g(s=>u(s,"level")),children:t.jsx(C,{src:A,$isOpen:h.level})}),h.level&&t.jsx($,{close:()=>g(s=>u(s,"level")),children:t.jsx("ul",{children:z.map(s=>t.jsx(F,{onClick:G,value:s,$isActive:c===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"price",children:[t.jsx(S,{id:"price",children:"Price"}),t.jsxs(y,{children:[t.jsx(L,{$isOpen:h.price,children:B||"All prices"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"price")),children:[" ",t.jsx(C,{src:A,$isOpen:h.price})]}),h.price&&t.jsx($,{close:()=>g(s=>u(s,"price")),children:t.jsx("ul",{children:D.map(s=>(console.log(typeof s),t.jsx(F,{onClick:M,value:s,$isActive:B===s,children:s},s)))})})]})]}),t.jsx(oe,{type:"button",disabled:!R,onClick:U,children:"Reset filters"})]})})},ue=()=>{const e=I();return o.useEffect(()=>{e(X())},[e]),t.jsx(t.Fragment,{children:t.jsx(re,{children:t.jsxs(ae,{containerwidth:1216,children:[t.jsx(de,{}),t.jsx(ie,{})]})})})};export{ue as default};
