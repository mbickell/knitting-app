import React from "react";
import styles from "./Columns.module.scss";

import Column from "../../components/Column";

const Columns = ({ grid, color }) => {
  return (
    <>
      <div className={styles.column}>
        {grid[0].map((cell, index) => (
          <p className={styles.marker}>{index + 1}</p>
        ))}
      </div>
      {grid.map((column, index) => (
        <div className={styles.column}>
          <Column grid={column} color={color} />
          <p>{index + 1}</p>
        </div>
      ))}
    </>
  );
};

export default Columns;
