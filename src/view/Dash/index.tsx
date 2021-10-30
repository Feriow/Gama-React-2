import React from "react";

// import { Container } from './styles';

const Dash: React.FC = () => {
  const storage: any = localStorage.getItem("@MeliuzSession");
  const { user } = JSON.parse(storage);
  return (
    <div className="container">
      <h1>This is the dashboard</h1>
      <span>{user?.name}, how you're doing?</span>
    </div>
  );
};

export default Dash;
