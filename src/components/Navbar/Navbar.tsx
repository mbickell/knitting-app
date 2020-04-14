import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "@reach/router";

const Navbar: React.FC<{ logout: () => void }> = ({ logout }) => {
  const isActive = ({ isCurrent }: { isCurrent: boolean }): { style: { color: string } } => {
    return {
      style: {
        color: isCurrent ? "red" : "blue",
      },
    };
  };

  const display: string | null = window.location.pathname === "/" ? styles.displayNone : null;

  return (
    <nav className={`${styles.nav} ${display}`}>
      <Link getProps={isActive} to="/p/dash">
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
