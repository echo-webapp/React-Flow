import React, { Fragment } from "react";
import { Route } from "react-router";
import Home from "./components/home/home.js";
import SaveFlow from "./components/save&delete/SaveFlow";
const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={SaveFlow} />
    </Fragment>
  );
};

export default Router;
