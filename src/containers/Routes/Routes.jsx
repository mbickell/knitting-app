import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";

import SignUp from "../SignUp";
import Login from "../Login";
import Dashboard from "../Dashboard";

const Routes = ({ generateGridArray, user, setUser, setColumns, columns, setRows, rows, color, setColor, grid }) => {
  return (
    <Router>
      <Redirect noThrow from="/" to="dash" />
      <SignUp path="sign-up" />
      <Login path="login" user={user} setUser={setUser} />
      <Dashboard
        path="dash"
        setColumns={setColumns}
        columns={columns}
        setRows={setRows}
        rows={rows}
        color={color}
        setColor={setColor}
        generateGridArray={generateGridArray}
        grid={grid}
      />
    </Router>
  );
};

export default Routes;
