(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/blackpanther.8cf462cf.jpg"},function(e,a,t){e.exports=t.p+"static/media/blackwidow.9a17ee97.jpg"},function(e,a,t){e.exports=t.p+"static/media/captain.0f9d4bc0.jpg"},function(e,a,t){e.exports=t.p+"static/media/gamora.41821187.jpg"},function(e,a,t){e.exports=t.p+"static/media/hawkeye.d98e8ca9.jpg"},function(e,a,t){e.exports=t.p+"static/media/hulk.ee124c49.jpg"},function(e,a,t){e.exports=t.p+"static/media/ironman.1bbbb6a7.jpg"},function(e,a,t){e.exports=t.p+"static/media/loki.5d30d15a.jpg"},function(e,a,t){e.exports=t.p+"static/media/nickfury.e5438ff9.jpg"},function(e,a,t){e.exports=t.p+"static/media/quicksilver.8c08d022.jpg"},function(e,a,t){e.exports=t.p+"static/media/spiderman.9726c950.jpg"},function(e,a,t){e.exports=t.p+"static/media/starlord.ddd85793.jpg"},function(e,a,t){e.exports=t.p+"static/media/thor.f260d63a.jpg"},function(e,a,t){e.exports=t.p+"static/media/vision.7dbb0bb0.jpg"},function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(3),i=t.n(r),s=t(1),o=(t(23),t(4)),d=t.n(o),m=t(5),l=t.n(m),p=t(6),u=t.n(p),f=t(7),k=t.n(f),b=t(8),g=t.n(b),v=t(9),x=t.n(v),j=t(10),E=t.n(j),h=t(11),N=t.n(h),S=t(12),w=t.n(S),y=t(13),O=t.n(y),B=t(14),M=t.n(B),A=t(15),C=t.n(A),H=t(16),I=t.n(H),J=t(17),L=t.n(J),q=[{name:"Hawk Eye",src:g.a,clicked:!1},{name:"Black Widow",src:l.a,clicked:!1},{name:"Thor",src:I.a,clicked:!1},{name:"Iron Man",src:E.a,clicked:!1},{name:"Hulk",src:x.a,clicked:!1},{name:"Captain America",src:u.a,clicked:!1},{name:"Gamora",src:k.a,clicked:!1},{name:"Loki",src:N.a,clicked:!1},{name:"Nick Fury",src:w.a,clicked:!1},{name:"Quick Silver",src:O.a,clicked:!1},{name:"Spiderman",src:M.a,clicked:!1},{name:"Star Lord",src:C.a,clicked:!1},{name:"Vision",src:L.a,clicked:!1},{name:"Black Panther",src:d.a,clicked:!1}],F=function(e){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("div",{className:"nav nav-bg"}),n.a.createElement("div",{className:"scoreboard"},n.a.createElement("div",{className:"current"}," ","Score: ",e.score," of ",q.length),n.a.createElement("div",{className:"best"}," Best Score: ",e.best)))},G=function(e){var a=Object(c.useState)(q),t=Object(s.a)(a,2),r=t[0],i=t[1],o=function(a){var t=a.target.getAttribute("data-index");q[t].clicked?(e.resetScore(),q.forEach((function(e){return e.clicked=!1}))):(e.increaseScore(),q[t].clicked=!0),i(function(){for(var e=r,a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e}())},d=r.map((function(e,a){return n.a.createElement("div",{key:a,className:"avenger col mb-3","data-index":a,onClick:o},n.a.createElement("div",{className:"card","data-index":a,style:{cursor:"pointer"},title:e.name},n.a.createElement("img",{src:e.src,alt:e.name,"data-index":a,style:{height:"240px"}}),n.a.createElement("div",{className:"card-footer font-weight-bold text-center","data-index":a,style:{userSelect:"none",padding:"10px 0"}},e.name)))}));return n.a.createElement("div",{className:"Cards"},n.a.createElement("div",{className:"row row-cols-3 row-cols-md-6"},r.length>1&&d))};var P=function(){var e=Object(c.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),d=o[0],m=o[1];return n.a.createElement("div",{className:"App"},n.a.createElement(F,{score:t,best:d}),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(G,{increaseScore:function(){r(t+1)},resetScore:function(){d<t?(m(t),r(0)):r(0)}})))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9b0750f0.chunk.js.map