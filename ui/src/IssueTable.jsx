import React from "react";
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
    </tr>
  );
}
export default IssueTable;
