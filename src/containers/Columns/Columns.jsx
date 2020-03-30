import React from "react";
import styles from "./Columns.module.scss";

import Column from "../../components/Column";

const Columns = ({ grid, color, setGrid }) => {
  const generateNumbers = () => {
    return grid[0].map((cell, index, array) => (
      <p key={array.length - index} className={styles.marker}>
        {array.length - index}
      </p>
    ));
  };

  return (
    <>
      <div>{generateNumbers()}</div>
      {grid.map((column, columnIndex) => (
        <div className={styles.column} key={columnIndex}>
          <Column columnIndex={columnIndex} column={column} color={color} grid={grid} setGrid={setGrid} />
          <p>{grid.length - columnIndex}</p>
        </div>
      ))}
      <div>{generateNumbers()}</div>
    </>
  );
};

export default Columns;
