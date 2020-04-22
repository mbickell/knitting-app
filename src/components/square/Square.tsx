import React from "react";
import styles from "./Square.module.scss";
import { useState } from "react";

interface Grid {
  grid: string[][];
  name: string;
}

interface Props {
  type: string;
  newColor: string;
  column: string[];
  index: number;
  grid: Grid;
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
  columnIndex: number;
}

const Square: React.FC<Props> = ({ type, newColor, column, index, grid, setGrid, columnIndex }) => {
  const [color, setColor] = useState(type);

  const changeColor = (): void => {
    column[index] = newColor;

    grid.grid[columnIndex] = column;
    setGrid(grid);
    setColor(newColor);
  };

  return (
    <span className={styles.square} style={{ backgroundColor: color }} onClick={changeColor}>
      {type.length > 1 ? null : color}
    </span>
  );
};

export default Square;
