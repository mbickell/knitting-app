import React from "react";
import styles from "./Square.module.scss";

const Square = props => {
  return (
    <span className={styles.square} style={{ backgroundColor: props.type }}>
      {props.type.length > 1 ? null : props.type}
    </span>
  );
};

export default Square;
