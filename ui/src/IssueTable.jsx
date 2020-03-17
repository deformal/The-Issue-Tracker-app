import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
  Glyphicon,
  Button,
  Tooltip,
  OverlayTrigger,
  Table
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function IssueTable(props) {
  //local variables
  const issueRows = props.issues.map((issue, index) => (
    <IssueRow
      key={issue.id}
      ix={issue}
      closeIssue={props.closeIssue}
      deleteIssue={props.deleteIssue}
      index={index}
    />
  ));
  const Tablecollapse = {
    textAlign: "center"
  };

  return (
    <React.Fragment>
      <Table responsive striped bordered condensed hover style={Tablecollapse}>
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
      </Table>
    </React.Fragment>
  );
}

const IssueRow = withRouter(
  ({ ix, location: { search }, closeIssue, index, deleteIssue }) => {
    const selectLocation = { pathname: `/issues/${ix.id}`, search };
    const editTooltip = (
      <Tooltip id="close-tooltip" placement="top">
        Edit
      </Tooltip>
    );
    const closeTooltip = (
      <Tooltip id="close-tooltip" placement="top">
        Close Issue
      </Tooltip>
    );
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">
        Delete Issue
      </Tooltip>
    );
    function onClose(e) {
      e.preventDefault();
      closeIssue(index);
    }
    function onDelete(e) {
      e.preventDefault();
      deleteIssue(index);
    }
    const tableRow = (
      <tr>
        <td>{ix.id}</td>
        <td>{ix.status}</td>
        <td>{ix.owner}</td>
        <td>{ix.created.toDateString()}</td>
        <td>{ix.effort}</td>
        <td>{ix.due ? ix.due.toDateString() : ""}</td>
        <td>{ix.title}</td>
        <td>
          <LinkContainer to={`/edit/${ix.id}`}>
            <OverlayTrigger delayShow={1000} overlay={editTooltip}>
              <Button bsSize="xsmall">
                <Glyphicon glyph="edit" />
              </Button>
            </OverlayTrigger>
          </LinkContainer>
          {"  |  "}
          <OverlayTrigger delayShow={200} overlay={closeTooltip}>
            <Button bsSize="xsmall" type="button" onClick={onClose}>
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>

          {"  |  "}
          <OverlayTrigger delayShow={200} overlay={deleteTooltip}>
            <Button bsSize="xsmall" type="button" onClick={onDelete}>
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
    return <LinkContainer to={selectLocation}>{tableRow}</LinkContainer>;
  }
);
export default IssueTable;
