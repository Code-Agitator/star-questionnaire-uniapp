"use strict";
const service_index = require("../service/index.js");
const common_vendor = require("../common/vendor.js");
const vueQueryPlugin = {
  install: (app) => {
    app.use(common_vendor.VueQueryPlugin, service_index.vueQueryPluginOptions);
  }
};
exports.vueQueryPlugin = vueQueryPlugin;
