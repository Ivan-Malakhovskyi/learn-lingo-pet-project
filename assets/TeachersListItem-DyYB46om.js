import{u as n,j as e,F as O,d as Y,e as m,g as P,h as q,i as H,k as g,E as u,I as V,B as K,_ as x,T as k,r as v,l as J,a as Q,m as X,M as Z,C as ee,n as te,o as ne}from"./index-ymX_epWv.js";const tt=t=>t.teachers.items,ie=t=>t.teachers.favorites,nt=t=>t.teachers.isLoading,it=n.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
`;n.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  padding: 16px 48px;
  border-radius: 12px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background: ${({theme:{colors:t}})=>t.mainYellow};
  transition: background-color 250ms
    ${({theme:{transitions:t}})=>t.cubic};

  &:hover,
  &:focus {
    background-color: ${({theme:{colors:t}})=>t.accentYellow};
  }

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
`;const st=n.h3`
  text-align: center;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`,se=n.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`,oe=n.div`
  flex-shrink: 0;
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
`,ae=n.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 85px;
  right: 23px;
  top: 19px;
  bottom: 89px;
`,re=n.li`
  display: flex;
  position: relative;
  gap: 48px;
  max-width: 1184px;
  border-radius: 24px;
  background-color: ${({theme:{colors:t}})=>t.mainWhite};
  padding: 24px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,le=n.div`
  width: 100%;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,ce=n.p`
  color: ${({theme:{colors:t}})=>t.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 8px;
`,de=n.h3`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 32px;
`,he=n.button`
  display: block;
  margin-bottom: 16px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`;n.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;const xe=n.button`
  width: 26px;
  height: 26px;
  margin-left: 64px;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  transform: scale(0.7);
  transition: all 250ms ${({theme:{transitions:t}})=>t.cubic};

  @media screen and (max-width: 1339px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`,pe=n.div`
  display: flex;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,me=n.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,ge=n.ul`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,d=n.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 16px;
    background-color: ${({theme:{colors:t}})=>t.mainGrey};
    margin-left: 16px;
  }
`,h=n.p`
  margin-left: 4px;
`,ue=n.span`
  color: ${({theme:{colors:t}})=>t.mainGreen};
`,fe=n.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`,je=n.li`
  padding: 8px 12px;
  border-radius: 35px;
  &:first-child {
    background-color: ${({theme:{colors:t}})=>t.mainYellow};
    border: none;
  }
  border: 1px solid ${({theme:{colors:t}})=>t.accentBlack};
  background-color: transparent;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0%;
`,be=n.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`,we=n.p`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`,ve=n.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;n.ul``;const ke=n.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,ye=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Te=n.div`
  display: flex;
  gap: 8px;
