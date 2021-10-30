import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import LogoRick from "../../assets/img/rickandmorty.png";

const Nav: React.FC = () => {
  return (
    <motion.nav
      animate={{ x: [-1000, 100, 0] }}
      transition={{ ease: "easeOut", duration: 3 }}
      className="nav-bar container"
    >
      <img src={LogoRick} alt="Test" />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/rm">Rick and Morty</Link>
        <Link to="/form">Form</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/dash">Dashboard</Link>
      </div>
    </motion.nav>
  );
};

export default Nav;
