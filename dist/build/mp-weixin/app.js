"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js"),n=require("./store/index.js"),t=require("./store/modules/app/index.js"),u=require("./plugins/dayjs.js"),s=require("./plugins/vue-query.js");require("./store/modules/count/index.js"),require("./store/modules/auth/index.js"),require("./composables/useToken.js"),require("./constants/index.js"),require("./service/index.js"),require("./service/helper.js"),Math;const r=e.defineComponent({__name:"App",setup(n){const{darkMode:u,statusBarHeight:s,menuButtonBounding:r}=e.storeToRefs(t.useAppStore());return e.onLaunch((()=>{const n=e.index.getSystemInfoSync();u.value="dark"===(null==n?void 0:n.theme),s.value=n.statusBarHeight||44,r.value=e.index.getMenuButtonBoundingClientRect(),e.index.onThemeChange((e=>u.value="dark"===e.theme))})),e.onShow((()=>{})),e.onHide((()=>{})),()=>{}}});function o(){const t=e.createSSRApp(r).use(u.dayjsPlugin).use(s.vueQueryPlugin);return n.setupStore(t),t.component("layout-default-uni",i),{app:t}}const i=()=>"./layouts/default.js";o().app.mount("#app"),exports.createApp=o;
