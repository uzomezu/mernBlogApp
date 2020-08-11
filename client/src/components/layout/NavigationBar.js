import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ auth, onClick }) => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="sm"
    className="mb-3"
    style={{ minHeight: "4rem" }}
  >
    <Link to="/blog">
      <Navbar.Brand>
        <img
          src="https://uzomezu.github.io/L-etudient-qui-se-Promene/grainy_Kevin.png"
          style={{ height: 40, width: 80 }}
          className="d-inline-block align-top"
          alt=""
        />
        {" KevDev "}
      </Navbar.Brand>
    </Link>
    <Nav className="ml-auto">
      {auth ? (
        <Link to="/logout">
          <Button variant="outline-light" className="mr-sm-2" onClick={onClick}>
            Logout
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button variant="outline-light" className="mr-sm-2">
            Login
          </Button>
        </Link>
      )}
    </Nav>
  </Navbar>
);

Navigationbar.propTypes = {
  auth: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigationbar;
