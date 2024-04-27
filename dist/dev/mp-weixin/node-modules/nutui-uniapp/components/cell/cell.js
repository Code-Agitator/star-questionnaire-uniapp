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
if (!Math) {
  Icon();
}
const Icon = () => "../icon/icon.js";
const componentName = `${common_vendor.PREFIX}-cell`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.cellProps,
  emits: common_vendor.cellEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName, {
        [`${componentName}--clickable`]: props.isLink || props.to,
        [`${componentName}--center`]: props.center,
        [`${componentName}--large`]: props.size === "large"
      });
    });
    const getStyle = common_vendor.computed(() => {
      return common_vendor.getMainStyle(props, {
        borderRadius: common_vendor.pxCheck(props.roundRadius)
      });
    });
    function handleClick(event) {
      emits(common_vendor.CLICK_EVENT, event);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.icon
      }, _ctx.$slots.icon ? {} : {}, {
        b: _ctx.title || _ctx.subTitle || _ctx.$slots.title
      }, _ctx.title || _ctx.subTitle || _ctx.$slots.title ? common_vendor.e({
        c: _ctx.subTitle
      }, _ctx.subTitle ? {
        d: common_vendor.t(_ctx.title),
        e: common_vendor.t(_ctx.subTitle)
      } : {
        f: common_vendor.t(_ctx.title)
      }) : {}, {
        g: _ctx.desc || _ctx.$slots.desc
      }, _ctx.desc || _ctx.$slots.desc ? {
        h: common_vendor.t(_ctx.desc),
        i: !_ctx.title && !_ctx.subTitle && !_ctx.$slots.title ? 1 : "",
        j: _ctx.descTextAlign
      } : {}, {
        k: _ctx.isLink || _ctx.to
      }, _ctx.isLink || _ctx.to ? {
        l: common_vendor.p({
          name: "right"
        })
      } : {}, {
        m: common_vendor.n(classes.value),
        n: common_vendor.s(getStyle.value),
        o: common_vendor.o(
          //@ts-ignore
          (...args) => handleClick && handleClick(...args)
        )
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/cell/cell.vue"]]);
wx.createComponent(Component);
