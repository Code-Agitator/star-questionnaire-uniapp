"use strict";
const common_vendor = require("../common/vendor.js");
const dayjsPlugin = {
  install: () => {
    common_vendor.dayjs.extend(common_vendor.customParseFormat);
  }
};
exports.dayjsPlugin = dayjsPlugin;
