(this["webpackJsonpmortal-combat"]=this["webpackJsonpmortal-combat"]||[]).push([[0],{11:function(e,a,t){},25:function(e,a,t){e.exports=t(37)},37:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(16),o=t.n(s),r=t(9),c=t(17),m=t(18),g=t(19),f=t(23),l=t(20),d=t(24),u=t(5),h=(t(30),t(11),[{name:"Bi-Han",id:"1",icon:"../images/Bi-Han.gif",show:"../images/Bi-Han_show.gif",vs:"./images/Bi-Han_vs.png"},{name:"Cyrax",id:"2",icon:"./images/Cyrax.gif",show:"./images/Cyrax_show.gif",vs:"./images/Cyrax_vs.png"},{name:"Ermac",id:"3",icon:"./images/Ermac.jpg",show:"./images/Ermac_show.gif",vs:"./images/Ermac_vs.png"},{name:"Jade",id:"4",icon:"./images/Jade.jpg",show:"./images/Jade_show.gif",vs:"./images/Jade_vs.png"},{name:"Jax",id:"5",icon:"./images/Jax.gif",show:"./images/Jax_show.gif",vs:"./images/Jax_vs.png"},{name:"Kabal",id:"6",icon:"./images/Kabal.gif",show:"./images/Kabal_show.gif",vs:"./images/Kabal_vs.png"},{name:"Kano",id:"7",icon:"./images/Kano.gif",show:"./images/Kano_show.gif",vs:"./images/Kano_vs.png"},{name:"Kitana",id:"8",icon:"./images/Kitana.jpg",show:"./images/Kitana_show.gif",vs:"./images/Kitana_vs.png"},{name:"Kung-Lao",id:"9",icon:"./images/Kung-Lao.gif",show:"./images/Kung-Lao_show.gif",vs:"./images/Kung-Lao_vs.png"},{name:"Liu-Kang",id:"10",icon:"./images/Liu-Kang.gif",show:"./images/Liu-Kang_show.gif",vs:"./images/Liu-Kang_vs.png"},{name:"Dragon",id:"11",icon:"./images/Center.gif"},{name:"Nightwolf",id:"12",icon:"./images/Nightwolf.gif",show:"./images/Nightwolf_show.gif",vs:"./images/Nightwolf_vs.png"},{name:"Rain",id:"13",icon:"./images/Rain.gif",show:"./images/Rain_show.gif",vs:"./images/Rain_vs.gif"},{name:"Reptile",id:"14",icon:"./images/Reptile.jpg",show:"./images/Reptile_show.gif",vs:"./images/Reptile_vs.png"},{name:"Scorpion",id:"15",icon:"./images/Scorpion.jpg",show:"./images/Scorpion_show.gif",vs:"./images/Scorpion_vs.png"},{name:"Sector",id:"16",icon:"./images/Sector.gif",show:"./images/Sector_show.gif",vs:"./images/Sector_vs.gif"},{name:"Sheeva",id:"17",icon:"./images/Sheeva.gif",show:"./images/Sheeva_show.gif",vs:"./images/Sheeva_vs.png"},{name:"Sindel",id:"18",icon:"./images/Sindel.gif",show:"./images/Sindel_show.gif",vs:"./images/Sindel_vs.png"},{name:"Shang-Tsung",id:"19",icon:"./images/Shang-Tsung.gif",show:"./images/Shang-Tsung_show.gif",vs:"./images/Shang-Tsung_vs.gif"},{name:"Smoke",id:"20",icon:"./images/Smoke.jpg",show:"./images/Smoke_show.gif",vs:"./images/Smoke_vs.png"},{name:"Sonya",id:"21",icon:"./images/Sonya.gif",show:"./images/Sonya_show.gif",vs:"./images/Sonya_vs.png"},{name:"Stryker",id:"22",icon:"./images/Stryker.gif",show:"./images/Stryker_show.gif",vs:"./images/Stryker_vs.png"},{name:"Kuai-Liang",id:"23",icon:"./images/Kuai-Liang.gif",show:"./images/Kuai-Liang_show.gif",vs:"./images/Kuai-Liang_vs.gif"},{name:"Subzero",id:"24",icon:"./images/Subzero.jpg",show:"./images/Subzero_show.gif",vs:"./images/Subzero_vs.png"}]);var v=function(e){var a=e.images,t=e.activeId,n=e.findName,s=e.findItem,o=e.keyDown;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"header"},"SELECT YOUR FIGHTER"),i.a.createElement("div",{className:"grid"},a.map((function(e){return i.a.createElement("span",{key:e.id,className:e.id===t?"active":"icons",autoFocus:!0},i.a.createElement("img",{key:e.id,src:e.icon,alt:e.name,onKeyDown:function(e){return o(e,a)},tabIndex:e.id,className:e.id===t?"active1":"icons",autoFocus:!0}))})),i.a.createElement("div",{className:"left_bottom"},i.a.createElement("img",{src:s(a,t),alt:n(a,t),className:"fighter"})),i.a.createElement("div",{className:"right_bottom"})))},w=t(7);t(31);var _=function(e){var a=e.images,t=e.activeId,s=e.findFighter,o=e.findName,r=e.randomId,c=Object(u.g)();i.a.useEffect((function(){setTimeout((function(){c.push("/mc_choose_hero")}),1e4)}),[t,c]);var m=Object(n.useState)("#000000"),g=Object(w.a)(m,2),f=g[0],l=g[1],d=Object(n.useState)("#000000"),h=Object(w.a)(d,2),v=h[0],_=h[1],p=Object(n.useState)("#000000"),y=Object(w.a)(p,2),S=y[0],E=y[1],b=Object(n.useState)("#000000"),N=Object(w.a)(b,2),j=N[0],k=N[1],O=Object(n.useState)("#000000"),I=Object(w.a)(O,2),K=I[0],C=I[1],D=Object(n.useState)("#000000"),x=Object(w.a)(D,2),L=x[0],P=x[1],J=function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};return document.onkeydown=function(e){81===e.keyCode?l(J()):87===e.keyCode?_(J()):69===e.keyCode?E(J()):82===e.keyCode?k(J()):84===e.keyCode?C(J()):89===e.keyCode&&P(J())},i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"left_side"}),i.a.createElement("div",{className:"left_container"},i.a.createElement("img",{src:"../images/vs_dragon_left.gif",alt:"left dragon",className:"left_dragon"}),i.a.createElement("img",{src:s(a,t),alt:o(a,t),className:"left_fighter"}))),i.a.createElement("div",{className:"vs_center"},i.a.createElement("div",{className:"vs_center_upper"},i.a.createElement("img",{src:"../images/Battle_title.gif",alt:"Battle",className:"battle"}),i.a.createElement("img",{src:"../images/1.jpg",alt:"first",className:"number"}),i.a.createElement("img",{src:"../images/vs_word.gif",alt:"vs",className:"vs"})),i.a.createElement("div",{className:"vsCenter_lover"},i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:f}}),i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:v}}),i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:S}}),i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:j}}),i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:K}}),i.a.createElement("i",{className:"fa fa-fonticons fa-4x fonticon",style:{color:L}}))),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"right_container"},i.a.createElement("img",{src:"../images/vs_dragon_right.gif",alt:"right dragon",className:"right_dragon"}),i.a.createElement("img",{src:r,alt:o(a,t),className:"right_fighter"})),i.a.createElement("div",{className:"right_side"})))};function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var S=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(f.a)(this,Object(l.a)(a).call(this,e))).getImages=function(e){t.setState({images:e})},t.findItem=function(e,a){return e.filter((function(e){return e.id===a})).map((function(e){return e.show}))},t.findName=function(e,a){return e.filter((function(e){return e.id===a})).map((function(e){return e.name}))},t.findFighter=function(e,a){return e.filter((function(e){return e.id===a})).map((function(e){return e.vs}))},t.keyDownUp=function(e){return 8===e?1:e>=20?e-5:e>=15?e-6===11?4:e-6:e-7<=1?e:e-7},t.keyDownDown=function(e){return 14===e?19:8===e?15:4===e?17:e>0&&e<8?e+7>24?24:e+7:e>8&&e<15?e+6:e>14&&e<20?e+5:e<=19?e+5:e+5>24?e:void 0},t.right=function(e){return 24===e?e:10===e?12:e+1},t.left=function(e){return 1===e?e:12===e?10:e-1},t.randomId=function(e){var a=Math.floor(24*Math.random())+1+"";return e.filter((function(e){return e.id===a})).map((function(e){return e.vs}))},t.keyDown=function(e,a){e.preventDefault();var n=t.state.activeId;if(39===e.keyCode&&+n<=24)t.setState((function(e){return y({},e,{activeId:"".concat(t.right(+e.activeId))})}));else if(37===e.keyCode&&+n>=1)t.setState((function(e){return y({},e,{activeId:"".concat(t.left(+e.activeId))})}));else if(40===e.keyCode&&+n<=24&&+n>=1)t.setState((function(e){return y({},e,{activeId:"".concat(t.keyDownDown(+e.activeId))})}));else if(38===e.keyCode&&+n<=24&&+n>=1)t.setState((function(e){return y({},e,{activeId:"".concat(t.keyDownUp(+e.activeId))})}));else{if(11===n)return t.setState((function(e){return y({},e,{newPath:!0,activeId:Math.floor(24*Math.random())+1+""})}));if(13===e.keyCode){var i=Math.floor(24*Math.random())+1+"",s=a.filter((function(e){return e.id===i})).map((function(e){return e.vs}));return t.setState((function(e){return y({},e,{newPath:!0,randomId:s})}))}}},t.state={images:[],activeId:"1",newPath:!1,randomId:"1"},t}return Object(d.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.getImages(h)}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.activeId,n=e.newPath,s=e.randomId;return n?(this.setState((function(e){return y({},e,{newPath:!1})})),i.a.createElement(u.a,{from:"/mc_choose_hero",to:"/mc_vs_screen",exact:!0,component:_})):i.a.createElement("div",{className:"App"},i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"/mc_choose_hero"},i.a.createElement(v,{images:a,activeId:t,findItem:this.findItem,findName:this.findName,keyDown:this.keyDown})),i.a.createElement(u.b,{exact:!0,path:"/mc_vs_screen"},i.a.createElement(_,{images:a,activeId:t,findFighter:this.findFighter,findName:this.findName,randomId:s}))))}}]),a}(i.a.Component);""===window.location.hash&&(window.location.hash="#/mc_choose_hero"),o.a.render(i.a.createElement(r.a,null,i.a.createElement(S,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5d6fc26a.chunk.js.map