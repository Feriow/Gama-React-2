import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/rm">Rick and Morty</Link>
      <Link to="/form">Form</Link>
    </div>
  );
};

export default Nav;
