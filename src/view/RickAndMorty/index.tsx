import React, { useState } from "react";

interface IClient {}

const RickAndMorty: React.FC = () => {
  const [data, setData] = useState<IClient>();

  return (
    <div>
      <h1>Rick and Morty YAAAL!!</h1>
    </div>
  );
};

export default RickAndMorty;
