import React from "react";
import IssueEdit from "./IssueEdit.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About.jsx";
import IssueList from "./IssueList.jsx";
import IssueReport from "./IssueReport.jsx";

const notFound = () => {
  return <h1>Page not found</h1>;
};

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      <Route path="/issues" component={IssueList} />
      <Route path="/report" component={IssueReport} />
      <Route path="/about" component={About} />
      <Route path="/edit/:id" component={IssueEdit} />
      <Route component={notFound} />
    </Switch>
  );
}
