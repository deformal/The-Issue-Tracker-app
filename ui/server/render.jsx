import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import Page from "../src/Page.jsx";
import template from "./template.js";
import routes from "../src/routes.js";
import Store from "../src/Store.js";
async function render(req, res) {
  const activeRoute = routes.find(route => matchPath(req.path, route));
  let initialData;
  if (activeRoute && activeRoute.component.fetchData) {
    const match = matchPath(req.path, activeRoute);
    initialData = await activeRoute.component.fetchData(match);
  }
  const element = (
    <StaticRouter>
      <Page />
    </StaticRouter>
  );
  const body = ReactDOMServer.renderToString(element);
  res.send(template(body, initialData));
}
export default render;
