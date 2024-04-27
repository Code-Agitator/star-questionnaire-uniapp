"use strict";
const common_vendor = require("../common/vendor.js");
let hasModal = false;
function showNetworkError({
  hasPrefix = true,
  message,
  response,
  error,
  type = "modal",
  success,
  fail,
  complete
} = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma;
  const method = (_j = (_i = (_h = (_f = (_d = (_c = (_a = error == null ? void 0 : error.config) == null ? void 0 : _a.method) != null ? _c : (_b = error == null ? void 0 : error.task) == null ? void 0 : _b.method) != null ? _d : error == null ? void 0 : error.method) != null ? _f : (_e = response == null ? void 0 : response.config) == null ? void 0 : _e.method) != null ? _h : (_g = response == null ? void 0 : response.task) == null ? void 0 : _g.method) != null ? _i : response == null ? void 0 : response.method) != null ? _j : "";
  const methodText = method ? `请求方法：${method}` : "";
  const url = (_t = (_s = (_r = (_p = (_n = (_m = (_k = error == null ? void 0 : error.config) == null ? void 0 : _k.url) != null ? _m : (_l = error == null ? void 0 : error.task) == null ? void 0 : _l.url) != null ? _n : error == null ? void 0 : error.url) != null ? _p : (_o = response == null ? void 0 : response.config) == null ? void 0 : _o.url) != null ? _r : (_q = response == null ? void 0 : response.task) == null ? void 0 : _q.url) != null ? _s : response == null ? void 0 : response.url) != null ? _t : "";
  const urlText = url ? `请求地址：${url}` : "";
  const statusCode = (_J = (_I = (_G = (_E = (_C = (_B = (_A = (_y = (_w = (_u = error == null ? void 0 : error.status) != null ? _u : error == null ? void 0 : error.statusCode) != null ? _w : (_v = error == null ? void 0 : error.data) == null ? void 0 : _v.status) != null ? _y : (_x = error == null ? void 0 : error.data) == null ? void 0 : _x.statusCode) != null ? _A : (_z = error == null ? void 0 : error.data) == null ? void 0 : _z.code) != null ? _B : response == null ? void 0 : response.status) != null ? _C : response == null ? void 0 : response.statusCode) != null ? _E : (_D = response == null ? void 0 : response.data) == null ? void 0 : _D.status) != null ? _G : (_F = response == null ? void 0 : response.data) == null ? void 0 : _F.code) != null ? _I : (_H = response == null ? void 0 : response.data) == null ? void 0 : _H.statusCode) != null ? _J : 0;
  const statusCodeText = statusCode ? `状态代码：${statusCode}` : "";
  const errorCode = (_V = (_U = (_S = (_Q = (_P = (_O = (_M = (_K = error == null ? void 0 : error.code) != null ? _K : error == null ? void 0 : error.errno) != null ? _M : (_L = error == null ? void 0 : error.data) == null ? void 0 : _L.code) != null ? _O : (_N = error == null ? void 0 : error.data) == null ? void 0 : _N.errno) != null ? _P : response == null ? void 0 : response.code) != null ? _Q : response == null ? void 0 : response.errno) != null ? _S : (_R = response == null ? void 0 : response.data) == null ? void 0 : _R.code) != null ? _U : (_T = response == null ? void 0 : response.data) == null ? void 0 : _T.errno) != null ? _V : "";
  const errorCodeText = errorCode ? `错误代码：${errorCode}` : "";
  const errorMessage = (_ma = (_la = (_ka = (_ja = (_ia = (_ha = (_fa = (_da = (_ba = (_aa = (_$ = (__ = (_Y = (_W = error == null ? void 0 : error.data) == null ? void 0 : _W.errMsg) != null ? _Y : (_X = error == null ? void 0 : error.data) == null ? void 0 : _X.message) != null ? __ : (_Z = error == null ? void 0 : error.data) == null ? void 0 : _Z.msg) != null ? _$ : error == null ? void 0 : error.errMsg) != null ? _aa : error == null ? void 0 : error.message) != null ? _ba : error == null ? void 0 : error.msg) != null ? _da : (_ca = response == null ? void 0 : response.data) == null ? void 0 : _ca.errMsg) != null ? _fa : (_ea = response == null ? void 0 : response.data) == null ? void 0 : _ea.message) != null ? _ha : (_ga = response == null ? void 0 : response.data) == null ? void 0 : _ga.msg) != null ? _ia : response == null ? void 0 : response.errMsg) != null ? _ja : response == null ? void 0 : response.message) != null ? _ka : response == null ? void 0 : response.msg) != null ? _la : message) != null ? _ma : "";
  const errorMessageText = errorMessage ? `错误信息：${errorMessage}` : "";
  const content = `${[
    hasPrefix ? "发生了错误。" : "",
    errorMessageText,
    errorCodeText,
    methodText,
    urlText,
    statusCodeText
  ].filter((item) => !!item).join("\r\n")}`;
  if (type === "toast") {
    common_vendor.index.showToast({
      title: content,
      success,
      fail,
      complete
    });
    return;
  }
  if (type === "modal" && !hasModal) {
    hasModal = true;
    common_vendor.index.showModal({
      title: "错误",
      content,
      success: (result) => {
        success == null ? void 0 : success(result);
        hasModal = false;
      },
      fail: (result) => {
        fail == null ? void 0 : fail(result);
        hasModal = false;
      },
      complete
    });
  }
}
exports.showNetworkError = showNetworkError;
