import React, { useState } from "react";
import styles from "./App.module.scss";

import Column from "../../components/Column";
import Columns from "../Columns";

const App = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [color, setColor] = useState("#ffffff");

  const [grid, setGrid] = useState([[]]);

  const generateGridArray = () => {
    const y = [];
    for (let i = 0; i < columns; i++) {
      const x = [];
      for (let i = 0; i < rows; i++) {
        x.push("#ffffff");
      }
      y.push(x);
    }
    setGrid(y);
  };

  return (
    <>
      <input type="number" onChange={event => setColumns(parseInt(event.target.value))} value={columns} />
      <input type="number" onChange={event => setRows(parseInt(event.target.value))} value={rows} />
      <button onClick={generateGridArray}>generate columns</button>

      <input type="color" onChange={event => setColor(event.target.value)} value={color} />

      <div className={styles.grid}>
        <Columns grid={grid} color={color} />
      </div>
    </>
  );
};

export default App;
