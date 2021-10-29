import React from "react";
import { useSelector } from "react-redux";
import Form from "../../components/Form";
import { IPeople } from "../../store/modules/types";

const FormView: React.FC = () => {
  const state = useSelector((state: IPeople) => state.people);
  return (
    <div className="container">
      <Form />
      <br />
      <hr />
      <br />
      {state.map((person, index) => (
        <div key={index}>
          <span>Nome: {person.name}</span>
          <span>Nome: {person.email}</span>
        </div>
      ))}
    </div>
  );
};

export default FormView;
