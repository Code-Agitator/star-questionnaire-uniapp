"use strict";
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
const common_vendor = require("../common/vendor.js");
require("./modules/count/index.js");
require("./modules/app/index.js");
require("./modules/auth/index.js");
const pinia = common_vendor.createPinia();
function setupStore(app) {
  return __async(this, null, function* () {
    app.use(pinia);
  });
}
exports.setupStore = setupStore;
