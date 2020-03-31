import React, { useState } from "react";
import styles from "./App.module.scss";
import firebase, { firestore } from "../../firebase";

import Navbar from "../../components/Navbar";

import Routes from "../Routes";
import { useEffect } from "react";
import DropDown from "../../components/DropDown/DropDown";

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

  const getPattern = () => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .collection("patterns")
        .doc("test")
        .get()
        .then(doc => {
          console.log(doc.data());
          console.log(doc.data().pattern);
          const pattern = doc.data().pattern;
          const columns = [];
          for (const column in pattern) {
            columns.push(pattern[column]);
          }

          columns.sort((a, b) => a.index - b.index);
          const grid = columns.map(column => column.column);
          console.log(grid);

          setGrid(grid);
        });
    }
  };

  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getPattern();
  }, [user]);

  const props = {
    user,
    setUser,
    setColumns,
    columns,
    setRows,
    rows,
    color,
    setColor,
    grid,
    setGrid,
    generateGridArray
  };

  return (
    <>
      <Navbar />
      <Routes {...props} />
    </>
  );
};

export default App;
