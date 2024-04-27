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
const componentName = `${common_vendor.PREFIX}-input`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.inputProps,
  emits: common_vendor.inputEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formDisabled = common_vendor.useFormDisabled(common_vendor.toRef(props, "disabled"));
    function stringModelValue() {
      if (props.modelValue == null)
        return "";
      return String(props.modelValue);
    }
    const innerValue = common_vendor.computed(() => {
      return stringModelValue();
    });
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName, {
        [`${componentName}--disabled`]: formDisabled.value,
        [`${componentName}--required`]: props.required,
        [`${componentName}--error`]: props.error,
        [`${componentName}--border`]: props.border,
        [`${componentName}-text`]: true
      });
    });
    const inputStyles = common_vendor.computed(() => {
      return [props.inputStyle, {
        textAlign: props.inputAlign
      }];
    });
    const innerMaxLength = common_vendor.computed(() => {
      if (props.maxLength == null)
        return -1;
      return Number(props.maxLength);
    });
    function updateValue(value, trigger = "onChange") {
      if (innerMaxLength.value > 0 && value.length > innerMaxLength.value)
        value = value.slice(0, innerMaxLength.value);
      if (props.type === "number")
        value = common_vendor.formatNumber(value, false, false);
      if (props.type === "digit")
        value = common_vendor.formatNumber(value, true, true);
      if (props.formatter && trigger === props.formatTrigger)
        value = props.formatter(value);
      emit(common_vendor.UPDATE_MODEL_EVENT, value);
    }
    function _onInput(evt) {
      updateValue(evt.detail.value);
      common_vendor.nextTick$1(() => {
        emit(common_vendor.INPUT_EVENT, innerValue.value, evt);
      });
    }
    function handleInput(evt) {
      if (common_vendor.isH5) {
        const target = evt.target;
        if (!target.composing)
          _onInput(evt);
      } else {
        _onInput(evt);
      }
    }
    function handleClick(evt) {
      emit(common_vendor.CLICK_EVENT, evt);
    }
    function handleClickInput(evt) {
      if (formDisabled.value)
        return;
      emit("clickInput", evt);
    }
    const active = common_vendor.ref(false);
    function handleFocus(evt) {
      if (formDisabled.value || props.readonly)
        return;
      active.value = true;
      emit(common_vendor.FOCUS_EVENT, evt);
    }
    function handleBlur(evt) {
      if (formDisabled.value || props.readonly)
        return;
      setTimeout(() => {
        active.value = false;
      }, 200);
      updateValue(evt.detail.value, "onBlur");
      emit(common_vendor.BLUR_EVENT, evt);
    }
    function handleConfirm(evt) {
      emit(common_vendor.CONFIRM_EVENT, evt);
    }
    function handleClear(evt) {
      if (formDisabled.value)
        return;
      emit(common_vendor.UPDATE_MODEL_EVENT, "", evt);
      emit(common_vendor.CLEAR_EVENT);
    }
    function startComposing(evt) {
      if (common_vendor.isH5) {
        const target = evt.target;
        target.composing = true;
      }
    }
    function endComposing(evt) {
      if (common_vendor.isH5) {
        const target = evt.target;
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
    }
    common_vendor.watch(
      () => props.modelValue,
      (value) => {
        if (value === innerValue.value)
          return;
        updateValue(stringModelValue());
      }
    );
    common_vendor.onMounted(() => {
      updateValue(stringModelValue(), props.formatTrigger);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.$slots.left
      }, _ctx.$slots.left ? {} : {}, {
        b: common_vendor.n(props.inputClass),
        c: common_vendor.s(inputStyles.value),
        d: innerValue.value,
        e: props.type,
        f: props.placeholder,
        g: props.placeholderStyle,
        h: props.placeholderClass,
        i: common_vendor.unref(formDisabled),
        j: props.readonly,
        k: props.autofocus,
        l: innerMaxLength.value,
        m: props.formatTrigger,
        n: props.autofocus ? true : void 0,
        o: props.confirmType,
        p: props.adjustPosition,
        q: props.alwaysSystem,
        r: props.inputMode,
        s: props.cursorSpacing,
        t: props.alwaysEmbed,
        v: props.confirmHold,
        w: props.cursor,
        x: props.selectionStart,
        y: props.selectionEnd,
        z: props.holdKeyboard,
        A: common_vendor.o(handleInput),
        B: common_vendor.o(handleFocus),
        C: common_vendor.o(handleBlur),
        D: common_vendor.o(handleClickInput),
        E: common_vendor.o(endComposing),
        F: common_vendor.o(startComposing),
        G: common_vendor.o(endComposing),
        H: common_vendor.o(handleConfirm),
        I: props.readonly
      }, props.readonly ? {
        J: common_vendor.o(handleClickInput)
      } : {}, {
        K: props.showWordLimit && innerMaxLength.value > 0
      }, props.showWordLimit && innerMaxLength.value > 0 ? {
        L: common_vendor.t(innerValue.value.length),
        M: common_vendor.t(innerMaxLength.value)
      } : {}, {
        N: props.clearable && !props.readonly
      }, props.clearable && !props.readonly ? {
        O: common_vendor.p({
          name: "mask-close",
          ["custom-class"]: "nut-input-clear",
          size: props.clearSize,
          width: props.clearSize,
          height: props.clearSize
        }),
        P: !((active.value || props.showClearIcon) && innerValue.value.length > 0) ? 1 : "",
        Q: common_vendor.o(handleClear)
      } : {}, {
        R: common_vendor.n(classes.value),
        S: common_vendor.s(props.customStyle),
        T: common_vendor.o(handleClick)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/input/input.vue"]]);
wx.createComponent(Component);
