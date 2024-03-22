import{u as r,N as s,a as i,j as e}from"./index-C3Wnt1GQ.js";import{c as o,T as a,b as c}from"./TeachersListItem-BvvNHsHx.js";import{S as l,C as h}from"./SharedLayout.styled-BD345nJq.js";const d=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,p=r.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`,x=r(s)`
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
`,m="/icons/no-data.svg",f=()=>{const t=i(o);return e.jsx(e.Fragment,{children:e.jsx(a,{children:e.jsx(l,{children:e.jsx(h,{containerwidth:1216,children:e.jsx("ul",{children:t.length>0?t.map(n=>e.jsx(c,{teacher:n},n.id)):e.jsxs(d,{children:[" ",e.jsx(p,{children:"You don`t have any favorites teachers yet 😢"}),e.jsxs("p",{children:[" ",e.jsx(x,{to:"/teachers",children:"Go to teachers"})]}),e.jsx("div",{children:e.jsx("img",{src:m,alt:"empty_icons",width:300})})]})})})})})})};export{f as default};
