import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar = ({ user, logout }) => {
  const isActive = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? "red" : "blue"
      }
    };
  };

  return (
    <nav className={styles.nav}>
      {user ? (
        <Link getProps={isActive} to="/dash">
          Home
        </Link>
      ) : null}
      <Link getProps={isActive} to="/sign-up">
        Sign up
      </Link>
      {user ? (
        <button onClick={logout}>Sign out</button>
      ) : (
        <Link getProps={isActive} to="/login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
