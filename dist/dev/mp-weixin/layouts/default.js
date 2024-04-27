"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../common/vendor.js");
require("../store/index.js");
const store_modules_app_index = require("../store/modules/app/index.js");
require("../store/modules/count/index.js");
require("../store/modules/auth/index.js");
require("../composables/useToken.js");
require("../constants/index.js");
const __unplugin_components_0 = () => "../node-modules/nutui-uniapp/components/configprovider/configprovider.js";
if (!Array) {
  const _component_nut_config_provider = __unplugin_components_0;
  _component_nut_config_provider();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "default",
  setup(__props) {
    const { darkMode } = common_vendor.storeToRefs(store_modules_app_index.useAppStore());
    const page = common_vendor.ref(getCurrentPages()[0].route);
    const activeIndex = common_vendor.ref();
    common_vendor.ref("#3CB4E5");
    common_vendor.ref("#84929A");
    common_vendor.ref("24rpx");
    common_vendor.onShow(() => __async(this, null, function* () {
      if (page.value === "pages/index/index")
        activeIndex.value = 0;
      if (page.value === "pages/count/count")
        activeIndex.value = 1;
    }));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          theme: common_vendor.unref(darkMode) ? "dark" : ""
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/layouts/default.vue"]]);
wx.createComponent(Component);
