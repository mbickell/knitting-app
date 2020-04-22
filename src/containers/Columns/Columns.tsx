import React from "react";
import styles from "./Columns.module.scss";

import Column from "../../components/Column";

interface Grid {
  grid: string[][];
  name: string;
}

interface Props {
  grid: Grid;
  color: string;
  setGrid: React.Dispatch<React.SetStateAction<Grid | null>>;
}

const Columns: React.FC<Props> = ({ grid, color, setGrid }) => {
  const generateNumbers = (): JSX.Element[] => {
    return grid.grid[0].map((cell, index, array) => (
      <p key={array.length - index} className={styles.marker}>
        {array.length - index}
      </p>
    ));
  };

  return (
    <>
      <div>{generateNumbers()}</div>
      {grid.grid.map((column, columnIndex) => (
        <div className={styles.column} key={`${grid.name}-${columnIndex}`}>
          <Column columnIndex={columnIndex} column={column} color={color} grid={grid} setGrid={setGrid} />
          <p>{grid.grid.length - columnIndex}</p>
        </div>
      ))}
      <div>{generateNumbers()}</div>
    </>
  );
};

export default Columns;
