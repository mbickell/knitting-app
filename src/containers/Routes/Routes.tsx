import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";

import SignUp from "../SignUp";
import LandingPage from "../LandingPage";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ResetPassword from "../ResetPassword";
import ManageAccount from "../ManageAccount";

interface Grid {
  grid: string[][];
  name: string;
}
interface Props {
  user: firebase.User | null;
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
  grid: Grid | null;
  color: string;
  setGrid: React.Dispatch<React.SetStateAction<Grid | null>>;
  allPatterns: Grid[];
  getAllPatterns: () => void;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columns: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  generateGridArray: () => void;
  logout: () => void;
}

const Routes: React.FC<Props> = ({ setUser, user, ...other }) => {
  return (
    <Router>
      <Redirect noThrow from="/" to="/login" />
      <LandingPage path="login" setUser={setUser} />
      <SignUp path="sign-up" />
      <ResetPassword path="reset-password" />
      <ManageAccount path="manage-account" setUser={setUser} />
      <PrivateRoutes path="p" {...other}>
        <Dashboard path="dash" user={user} {...other} />
      </PrivateRoutes>
    </Router>
  );
};

export default Routes;
