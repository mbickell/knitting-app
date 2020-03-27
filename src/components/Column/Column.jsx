import React from "react";
import styles from "./Column.module.scss";

import Square from "../Square";

const Column = ({ grid, color, indexNo }) => {
  return (
    <>
      {grid.map((type, index) => (
        <Square key={`${indexNo}-${index}`} type={type} newColor={color} />
      ))}
    </>
  );
};

export default Column;
