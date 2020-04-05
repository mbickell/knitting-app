import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, value, callback, placeholder }) => {
  return (
    <>
      <input className={styles.input} type={type} value={value} onChange={callback} placeholder={placeholder} />
    </>
  );
};

export default Input;
