import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";

interface Props {
  type: string;
  value: string;
  callback: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<Props> = ({ type, value, callback, placeholder }) => {
  return (
    <>
      <input className={styles.input} type={type} value={value} onChange={callback} placeholder={placeholder} />
    </>
  );
};

export default Input;
