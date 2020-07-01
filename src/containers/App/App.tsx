import React, { useState, useEffect, useCallback } from "react";
// import styles from "./App.module.scss";
import firebase, { firestore } from "../../firebase";

import Navbar from "../../components/Navbar";
import Routes from "../Routes";
// import DropDown from "../../components/DropDown/DropDown";
import { navigate, redirectTo } from "@reach/router";

interface grid {
  grid: string[][];
  name: string;
}

const App: React.FC = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [color, setColor] = useState("#ffffff");

  const [user, setUser] = useState<firebase.User | null>(null);

  const [grid, setGrid] = useState<grid | null>(null);
  const [allPatterns, setAllPatterns] = useState<grid[]>([]);

  const generateGridArray = (): void => {
    const y: string[][] = [];
    for (let i = 0; i < columns; i++) {
      const x: string[] = [];
      for (let i = 0; i < rows; i++) {
        x.push("#ffffff");
      }
      y.push(x);
    }
    setGrid({ grid: y, name: "" });
  };

  const getUser = (): void => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        navigate("/p/dash");
      } else {
        setUser(null);
      }
    });
  };

  const logout = (): void => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };
  const getAllPatterns = useCallback((): void => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .collection("patterns")
        .get()
        .then(querySnapshot => {
          const allPatterns: grid[] = [];
          querySnapshot.forEach(doc => {
            const pattern = doc.data().pattern;

            const columns = [];
            for (const column in pattern) {
              columns.push(pattern[column]);
            }

            columns.sort((a, b) => a.index - b.index);
            allPatterns.push({ name: doc.id, grid: columns.map(column => column.column) });
          });

          setAllPatterns(allPatterns);
        });
    }
  }, [user]);

  useEffect((): void => {
    getUser();
  }, []);

  useEffect((): void => {
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
    logout
  };

  return (
    <>
      <Routes {...props} />
    </>
  );
};

export default App;
