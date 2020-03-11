import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import URLSearchParams from 'url-search-params'

class IssueFilter extends React.Component {
  constructor() {
    super();
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }
  onChangeStatus(e) {
    const status = e.target.value;
    const { history } = this.props;
    history.push({
      pathname: "/issues",
      search: status ? `?status=${status}` : ""//conditional operator is used here
    });
  }
  render() {
    const { location: { search } } = this.props;//the value of the location parameter i.e search will be accessed here in search.
    const params = new URLSearchParams(search);//now search is passed here.
    return (
      <div className="selection">
        Status:{" "}
        <select onChange={this.onChangeStatus} value={params.get('status') || ''} >
          <option value="">(All)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    );
  }
}
export default withRouter(IssueFilter);
