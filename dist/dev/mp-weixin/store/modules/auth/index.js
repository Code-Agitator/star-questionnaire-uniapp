"use strict";
const common_vendor = require("../../../common/vendor.js");
const composables_useToken = require("../../../composables/useToken.js");
const constants_index = require("../../../constants/index.js");
const useAuthStore = common_vendor.defineStore("auth", () => {
  const token = composables_useToken.useToken();
  const setToken = (newToken = constants_index.DefaultToken) => {
    token.value = newToken;
  };
  const isExist = () => {
    return token.value !== "";
  };
  const getToken = () => {
    return token.value;
  };
  return {
    token,
    setToken,
    isExist,
    getToken
  };
});
exports.useAuthStore = useAuthStore;
