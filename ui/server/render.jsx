import React from "react";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import Page from "../src/Page.jsx";
import template from "./template.js";
import About from "../src/About.jsx";
import Store from "../src/Store.js";
async function render(req, res) {
  const initialData = About.fetchData();
  Store.initialData = initialData;
  const element = (
    <StaticRouter>
      <Page />
    </StaticRouter>
  );
  const body = ReactDOMServer.renderToString(element);
  res.send(template(body, initialData));
}
export default render;
