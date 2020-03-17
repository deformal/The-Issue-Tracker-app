import React from "react";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import IssueReport from "./IssueReport.jsx";
import graphQLFetch from "./graphQLFetch.js";
import IssueDetail from "./IssueDetail.jsx";
import URLSearchParams from "url-search-params"; //the url search parameter are installed in here and are passed to other components
import { Route, BrowserRouter } from "react-router-dom";
import { Panel } from "react-bootstrap";
export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
    console.log("the componenet is loaded");
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch }
    } = prevProps;
    const {
      location: { search }
    } = this.props;
    if (prevSearch !== search) {
      this.loadData();
      console.log(`component did update is working fine `);
    } else console.log("Component not updated");
  }

  async loadData() {
    try {
      const {
        location: { search }
      } = this.props;
      const params = new URLSearchParams(search);
      const vars = {};
      if (params.get("status")) vars.status = params.get("status");
      const effortMin = parseInt(params.get("effortMin", 10));
      if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
      const effortMax = parseInt(params.get("effortMax"), 10);
      if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
      const query = `query List(
        $status:StatusType
        $effortMin:Int
        $effortMax:Int
        ){
      List(
        status:$status
        effortMin:$effortMin
        effortMax:$effortMax
        ){
        id title status owner created effort due
      }
    }`;
      const data = await graphQLFetch(query, vars);
      if (data) {
        this.setState({ issues: data.List });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async createIssue(issue) {
    try {
      const query = `mutation issueAdd($issue: IssueInputs!){
        issueAdd(issue:$issue){
          id
        }
      }`;

      const data = await graphQLFetch(query, { issue });
      if (data) {
        this.loadData();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async closeIssue(index) {
    const query = `mutation issueClose($id:Int!){
    issueUpdate(id:$id,changes:{status:Closed}){
      id title status owner effort created due description
    }
  }`;
    const { issues } = this.state;
    const data = await graphQLFetch(query, { id: issues[index].id });
    if (data) {
      this.setState(prevState => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return { issues: newList };
      });
    } else {
      this.loadData();
    }
  }

  async deleteIssue(index) {
    const query = `mutation issueDelete($id:Int!){
    issueDelete(id:$id)
  }`;
    const { issues } = this.state;
    const {
      location: { pathname, search },
      history
    } = this.props;
    const { id } = issues[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.issueDelete) {
      this.setState(prevState => {
        const newList = [...prevState.issues];
        if (pathname === `/issues/${id}`) {
          history.push({ pathname: "/issues", search });
        }
        newList.splice(index, 1);
        return { issues: newList };
      });
    } else {
      this.loadData();
    }
  }

  render() {
    const { match } = this.props;
    const style = {
      margin: 30
    };
    return (
      <div id="all">
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter />
          </Panel.Body>
        </Panel>

        <hr />
        <IssueTable
          issues={this.state.issues}
          closeIssue={this.closeIssue}
          stat={this.state.Status}
          deleteIssue={this.deleteIssue}
        />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <hr />
        <Route path={`${match.path}/:id`} component={IssueDetail} />
        <IssueReport />
      </div>
    );
  }
}
