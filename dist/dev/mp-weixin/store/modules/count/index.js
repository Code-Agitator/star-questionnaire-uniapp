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
const common_vendor = require("../../../common/vendor.js");
const useCounterStore = common_vendor.defineStore("counter", () => {
  const count = common_vendor.ref(0);
  function inc() {
    count.value += 1;
  }
  function dec() {
    count.value -= 1;
  }
  function asyncInc() {
    return __async(this, null, function* () {
      setTimeout(() => {
        inc();
      }, 300);
    });
  }
  return {
    count,
    inc,
    dec,
    asyncInc
  };
});
exports.useCounterStore = useCounterStore;
