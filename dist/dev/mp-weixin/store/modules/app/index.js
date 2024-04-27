"use strict";
const common_vendor = require("../../../common/vendor.js");
const useAppStore = common_vendor.defineStore(
  "app",
  () => {
    const darkMode = common_vendor.ref(false);
    const statusBarHeight = common_vendor.ref(0);
    const menuButtonBounding = common_vendor.ref();
    const customBarHeight = common_vendor.computed(
      () => !menuButtonBounding.value ? 0 : menuButtonBounding.value.bottom + menuButtonBounding.value.top - statusBarHeight.value
    );
    return {
      darkMode,
      statusBarHeight,
      customBarHeight,
      menuButtonBounding
    };
  }
);
exports.useAppStore = useAppStore;
