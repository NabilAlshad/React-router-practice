import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
                backgroundColor: "green",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/services"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/dashboard"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/posts/js"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
