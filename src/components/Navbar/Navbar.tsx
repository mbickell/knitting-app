import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar: React.FC<{ logout: () => void }> = ({ logout }) => {
  // const display: string | null = window.location.pathname === "/" ? styles.displayNone : null;

  return (
    <nav className={styles.nav}>
      <Link to="/p/dash">Home</Link>
      <Link to="/sign-up">Sign up</Link>
    </nav>
  );
};

export default Navbar;
