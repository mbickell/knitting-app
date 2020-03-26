import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar = () => {
  const isActive = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? "red" : "blue"
      }
    };
  };

  return (
    <nav className={styles.nav}>
      <Link getProps={isActive} to="/dash">
        Home
      </Link>
      <Link getProps={isActive} to="/sign-up">
        Sign up
      </Link>
      <Link getProps={isActive} to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
