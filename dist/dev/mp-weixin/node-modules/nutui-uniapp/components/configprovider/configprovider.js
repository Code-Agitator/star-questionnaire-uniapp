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
const componentName = `${common_vendor.PREFIX}-config-provider`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.configProviderProps,
  setup(__props) {
    const props = __props;
    function kebabCase(str) {
      str = str.replace(str.charAt(0), str.charAt(0).toLocaleLowerCase());
      return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}-${p2.toLowerCase()}`);
    }
    function colorRgb(str) {
      if (!str)
        return;
      let sColor = str.toLowerCase();
      const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          let sColorNew = "#";
          for (let i = 1; i < 4; i += 1)
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          sColor = sColorNew;
        }
        const sColorChange = [];
        for (let i = 1; i < 7; i += 2)
          sColorChange.push(Number.parseInt(`0x${sColor.slice(i, i + 2)}`));
        return sColorChange.join(",");
      }
      return null;
    }
    function mapThemeVarsToCSSVars(themeVars) {
      var _a;
      if (!themeVars)
        return;
      const cssVars = {};
      const primaryColor = (_a = props == null ? void 0 : props.themeVars) == null ? void 0 : _a.primaryColor;
      if (primaryColor) {
        cssVars["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15) 100%) `;
        cssVars["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15)100%)`;
        cssVars["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${primaryColor} 0%, rgba(${colorRgb(
          primaryColor
        )},0.15) 100%) `;
      }
      Object.keys(themeVars).forEach((key) => {
        cssVars[`--nut-${kebabCase(key)}`] = themeVars[key];
      });
      return cssVars;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(`nut-theme-${props.theme}`),
        b: common_vendor.s(mapThemeVarsToCSSVars(_ctx.themeVars))
      };
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/configprovider/configprovider.vue"]]);
wx.createComponent(Component);
