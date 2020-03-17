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
          <LinkContainer exact to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/issues">
            <NavItem>Issue List</NavItem>
          </LinkContainer>
          <LinkContainer to="/report">
            <NavItem>Report</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <OverlayTrigger
              placement="left"
              delayShow={200}
              overlay={<Tooltip id="create-issue">Create Issue</Tooltip>}
            >
              <Glyphicon glyph="plus" />
            </OverlayTrigger>
          </NavItem>
          <NavDropdown
            id="user-dropdown"
            title={<Glyphicon glyph="option-vertical" />}
            noCaret
          >
            <MenuItem>About</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
function Footer() {
  return (
    <small>
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
