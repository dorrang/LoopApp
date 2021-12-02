(this["webpackJsonpmusix-app"]=this["webpackJsonpmusix-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),r=a.n(c);var s=function(){return i.a.createElement("header",null)},u=a(9),m=a(10),o=a(4);function l(e){return i.a.createElement("div",{className:"inline"},i.a.createElement("button",{onClick:function(){return e.toggleActive(e.pad.id)},className:e.pads[e.i].isActive?"drumpad pressed":"drumpad"},i.a.createElement("img",{id:e.pad.name,className:"drumpad-img",src:e.pad.imgURL,alt:e.pad.alt})))}var d=[{id:"kick",key:"kick",imgURL:"images/bass-drum.png",alt:"kick-img",letter:"B",soundURL:"sounds/kick.mp3",isActive:!1},{id:"snare",key:"snare",imgURL:"images/006-drum-1.png",alt:"snare-img",letter:"G",soundURL:"sounds/snare.mp3",isActive:!1},{id:"tom1",key:"tom1",imgURL:"images/008-drum-2.png",alt:"tom1-img",letter:"S",soundURL:"sounds/rim.mp3",isActive:!1},{id:"tom2",key:"tom2",imgURL:"images/011-drum-3.png",alt:"tom2-img",letter:"D",soundURL:"sounds/Tom2.mp3",isActive:!1},{id:"tom3",key:"tom3",imgURL:"images/005-drum.png",alt:"tom3-img",letter:"F",soundURL:"sounds/Tom3.mp3",isActive:!1},{id:"clap",key:"clap",imgURL:"images/011-drum-3.png",alt:"clap-img",letter:"V",soundURL:"sounds/Clap.mp3",isActive:!1},{id:"closedhihat",key:"closedhihat",imgURL:"images/004-tambourine.png",alt:"closedhihat-img",letter:"N",soundURL:"sounds/hh.mp3",isActive:!1},{id:"cymb",key:"cymb",imgURL:"images/007-cymbal.png",alt:"crash-img",letter:"H",soundURL:"sounds/Cymb.mp3",isActive:!1},{id:"shaker",key:"shaker",imgURL:"images/003-maracas.png",alt:"shaker-img",letter:"M",soundURL:"sounds/Shaker.mp3",isActive:!1}],p=a(8),g=a(7);function f(){var e=Object(n.useState)(d.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{audioObj:new Audio(e.soundURL)})}))),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),f=s[0],v=s[1],b=Object(n.useState)([]),E=Object(o.a)(b,2),k=E[0],j=E[1],O=Object(n.useState)(!1),h=Object(o.a)(O,2),L=h[0],y=h[1];Object(n.useEffect)((function(){var e=a.findIndex((function(e){return e.id===f}));if(-1!==e){var t=Object(u.a)(a);t[e].isActive=!t[e].isActive,c(t),v("")}}),[f]),Object(n.useEffect)((function(){a.some((function(e){return e.isActive}))?y(!0):y(!1),j(a.filter((function(e){return e.isActive&&e})))}),[a]),Object(n.useEffect)((function(){a.forEach((function(e){return!e.isActive&&R(e.audioObj)})),L?(U(k[0].audioObj),k[0].audioObj.addEventListener("ended",(function(){console.log("ended"),a.forEach((function(e){e.isActive&&U(e.audioObj)}))}),!1)):A()}),[k]);var A=function(){a.forEach((function(e){e.audioObj.pause(),e.audioObj.currentTime=0}))},R=function(e){e.pause(),e.currentTime=0},U=function(e){e.play()};return i.a.createElement("div",null,i.a.createElement("div",{className:"drums"},a.map((function(e,t){return i.a.createElement(l,{i:t,pads:Object(u.a)(a),pad:e,key:e.key,toggleActive:function(e){return v(e)}})}))),i.a.createElement("div",{className:"controller"},i.a.createElement("div",{className:"ctrlBtn",onClick:function(){k.forEach((function(e){e.isActive&&(e.audioObj.loop=!0,e.audioObj.play())}))}},i.a.createElement(g.a,{className:"icon",icon:p.a}),"Play"),i.a.createElement("div",{className:"ctrlBtn",onClick:A},i.a.createElement(g.a,{className:"icon",icon:p.b}),"Stop")))}function v(){return i.a.createElement(f,null)}function b(){return i.a.createElement("div",null,i.a.createElement("footer",null,i.a.createElement("p",null,"created by Dorran Gavish")))}var E=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement(v,null),i.a.createElement(b,null))};a(23);r.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ee68e852.chunk.js.map