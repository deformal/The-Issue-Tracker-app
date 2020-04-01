import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes.js";

const notFound = () => {
  return <h1>Page not found</h1>;
};

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      {routes.map(attrs => (
        <Route {...attrs} key={attrs.path} />
      ))}
    </Switch>
  );
}
