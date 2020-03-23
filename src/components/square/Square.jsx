import React from "react";
import styles from "./Square.module.scss";

const Square = ({ type, index, removeCell }) => {
  return (
    <span className={styles.square} style={{ backgroundColor: type }} onClick={() => removeCell(index)}>
      {type.length > 1 ? null : type}
    </span>
  );
};

export default Square;