`,Le=n.button`
  display: block;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  background-color: ${({theme:{colors:t}})=>t.mainYellow};
  padding: 16px 48px;
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
`,$e=n.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`,c=n.p`
  color: ${({theme:{colors:t}})=>t.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`,f=n.span`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`,Ie=n.span`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`,Se="/icons/profile-male.svg",y="/icons/icon_star.svg",Be=({experience:t,reviews:i})=>e.jsxs(e.Fragment,{children:[e.jsx(we,{children:t}),e.jsx("ul",{children:i.map(({reviewer_name:s,reviewer_rating:r,comment:a},o)=>e.jsxs(ke,{children:[e.jsxs(ye,{children:[e.jsx("div",{children:e.jsx(ve,{src:Se,alt:s})}),e.jsxs("div",{children:[e.jsx(c,{children:s}),e.jsxs(Te,{children:[e.jsx("img",{src:y,alt:"icon_star",width:16,height:16})," ",e.jsxs("span",{children:[r,".0"]})]})]})]}),e.jsx(f,{children:a})]},o))})]}),Re=({levels:t})=>e.jsx(e.Fragment,{children:e.jsx(fe,{children:t.map((i,s)=>e.jsx(je,{children:e.jsxs(be,{children:["#",i]})},s))})}),Ee="/icons/active_status.svg",_e="/icons/heart.svg",Fe="/icons/active_icon.svg",Ce="/icons/book-open-01.svg",ze=n.h2`
  margin-bottom: 20px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
`,We=n.p`
  margin-bottom: 20px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`,Ae=n.ul`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,Ne=n.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`,Me=n.h3`
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,Ue=n.h4`
  margin-bottom: 21px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`,Ge=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 46px;
`,De=n.span`
  margin-left: 8px;
  color: ${({theme:{colors:t}})=>t.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`,Oe=n(O)`
  cursor: pointer;
`,Ye=[{id:1,name:"career",value:"Career and business"},{id:2,name:"lesson",value:"Lesson for kids"},{id:3,name:"abroad",value:"Living abroad"},{id:4,name:"exams",value:"Exams and coursework"},{id:5,name:"travel",value:"Culture, travel or hobby"}],Pe={radioGroup:"",fullName:"",email:"",phoneNumber:""},qe=/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,He=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,Ve=Y({fullName:m().required("Full name is required field"),email:m().matches(qe,"Invalid email").required("Email can't be is empty"),phoneNumber:m().min(6,"Too short phone number").max(10,"Too long phone number").matches(He,"Invalid format").required("Phone number can't be is empty")}),Ke=({closeBookTrial:t})=>{const{BOOK_TRIAL_SUCCESS:i}=k,s=a=>{const o={};for(const[p,l]of Object.entries(a))l!==""&&(o[p]=l);return o},r=(a,{resetForm:o})=>{s(a),x.success(i),o(),t()};return e.jsx(e.Fragment,{children:e.jsx(P,{initialValues:Pe,onSubmit:r,validationSchema:Ve,children:e.jsxs(q,{children:[e.jsxs(Ge,{children:[" ",Ye.map(({id:a,value:o})=>e.jsxs("label",{children:[e.jsx(Oe,{type:"radio",name:"radioGroup",value:o}),e.jsx(De,{children:o})]},a))]}),e.jsxs(H,{children:[e.jsxs("div",{children:[" ",e.jsx(g,{type:"text",name:"fullName",placeholder:"Full Name"}),e.jsx(u,{name:"fullName",component:"p"})]}),e.jsxs("div",{children:[" ",e.jsx(g,{type:"email",name:"email",placeholder:"Email"}),e.jsx(u,{name:"email",component:"p"})]}),e.jsxs(V,{children:[e.jsx(g,{type:"tel",name:"phoneNumber",placeholder:"Phone number"}),e.jsx(u,{name:"phoneNumber",component:"p"})]})]}),e.jsx(K,{type:"submit",children:"Book"})]})})})},Je=({teacher:t,close:i})=>{const{name:s,surname:r,avatar_url:a}=t;return e.jsxs(e.Fragment,{children:[e.jsx(ze,{children:"Book trial lesson"}),e.jsx(We,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs(Ae,{children:[e.jsx("li",{children:e.jsx(Ne,{src:a,alt:s})}),e.jsxs("li",{children:[e.jsx(c,{children:"Your teacher"}),e.jsxs(Me,{children:[s," ",r]})]})]}),e.jsx(Ue,{children:"What is your main reason for learning English?"}),e.jsx(Ke,{closeBookTrial:i})]})},Qe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Xe=(t=21)=>{let i="",s=crypto.getRandomValues(new Uint8Array(t));for(;t--;)i+=Qe[s[t]&63];return i};const Ze=({languages:t,conditions:i,lessonInfo:s})=>e.jsxs($e,{children:[e.jsxs("li",{children:[" ",e.jsxs(c,{children:["Speaks: ",e.jsx(Ie,{children:t.join(", ")})]})]}),e.jsxs("li",{children:[" ",e.jsxs(c,{children:["Lesson Info: ",e.jsx(f,{children:s})]})]}),e.jsxs("li",{children:[" ",e.jsxs(c,{children:["Conditions: ",e.jsx(f,{children:i})]})]})]}),ot=({teacher:t})=>{const[i,s]=v.useState(!1),[r,a]=v.useState(!1),o=J(),p=Q(ie),l=()=>{a(!r)},{DELETE_SUCCESS:T,ADD_SUCCESS:L,AUTH_ERROR:$}=k,I=Xe(),{id:j,avatar_url:S,name:B,surname:b,languages:R,lesson_info:E,lessons_done:_,conditions:F,levels:C,experience:z,reviews:W,price_per_hour:A}=t,{isUserLoggedIn:N}=X(),M=()=>{s(!i)},w=G=>p.some(D=>D.id===G),U=()=>{if(!N){x.error($);return}w(j)?(o(te(t.id)),x.success(T)):(o(ne(t)),x.success(L))};return e.jsxs(e.Fragment,{children:[e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsx(se,{src:S,width:96,height:96,alt:b}),e.jsx(ae,{children:e.jsx("img",{src:Ee,alt:""})})]}),e.jsx(le,{children:e.jsxs("div",{children:[e.jsxs(me,{children:[e.jsxs("div",{children:[e.jsx(ce,{children:"Languages"}),e.jsxs(de,{children:[B," ",b]})]}),e.jsxs(pe,{children:[e.jsxs(ge,{children:[e.jsxs(d,{children:[e.jsxs("span",{children:[" ",e.jsx("img",{src:Ce,alt:"book_icon"})]}),e.jsxs(h,{children:["Lessons online ",e.jsx("span",{})]})]}),e.jsx(d,{children:e.jsxs(h,{children:["Lessons done: ",e.jsx("span",{children:_})]})}),e.jsxs(d,{children:[e.jsx("span",{children:e.jsx("img",{src:y,alt:"icon_star"})}),e.jsx(h,{children:"Rating: 4.8"})]}),e.jsx(d,{children:e.jsxs(h,{children:["Price / 1 hour: ",e.jsxs(ue,{children:[A,"$"]})]})})," "]}),e.jsx(xe,{type:"button",onClick:U,children:w(j)?e.jsx("img",{src:Fe,alt:"active_icon",width:26,height:26}):e.jsx("img",{src:_e,alt:"default_icon",width:26,height:26})})]})]}),e.jsx(Ze,{languages:R,lessonInfo:E,conditions:F}),!i&&e.jsx(he,{onClick:M,children:"Read more"}),i&&e.jsx(Be,{experience:z,reviews:W}),e.jsx(Re,{levels:C}),i&&e.jsx(Le,{type:"button",onClick:l,children:"Book trial lesson"}),r&&e.jsx(Z,{maxwidth:600,maxheight:972,close:l,children:e.jsx(Je,{teacher:t,close:l})})]})})]},I),e.jsx(ee,{})]})};export{st as E,it as T,nt as a,ot as b,ie as c,tt as s};
