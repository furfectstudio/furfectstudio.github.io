import{s as o,g as c}from"./DxabnCy7.js";import{t as l,n as a,m as b,o as p,q as d,u as _}from"./w-GyHRAS.js";let s=!1,i=Symbol();function m(e,n,r){const u=r[n]??(r[n]={store:null,source:b(void 0),unsubscribe:a});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e??null,e==null)u.source.v=void 0,u.unsubscribe=a;else{var t=!0;u.unsubscribe=o(e,f=>{t?u.source.v=f:d(u.source,f)}),t=!1}return e&&i in r?c(e):p(u.source)}function y(){const e={};function n(){l(()=>{for(var r in e)e[r].unsubscribe();_(e,i,{enumerable:!1,value:!0})})}return[e,n]}function N(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{m as a,N as c,y as s};
