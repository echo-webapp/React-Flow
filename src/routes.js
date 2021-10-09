import React, { Fragment } from "react";
import { Route } from "react-router";
import DragandDrop from "./drag_and_drop";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./home.js";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={DragandDrop} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/sidebar" component={Sidebar} />
    </Fragment>
  );
};

export default Router;
