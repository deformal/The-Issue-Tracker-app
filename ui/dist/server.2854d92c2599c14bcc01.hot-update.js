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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! source-map-support */ "source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");





const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
source_map_support__WEBPACK_IMPORTED_MODULE_3___default.a.install();
dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();
const port = process.env.UI_SERVER_PORT;

const config = __webpack_require__(/*! ../webpack.config.js */ "./webpack.config.js")[0];

const apiProxyTarget = process.env.API_PROXY_TARGET;
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
  app.use("/graphql", http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default()({
    target: apiProxyTarget,
    changeOrigin: true
  }));
  app.use("/auth", http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default()({
    target: apiProxyTarget
  }));
}

if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = "/graphql";
}

if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}

if (!process.env.UI_AUTH_ENDPOINT) {
  process.env.UI_AUTH_ENDPOINT = "http://localhost:2000/auth";
}

app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static("public"), function (req, res, next) {
  const env = {
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT
  };
  res.header("Access-Control-Allow-Origin", env); // update to match the domain you will make the request from

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/env.js", (req, res) => {
  const env = {
    UI_API_ENDPOINT: process.env.UI_API_ENDPOINT,
    UI_AUTH_ENDPOINT: process.env.UI_AUTH_ENDPOINT,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
  };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
  console.log(res.headersSent);
});
app.get("*", (req, res, next) => {
  Object(_render_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(req, res, next);
});
app.listen(port, function () {
  console.log(`ui server started on port ${port}`);
});

if (true) {
  module.hot.accept(/*! ./render.jsx */ "./server/render.jsx", function() { /* harmony import */ _render_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.jsx */ "./server/render.jsx");
 });
}

/***/ })

};
//# sourceMappingURL=server.2854d92c2599c14bcc01.hot-update.js.map