import React, { useState, useEffect, useCallback } from "react";
// import styles from "./App.module.scss";
import firebase, { firestore } from "../../firebase";

import Navbar from "../../components/Navbar";

import Routes from "../Routes";
// import DropDown from "../../components/DropDown/DropDown";
import { navigate } from "@reach/router";

const App = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [user, setUser] = useState(null);

  const [grid, setGrid] = useState({ grid: [[]], name: "" });
  const [allPatterns, setAllPatterns] = useState([]);

  const generateGridArray = () => {
    const y = [];
    for (let i = 0; i < columns; i++) {
      const x = [];
      for (let i = 0; i < rows; i++) {
        x.push("#ffffff");
      }
      y.push(x);
    }
    setGrid({ grid: y, name: "" });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };
  const getAllPatterns = useCallback(() => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .collection("patterns")
        .get()
        .then((querySnapshot) => {
          const allPatterns = [];
          querySnapshot.forEach((doc) => {
            const pattern = doc.data().pattern;
            const columns = [];
            for (const column in pattern) {
              columns.push(pattern[column]);
            }

            columns.sort((a, b) => a.index - b.index);
            allPatterns.push({ name: doc.id, grid: columns.map((column) => column.column) });
          });

          setAllPatterns(allPatterns);
        });
    }
  }, [user]);

  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getAllPatterns();
  }, [getAllPatterns]);

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
    generateGridArray,
    allPatterns,
    getAllPatterns,
  };

  return (
    <>
      <Navbar user={user} logout={logout} />
      <Routes {...props} />
    </>
  );
};

export default App;
