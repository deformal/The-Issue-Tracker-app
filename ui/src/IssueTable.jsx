import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
function IssueTable(props) {
  //local variables
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} ix={issue} />
  ));

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Status</th>
            <th> Owner</th>
            <th>Created</th>
            <th> Effort</th>
            <th>Due Date</th>
            <th> Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    </React.Fragment>
  );
}

const IssueRow = withRouter(({ ix, location: { search } }) => {
  const selectLocation = { pathname: `/issues/${ix.id}`, search };
  return (
    <tr>
      <td>{ix.id}</td>
      <td>{ix.status}</td>
      <td>{ix.owner}</td>
      <td>{ix.created.toDateString()}</td>
      <td>{ix.effort}</td>
      <td>{ix.due ? ix.due.toDateString() : ""}</td>
      <td>{ix.title}</td>
      <td>
        <Link to={`/edit/${ix.id}`}>Edit</Link>
        {"|"}
        <NavLink to={selectLocation}>Select</NavLink>
      </td>
    </tr>
  );
});
export default IssueTable;
