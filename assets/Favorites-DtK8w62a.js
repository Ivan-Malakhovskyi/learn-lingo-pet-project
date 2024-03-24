import{u as o,N as i,r as c,a as l,j as e}from"./index-ymX_epWv.js";import{c as h,T as d,b as p}from"./TeachersListItem-DyYB46om.js";import{S as x,C as m}from"./SharedLayout.styled-BEyUMAUp.js";const g=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,u=o.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`,f=o(i)`
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
`,j="/icons/no-data.svg",y=()=>{const[t,a]=c.useState(!1),n=()=>{a(!t)},s=l(h);return e.jsx(e.Fragment,{children:e.jsx(d,{children:e.jsx(x,{children:e.jsx(m,{containerwidth:1216,children:e.jsx("ul",{children:s.length>0?s.map(r=>e.jsx(p,{close:n,teacher:r},r.id)):e.jsxs(g,{children:[" ",e.jsx(u,{children:"You don`t have any favorites teachers yet 😢"}),e.jsxs("p",{children:[" ",e.jsx(f,{to:"/teachers",children:"Go to teachers"})]}),e.jsx("div",{children:e.jsx("img",{src:j,alt:"empty_icons",width:300})})]})})})})})})};export{y as default};
