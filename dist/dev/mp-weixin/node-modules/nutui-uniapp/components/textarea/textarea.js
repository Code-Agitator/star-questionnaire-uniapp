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
const componentName = `${common_vendor.PREFIX}-textarea`;
const { translate } = common_vendor.useTranslate(componentName);
const __default__ = common_vendor.defineComponent({
  name: componentName,
  inheritAttrs: false,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.textareaProps,
  emits: common_vendor.textareaEmits,
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
        [`${componentName}--disabled`]: formDisabled.value
      });
    });
    const textareaClasses = common_vendor.computed(() => {
      return [props.textareaClass, {
        "nut-textarea__ali": common_vendor.isMpAlipay
      }];
    });
    const textareaStyles = common_vendor.computed(() => {
      const style = {
        textAlign: props.textAlign
      };
      if (typeof props.autosize === "object") {
        const { minHeight, maxHeight } = props.autosize;
        if (minHeight != null)
          style.minHeight = common_vendor.pxCheck(minHeight);
        if (maxHeight != null)
          style.maxHeight = common_vendor.pxCheck(maxHeight);
      }
      return [props.textareaStyle, style];
    });
    const innerMaxLength = common_vendor.computed(() => {
      if (props.maxLength == null)
        return -1;
      return Number(props.maxLength);
    });
    function updateValue(value, evt) {
      if (innerMaxLength.value > 0 && value.length > innerMaxLength.value)
        value = value.slice(0, innerMaxLength.value);
      emit(common_vendor.UPDATE_MODEL_EVENT, value, evt);
      emit(common_vendor.CHANGE_EVENT, value, evt);
    }
    function _onInput(evt) {
      updateValue(evt.detail.value, evt);
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
    function handleFocus(evt) {
      if (formDisabled.value || props.readonly)
        return;
      emit(common_vendor.FOCUS_EVENT, evt);
    }
    function handleBlur(evt) {
      if (formDisabled.value || props.readonly)
        return;
      updateValue(evt.detail.value, evt);
      emit(common_vendor.BLUR_EVENT, evt);
    }
    function handleConfirm(evt) {
      emit(common_vendor.CONFIRM_EVENT, evt);
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
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.readonly
      }, props.readonly ? {
        b: common_vendor.n(textareaClasses.value),
        c: common_vendor.s(textareaStyles.value),
        d: innerValue.value,
        e: props.rows,
        f: props.placeholder || common_vendor.unref(translate)("placeholder"),
        g: props.placeholderStyle,
        h: props.placeholderClass,
        i: !!props.autosize,
        j: props.disableDefaultPadding
      } : {
        k: common_vendor.n(textareaClasses.value),
        l: common_vendor.s(textareaStyles.value),
        m: innerValue.value,
        n: props.rows,
        o: common_vendor.unref(formDisabled) || props.readonly,
        p: innerMaxLength.value,
        q: props.placeholder || common_vendor.unref(translate)("placeholder"),
        r: props.placeholderStyle,
        s: props.placeholderClass,
        t: props.autofocus,
        v: !!props.autosize,
        w: props.cursorSpacing,
        x: props.cursor,
        y: props.showConfirmBar,
        z: props.selectionStart,
        A: props.selectionEnd,
        B: props.adjustPosition,
        C: props.holdKeyboard,
        D: props.disableDefaultPadding,
        E: props.confirmType,
        F: props.confirmHold,
        G: props.adjustKeyboardTo,
        H: common_vendor.o(handleInput),
        I: common_vendor.o(handleFocus),
        J: common_vendor.o(handleBlur),
        K: common_vendor.o(endComposing),
        L: common_vendor.o(startComposing),
        M: common_vendor.o(endComposing),
        N: common_vendor.o(handleConfirm)
      }, {
        O: props.limitShow && innerMaxLength.value > 0
      }, props.limitShow && innerMaxLength.value > 0 ? {
        P: common_vendor.t(innerValue.value.length),
        Q: common_vendor.t(innerMaxLength.value)
      } : {}, {
        R: common_vendor.n(classes.value),
        S: common_vendor.s(props.customStyle)
      });
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/textarea/textarea.vue"]]);
wx.createComponent(Component);
