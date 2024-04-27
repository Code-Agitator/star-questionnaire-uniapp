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
  NutIcon();
}
const NutIcon = () => "../icon/icon.js";
const componentName = `${common_vendor.PREFIX}-checkbox`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.checkboxProps,
  emits: common_vendor.checkboxEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    common_vendor.useSlots();
    const disabled = common_vendor.useFormDisabled(common_vendor.toRef(props, "disabled"));
    const { parent } = common_vendor.useInject(common_vendor.CHECKBOX_KEY);
    const state = common_vendor.reactive({
      partialSelect: props.indeterminate
    });
    const hasParent = common_vendor.computed(() => !!parent);
    const pValue = common_vendor.computed(() => {
      if (hasParent.value)
        return parent == null ? void 0 : parent.value.value.includes(props.label);
      else
        return props.modelValue;
    });
    const pDisabled = common_vendor.computed(() => {
      return hasParent.value ? (parent == null ? void 0 : parent.disabled.value) ? parent.disabled.value : disabled.value : disabled.value;
    });
    const checked = common_vendor.computed(() => !!props.modelValue);
    const color = common_vendor.computed(() => {
      return !pDisabled.value ? state.partialSelect ? "nut-checkbox__icon--indeterminate" : !pValue.value ? "nut-checkbox__icon--unchecked" : "nut-checkbox__icon" : "nut-checkbox__icon--disable";
    });
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName, {
        [`${componentName}--reverse`]: props.textPosition === "left"
      });
    });
    const getLabelClass = common_vendor.computed(() => {
      return `${componentName}__label ${pDisabled.value ? `${componentName}__label--disabled` : ""}`;
    });
    const getButtonClass = common_vendor.computed(() => {
      return `${componentName}__button ${pValue.value && `${componentName}__button--active`} ${pDisabled.value ? `${componentName}__button--disabled` : ""}`;
    });
    let updateType = "";
    function emitChange(value, label) {
      updateType = "click";
      emit(common_vendor.UPDATE_MODEL_EVENT, value);
      emit(common_vendor.CHANGE_EVENT, value, label);
    }
    common_vendor.watch(
      () => props.modelValue,
      (v) => {
        if (updateType === "click")
          updateType = "";
        else
          emit(common_vendor.CHANGE_EVENT, v);
      }
    );
    function handleClick() {
      if (pDisabled.value)
        return;
      if (checked.value && state.partialSelect) {
        state.partialSelect = false;
        emitChange(checked.value, props.label);
        return;
      }
      emitChange(!checked.value, props.label);
      if (hasParent.value) {
        const value = parent == null ? void 0 : parent.value.value;
        const max = parent == null ? void 0 : parent.max.value;
        const { label } = props;
        const index = value.indexOf(label);
        if (index > -1)
          value == null ? void 0 : value.splice(index, 1);
        else if (index <= -1 && (value.length < max || !max))
          value == null ? void 0 : value.push(label);
        parent == null ? void 0 : parent.updateValue(value);
      }
    }
    common_vendor.watch(
      () => props.indeterminate,
      (newVal) => {
        state.partialSelect = newVal;
      }
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.shape === "button"
      }, _ctx.shape === "button" ? {
        b: common_vendor.n(getButtonClass.value)
      } : common_vendor.e({
        c: state.partialSelect
      }, state.partialSelect ? {
        d: common_vendor.p({
          name: "check-disabled",
          size: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          width: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          height: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          ["pop-class"]: color.value
        })
      } : !pValue.value ? {
        f: common_vendor.p({
          name: "check-normal",
          size: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          width: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          height: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          ["pop-class"]: color.value
        })
      } : {
        g: common_vendor.p({
          name: "checked",
          size: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          width: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          height: common_vendor.unref(common_vendor.pxCheck)(_ctx.iconSize),
          ["pop-class"]: color.value
        })
      }, {
        e: !pValue.value,
        h: common_vendor.n(getLabelClass.value)
      }), {
        i: common_vendor.n(classes.value),
        j: common_vendor.s(_ctx.customStyle),
        k: common_vendor.o(handleClick)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/checkbox/checkbox.vue"]]);
wx.createComponent(Component);
