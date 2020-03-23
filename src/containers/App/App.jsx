import React, { useState } from "react";
import styles from "./App.module.scss";

import Column from "../../components/Column";

const App = () => {
  const [columns, setColumns] = useState(0);
  const [grid, setGrid] = useState([]);

  const generateGridArray = () => {
    const grid = [];
    for (let i = 0; i < columns; i++) {
      grid.push([]);
    }
    setGrid(grid);
  };

  const generateColumns = () => {
    generateGridArray();
  };

  return (
    <>
      <input type="number" onChange={event => setColumns(parseInt(event.target.value))} value={columns} />
      <button onClick={() => generateColumns()}>generate columns</button>
      <Column grid={grid} />
    </>
  );
};

export default App;
