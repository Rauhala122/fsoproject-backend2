(this["webpackJsonpfsoproject2020-frontend"]=this["webpackJsonpfsoproject2020-frontend"]||[]).push([[0],{71:function(e,n,t){e.exports=t(81)},81:function(e,n,t){"use strict";t.r(n);var a=t(58),r=t(23),o=t.n(r),c=t(62),l=t.n(c),s=t(57),u=t(48),i=t(61);function d(){var e=Object(s.a)(["\n  query {\n    allPosts {\n      content\n      date\n      time\n      user {\n        username\n      }\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  query {\n    allUsers  {\n      name\n      username\n    }\n  }\n"]);return m=function(){return e},e}var f=Object(u.a)(m()),b=Object(u.a)(d()),j=function(){var e=Object(i.a)(f),n=Object(i.a)(b);return e.loading||n.loading?o.a.createElement("div",null,"loading..."):(console.log("Users",e.data.allUsers),console.log("Posts",n),o.a.createElement("div",null,e.data.allUsers.map((function(e){return e.username})).join(", "),n.data.allPosts.map((function(e){return o.a.createElement("div",{key:e.id},e.content,e.user.username)}))))},p=t(34),h=t(42),v=t(43),O=t(60),g=t(64),E=Object(g.a)((function(e,n){var t=n.headers,r=localStorage.getItem("phonenumbers-user-token");return{headers:Object(a.a)(Object(a.a)({},t),{},{authorization:r?"bearer ".concat(r):null})}})),k=new p.a({uri:"http://localhost:4000"}),w=new h.a({cache:new v.a,link:E.concat(k)});l.a.render(o.a.createElement(O.a,{client:w},o.a.createElement(j,null)),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.4102dd28.chunk.js.map