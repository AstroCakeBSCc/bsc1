(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1003:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var n,c,a=r(2),s=r.n(a),o=r(15),i=r(39),d=r(72),l=r(0),u=r(7),j=r(32),b=r(220),h=r(674),f=r(10),O=r.n(f),p=r(25),x=r(138),m=r(82),g=r(681),v=r(687),w=r(26),y=r(17),k=r(322),E=r(41),R=r(139),C=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),r=t[0],n=t[1],c=Object(R.a)().slowRefresh,a=Object(m.c)().account;return Object(l.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a&&k&&E)){e.next=10;break}return t=[{address:Object(y.i)(),name:"getReferrer",params:[a]},{address:Object(y.i)(),name:"referralsCount",params:[a]},{address:Object(y.i)(),name:"totalReferralCommissions",params:[a]}],e.next=4,Object(w.a)(k,t);case 4:return r=e.sent,c=[{address:Object(y.d)(),name:"referralCommissionRate"}],e.next=8,Object(w.a)(E,c);case 8:o=e.sent,n(r.concat(o));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,a]),r},T=r(676),S=r(670),B=function(e){var t=Object(m.c)().account,r=Object(S.b)();return{onRecordReferrer:Object(l.useCallback)(Object(o.a)(s.a.mark((function n(){var c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(T.l)(r,t,e);case 3:return c=n.sent,n.abrupt("return",c);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[r,t,e])}},A=r(142),L=r(11),D=r(13),F=u.e.div(n||(n=Object(d.a)(["\n    font-size: 20px;\n    text-align: center;\n    padding: 1em;\n    margin: 15px auto;\n    background: ",";\n    color: ",";\n    border-radius: 35px;\n    a {\n        color: ","\n    }\n"])),(function(e){return e.theme.isDark?"linear-gradient(90deg, rgba(109,89,122,1) 80%, rgba(0,0,0,0) 100%)":"linear-gradient(90deg, rgba(31,199,212,1) 50%, rgba(255,255,255,0) 100%)"}),(function(e){return e.theme.isDark?e.theme.colors.text:"#FFF"}),(function(e){return e.theme.isDark?e.theme.colors.warning:e.theme.colors.text})),I=function(){var e=(new Date).getTime()/1e3>parseInt(L.a.OBERON.projectLink),t=Object(u.e)(j.g)(c||(c=Object(d.a)(["\n    align-items: stretch;\n    justify-content: stretch;\n    margin-bottom: 24px;\n    grid-gap: 24px;\n\n    & > div {\n        grid-column: span 6;\n        width: 100%;\n    }\n\n    "," {\n        & > div {\n        grid-column: span 8;\n        }\n    }\n\n    "," {\n        margin-bottom: 32px;\n        grid-gap: 32px;\n\n        & > div {\n        grid-column: span 6;\n        }\n    }\n    "])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),r=Object(A.a)().theme,n=Object(l.useState)(!1),a=Object(i.a)(n,2),f=a[0],w=a[1],y=Object(m.c)().account,k=Object(l.useState)(!1),E=Object(i.a)(k,2),R=E[0],T=E[1],S=Object(g.d)(),I=y&&S&&S.isGreaterThan(0),_=Object(v.f)().onApprove,N=Object(x.a)(),z=N.toastSuccess,K=N.toastError,Q=window.location.origin.concat("?ref=").concat(y),q="",P=document.cookie.match(new RegExp("(^|; )defi_cookie_referrer_not_connected=(.*?)($|;)")),Y=document.cookie.match(new RegExp("(^|; )defi_cookie_referrer=(.*?)($|;)"));void 0!==Y&&Y&&void 0!==Y[2]&&Y[2]&&void 0!==y&&Y[2].toLowerCase()!==y.toLowerCase()?q=Y[2]:void 0!==P&&P&&void 0!==P[2]&&P[2]&&void 0!==y&&P[2].toLowerCase()!==y.toLowerCase()&&(q=P[2]),q||(q="0x000000000000000000000000000000000000dEaD");var J=C(),U=B(q).onRecordReferrer,V=Object(l.useCallback)(Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,U();case 4:e.sent?z("Successed!"):K("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),w(!1),K("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[U,w,z,K]),$=Object(l.useCallback)(Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,_();case 4:e.sent?z("Contract Approved","You can now record your referrer!"):K("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),T(!1),K("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[_,T,z,K]),G="0";void 0!==J[1]&&void 0!==J[1][0]&&J[1][0]&&(G=new O.a(J[1][0]._hex).toString());var H="0";void 0!==J[2]&&void 0!==J[2][0]&&J[2][0]&&(H=new O.a(J[2][0]._hex).div(p.a.pow(18)).toNumber().toLocaleString(void 0,{maximumFractionDigits:3}));var M=0;return void 0!==J[3]&&void 0!==J[3][0]&&J[3][0]&&(M=J[3][0]/100),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(h.a,{children:Object(D.jsxs)(j.z,{scale:"lg",color:"text",style:{textAlign:"center"},children:["Invite your friends and earn ",M>0?M.toString().concat("%"):"a percentage"," of their ",Object(D.jsx)("strong",{children:"farms/pools harvests"})," FOREVER!"]})}),Object(D.jsxs)(b.a,{style:{paddingTop:"1em"},children:[!e&&Object(D.jsxs)(F,{children:["Referrals starts ",Object(D.jsx)("a",{href:"https://www.timeanddate.com/countdown/generic?iso=".concat(new Date(1e3*parseInt(L.a.OBERON.projectLink)).toISOString(),"&font=sanserif&p0=1440&csz=1&msg=Bridge starts"),target:"_blank",rel:"noreferrer",children:new Date(1e3*parseInt(L.a.OBERON.projectLink)).toUTCString()})]}),Object(D.jsx)("br",{}),void 0!==y&&Object(D.jsxs)("div",{children:[Object(D.jsxs)(t,{children:[Object(D.jsxs)(j.n,{children:[Object(D.jsx)(j.o,{children:"Total Referrals"}),Object(D.jsx)(j.p,{children:G})]}),Object(D.jsxs)(j.n,{children:[Object(D.jsx)(j.o,{children:"Total Referrals Commissions"}),Object(D.jsx)(j.p,{children:H})]})]}),Object(D.jsxs)(j.n,{children:[Object(D.jsx)(j.q,{children:Object(D.jsx)(j.z,{children:"Your Referral Link"})}),Object(D.jsxs)(j.o,{children:["Share the referral link below to invite your friends and earn ",Object(D.jsxs)(j.Q,{variant:"secondary",mr:"4px",ml:"4px",children:[M,"%"]})," of your friends' ",Object(D.jsx)("strong",{children:"farms/pools harvests"}),Object(D.jsx)("sup",{children:"*"})," FOREVER!",Object(D.jsx)(j.F,{href:Q,external:!0,children:Q})]}),Object(D.jsx)(j.p,{children:Object(D.jsx)("p",{style:{fontSize:"13px",color:"#AAA"},children:Object(D.jsxs)("em",{children:["*The amount will ",Object(D.jsx)("strong",{children:"not"})," be deducted from your ",Object(D.jsx)("strong",{children:"farms/pools harvests"})," but will instead be given from the liquidity available for mining"]})})})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsxs)(j.n,{children:[Object(D.jsx)(j.q,{children:Object(D.jsx)(j.z,{children:"Your referrer Address"})}),Object(D.jsxs)(j.o,{children:["The address below will be credited with ",Object(D.jsxs)(j.Q,{variant:"secondary",mr:"4px",ml:"4px",children:[M,"%"]})," of the amount",Object(D.jsx)("sup",{children:"*"}),", everytime ",Object(D.jsx)(j.Q,{variant:"success",mr:"4px",ml:"4px",children:"you"})," harvest.",void 0!==J[0]&&void 0!==J[0][0]&&J[0][0]&&"0x0000000000000000000000000000000000000000"!==J[0][0]&&Object(D.jsx)(j.E,{type:"text",scale:"md",style:{marginTop:"15px",marginBottom:"8px"},value:J[0][0],readOnly:!0,isSuccess:!0}),J.length>0&&(void 0===J[0]||void 0===J[0][0]||!J[0][0]||"0x0000000000000000000000000000000000000000"===J[0][0])&&Object(D.jsxs)("div",{children:[Object(D.jsx)(j.E,{type:"text",id:"referrerInput",scale:"md",style:{marginTop:"15px",marginBottom:"8px"},value:q,readOnly:!0,isSuccess:!0}),!I&&Object(D.jsx)(j.j,{scale:"md",style:{marginBottom:"25px",marginRight:"5px"},isLoading:R,endIcon:R?Object(D.jsx)(j.d,{spin:!0,color:"currentColor"}):null,disabled:R,onClick:$,children:"Approve Contract"}),Object(D.jsx)(j.j,{scale:"md",style:{marginBottom:"25px"},isLoading:f,endIcon:f?Object(D.jsx)(j.d,{spin:!0,color:"currentColor"}):null,disabled:f||!I,onClick:V,children:"Confirm address"}),Object(D.jsxs)("p",{style:{marginBottom:"10px"},children:["To use a different address, access your referral link and change the address ( the part after ",Object(D.jsx)("em",{children:"ref="})," )"]}),Object(D.jsxs)("p",{style:{color:r.colors.failure,marginBottom:"10px"},children:["This feature will become active only after clicking the ",Object(D.jsx)("strong",{children:"Confirm address"})," button and ",Object(D.jsx)("strong",{children:"before"})," making your first deposit into ",Object(D.jsx)("strong",{children:"Farms/Pools"}),"."]}),Object(D.jsxs)("p",{style:{color:r.colors.failure,marginBottom:"10px"},children:["To enable this feature you need to have at least ",Object(D.jsx)("strong",{children:"1 OBERON"})," in your wallet, which will be deposited in the ",Object(D.jsx)("strong",{children:"OBERON Pool"})," to earn ",Object(D.jsx)("strong",{children:"OBERON"}),I?"":" (hence the need to approve the contract first)","."]}),Object(D.jsx)("p",{style:{color:r.colors.failure,marginBottom:"10px"},children:"Once set, the address cannot be changed anymore!"}),Object(D.jsxs)("p",{style:{marginTop:"10px"},children:["If you do not set a referrer address, the amount that would go to your referrer will be ",Object(D.jsx)(j.Q,{variant:"failure",mr:"4px",ml:"4px",children:"BURNED"})," instead every time you harvest"]})]})]}),Object(D.jsx)(j.p,{children:Object(D.jsx)("p",{style:{fontSize:"13px",color:"#AAA"},children:Object(D.jsxs)("em",{children:["*The amount will ",Object(D.jsx)("strong",{children:"not"})," be deducted from your ",Object(D.jsx)("strong",{children:"farms/pools harvests"})," but will instead be given from the liquidity available for mining"]})})})]})]}),void 0===y&&Object(D.jsx)("div",{children:Object(D.jsx)(j.n,{children:Object(D.jsx)(j.o,{children:Object(D.jsx)("div",{style:{textAlign:"center"},children:"You need to unlock your wallet to access this feature"})})})})]})]})}},674:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n,c,a=r(12),s=r(140),o=r(72),i=(r(0),r(7)),d=r(32),l=r(223),u=r(13),j=Object(i.e)(d.h)(n||(n=Object(o.a)(["\n  background: ",";\n"])),(function(e){var t=e.theme;return e.background||t.colors.gradients.bubblegum})),b=Object(i.e)(l.a)(c||(c=Object(o.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),h=function(e){var t=e.background,r=e.children,n=Object(s.a)(e,["background","children"]);return Object(u.jsx)(j,Object(a.a)(Object(a.a)({background:t},n),{},{children:Object(u.jsx)(b,{children:r})}))}},681:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return x}));var n=r(2),c=r.n(n),a=r(15),s=r(39),o=r(0),i=r(10),d=r.n(i),l=r(82),u=r(17),j=r(25),b=r(670),h=r(139),f=function(){var e=Object(o.useState)(j.b),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(l.c)().account,f=Object(b.h)(),O=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.allowance(i,Object(u.e)()).call();case 2:t=e.sent,n(new d.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,f,O]),r},O=function(e){var t=Object(o.useState)(j.b),r=Object(s.a)(t,2),n=r[0],i=r[1],f=Object(l.c)().account,O=Object(b.i)(e),p=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){f&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.methods.allowance(f,Object(u.b)()).call();case 2:t=e.sent,i(new d.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[f,O,p]),n},p=function(e){var t=Object(o.useState)(j.b),r=Object(s.a)(t,2),n=r[0],i=r[1],f=Object(l.c)().account,O=Object(b.i)(e),p=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){f&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.methods.allowance(f,Object(u.h)()).call();case 2:t=e.sent,i(new d.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[f,O,p]),n},x=function(){var e=Object(o.useState)(j.b),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(l.c)().account,f=Object(b.h)(),O=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.allowance(i,Object(u.d)()).call();case 2:t=e.sent,n(new d.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,f,O]),r}}}]);