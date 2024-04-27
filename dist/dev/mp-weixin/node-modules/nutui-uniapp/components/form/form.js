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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  NutCellGroup();
}
const NutCellGroup = () => "../cellgroup/cellgroup.js";
const componentName = `${common_vendor.PREFIX}-form`;
const __default__ = common_vendor.defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: "shared"
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: common_vendor.formProps,
  emits: common_vendor.formEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    __expose({ reset, submit, validate });
    const formErrorTip = common_vendor.computed(() => common_vendor.reactive({}));
    const { internalChildren } = common_vendor.useProvide(
      common_vendor.FORM_KEY,
      "nut-form-item"
    )({ props, formErrorTip });
    const classes = common_vendor.computed(() => {
      return common_vendor.getMainClass(props, componentName);
    });
    function clearErrorTips() {
      Object.keys(formErrorTip.value).forEach((item) => {
        formErrorTip.value[item] = "";
      });
    }
    function reset() {
      clearErrorTips();
    }
    common_vendor.watch(
      () => props.modelValue,
      () => {
        clearErrorTips();
      },
      { immediate: true }
    );
    function findFormItem(vnodes) {
      let task = [];
      vnodes.forEach((vnode) => {
        var _a, _b, _c, _d;
        let type = vnode.type;
        type = type.name || type;
        if (type === "nut-form-item" || (type == null ? void 0 : type.toString().endsWith("form-item"))) {
          task.push({
            prop: (_a = vnode.props) == null ? void 0 : _a.prop,
            rules: ((_b = vnode.props) == null ? void 0 : _b.rules) || []
          });
        } else if (Array.isArray(vnode.children) && ((_c = vnode.children) == null ? void 0 : _c.length)) {
          task = task.concat(findFormItem(vnode.children));
        } else if (common_vendor.isObject(vnode.children) && Object.keys(vnode.children)) {
          if ((_d = vnode.children) == null ? void 0 : _d.default) {
            vnode.children = vnode.children.default();
            task = task.concat(findFormItem(vnode.children));
          }
        } else if (Array.isArray(vnode)) {
          task = task.concat(findFormItem(vnode));
        }
      });
      return task;
    }
    function tipMessage(errorMsg) {
      if (errorMsg.message)
        emit("validate", errorMsg);
      formErrorTip.value[errorMsg.prop] = errorMsg.message;
    }
    function checkRule(item) {
      return __async(this, null, function* () {
        const { rules, prop } = item;
        const _Promise = (errorMsg) => {
          return new Promise((resolve, reject) => {
            try {
              tipMessage(errorMsg);
              resolve(errorMsg);
            } catch (error) {
              reject(error);
            }
          });
        };
        if (!prop)
          console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
        const value = common_vendor.getPropByPath(props.modelValue, prop || "");
        tipMessage({ prop, message: "" });
        const formRules = props.rules || {};
        const _rules = [...(formRules == null ? void 0 : formRules[prop]) || [], ...rules];
        while (_rules.length) {
          const rule = _rules.shift();
          const _a = rule, { validator } = _a, ruleWithoutValidator = __objRest(_a, ["validator"]);
          const { required, regex, message } = ruleWithoutValidator;
          const errorMsg = { prop, message };
          if (required) {
            if (Array.isArray(value)) {
              if (!value.length)
                return _Promise(errorMsg);
            } else if (!value && value !== 0) {
              return _Promise(errorMsg);
            }
          }
          if (regex && !regex.test(String(value)))
            return _Promise(errorMsg);
          if (validator) {
            const result = validator(value, ruleWithoutValidator);
            if (common_vendor.isPromise(result)) {
              try {
                const value2 = yield result;
                if (value2 === false)
                  return _Promise(errorMsg);
              } catch (error) {
                const validateErrorMsg = { prop, message: error };
                return _Promise(validateErrorMsg);
              }
            } else {
              if (!result)
                return _Promise(errorMsg);
            }
          }
        }
        return Promise.resolve(true);
      });
    }
    function validate(customProp = "") {
      return new Promise((resolve, reject) => {
        try {
          const task = findFormItem(internalChildren == null ? void 0 : internalChildren.map((child) => child.vnode));
          const errors = task.map((item) => {
            if (customProp && customProp !== item.prop)
              return Promise.resolve(true);
            return checkRule(item);
          });
          Promise.all(errors).then((errorRes) => {
            errorRes = errorRes.filter((item) => item !== true);
            const res = { valid: true, errors: [] };
            if (errorRes.length) {
              res.valid = false;
              res.errors = errorRes;
            }
            resolve(res);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
    function submit() {
      validate();
      return false;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(classes.value),
        b: common_vendor.s(_ctx.customStyle),
        c: common_vendor.o(() => false)
      };
    };
  }
}));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/star-questionnaire-uniapp/node_modules/nutui-uniapp/components/form/form.vue"]]);
wx.createComponent(Component);
