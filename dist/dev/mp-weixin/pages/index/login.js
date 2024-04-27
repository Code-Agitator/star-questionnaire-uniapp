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
const __unplugin_components_3 = () => "../../node-modules/nutui-uniapp/components/button/button.js";
const __unplugin_components_2 = () => "../../node-modules/nutui-uniapp/components/cellgroup/cellgroup.js";
const __unplugin_components_1 = () => "../../node-modules/nutui-uniapp/components/cell/cell.js";
const __unplugin_components_0 = () => "../../node-modules/nutui-uniapp/components/input/input.js";
if (!Array) {
  const _component_nut_input = __unplugin_components_0;
  const _component_nut_cell = __unplugin_components_1;
  const _component_nut_cell_group = __unplugin_components_2;
  const _component_nut_button = __unplugin_components_3;
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_nut_input + _component_nut_cell + _component_nut_cell_group + _component_nut_button + _component_layout_default_uni)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    const toast = common_vendor.useToast();
    const authStore = store_modules_auth_index.useAuthStore();
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    function login() {
      return __async(this, null, function* () {
        const data = yield service_index.instance.post("/api/user/login", { username: username.value, password: password.value });
        const resData = data.data;
        if (resData.success) {
          authStore.setToken(resData.data.token);
          yield common_vendor.index.navigateBack({ delta: 1 });
        } else {
          toast.error(`登录失败:${resData.message}`);
        }
      });
    }
    function autoLogin() {
      return __async(this, null, function* () {
        username.value = "admin";
        password.value = "root";
        yield login();
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.isRef(username) ? username.value = $event : null),
        b: common_vendor.p({
          placeholder: "请输入用户名",
          modelValue: common_vendor.unref(username)
        }),
        c: common_vendor.p({
          title: "用户名"
        }),
        d: common_vendor.o(($event) => common_vendor.isRef(password) ? password.value = $event : null),
        e: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          modelValue: common_vendor.unref(password)
        }),
        f: common_vendor.p({
          title: "密码"
        }),
        g: common_vendor.o(login),
        h: common_vendor.p({
          block: true,
          type: "primary"
        }),
        i: common_vendor.o(autoLogin),
        j: common_vendor.p({
          block: true,
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b4ac9ad"], ["__file", "D:/Work/star-questionnaire-uniapp/src/pages/index/login.vue"]]);
wx.createPage(MiniProgramPage);
