"use strict";var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;const c=require("../../../../common/vendor.js"),a=`${c.PREFIX}-cell-group`,p=c.defineComponent({name:a,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),i=c.defineComponent((d=((e,t)=>{for(var o in t||(t={}))s.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))l.call(t,o)&&n(e,o,t[o]);return e})({},p),u={props:c.cellgroupProps,setup(e){const t=e,o=c.computed((()=>c.getMainClass(t,a)));return(e,t)=>c.e({a:e.$slots.title},e.$slots.title?{}:e.title?{c:c.t(e.title)}:{},{b:e.title,d:e.$slots.desc},e.$slots.desc?{}:e.desc?{f:c.t(e.desc)}:{},{e:e.desc,g:c.n(o.value),h:c.s(e.customStyle)})}},t(d,o(u))));var d,u;wx.createComponent(i);