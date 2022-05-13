import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <a href={"/"}>
        {" "}
        <Navbar.Brand href="/">Home</Navbar.Brand>
      </a>
    </Navbar>
  );
};
export default Nav;
