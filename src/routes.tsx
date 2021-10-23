import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RickAndMorty from "./view/RickAndMorty";
import Home from "./view/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rickandmorty" component={RickAndMorty} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
