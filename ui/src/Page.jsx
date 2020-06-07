import React from "react";
import Contents from "./Contents.jsx";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
  Grid
} from "react-bootstrap";
import IssueAddNavItem from "./IssueAddNavItem.jsx";
import NavbarHeader from "react-bootstrap/lib/NavbarHeader";

function Header() {
  return (
    <Navbar inverse collapseOnSelect>
      <NavbarHeader>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
        <Navbar.Toggle />
      </NavbarHeader>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/issues">
            <NavItem>Issue List</NavItem>
          </LinkContainer>
          <LinkContainer to="/report">
            <NavItem>Report</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <IssueAddNavItem />
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

export default function() {
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
