import{a as j,r as l,j as t,L as Y,u as r,b as I,c as _,s as K,f as q}from"./index-DH02TXRn.js";import{s as H,a as J,T as Q,b as V,E as X}from"./TeachersListItem-BlezskGR.js";import{S as Z,C as N}from"./SharedLayout.styled-Cfd5nMUI.js";const E=["English","Spanish","French","German","Mandarin Chinese","Italian","Korean","Vietnamese"],z=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],D=[0,5,10,15,20,25,30,35,40],O=e=>e.filters;function ee(e,n){const{language:i,level:c,price:p}=n;return e.filter(o=>!(i&&!o.languages.includes(i)||c&&!o.levels.includes(c)||p&&o.price_per_hour>Number(p)))}const te=()=>{const{language:e,level:n,price:i}=j(O),c=j(H),p=j(J),[o,x]=l.useState([]),[m,f]=l.useState(!1);l.useEffect(()=>{if(e||n||i){const h=ee(c,{language:e,level:n,price:i});x(h)}else x(c)},[e,n,c,i]);const b=()=>{f(!m)},v=e||n||i;return t.jsxs(t.Fragment,{children:[p&&t.jsx(Y,{}),t.jsx(Q,{children:t.jsx("ul",{children:o.length>0&&!p?o.map(h=>t.jsx(V,{close:b,teacher:h},h.id)):v&&t.jsx(X,{children:"No teachers found, try change filters 😢"})})})]})},u=(e,n)=>({...e,[n]:!e[n]});r.div`
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
`,se=r.form`
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
`,F=r.div`
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
`;const ne=r.button`
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
`,B="/icons/chevron-down.svg",re=()=>{const e=I(),[n,i]=_(),{language:c,level:p,price:o}=j(O),[x,m]=l.useState(E),[f,b]=l.useState(z),[v,h]=l.useState(D),[d,g]=l.useState({language:!1,level:!1,price:!1}),[R,P]=l.useState(!1);l.useEffect(()=>{m(c),b(p),h(o)},[c,p,o]),l.useEffect(()=>{e(K({language:n.get("language"),level:n.get("level"),price:n.get("price")}))},[n,e]);const w=(s,a)=>{const k=a&&(s==="language"||s==="level"||s==="price");switch(s){case"language":m(a);break;case"level":b(a);break;case"price":h(a);break}g($=>u($,s)),P(k),i($=>{const T=new URLSearchParams($);return T.set(s,a),T})},W=s=>{const a=s.target.attributes.value.value;w("language",a)},G=s=>{const a=s.target.attributes.value.value;w("level",a)},M=s=>{const a=s.target.attributes.value.value,k=parseInt(a);w("price",k)},U=()=>{m(c),b(p),h(o),P(!1),i(new URLSearchParams)};return t.jsx(t.Fragment,{children:t.jsxs(se,{children:[" ",t.jsxs("label",{htmlFor:"language",children:[t.jsx(y,{id:"language",children:"Languages"}),t.jsxs(L,{children:[t.jsx(F,{$isOpen:d.language,children:x||"All languages"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"language")),children:[" ",t.jsx(C,{src:B,$isOpen:d.language})]}),d.language&&t.jsx(S,{close:()=>g(s=>u(s,"language")),children:t.jsx("ul",{children:E.map(s=>t.jsx(A,{onClick:W,value:s,$isActive:x===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"level",children:[t.jsx(y,{id:"level",children:"Levels"}),t.jsxs(L,{children:[t.jsx(F,{$isOpen:d.level,children:f||"All levels"}),t.jsx("button",{type:"button",onClick:()=>g(s=>u(s,"level")),children:t.jsx(C,{src:B,$isOpen:d.level})}),d.level&&t.jsx(S,{close:()=>g(s=>u(s,"level")),children:t.jsx("ul",{children:z.map(s=>t.jsx(A,{onClick:G,value:s,$isActive:f===s,children:s},s))})})]})]}),t.jsxs("label",{htmlFor:"price",children:[t.jsx(y,{id:"price",children:"Price"}),t.jsxs(L,{children:[t.jsx(F,{$isOpen:d.price,children:v||"All prices"}),t.jsxs("button",{type:"button",onClick:()=>g(s=>u(s,"price")),children:[" ",t.jsx(C,{src:B,$isOpen:d.price})]}),d.price&&t.jsx(S,{close:()=>g(s=>u(s,"price")),children:t.jsx("ul",{children:D.map(s=>t.jsx(A,{onClick:M,value:s,$isActive:v===s,children:s},s))})})]})]}),t.jsx(ne,{type:"button",disabled:!R,onClick:U,children:"Reset filters"})]})})},ce=()=>{const e=I();return l.useEffect(()=>{e(q())},[e]),t.jsx(t.Fragment,{children:t.jsx(Z,{children:t.jsxs(N,{containerwidth:1216,children:[t.jsx(re,{}),t.jsx(te,{})]})})})};export{ce as default};
