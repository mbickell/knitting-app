import React from "react";
import styles from "./Columns.module.scss";

import Column from "../../components/Column";

const Columns = ({ grid, color }) => {
  return (
    <>
      <div>
        {grid[0].map((cell, index, array) => (
          <p className={styles.marker}>{array.length - index}</p>
        ))}
      </div>
      {grid.map((column, index, array) => (
        <div className={styles.column}>
          <Column grid={column} color={color} />
          <p>{array.length - index}</p>
        </div>
      ))}
    </>
  );
};

export default Columns;
