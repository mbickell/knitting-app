import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";

import SignUp from "../SignUp";
import Login from "../Login";
import LandingPage from "../../components/LandingPage";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

interface Props {
  user: { uid: string } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      uid: string;
    } | null>
  >;
}

const Routes: React.FC<Props> = ({ setUser, user, ...other }) => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/login" />
      <LandingPage path="login" setUser={setUser} />
      <SignUp path="sign-up" />
      <Login path="unused" setUser={setUser} />
      <PrivateRoutes path="p" {...other}>
        <Dashboard path="dash" user={user} {...other} />
      </PrivateRoutes>
    </Router>
  );
};

export default Routes;
