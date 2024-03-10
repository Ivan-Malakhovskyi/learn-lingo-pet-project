import{u as s,N as r,b as i,j as e,S as o,C as a}from"./index-Bm9m3Phf.js";import{s as c,T as l,a as h}from"./TeachersListItem-DB8YyXHq.js";const d=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,x=s.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`,p=s(r)`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background-color: ${({theme:{colors:t}})=>t.mainYellow};
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;

  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }
`,m="/icons/no-data.svg",j=()=>{const t=i(c);return e.jsx(e.Fragment,{children:e.jsx(l,{children:e.jsx(o,{children:e.jsx(a,{children:e.jsx("ul",{children:t.length>0?t.map(n=>e.jsx(h,{teacher:n},n.id)):e.jsxs(d,{children:[" ",e.jsx(x,{children:"You don`t have any favorites teachers yet 😢"}),e.jsxs("p",{children:[" ",e.jsx(p,{to:"/teachers",children:"Go to teachers"})]}),e.jsx("div",{children:e.jsx("img",{src:m,alt:"empty_icons",width:300})})]})})})})})})};export{j as default};
