import React, { Fragment } from "react";
import { Route } from "react-router";
import RightBar from "./components/RightBar/RightBar.js";
import Home from "./components/home/home.js";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={RightBar} />
      <Route exact path="/home" component={Home} />
    </Fragment>
  );
};

export default Router;
