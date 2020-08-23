import React from "react";
import Contents from "./Contents.jsx";
import { LinkContainer } from "react-router-bootstrap";
import SignInNavItem from "./SignInNavItem.jsx";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon,
  Grid,
  Col,
} from "react-bootstrap";
import IssueAddNavItem from "./IssueAddNavItem.jsx";
import Search from "./Search.jsx";

function Header({ user, onUserChange }) {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/issues">
            <NavItem>Issue List</NavItem>
          </LinkContainer>
          <LinkContainer to="/report">
            <NavItem>Report</NavItem>
          </LinkContainer>
        </Nav>
        <Col sm={5}>
          <Navbar.Form>
            <Search />
          </Navbar.Form>
        </Col>
        <Nav pullRight>
          <IssueAddNavItem user={user} onUserChange={onUserChange} />
          <SignInNavItem user={user} onUserChange={onUserChange} />
          <NavDropdown
            id="user-dropdown"
            title={<Glyphicon glyph="option-vertical" />}
            noCaret
          >
            <LinkContainer to="/about">
              <MenuItem>About</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Full source code availabe at{"   "}
        <a href="https://github.com/deformal/The-Issue-Tracker-app">
          Saurabh Jainwal
        </a>{" "}
        Github Repository
      </p>
    </small>
  );
}

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: { signedIn: false } };
    this.onUserChange = this.onUserChange.bind(this);
  }
  async componentDidMount() {
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: "POST",
    });
    const body = await response.text();
    const result = JSON.parse(body);
    const { signedIn, givenName } = result;
    this.setState({ user: { signedIn, givenName } });
  }
  onUserChange(user) {
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Header user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <Contents />
        </Grid>

        <Footer />
      </div>
    );
  }
}
