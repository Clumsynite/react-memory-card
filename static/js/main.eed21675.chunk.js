(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/antman.73f1e47f.jpg"},function(e,a,t){e.exports=t.p+"static/media/blackpanther.8cf462cf.jpg"},function(e,a,t){e.exports=t.p+"static/media/blackwidow.9a17ee97.jpg"},function(e,a,t){e.exports=t.p+"static/media/captain.0f9d4bc0.jpg"},function(e,a,t){e.exports=t.p+"static/media/drax.9f51415c.jpg"},function(e,a,t){e.exports=t.p+"static/media/drstrange.55ef8654.jpg"},function(e,a,t){e.exports=t.p+"static/media/gamora.41821187.jpg"},function(e,a,t){e.exports=t.p+"static/media/groot.b5079a33.jpg"},function(e,a,t){e.exports=t.p+"static/media/hawkeye.d98e8ca9.jpg"},function(e,a,t){e.exports=t.p+"static/media/hulk.ee124c49.jpg"},function(e,a,t){e.exports=t.p+"static/media/ironman.1bbbb6a7.jpg"},function(e,a,t){e.exports=t.p+"static/media/loki.5d30d15a.jpg"},function(e,a,t){e.exports=t.p+"static/media/nickfury.5b64658e.jpg"},function(e,a,t){e.exports=t.p+"static/media/quicksilver.8c08d022.jpg"},function(e,a,t){e.exports=t.p+"static/media/rocket.5953c9ce.jpg"},function(e,a,t){e.exports=t.p+"static/media/spiderman.9726c950.jpg"},function(e,a,t){e.exports=t.p+"static/media/starlord.ddd85793.jpg"},function(e,a,t){e.exports=t.p+"static/media/thor.f260d63a.jpg"},function(e,a,t){e.exports=t.p+"static/media/vision.7dbb0bb0.jpg"},function(e,a,t){e.exports=t.p+"static/media/wintersoldier.b9f3780c.jpg"},function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(3),i=t.n(r),s=t(1),o=(t(29),t(4)),d=t.n(o),m=t(5),l=t.n(m),p=t(6),u=t.n(p),f=t(7),k=t.n(f),g=t(8),b=t.n(g),x=t(9),j=t.n(x),v=t(10),E=t.n(v),h=t(11),S=t.n(h),N=t(12),w=t.n(N),y=t(13),O=t.n(y),A=t(14),B=t.n(A),M=t(15),C=t.n(M),D=t(16),G=t.n(D),H=t(17),I=t.n(H),J=t(18),L=t.n(J),W=t(19),q=t.n(W),F=t(20),P=t.n(F),Q=t(21),R=t.n(Q),T=t(22),V=t.n(T),z=t(23),K=t.n(z),U=[{name:"Hawk Eye",src:w.a,clicked:!1},{name:"Black Widow",src:u.a,clicked:!1},{name:"Thor",src:R.a,clicked:!1},{name:"Iron Man",src:B.a,clicked:!1},{name:"Hulk",src:O.a,clicked:!1},{name:"Captain America",src:k.a,clicked:!1},{name:"Gamora",src:E.a,clicked:!1},{name:"Loki",src:C.a,clicked:!1},{name:"Nick Fury",src:G.a,clicked:!1},{name:"Quick Silver",src:I.a,clicked:!1},{name:"Spiderman",src:q.a,clicked:!1},{name:"Star Lord",src:P.a,clicked:!1},{name:"Vision",src:V.a,clicked:!1},{name:"Black Panther",src:l.a,clicked:!1},{name:"Antman",src:d.a,clicked:!1},{name:"Rocket",src:L.a,clicked:!1},{name:"Drax",src:b.a,clicked:!1},{name:"Doctor Strange",src:j.a,clicked:!1},{name:"Groot",src:S.a,clicked:!1},{name:"Winter Soldier",src:K.a,clicked:!1}],X=function(e){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("div",{className:"nav nav-bg"}),n.a.createElement("div",{className:"scoreboard"},n.a.createElement("div",{className:"current"}," ","Score: ",e.score," of ",U.length),n.a.createElement("div",{className:"best"}," Best Score: ",e.best)))},Y=function(e){var a=Object(c.useState)(U),t=Object(s.a)(a,2),r=t[0],i=t[1],o=function(a){var t=a.target.getAttribute("data-index");U[t].clicked?(e.resetScore(),U.forEach((function(e){return e.clicked=!1}))):(e.increaseScore(),U[t].clicked=!0),i(function(){for(var e=r,a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e}())},d=r.map((function(e,a){return n.a.createElement("div",{key:a,className:"avenger col-6  mb-3","data-index":a,onClick:o},n.a.createElement("div",{className:"card","data-index":a,style:{cursor:"pointer"},title:e.name},n.a.createElement("img",{src:e.src,alt:e.name,"data-index":a,style:{height:"240px"}}),n.a.createElement("div",{className:"card-footer font-weight-bold text-center","data-index":a,style:{userSelect:"none",padding:"10px 0"}},e.name)))}));return n.a.createElement("div",{className:"Cards"},n.a.createElement("div",{className:"row row-cols-2 row-cols-md-6"},r.length>1&&d))};var Z=function(){var e=Object(c.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),d=o[0],m=o[1];return n.a.createElement("div",{className:"App"},n.a.createElement(X,{score:t,best:d}),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(Y,{increaseScore:function(){r(t+1)},resetScore:function(){d<t?(m(t),r(0)):r(0)}})))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Z,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.eed21675.chunk.js.map