"use strict";
const common_vendor = require("../../common/vendor.js");
const __unplugin_components_1 = () => "../../node-modules/nutui-uniapp/components/button/button.js";
const __unplugin_components_0 = () => "../../components/Counter.js";
const _sfc_main = {};
if (!Array) {
  const _component_Counter = __unplugin_components_0;
  const _component_nut_button = __unplugin_components_1;
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_Counter + _component_nut_button + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Work/star-questionnaire-uniapp/src/pages/count/count.vue"]]);
wx.createPage(MiniProgramPage);
