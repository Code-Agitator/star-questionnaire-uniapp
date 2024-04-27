"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const store_modules_app_index = require("./store/modules/app/index.js");
const plugins_dayjs = require("./plugins/dayjs.js");
const plugins_vueQuery = require("./plugins/vue-query.js");
require("./store/modules/count/index.js");
require("./store/modules/auth/index.js");
require("./composables/useToken.js");
require("./constants/index.js");
require("./service/index.js");
require("./service/helper.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/count/count.js";
  "./pages/index/login.js";
  "./pages/question/index.js";
  "./pages/user/user.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    const { darkMode, statusBarHeight, menuButtonBounding } = common_vendor.storeToRefs(store_modules_app_index.useAppStore());
    common_vendor.onLaunch(() => {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      darkMode.value = (systemInfo == null ? void 0 : systemInfo.theme) === "dark";
      statusBarHeight.value = systemInfo.statusBarHeight || 44;
      menuButtonBounding.value = common_vendor.index.getMenuButtonBoundingClientRect();
      common_vendor.index.onThemeChange((res) => darkMode.value = res.theme === "dark");
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App).use(plugins_dayjs.dayjsPlugin).use(plugins_vueQuery.vueQueryPlugin);
  store_index.setupStore(app);
  app.component("layout-default-uni", Layout_Default_Uni);
  return {
    app
  };
}
const Layout_Default_Uni = () => "./layouts/default.js";
createApp().app.mount("#app");
exports.createApp = createApp;
