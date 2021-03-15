(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{74:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o=t(0),l=t(18),s=t.n(l),d=t(9),h=t(16),u=t(3),b=t(10),j=t(11),m=j.a.div(r||(r=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n"]))),p=j.a.button(c||(c=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 25rem;\n    height: 13rem;\n    border: none;\n    font-size: 3.1rem;\n    font-weight: 700;\n    cursor: pointer;\n    color: #000;\n    background-color: #ffd300;\n\n    &:focus {\n        outline-color: #ffd300;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 45rem;\n        height: 20rem;\n        font-size: 5.5rem;\n    }\n"]))),f=t(1),O=function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(h.b,{to:"/login",style:{marginBottom:"2rem"},children:Object(f.jsx)(p,{children:"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30"})}),Object(f.jsx)(h.b,{to:"/signup",children:Object(f.jsx)(p,{children:"\ud68c\uc6d0\uac00\uc785\ud558\ub7ec \uac00\uae30"})})]})},x=function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(p,{children:"\ub85c\uadf8\uc778\uc774"}),Object(f.jsx)(p,{children:"\ub41c \uc0c1\ud0dc"})]})},g=function(){var e=Object(o.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],c=Object(o.useCallback)((function(e){r(e.target.value)}),[t]);return Object(f.jsxs)(m,{children:[Object(f.jsx)("h1",{children:"\ub85c\uadf8\uc778"}),Object(f.jsx)("label",{htmlFor:"phone",style:{display:"inline-block",marginBottom:"0.5rem",fontSize:"2rem",color:"#ffd300"},children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"phone",value:t,autoFocus:!0,onChange:c,placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"5rem",fontSize:"2.4rem"}})]})},v=t(17),w=t.n(v),y=t(25),k=t(19),S=t(43),_=t.n(S),C=t(27),z={nickname:"",phone:"",role:"nondeveloper"},E="REGISTER_USER",F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E:return console.log(n.data),Object(C.a)(Object(C.a)({},e),{},{nickname:n.data.nickname,phone:n.data.phone,role:n.data.role});default:return e}},T=j.a.div(a||(a=Object(b.a)(["\n    width: 30rem;\n    font-size: 2rem;\n    color: red;\n\n    @media screen and (min-width: 768px) {\n        width: 50rem;\n        font-size: 2.5rem;\n    }\n"]))),D=j.a.div(i||(i=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    width: 30rem;\n    margin-bottom: 3rem;\n\n    @media screen and (min-width: 768px) {\n        width: 50rem;\n    }\n\n    & > input {\n        width: 4rem;\n        height: 4rem;\n        margin-right: 2.7rem;\n    }\n\n    & > label {\n        font-size: 2.1rem;\n        color: #ffd300;\n\n        @media screen and (min-width: 768px) {\n            font-size: 4rem;\n        }\n    }\n\n    & ~ div {\n        display: flex;\n        flex-direction: column;\n        width: 30rem;\n        margin-bottom: 3rem;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n\n        & > label {\n            display: inline-block;\n            margin-bottom: 0.5rem;\n            font-size: 2rem;\n            color: #ffd300;\n\n            @media screen and (min-width: 768px) {\n                font-size: 3rem;\n            }\n        }\n    }\n\n    & ~ button {\n        width: 30rem;\n        height: 6rem;\n        font-size: 3rem;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n    }\n"]))),L=function(){var e=Object(k.b)(),n=Object(o.useState)("nondeveloper"),t=Object(d.a)(n,2),r=t[0],c=t[1],a=Object(o.useCallback)((function(e){e.target.checked?c("developer"):c("nondeveloper")}),[r]),i=Object(o.useState)(""),l=Object(d.a)(i,2),s=l[0],h=l[1],u=Object(o.useCallback)((function(e){h(e.target.value)}),[s]),b=Object(o.useState)(!1),j=Object(d.a)(b,2),O=j[0],x=j[1],g=function(){x(!0)},v=Object(o.useState)(!1),S=Object(d.a)(v,2),C=S[0],z=(S[1],Object(o.useCallback)((function(){return C?Object(f.jsx)(p,{type:"submit",onClick:g,style:{backgroundColor:"rgba(255,211,0,0.5)"},disabled:!0,children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"}):Object(f.jsx)(p,{type:"submit",onClick:g,children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})}),[C]),Object(o.useCallback)(function(){var n=Object(y.a)(w.a.mark((function n(t){var c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!O){n.next=4;break}return h(""),n.abrupt("return",alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4"));case 4:return n.next=6,F();case 6:return c=n.sent,n.next=9,e((a={role:r,phone:s,nickname:c},console.log(a),{type:E,data:a}));case 9:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}(),[r,s])),F=function(){var e=Object(y.a)(w.a.mark((function e(){var n,t,r,c,a,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["\ucc9c\uc0ac","\uc99d\uac70","\uafc8","\ub9c8\uc74c","\ubb3c\ubc29\uc6b8","\uc694\uc815","\uc74c\uc545","\ube5b","\uacb0\uc815","\uc18d\uc0ad\uc784","\uc0c1\uc5b4","\uc2e0\ud0c1","\uc8fc\ubb38","\uae30\ub3c4","\uace0\uc591\uc774","\uc548\ub0b4\uc790","\uacf0","\ubcf4\ud638\uc790","\ub9c8\ubc95","\ubcf4\ubb3c","\uc601\ud63c","\ub0a0\uac1c","\uc120\ubb3c","\uc9c0\ubc30\uc790"],r=(n=["\ub2ec\uc758","\uc0ac\ub791\uc758","\ud558\ub298\uc758","\ubb3c\uc758","\uaf43\uc758","\uc6b0\uc8fc\uc758","\ud0dc\uc591\uc758","\ubcc4\uc758","\uc232\uc758","\uadf8\ub9bc\uc790\uc758","\ucc9c\uad6d\uc758","\ub208\uc758"])[Math.floor(Math.random()*n.length)],c=t[Math.floor(Math.random()*t.length)],e.next=6,_.a.get("http://localhost:8080/users");case 6:return a=e.sent,(i=a.data.length+1)<10&&(i="0".concat(i)),o="".concat(r,"_").concat(c,"_").concat(i),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(m,{children:Object(f.jsxs)("form",{onSubmit:z,"aria-label":"\ud68c\uc6d0\uac00\uc785 \ud3fc\uc785\ub2c8\ub2e4.",children:[Object(f.jsxs)(D,{children:[Object(f.jsx)("input",{type:"checkbox",id:"role",value:r,onClick:a}),Object(f.jsx)("label",{htmlFor:"role",children:"\uac1c\ubc1c\uc790\ub77c\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694."})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"phone",children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"phone",value:s,autoFocus:!0,onChange:u,placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"5rem",fontSize:"2.4rem"}}),C&&Object(f.jsx)(T,{children:"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc804\ud654\ubc88\ud638\uc785\ub2c8\ub2e4."})]}),Object(f.jsx)(p,{type:"submit",children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})]})})},I=function(){var e=Object(o.useState)(!1),n=Object(d.a)(e,2),t=n[0];n[1];return Object(f.jsx)(h.a,{children:Object(f.jsxs)(u.c,{children:[t?Object(f.jsx)(u.a,{exact:!0,path:"/",component:x}):Object(f.jsx)(u.a,{exact:!0,path:"/",component:O}),Object(f.jsx)(u.a,{exact:!0,path:"/login",component:g}),Object(f.jsx)(u.a,{exact:!0,path:"/signup",component:L})]})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))},B=(t(74),t(14)),M=Object(B.c)({user:F}),N=t(44),X=t.n(N),U=t(45),J=Object(B.a)(X.a,U.a)(B.d);s.a.render(Object(f.jsx)(k.a,{store:J(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(f.jsx)(I,{})}),document.getElementById("root")),R()}},[[79,1,2]]]);
//# sourceMappingURL=main.fde76095.chunk.js.map