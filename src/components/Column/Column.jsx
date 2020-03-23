import React from "react";
import styles from "./Column.module.scss";

import Square from "../Square";

const Column = ({ grid }) => {
  return (
    <>
      {grid.map(cell => (
        <Square type={"white"} />
      ))}
    </>
  );
};

export default Column;
