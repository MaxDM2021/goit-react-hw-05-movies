"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{8334:function(e,n,t){t.d(n,{$0:function(){return o},Vu:function(){return f}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c),s="a620a6416fb18e40f7d335c64c3f9e0e";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){return i().get("/trending/movie/day",{params:{api_key:s,language:"en",page:1}}).then((function(e){return e.data.results}))},f=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie/",{params:{api_key:s,language:"en",query:"",page:1}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},5415:function(e,n,t){t.r(n);var r=t(885),a=t(8334),u=t(2791),c=t(7689),i=t(1087),s=t(184);n.default=function(){var e=(0,c.TH)(),n=(0,u.useState)([]),t=(0,r.Z)(n,2),o=t[0],f=t[1];return(0,u.useEffect)((function(){(0,a.$0)().then(f)}),[]),console.log(o),(0,s.jsx)("main",{children:o.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Tranding today"}),(0,s.jsx)("ul",{children:o.map((function(n){return(0,s.jsxs)("li",{children:["- ",(0,s.jsx)(i.rU,{to:"".concat(n.id),state:{from:e},children:n.title})]},n.id)}))})]})})}}}]);
//# sourceMappingURL=415.2f5c4ed0.chunk.js.map