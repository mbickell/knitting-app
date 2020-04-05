import React from "react";
import styles from "./LandingPage.module.scss";
import { Link } from "@reach/router";

import Login from "../../containers/Login";

const LandingPage = ({ setUser }) => {
  return (
    <article className={styles.landingPage}>
      <div className={styles.content}>
        <Login setUser={setUser} />
        <Link className={styles.button} to="sign-up">
          Sign up
        </Link>
      </div>
    </article>
  );
};

export default LandingPage;
