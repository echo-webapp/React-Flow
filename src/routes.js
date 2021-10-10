import React, { Fragment } from "react";
import { Route } from "react-router";
import MessageCard from "./components/message_card/MessageCard";
import Home from "./components/home/home.js";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={MessageCard} />
      <Route exact path="/home" component={Home} />
    </Fragment>
  );
};

export default Router;
