import React from "react";
import styles from "./Columns.module.scss";

import Column from "../../components/Column";

const Columns = ({ grid, color }) => {
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
      {grid.map((column, index, array) => (
        <div className={styles.column}>
          <Column indexNo={index} grid={column} color={color} />
          <p>{array.length - index}</p>
        </div>
      ))}
      <div>{generateNumbers()}</div>
    </>
  );
};

export default Columns;
