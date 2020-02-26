import React from "react";
import { Link } from "react-router-dom";
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

function IssueRow(props) {
  return (
    <tr>
      <td>{props.ix.id}</td>
      <td>{props.ix.status}</td>
      <td>{props.ix.owner}</td>
      <td>{props.ix.created.toDateString()}</td>
      <td>{props.ix.effort}</td>
      <td>{props.ix.due ? props.ix.due.toDateString() : ""}</td>
      <td>{props.ix.title}</td>
      <td>
        <Link to={`/edit/${props.ix.id}`}>Edit</Link>
      </td>
    </tr>
  );
}
export default IssueTable;
