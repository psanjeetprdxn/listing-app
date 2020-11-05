import React from "react";

import Nav from "./nav/Nav";
import "./header.css";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
