import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/dash">Home</Link>
      <Link to="/sign-up">Sign up</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
