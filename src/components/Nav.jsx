import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  return (
    <ul className="nav justify-content-start">
      <Link to={"/"}>
        <li className="nav-item">Home</li>
      </Link>
      <Link to={"/favorites"}>
        <li className="nav-item">Favorite</li>
      </Link>
    </ul>
  );
};
export default Nav;
