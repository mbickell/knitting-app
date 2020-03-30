import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";

import SignUp from "../SignUp";
import Login from "../Login";
import Dashboard from "../Dashboard";

const Routes = props => {
  const { setUser, ...other } = props;

  return (
    <Router>
      <Redirect noThrow from="/" to="dash" />
      <SignUp path="sign-up" />
      <Login path="login" setUser={setUser} />
      <Dashboard path="dash" {...other} />
    </Router>
  );
};

export default Routes;
