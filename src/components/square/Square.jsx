import React from "react";
import styles from "./Square.module.scss";
import { useState } from "react";

const Square = ({ type, index, removeCell, newColor }) => {
  const [color, setColor] = useState(type);

  return (
    <span className={styles.square} style={{ backgroundColor: color }} onClick={() => setColor(newColor)}>
      {type.length > 1 ? null : color}
    </span>
  );
};

export default Square;
