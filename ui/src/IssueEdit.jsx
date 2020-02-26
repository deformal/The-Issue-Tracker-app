import React from "react";

export default function IssueEdit({ match }) {
  const { id } = match.params;
  return <h2>{`this is a placeholder for editing issue ${id}`}</h2>;
}
