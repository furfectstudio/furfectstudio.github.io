import{u as V,a8 as R,a9 as O,P as k,aa as H,M as I,ab as T,f as Y,a as C,g as $,ac as b,s as g,d as A,i as j,e as v,ad as q,ae as B,af as W,ag as z,ah as F,ai as G,c as J,l as K,h as E,a1 as Q,v as U,a4 as X}from"./w-GyHRAS.js";import{r as Z}from"./Cmk7LoID.js";import{b as x}from"./Czw38eqJ.js";const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}const er=new Set,D=new Set;function m(r){var N;var a=this,s=a.ownerDocument,l=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],e=o[0]||r.target,d=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=o.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=o[d]||r.target,e!==a){V(r,"currentTarget",{configurable:!0,get(){return e||s}});var w=H,i=I;R(null),O(null);try{for(var t,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+l];if(c!==void 0&&(!e.disabled||r.target===e))if(k(c)){var[M,...P]=c;M.apply(e,[r,...P])}else c.call(e,r)}catch(y){t?n.push(y):t=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,R(w),O(i)}}}function or(r,a){var s=a==null?"":typeof a=="object"?a+"":a;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,a){return L(r,a)}function fr(r,a){T(),a.intro=a.intro??!1;const s=a.target,l=E,o=v;try{for(var e=Y(s);e&&(e.nodeType!==8||e.data!==C);)e=$(e);if(!e)throw b;g(!0),A(e),j();const d=L(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw B(),b;return g(!1),d}catch(d){if(d===b)return a.recover===!1&&W(),T(),z(s),g(!1),tr(r,a);throw d}finally{g(l),A(o),Z()}}const p=new Map;function L(r,{target:a,anchor:s,props:l={},events:o,context:e,intro:d=!0}){T();var _=new Set,u=i=>{for(var t=0;t<i.length;t++){var n=i[t];if(!_.has(n)){_.add(n);var f=ar(n);a.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(F(er)),D.add(u);var h=void 0,w=G(()=>{var i=s??a.appendChild(J());return K(()=>{if(e){Q({});var t=U;t.c=e}o&&(l.$$events=o),E&&x(i,null),h=r(i,l)||{},E&&(I.nodes_end=v),e&&X()}),()=>{var f;for(var t of _){a.removeEventListener(t,m);var n=p.get(t);--n===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,n)}D.delete(u),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function dr(r,a){const s=S.get(r);return s?(S.delete(r),s(a)):Promise.resolve()}export{fr as h,tr as m,or as s,dr as u};
