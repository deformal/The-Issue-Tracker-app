import React from "react";
import graphQLFetch from "./graphQLFetch";
import { Link } from "react-router-dom";
import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";
import TextInput from "./TextInput.jsx";
import {
  Button,
  Badge,
  Col,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default class IssueEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      invalidFields: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id: prevId }
      }
    } = prevProps;
    const {
      match: {
        params: { id }
      }
    } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }
  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      issue: { ...prevState.issue, [name]: value }
    }));
  }

  onValidityChange(event, valid) {
    const { name } = event.target;
    this.setState(prevState => {
      const invalidFields = { ...prevState.invalidFields, [name]: !valid };
      if (valid) delete invalidFields[name];
      return { invalidFields };
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { issue, invalidFields } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;
    const query = `mutation issueUpdate(
   $id:Int!
   $changes:IssueUpdateInputs!
    )
    {
      issueUpdate(
        id:$id
        changes:$changes
      ){
        id title status owner effort
        created due description
      }
    }`;
    const { id, created, ...changes } = issue;
    const data = await graphQLFetch(query, { changes, id });
    if (data) {
      this.setState({ issue: data.issueUpdate });
      alert("Updated issue Successfully");
    }
  }

  async loadData() {
    const query = `query issue($id:Int!){
   issue(id:$id){
     id title status owner effort created due description
   }
  }`;
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const x = Number(id);
    const data = await graphQLFetch(query, { id: x });
    this.setState({ issue: data ? data.issue : {}, invalidFields: {} });
  }

  render() {
    const style = {
      margin: 10
    };
    const {
      issue: { id }
    } = this.state;
    const {
      match: {
        params: { id: propsId }
      }
    } = this.props;
    if (id == null) {
      if (propsId !== null) {
        return <h3>{`Issue with ID ${propsId} not found.`}</h3>;
      }

      return null;
    }
    const { invalidFields } = this.state;
    let validationMessage;
    if (Object.keys(invalidFields).length !== 0) {
      validationMessage = (
        <div className="error">
          Please correct invalid fiels before submitting.
        </div>
      );
    }
    const {
      issue: { title, status }
    } = this.state;
    const {
      issue: { owner, effort, description }
    } = this.state;
    const {
      issue: { created, due }
    } = this.state;

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>{`Editing issue: ${id}`}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Created
              </Col>
              <Col sm={9}>
                <FormControl.Static>
                  {created.toDateString()}
                </FormControl.Static>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Status
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass="select"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                >
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Owner
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  name="owner"
                  value={owner}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Effort
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={NumInput}
                  name="effort"
                  value={effort}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            <FormGroup validationState={invalidFields.due ? "error" : null}>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Due
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={DateInput}
                  name="due"
                  value={due}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Title
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={3} lg={2} componentClass={ControlLabel}>
                Description
              </Col>
              <Col sm={9}>
                <FormControl
                  componentClass={TextInput}
                  tag="textarea"
                  name="description"
                  rows={8}
                  cols={50}
                  value={description}
                  onChange={this.onChange}
                  key={id}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={6} componentClass={ControlLabel}>
                <ButtonToolbar>
                  <Button bsStyle="primary" type="submit">
                    Submit
                  </Button>
                  <LinkContainer to="/issues">
                    <Button bsStyle="link">Back</Button>
                  </LinkContainer>
                </ButtonToolbar>
              </Col>
            </FormGroup>
          </Form>
        </Panel.Body>
        <Panel.Footer>
          <Link to={`/edit/${id - 1}`}>
            <Badge> Previous </Badge>
          </Link>
          {"  | "}
          <Link to={`/edit/${id + 1}`}>
            <Badge> Next </Badge>
          </Link>
        </Panel.Footer>
      </Panel>
    );
  }
}
