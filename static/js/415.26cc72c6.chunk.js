"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{8334:function(e,n,t){t.d(n,{hJ:function(){return u},qH:function(){return c}});var a=t(4569),r=t.n(a),i="a620a6416fb18e40f7d335c64c3f9e0e";r().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){return Promise.resolve(r().get("/trending/movie/day",{params:{api_key:i,language:"en",page:1}}).data)},c=function(){return Promise.resolve(r().get("/search/movie/",{params:{api_key:i,language:"en",query:null,page:1}}).data)}},5415:function(e,n,t){t.r(n);var a=t(885),r=t(8334),i=t(2791),u=t(7689),c=t(6731),s=t(184);n.default=function(){var e=(0,u.TH)(),n=(0,i.useState)([]),t=(0,a.Z)(n,2),o=t[0],l=t[1];return(0,i.useEffect)((function(){r.hJ.then(l)}),[]),(0,s.jsx)("main",{children:o.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Tranding today"}),(0,s.jsx)("ul",{children:o.map((function(n){return(0,s.jsxs)("li",{children:["- ",(0,s.jsx)(c.rU,{to:"".concat(n.id),state:{from:e},children:n.title})]},n.id)}))})]})})}}}]);
//# sourceMappingURL=415.26cc72c6.chunk.js.map