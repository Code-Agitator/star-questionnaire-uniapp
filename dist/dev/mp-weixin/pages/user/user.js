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
const common_vendor = require("../../common/vendor.js");
const service_index = require("../../service/index.js");
require("../../store/index.js");
const store_modules_auth_index = require("../../store/modules/auth/index.js");
require("../../service/helper.js");
require("../../constants/index.js");
require("../../store/modules/count/index.js");
require("../../store/modules/app/index.js");
require("../../composables/useToken.js");
const __unplugin_components_3 = () => "../../node-modules/nutui-uniapp/components/form/form.js";
const __unplugin_components_2 = () => "../../node-modules/nutui-uniapp/components/button/button.js";
const __unplugin_components_1 = () => "../../node-modules/nutui-uniapp/components/formitem/formitem.js";
const __unplugin_components_0 = () => "../../node-modules/nutui-uniapp/components/input/input.js";
if (!Array) {
  const _component_nut_input = __unplugin_components_0;
  const _component_nut_form_item = __unplugin_components_1;
  const _component_nut_button = __unplugin_components_2;
  const _component_nut_form = __unplugin_components_3;
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_nut_input + _component_nut_form_item + _component_nut_button + _component_nut_form + _component_layout_default_uni)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "user",
  setup(__props) {
    const questionId = common_vendor.ref("");
    const authStore = store_modules_auth_index.useAuthStore();
    const userInfo = common_vendor.ref({});
    common_vendor.onLoad((options) => __async(this, null, function* () {
      questionId.value = options == null ? void 0 : options.id;
      const data = yield service_index.instance.get(`/api/user/info`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      });
      const resData = data.data;
      if (!resData.success)
        yield common_vendor.index.navigateTo({ url: "/pages/index/login" });
      userInfo.value = resData.data;
    }));
    function commit() {
      return __async(this, null, function* () {
        const data = yield service_index.instance.put(`/api/user/info`, userInfo.value, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        const resData = data.data;
        if (!resData.success)
          yield common_vendor.index.navigateTo({ url: "/pages/index/login" });
        else
          common_vendor.index.navigateTo({ url: `/pages/question/index?id=${questionId.value}` });
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(userInfo).username = $event),
        b: common_vendor.p({
          placeholder: "请输入姓名",
          type: "text",
          modelValue: common_vendor.unref(userInfo).username
        }),
        c: common_vendor.p({
          label: "用户名"
        }),
        d: common_vendor.o(($event) => common_vendor.unref(userInfo).nickname = $event),
        e: common_vendor.p({
          placeholder: "请输入年龄",
          type: "text",
          modelValue: common_vendor.unref(userInfo).nickname
        }),
        f: common_vendor.p({
          label: "匿名"
        }),
        g: common_vendor.o(($event) => common_vendor.unref(userInfo).phone = $event),
        h: common_vendor.p({
          placeholder: "请输入联系电话",
          type: "text",
          modelValue: common_vendor.unref(userInfo).phone
        }),
        i: common_vendor.p({
          label: "联系方式"
        }),
        j: common_vendor.o(commit),
        k: common_vendor.p({
          block: true,
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
