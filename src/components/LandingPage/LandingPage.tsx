import React from "react";
import styles from "./LandingPage.module.scss";
import { Link, RouteComponentProps } from "@reach/router";

import Login from "../../containers/Login";
export interface LandingPageProps {
  path: typeof RouteComponentProps;
  setUser: React.Dispatch<
    React.SetStateAction<{
      uid: string;
    } | null>
  >;
}

const LandingPage: React.FC<LandingPageProps> = ({ setUser }) => {
  return (
    <article className={styles.landingPage}>
      <div className={styles.content}>
        <Login setUser={setUser} />
        <Link className="button" to="sign-up">
          Sign up
        </Link>
      </div>
    </article>
  );
};

export default LandingPage;
