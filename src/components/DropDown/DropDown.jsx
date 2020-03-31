import React, { useState } from "react";
import styles from "./DropDown.module.scss";

const DropDown = ({ children }) => {
  const [visible, toggleDrop] = useState(false);

  const display = visible ? styles.show : "";

  return (
    <div className={styles.dropdown}>
      <button onClick={() => toggleDrop(!visible)}>Dropdown</button>
      <div id="myDropdown" className={`${styles.content} ${display}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
