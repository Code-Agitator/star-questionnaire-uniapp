"use strict";
const common_vendor = require("../common/vendor.js");
require("../store/index.js");
const store_modules_count_index = require("../store/modules/count/index.js");
require("../store/modules/app/index.js");
require("../store/modules/auth/index.js");
require("../composables/useToken.js");
require("../constants/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Counter",
  props: {
    value: { type: Number, required: false }
  },
  setup(__props) {
    const useCount = store_modules_count_index.useCounterStore();
    const { count } = common_vendor.storeToRefs(useCount);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(useCount).inc()),
        b: common_vendor.t(__props.value ? __props.value : common_vendor.unref(count)),
        c: common_vendor.o(($event) => common_vendor.unref(useCount).dec())
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/components/Counter.vue"]]);
wx.createComponent(Component);
