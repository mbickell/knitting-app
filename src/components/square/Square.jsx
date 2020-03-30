import React from "react";
import styles from "./Square.module.scss";
import { useState } from "react";

const Square = ({ type, newColor, column, index, grid, setGrid, columnIndex }) => {
  const [color, setColor] = useState(type);

  const changeColor = () => {
    column[index] = newColor;
    console.log(grid);

    grid[columnIndex] = column;
    console.log(grid);
    setGrid(grid);
    // setGrid();
    console.log(column);
    console.log(newColor);
    setColor(newColor);
  };

  return (
    <span className={styles.square} style={{ backgroundColor: color }} onClick={changeColor}>
      {type.length > 1 ? null : color}
    </span>
  );
};

export default Square;
