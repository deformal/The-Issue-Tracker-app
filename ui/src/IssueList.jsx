import React from "react";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import IssueReport from "./IssueReport.jsx";
import graphQLFetch from "./graphQLFetch.js";

export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    const query = `query{
        List{
          id 
          title 
          status 
          owner 
          created 
          effort 
          due
        }
      }`;
    const data = await graphQLFetch(query);
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
