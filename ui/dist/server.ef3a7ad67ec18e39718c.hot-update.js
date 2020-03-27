exports.id = "server";
exports.modules = {

/***/ "./server/uiserver.js":
/*!****************************!*\
  !*** ./server/uiserver.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source-map-support */ "source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");






const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
source_map_support__WEBPACK_IMPORTED_MODULE_4___default.a.install();
dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();
const port = process.env.UI_SERVER_PORT;

const config = __webpack_require__(/*! ../webpack.config.js */ "./webpack.config.js")[0];

const apiProxyTarget = process.env.API_PROXY_TARGET;
const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || "/graphql";
const env = {
  UI_API_ENDPOINT
};
const enableHMR = (process.env.ENABLE_HMR || "true") === "true";

if (enableHMR && "development" !== "production") {
  console.log("Adding dev middleware, enabling HMR");

  const webpack = __webpack_require__(/*! webpack */ "webpack");

  const devMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

  const hotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");

  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

if (apiProxyTarget) {
  app.use("/graphql", http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3___default()({
    target: apiProxyTarget,
    changeOrigin: true
  }));
}

if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = "http://localhost:2000/graphql";
}

app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static("public"), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", env); // update to match the domain you will make the request from

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/env.js", (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
  console.log(res.headersSent);
});
app.get("/about", (req, res, next) => {
  Object(_render_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(req, res, next);
});
app.get("*", (req, res) => {
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve("public/index.html"));
});
app.listen(port, function () {
  console.log(`ui server started on port ${port}`);
});

if (true) {
  module.hot.accept(/*! ./render.jsx */ "./server/render.jsx", function() { /* harmony import */ _render_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
 });
}

/***/ })

};
//# sourceMappingURL=server.ef3a7ad67ec18e39718c.hot-update.js.map