import React from "react";
// import styles from "./Column.module.scss";

import Square from "../Square";

interface Grid {
  grid: string[][];
  name: string;
}

interface Props {
  column: string[];
  color: string;
  columnIndex: number;
  grid: Grid;
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
}

const Column: React.FC<Props> = ({ column, color, columnIndex, grid, setGrid }) => {
  return (
    <>
      {column.map((type, index, column) => (
        <Square
          key={`${grid.name}-${columnIndex}-${index}`}
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
