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

function Header() {
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
          <IssueAddNavItem />
          <SignInNavItem />
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

export default function () {
  return (
    <div>
      <Header />
      <Grid fluid>
        <Contents />
      </Grid>

      <Footer />
    </div>
  );
}
