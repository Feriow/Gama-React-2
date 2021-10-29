import React from "react";
import { useSelector } from "react-redux";
import { IPeople } from "../../store/modules/types";

const Footer: React.FC = () => {
  const state = useSelector((state: IPeople) => state.people);
  return (
    <footer>
      <p style={{ textAlign: "center" }}> Anything {state.length} </p>
    </footer>
  );
};

export default Footer;
