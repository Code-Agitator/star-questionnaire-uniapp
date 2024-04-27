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
const componentName = `${common_vendor.PREFIX}-cell-group`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.cellgroupProps,
  setup(__props) {
    const props = __props;
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.title
      }, _ctx.$slots.title ? {} : _ctx.title ? {
        c: common_vendor.t(_ctx.title)
      } : {}, {
        b: _ctx.title,
        d: _ctx.$slots.desc
      }, _ctx.$slots.desc ? {} : _ctx.desc ? {
        f: common_vendor.t(_ctx.desc)
      } : {}, {
        e: _ctx.desc,
        g: common_vendor.n(classes.value),
        h: common_vendor.s(_ctx.customStyle)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/cellgroup/cellgroup.vue"]]);
wx.createComponent(Component);
