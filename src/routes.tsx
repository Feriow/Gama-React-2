import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RickAndMorty from "./view/RickAndMorty";
import Todo from "./view/Todo";
import Home from "./view/home";
import Form from "./view/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/rm" component={RickAndMorty} />
        <Route path="/todo" component={Todo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
