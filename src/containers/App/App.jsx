import React, { useState } from "react";
import styles from "./App.module.scss";

import Navbar from "../../components/Navbar";

import Routes from "../Routes";

const App = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [user, setUser] = useState(null);

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
      <Navbar />
      <Routes
        user={user}
        setUser={setUser}
        setColumns={setColumns}
        columns={columns}
        setRows={setRows}
        rows={rows}
        color={color}
        setColor={setColor}
        grid={grid}
        generateGridArray={generateGridArray}
      />
    </>
  );
};

export default App;
