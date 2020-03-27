import React, { useState } from "react";
import styles from "./App.module.scss";
import firebase from "../../firebase";

import Navbar from "../../components/Navbar";

import Routes from "../Routes";
import { useEffect } from "react";

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

  const getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  });

  const props = { user, setUser, setColumns, columns, setRows, rows, color, setColor, grid, generateGridArray };

  return (
    <>
      <Navbar />
      <Routes
        // user={user}
        // setUser={setUser}
        // setColumns={setColumns}
        // columns={columns}
        // setRows={setRows}
        // rows={rows}
        // color={color}
        // setColor={setColor}
        // grid={grid}
        // generateGridArray={generateGridArray}
        {...props}
      />
    </>
  );
};

export default App;
