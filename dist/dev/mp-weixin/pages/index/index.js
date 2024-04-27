"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_modules_auth_index = require("../../store/modules/auth/index.js");
require("../../store/modules/count/index.js");
require("../../store/modules/app/index.js");
require("../../composables/useToken.js");
require("../../constants/index.js");
const __unplugin_components_3 = () => "../../node-modules/nutui-uniapp/components/cellgroup/cellgroup.js";
const __unplugin_components_2 = () => "../../node-modules/nutui-uniapp/components/button/button.js";
const __unplugin_components_1 = () => "../../node-modules/nutui-uniapp/components/cell/cell.js";
const __unplugin_components_0 = () => "../../node-modules/nutui-uniapp/components/input/input.js";
if (!Array) {
  const _component_nut_input = __unplugin_components_0;
  const _component_nut_cell = __unplugin_components_1;
  const _component_nut_button = __unplugin_components_2;
  const _component_nut_cell_group = __unplugin_components_3;
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_nut_input + _component_nut_cell + _component_nut_button + _component_nut_cell_group + _component_layout_default_uni)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const questionId = common_vendor.ref("8");
    const authStore = store_modules_auth_index.useAuthStore();
    if (!authStore.isExist())
      common_vendor.index.navigateTo({ url: "login" });
    function go() {
      common_vendor.index.navigateTo({ url: `/pages/user/user?id=${questionId.value}` });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.isRef(questionId) ? questionId.value = $event : null),
        b: common_vendor.p({
          placeholder: "问卷序号",
          modelValue: common_vendor.unref(questionId)
        }),
        c: common_vendor.o(go),
        d: common_vendor.p({
          block: true,
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
