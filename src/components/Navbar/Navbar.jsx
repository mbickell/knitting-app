import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar = ({ logout }) => {
  const isActive = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? "red" : "blue",
      },
    };
  };

  const display = window.location.pathname === "/" ? styles.displayNone : null;

  return (
    <nav className={`${styles.nav} ${display}`}>
      <Link getProps={isActive} to="/dash">
        Home
      </Link>

      <Link getProps={isActive} to="/sign-up">
        Sign up
      </Link>
      <button onClick={logout}>Sign out</button>
    </nav>
  );
};

export default Navbar;
