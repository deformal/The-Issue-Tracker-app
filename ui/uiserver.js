require("dotenv").config();
const express = require("express");
const app = express();
const proxy = require("http-proxy-middleware");
const port = process.env.UI_SERVER_PORT;

const apiProxyTarget = process.env.API_PROXY_TARGET;
const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT;
const env = { UI_API_ENDPOINT };
const enableHMR = process.env.ENABLE_HMR;

if (apiProxyTarget) {
  app.use(
    "/graphql",
    proxy({
      target: apiProxyTarget,
      changeOrigin: true
    })
  );
}

if (enableHMR && process.env.NODE_ENV !== "production") {
  console.log("Adding dev middleware, enabling HMR");
  const webpack = require("webpack");
  const devMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");
  const config = require("./webpack.config.js");
  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static("public"), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", env); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/env.js", (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
  console.log(res.headersSent);
});
app.listen(port, function() {
  console.log(`ui server started on port ${port}`);
});
