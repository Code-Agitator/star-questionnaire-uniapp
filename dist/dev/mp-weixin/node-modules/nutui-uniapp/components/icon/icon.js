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
const componentName = `${common_vendor.PREFIX}-icon`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.iconProps,
  emits: common_vendor.iconEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    function handleClick(event) {
      emits(common_vendor.CLICK_EVENT, event);
    }
    const isImage = common_vendor.computed(() => {
      return props.name ? props.name.includes("/") : false;
    });
    const classes = common_vendor.computed(() => {
      const obj = {};
      if (isImage.value) {
        obj[`${componentName}__img`] = true;
      } else {
        obj[props.fontClassName] = true;
        obj[`${props.classPrefix}-${props.name}`] = true;
        obj[props.popClass] = true;
      }
      return common_vendor.getMainClass(props, componentName, obj);
    });
    const getStyle = common_vendor.computed(() => {
      const style = {
        color: props.customColor,
        fontSize: common_vendor.pxCheck(props.size),
        width: common_vendor.pxCheck(props.width),
        height: common_vendor.pxCheck(props.height)
      };
      return common_vendor.getMainStyle(props, style);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isImage.value
      }, isImage.value ? {
        b: common_vendor.n(classes.value),
        c: common_vendor.s(getStyle.value),
        d: _ctx.name,
        e: common_vendor.o(handleClick)
      } : {
        f: common_vendor.n(classes.value),
        g: common_vendor.s(getStyle.value),
        h: common_vendor.o(handleClick)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/icon/icon.vue"]]);
wx.createComponent(Component);
