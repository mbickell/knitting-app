import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, value, callback }) => {
  return (
    <>
      <input className={styles.input} type={type} value={value} onChange={callback} />
    </>
  );
};

export default Input;
