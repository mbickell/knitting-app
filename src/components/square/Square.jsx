import React from "react";
import styles from "./Square.module.scss";

const Square = props => {
  return <span className={styles.square}>{props.type}</span>;
};

export default Square;
