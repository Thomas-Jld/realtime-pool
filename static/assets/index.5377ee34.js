import{GUI as u}from"https://cdn.jsdelivr.net/npm/three@0.127/examples/jsm/libs/dat.gui.module.js";import{O as m,M as _,W as O,S as P,G as y,P as k,T as b,a as D,A as T,b as g,D as w,c as S,d as L,e as H}from"./vendor.4ff49bc2.js";const B=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};B();function G(t){var i=Math.PI;return t*(i/180)}function W(t,i){const o=new u({autoplace:!0});o.name=t,o.domElement.id=t.replace(/\s/g,""),i.forEach(n=>{const e=o.addFolder(n.name);n.options.forEach(s=>e.add(...s).listen())})}function A(t,i,o,n=!1){new m(t,i.domElement);const e=new u({autoplace:!0});e.domElement.id=o.name.replace(/\s/g,""),e.name=o.name;const s=e.addFolder("table options");s.add(o,"visible").name("Display");const a=e.addFolder("Position");a.add(o.position,"x",-140,140).listen(),a.add(o.position,"y",-500,500).listen(),a.add(o.position,"z",-90,90).listen(),n&&s.open()}function N(t,i,o,n){new m(t,i.domElement);const e=new u({autoplace:!0}),s=e.addFolder("cue options");s.add(o,"visible").name("Display"),s.add(o.position,"x",-500,500).listen(),s.add(o.position,"y",-500,500).listen(),s.add(o.position,"z",-500,500).listen();const a=e.addFolder("Rotation");a.add(o.rotation,"x",-90*Math.PI/180,90*Math.PI/180).listen(),a.add(o.rotation,"y",-90*Math.PI/180,90*Math.PI/180).listen(),a.add(o.rotation,"z",-90*Math.PI/180,90*Math.PI/180).listen(),n&&s.open()}function U(t,i,o=!1){new m(t,i.domElement);const n=new u({autoplace:!0});n.domElement.id=t.name.replace(/\s/g,""),n.name=t.name+" options";const e=n.addFolder("camera options"),s=e.addFolder("position");s.add(t.position,"x",-140,140).listen(),s.add(t.position,"y",-500,500).listen(),s.add(t.position,"z",-90,90).listen();const a=e.addFolder("Rotation");a.add(t.rotation,"x",-90,90).step(1).listen(),a.add(t.rotation,"y",0,90).step(1).listen(),a.add(t.rotation,"z",-90,90).step(1).listen();let M={topView:function(){t.position.set(0,300,0),t.lookAt(0,0,0)}},C={rotateClockWise:function(){console.log(t.rotation.z),t.rotation.z+=G(90),console.log(t.rotation.z)}};e.add(M,"topView"),e.add(C,"rotateClockWise").name("Rotate by 90 deg"),o&&e.open()}var R=[{name:"top_right",x:-215,z:-108},{name:"top_left",x:-215,z:108},{name:"middle_top",x:0,z:108},{name:"middle_bottom",x:0,z:-108},{name:"bottom_right",x:215,z:-108},{name:"bottom_left",x:215,z:108}];class x extends _{constructor(i,o,n){super(i,o);this.radius=i.parameters.radius,this.ballNr=0,this.mass=1,this.ballid=null}Move(i,o){}MotionDesign(i,o,...n){}}const f={L:430,H:216},l=new O,d=new P,E=new y;E.name="balls";const r=new k(75,window.innerWidth/window.innerHeight,.1,1e3);r.name="Main Camera";const c=new m(r,l.domElement);c.minDistance=200;c.maxDistance=400;c.touches={ONE:b.DOLLY_ROTATE,TWO:b.DOLLY_PAN};const z=new D;let p=[],h=[[-50,-10],[10,38]];const V=io.connect("https://vps.thomasjuldo.com",{path:"/realtimepool/socket.io/",cors:{origin:"*",methods:["GET","POST"]},agent:!1,upgrade:!1,rejectUnauthorized:!1,transports:["websocket"]});V.on("new_data",t=>(console.log(t),h=Q(t),h));function q(){document.body.appendChild(z.dom);const t=new T(500);d.add(t),r.position.set(0,300,0),Y(),K(),document.body.appendChild(l.domElement),new g({transparent:!0}),v("DVIC_table"),v("DVIC_cue"),d.add(E),new U(r,l,!0),$(h),setInterval(()=>{},1e3)}function F(){z.update(),c.enableDamping=!0,c.dampingFactor=.05,requestAnimationFrame(F),l.render(d,r),window.addEventListener("resize",()=>{l.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()}),setTimeout(()=>{J(p)},1e3)}function K(){l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(3358535,1),l.shadowMapSoft=!0}function Y(){let t=new w(9684299,.1);t.position.set(0,700,200),t.name="Back light";let i=new w("white",0);i.position.set(-6,-3,0),i.name="Key light";let o=new w("white",0);o.position.set(9,9,6),o.name="Fill light";let n=new S(16777215);n.position.set(3,700,3),n.castShadow=!0;const e=new y;e.add(n,t,i,o),d.add(e),e.name="Lighting"}function I(t){if(!t.visible)return;const i=81;function o(n){let e="https://billiards.colostate.edu/images/one-pocket/straight_back_kiss_beat.gif";t.visible=!1,Z(e,t.name,n),t.position.x=0,t.position.z=20,setTimeout(()=>{t.visible=!0},5500)}R.forEach(n=>{Math.pow(n.x-t.position.x,2)+Math.pow(n.z-t.position.z,2)<=i&&o(n.name)})}function Z(t,i,o){let n=document.createElement("img"),e=document.createElement("p");n.src=t,e.innerHTML=i+" in pocket"+o,document.getElementById("container").appendChild(n),document.getElementById("container").appendChild(e),n.style.zIndex="100000",n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",e.style.zIndex="100000",e.style.position="fixed",e.style.top="75%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.color="white",e.style.fontSize="2rem",e.style.marginTop="3rem",setTimeout(()=>{n.remove(),e.remove()},5e3)}function $(t){const i=[];for(let o=0;o<t.length;o++){const n=t[o];let e=new x(new L(6,30,30),new g({color:"yellow"}),3);e.position.set(n[0],-11,n[1]),e.name=`Ballname:  ${e.id}`,p.push(e),d.add(e),i.push({name:e.name,options:[[e,"visible"],[e.position,"x",-210,210],[e.position,"z",-108,108]]}),I(e)}return W("Balls",i),p}function J(t){t.forEach(i=>{d.remove(i)}),p=[],h.forEach(i=>{let o=new x(new L(6,30,30),new g({color:"yellow"}));o.position.set(i[0],-11,i[1]),d.add(o),p.push(o),I(i)})}function v(t){const i=new H;i.crossOrigin=!0,i.load("realtimepool/models/"+t+".glb",function(o){const n=o.scene;n.position.y=87,n.getObjectByName("cue")?(new N(r,l,n,!1),n.position.set(0,-300,-142)):(new A(r,l,n,!1),n.position.set(0,-187,0)),n.scale.set(1,1,1),d.add(n)})}function Q(t){let i=[];for(let o=0;o<t.length;o++)i.push([f.L*t[o][0]-f.L/2,f.H*t[o][1]-f.H/2]);return i}q();F();
