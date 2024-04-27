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
const componentName = `${common_vendor.PREFIX}-button`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.buttonProps,
  emits: common_vendor.buttonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName, {
        [`${componentName}--${props.type}`]: !!props.type,
        [`${componentName}--${props.size}`]: !!props.size,
        [`${componentName}--${props.shape}`]: !!props.shape,
        [`${componentName}--plain`]: props.plain,
        [`${componentName}--block`]: props.block,
        [`${componentName}--disabled`]: props.disabled,
        [`${componentName}--loading`]: props.loading,
        [`${componentName}--hovercls`]: props.hoverClass !== "button-hover"
      });
    });
    const styles = common_vendor.computed(() => {
      const value = {};
      if (props.customColor) {
        if (props.plain) {
          value.color = props.customColor;
          value.background = "#fff";
          if (!props.customColor.includes("gradient"))
            value.borderColor = props.customColor;
        } else {
          value.color = "#fff";
          value.background = props.customColor;
        }
      }
      return common_vendor.getMainStyle(props, value);
    });
    function handleClick(event) {
      if (props.disabled || props.loading)
        return;
      emit(common_vendor.CLICK_EVENT, event);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.loading
      }, _ctx.loading ? {
        b: common_vendor.p({
          name: "loading"
        })
      } : {}, {
        c: _ctx.$slots.icon && !_ctx.loading
      }, _ctx.$slots.icon && !_ctx.loading ? {} : {}, {
        d: _ctx.$slots.default
      }, _ctx.$slots.default ? {
        e: _ctx.$slots.icon || _ctx.loading ? 1 : ""
      } : {}, {
        f: common_vendor.n(classes.value),
        g: common_vendor.s(styles.value),
        h: props.formType === "button" ? void 0 : props.formType,
        i: props.disabled || props.loading ? void 0 : props.openType,
        j: props.hoverClass,
        k: props.hoverStartTime,
        l: props.hoverStayTime,
        m: props.lang,
        n: props.sessionFrom,
        o: props.sendMessageTitle,
        p: props.sendMessagePath,
        q: props.sendMessageImg,
        r: props.showMessageCard,
        s: props.groupId,
        t: props.guildId,
        v: props.publicId,
        w: props.dataImId,
        x: props.dataImType,
        y: props.dataGoodsId,
        z: props.dataOrderId,
        A: props.dataBizLine,
        B: common_vendor.o(handleClick),
        C: common_vendor.o(($event) => emit("getphonenumber", $event)),
        D: common_vendor.o(($event) => emit("getuserinfo", $event)),
        E: common_vendor.o(($event) => emit("error", $event)),
        F: common_vendor.o(($event) => emit("opensetting", $event)),
        G: common_vendor.o(($event) => emit("addgroupapp", $event)),
        H: common_vendor.o(($event) => emit("chooseaddress", $event)),
        I: common_vendor.o(($event) => emit("chooseavatar", $event)),
        J: common_vendor.o(($event) => emit("chooseinvoicetitle", $event)),
        K: common_vendor.o(($event) => emit("launchapp", $event)),
        L: common_vendor.o(($event) => emit("login", $event)),
        M: common_vendor.o(($event) => emit("subscribe", $event)),
        N: common_vendor.o(($event) => emit("contact", $event)),
        O: common_vendor.o(($event) => emit("agreeprivacyauthorization", $event)),
        P: common_vendor.o(($event) => emit("im", $event))
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/button/button.vue"]]);
wx.createComponent(Component);
