import React, { useState } from "react";
import styles from "./App.module.scss";

import Columns from "../Columns";
import SignUp from "../SignUp";
import Login from "../Login";
import Input from "../../components/Input";

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
      <SignUp />
      <Login user={user} setUser={setUser} />

      <Input type="number" callback={event => setColumns(parseInt(event.target.value))} value={columns} />
      <Input type="number" callback={event => setRows(parseInt(event.target.value))} value={rows} />
      <button onClick={generateGridArray}>generate columns</button>

      <Input type="color" callback={event => setColor(event.target.value)} value={color} />

      <div className={styles.grid}>
        <Columns grid={grid} color={color} />
      </div>
    </>
  );
};

export default App;
