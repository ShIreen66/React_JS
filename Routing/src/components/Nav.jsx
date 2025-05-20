import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-6 my-8 text-2xl font-bold">
      <NavLink to={"/"} className={(e) => (e.isActive ? "text-amber-600" : "")}>
        Home
      </NavLink>
      <NavLink
        to={"/product"}
        className={(e) => (e.isActive ? "text-amber-600" : "")}
      >
        Product
      </NavLink>
      <NavLink
        to={"/services"}
        className={(e) => (e.isActive ? "text-amber-600" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to={"/about"}
        className={(e) => (e.isActive ? "text-amber-600" : "")}
      >
        About
      </NavLink>

      {/* <Link to={'/product'}>Product</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/about'}>About</Link> */}
    </div>
  );
};

export default Nav;
