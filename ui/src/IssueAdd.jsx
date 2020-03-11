import React from "react";
import Component from "react-dom";
import PropTypes from "prop-types";

export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = document.forms.issueAdd;
    const issue = {
      owner: formData.owner.value,
      title: formData.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
      description: formData.description.value
      // effort: parseInt(formData.effort.value)
    };
    this.props.createIssue(issue);
    formData.owner.value = "";
    formData.title.value = "";
    formData.description.value = "";
  }
  render() {
    return (
      <div className="formarea">
        <h1>Add a new issue</h1>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <br />
          <br />
          <textarea
            name="description"
            id=""
            cols="44"
            rows="12"
            placeholder="description"
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
