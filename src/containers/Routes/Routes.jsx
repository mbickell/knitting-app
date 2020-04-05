import React from "react";
// import styles from "./Routes.module.scss";
import { Router } from "@reach/router";

import SignUp from "../SignUp";
import Login from "../Login";
import LandingPage from "../../components/LandingPage";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = (props) => {
  const { setUser, user, ...other } = props;

  return (
    <Router>
      <LandingPage path="/" setUser={setUser} />
      <SignUp path="sign-up" />
      <Login path="login" setUser={setUser} />
      <PrivateRoutes path="/" {...other}>
        <Dashboard path="dash" user={user} {...other} />
      </PrivateRoutes>
    </Router>
  );
};

export default Routes;
