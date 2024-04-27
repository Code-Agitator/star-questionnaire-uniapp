"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../../../../common/vendor.js");
const componentName = `${common_vendor.PREFIX}-checkbox-group`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.checkboxgroupProps,
  emits: common_vendor.checkboxgroupEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    __expose({
      toggleAll,
      toggleReverse
    });
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName);
    });
    function updateValue(value) {
      emit(common_vendor.UPDATE_MODEL_EVENT, value);
      emit(common_vendor.CHANGE_EVENT, value);
    }
    function toggleAll(checked) {
      const values = [];
      if (checked) {
        children.forEach((item) => {
          if (!(item == null ? void 0 : item.disabled))
            values.push(item == null ? void 0 : item.label);
        });
      }
      emit(common_vendor.UPDATE_MODEL_EVENT, values);
    }
    function toggleReverse() {
      const value = children.filter((item) => {
        if (item == null ? void 0 : item.disabled)
          return false;
        else
          return !props.modelValue.includes(item.label);
      }).map((item) => item.label);
      emit(common_vendor.UPDATE_MODEL_EVENT, value);
    }
    const { children } = common_vendor.useProvide(common_vendor.CHECKBOX_KEY)({
      value: common_vendor.computed(() => props.modelValue),
      disabled: common_vendor.computed(() => props.disabled),
      max: common_vendor.computed(() => props.max),
      updateValue
    });
    common_vendor.watch(
      () => props.modelValue,
      (value) => {
        emit(common_vendor.CHANGE_EVENT, value);
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(classes.value),
        b: common_vendor.s(_ctx.customStyle)
      };
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/checkboxgroup/checkboxgroup.vue"]]);
wx.createComponent(Component);
