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
const __unplugin_components_7 = () => "../../node-modules/nutui-uniapp/components/button/button.js";
const __unplugin_components_6 = () => "../../node-modules/nutui-uniapp/components/formitem/formitem.js";
const __unplugin_components_5 = () => "../../node-modules/nutui-uniapp/components/checkboxgroup/checkboxgroup.js";
const __unplugin_components_4 = () => "../../node-modules/nutui-uniapp/components/checkbox/checkbox.js";
const __unplugin_components_3 = () => "../../node-modules/nutui-uniapp/components/radiogroup/radiogroup.js";
const __unplugin_components_2 = () => "../../node-modules/nutui-uniapp/components/radio/radio.js";
const __unplugin_components_1 = () => "../../node-modules/nutui-uniapp/components/textarea/textarea.js";
const __unplugin_components_0 = () => "../../node-modules/nutui-uniapp/components/input/input.js";
if (!Array) {
  const _component_nut_input = __unplugin_components_0;
  const _component_nut_textarea = __unplugin_components_1;
  const _component_nut_radio = __unplugin_components_2;
  const _component_nut_radio_group = __unplugin_components_3;
  const _component_nut_checkbox = __unplugin_components_4;
  const _component_nut_checkbox_group = __unplugin_components_5;
  const _component_nut_form_item = __unplugin_components_6;
  const _component_nut_button = __unplugin_components_7;
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_nut_input + _component_nut_textarea + _component_nut_radio + _component_nut_radio_group + _component_nut_checkbox + _component_nut_checkbox_group + _component_nut_form_item + _component_nut_button + _component_layout_default_uni)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const authStore = store_modules_auth_index.useAuthStore();
    const id = common_vendor.ref(0);
    const question = common_vendor.ref([]);
    const answer = common_vendor.ref({});
    common_vendor.onLoad((options) => __async(this, null, function* () {
      const initAnswer = {};
      id.value = options == null ? void 0 : options.id;
      const data = yield service_index.instance.get(`/api/question/${id.value}`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      });
      const resData = data.data;
      if (!resData.success)
        yield common_vendor.index.navigateTo({ url: "/pages/index/login" });
      resData.data.componentList.forEach((component) => {
        component.props.options = component.props.options || [];
        initAnswer[component.feId] = "";
        if (component.type === "questionCheckbox")
          initAnswer[component.feId] = [];
      });
      question.value = resData.data.componentList;
      answer.value = initAnswer;
    }));
    function commit() {
      return __async(this, null, function* () {
        const answer_ = answer.value;
        const result = {};
        for (const key in answer_) {
          if (typeof answer_[key] === "object" && Array.isArray(answer_[key]))
            result[key] = answer_[key].join(",");
          else
            result[key] = answer_[key];
        }
        const data = yield service_index.instance.post(`/api/answer`, {
          questionId: id.value,
          answers: result
        }, {
          headers: {
            Authorization: `Bearer ${authStore.token}`
          }
        });
        const resData = data.data;
        if (resData.success)
          common_vendor.index.navigateBack({ delta: 1 });
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(question), (item, k0, i0) => {
          var _a, _b, _c, _d;
          return common_vendor.e({
            a: item.type === "questionInput"
          }, item.type === "questionInput" ? {
            b: "a03a9caa-2-" + i0 + "," + ("a03a9caa-1-" + i0),
            c: common_vendor.o(($event) => common_vendor.unref(answer)[item.feId] = $event, item.feId),
            d: common_vendor.p({
              placeholder: item.props.placeholder,
              modelValue: common_vendor.unref(answer)[item.feId]
            })
          } : {}, {
            e: item.type === "questionTextarea"
          }, item.type === "questionTextarea" ? {
            f: "a03a9caa-3-" + i0 + "," + ("a03a9caa-1-" + i0),
            g: common_vendor.o(($event) => common_vendor.unref(answer)[item.feId] = $event, item.feId),
            h: common_vendor.p({
              placeholder: item.props.placeholder,
              modelValue: common_vendor.unref(answer)[item.feId]
            })
          } : {}, {
            i: item.type === "questionRadio" && item.props.options
          }, item.type === "questionRadio" && item.props.options ? {
            j: common_vendor.f(item.props.options, (radio, k1, i1) => {
              return {
                a: common_vendor.t(radio == null ? void 0 : radio.text),
                b: radio == null ? void 0 : radio.value,
                c: "a03a9caa-5-" + i0 + "-" + i1 + "," + ("a03a9caa-4-" + i0),
                d: common_vendor.p({
                  shape: "button",
                  label: radio == null ? void 0 : radio.text,
                  size: "large"
                })
              };
            }),
            k: "a03a9caa-4-" + i0 + "," + ("a03a9caa-1-" + i0),
            l: common_vendor.o(($event) => common_vendor.unref(answer)[item.feId] = $event, item.feId),
            m: common_vendor.p({
              modelValue: common_vendor.unref(answer)[item.feId]
            })
          } : {}, {
            n: item.type === "questionCheckbox" && item.props.list
          }, item.type === "questionCheckbox" && item.props.list ? {
            o: common_vendor.f(item.props.list, (check, k1, i1) => {
              return {
                a: common_vendor.t(check.text),
                b: check == null ? void 0 : check.value,
                c: "a03a9caa-7-" + i0 + "-" + i1 + "," + ("a03a9caa-6-" + i0),
                d: common_vendor.p({
                  label: check.text
                })
              };
            }),
            p: "a03a9caa-6-" + i0 + "," + ("a03a9caa-1-" + i0),
            q: common_vendor.o(($event) => common_vendor.unref(answer)[item.feId] = $event, item.feId),
            r: common_vendor.p({
              modelValue: common_vendor.unref(answer)[item.feId]
            })
          } : {}, {
            s: item.type === "questionParagraph"
          }, item.type === "questionParagraph" ? {
            t: common_vendor.t((_a = item == null ? void 0 : item.props) == null ? void 0 : _a.text),
            v: common_vendor.n(((_b = item.props) == null ? void 0 : _b.isCenter) ? "text-center" : "")
          } : {}, {
            w: item.type === "questionInfo"
          }, item.type === "questionInfo" ? {
            x: common_vendor.t(item.props.title),
            y: common_vendor.t(item.props.desc)
          } : {}, {
            z: item.type === "questionTitle"
          }, item.type === "questionTitle" ? {
            A: common_vendor.t(item.props.text),
            B: common_vendor.n(`${((_c = item.props) == null ? void 0 : _c.isCenter) ? "text-center " : ""}font-size-${(3 - ((_d = item.props) == null ? void 0 : _d.level)) * 24} text-black`)
          } : {}, {
            C: item.feId,
            D: "a03a9caa-1-" + i0 + ",a03a9caa-0",
            E: common_vendor.p({
              ["label-position"]: "top",
              label: ["questionInfo", "questionParagraph", "questionTitle"].includes(item.type) ? "" : item.title
            })
          });
        }),
        b: common_vendor.o(commit),
        c: common_vendor.p({
          block: true,
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/src/pages/question/index.vue"]]);
wx.createPage(MiniProgramPage);
