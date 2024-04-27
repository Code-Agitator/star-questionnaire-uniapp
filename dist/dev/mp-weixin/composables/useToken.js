"use strict";
const common_vendor = require("../common/vendor.js");
const constants_index = require("../constants/index.js");
function useToken(initialToken = constants_index.DefaultToken) {
  return common_vendor.useStorageSync(constants_index.TokenKey, initialToken);
}
exports.useToken = useToken;
