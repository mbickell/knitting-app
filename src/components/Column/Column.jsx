import React from "react";
import styles from "./Column.module.scss";

import Square from "../Square";

const Column = ({ grid, color }) => {
  return (
    <>
      {grid.map(type => (
        <Square type={type} newColor={color} />
      ))}
    </>
  );
};

export default Column;
