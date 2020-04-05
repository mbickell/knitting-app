import React, { useEffect } from "react";
import { navigate } from "@reach/router";
// import styles from "./PrivateRoutes.module.scss";

import firebase from "../../firebase";

const PrivateRoutes = ({ children }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  });

  return <>{children}</>;
};

export default PrivateRoutes;
