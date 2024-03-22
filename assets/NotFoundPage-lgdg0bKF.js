import{u as n,N as e,j as t}from"./index-Da6RIk_E.js";const i="/icons/404.svg",c=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,s=n.p`
  color: ${({theme:{colors:o}})=>o.mainBlack};
  font-size: 20px;
  font-weight: 500;
  line-height: 48px;
`,a=n(e)`
  display: block;
  padding: 16px 48px;
  margin-bottom: 40px;
  border-radius: 12px;
  color: ${({theme:{colors:o}})=>o.mainBlack};
  background: ${({theme:{colors:o}})=>o.mainYellow};
  transition: background-color 250ms
    ${({theme:{transitions:o}})=>o.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:o}})=>o.accentYellow};
  }

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
`,r=()=>t.jsxs(c,{children:[t.jsx("img",{src:i,alt:"not_found_icon",width:300}),t.jsx(s,{children:"Such page wasn't found 😢"}),t.jsx(a,{to:"/",children:"Back to home page"})]}),p=()=>t.jsx(r,{});export{p as default};
