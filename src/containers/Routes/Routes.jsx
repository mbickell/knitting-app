import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";

import SignUp from "../SignUp";
import Login from "../Login";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = props => {
  const { setUser, ...other } = props;

  return (
    <Router>
      <Redirect noThrow from="/" to="dash" />
      <SignUp path="sign-up" />
      <Login path="login" setUser={setUser} />
      <PrivateRoutes path="/">
        <Dashboard path="dash" {...other} />
      </PrivateRoutes>
    </Router>
  );
};

export default Routes;
