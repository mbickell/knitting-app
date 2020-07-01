import React, { useEffect } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
// import styles from "./PrivateRoutes.module.scss";
import firebase from "../../firebase";

import Navbar from "../../components/Navbar";

const PrivateRoutes: React.FC<typeof RouteComponentProps> = ({ logout, children }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <Navbar logout={logout} />
      {children}
    </>
  );
};

export default PrivateRoutes;
