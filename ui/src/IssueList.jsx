import React from "react";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import IssueReport from "./IssueReport.jsx";
import graphQLFetch from "./graphQLFetch.js";
import { BrowserRouterProps } from "react-router-dom";
//import URLSearchParams from "url-search-params";

export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch }
    } = prevProps;
    const {
      location: { search }
    } = this.props;
    if (prevSearch !== search) this.loadData();
  }

  async loadData() {
    const {
      location: { search }
    } = this.props;
    const params = new URLSearchParams(search);
    const vars = {};
    if (params.get("status")) vars.status = params.get("status");
    const query = `query List($status:StatusType){
      List(status:$status){
        id title status owner created effort due
      }
    }`;
    const data = await graphQLFetch(query, vars);
    if (data) {
      this.setState({ issues: data.List });
    }
  }

  async createIssue(issue) {
    const query = `mutation issueAdd($issue: IssueInputs!){
        issueAdd(issue:$issue){
          id
        }
      }`;

    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Issue Traker App</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} stat={this.state.Status} />
        {/*the whole state is passed here*/}
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <IssueReport />
      </React.Fragment>
    );
  }
}
