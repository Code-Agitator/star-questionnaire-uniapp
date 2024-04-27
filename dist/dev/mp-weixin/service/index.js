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
const common_vendor = require("../common/vendor.js");
const service_helper = require("./helper.js");
require("../store/index.js");
const constants_index = require("../constants/index.js");
const store_modules_auth_index = require("../store/modules/auth/index.js");
const instance = common_vendor.un.create({
  baseUrl: constants_index.DefaultBaseUrl,
  timeout: 3e4,
  paramsSerializer: (params) => {
    const query = common_vendor.qs.stringify(
      Object.fromEntries(
        Object.entries(params).filter(
          ([, v]) => {
            var _a;
            return !["undefined", "null", void 0, null].includes((_a = v == null ? void 0 : v.toString()) != null ? _a : v);
          }
        )
      )
    );
    return query;
  }
});
instance.interceptors.request.use((config) => {
  const authStore = store_modules_auth_index.useAuthStore();
  config.headers = __spreadValues(__spreadProps(__spreadValues({}, constants_index.DefaultHeaders), {
    "token": authStore.token,
    "X-Token": authStore.token,
    "X-Access-Token": authStore.token
  }), config.headers);
  return config;
});
instance.interceptors.response.use((response) => {
  const data = response;
  return data;
});
const vueQueryClient = new common_vendor.QueryClient({
  queryCache: new common_vendor.QueryCache({
    onError: (error) => {
      if (common_vendor.un.isCancel(error))
        return;
      service_helper.showNetworkError({ error });
    }
  }),
  mutationCache: new common_vendor.MutationCache({
    onError: (error) => {
      if (common_vendor.un.isCancel(error))
        return;
      service_helper.showNetworkError({ error });
    }
  })
});
const vueQueryPluginOptions = {
  queryClient: vueQueryClient
};
exports.instance = instance;
exports.vueQueryPluginOptions = vueQueryPluginOptions;
