import React, { useEffect } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
// import styles from "./PrivateRoutes.module.scss";
import firebase from "../../firebase";

const PrivateRoutes: React.FC<typeof RouteComponentProps> = ({ children }) => {
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
