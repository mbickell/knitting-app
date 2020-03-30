import React from "react";
import styles from "./Column.module.scss";

import Square from "../Square";

const Column = ({ column, color, columnIndex, grid, setGrid }) => {
  return (
    <>
      {column.map((type, index, column) => (
        <Square
          key={`${columnIndex}-${index}`}
          column={column}
          columnIndex={columnIndex}
          index={index}
          type={type}
          newColor={color}
          grid={grid}
          setGrid={setGrid}
        />
      ))}
    </>
  );
};

export default Column;
