"use strict";const e=require("../common/vendor.js"),n=require("../constants/index.js");exports.useToken=function(o=n.DefaultToken){return e.useStorageSync(n.TokenKey,o)};
