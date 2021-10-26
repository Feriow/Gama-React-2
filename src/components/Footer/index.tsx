import React from "react";
import { useSelector } from "react-redux";
import { IPeople } from "../../store/modules/types";

const Footer: React.FC = () => {
  const state = useSelector((state: IPeople) => state.people);
  return <footer>Anything {state.length}</footer>;
};

export default Footer;
