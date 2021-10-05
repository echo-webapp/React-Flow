import React, { Fragment } from "react";
import { Route } from "react-router";
import DragandDrop from "./drag_and_drop";
import FlowChart from "./basic_flow";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={DragandDrop} />
      <Route exact path="/home" component={FlowChart} />
    </Fragment>
  );
};

export default Router;
