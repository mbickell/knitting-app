import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import { firestore } from "../../firebase";

import SavePattern from "../../components/SavePattern";
import CreatePattern from "../../components/CreatePattern";
import Columns from "../Columns";
import LoadPattern from "../../components/LoadPattern";

const Dashboard = props => {
  const { grid, color, user, setGrid, allPatterns, getAllPatterns, ...other } = props;
  const [name, setName] = useState("");

  const savePattern = () => {
    let saveableGrid = {};

    grid.grid.forEach((column, index) => {
      saveableGrid[`column-${index}`] = { column, index };
    });

    firestore
      .collection("users")
      .doc(user.uid)
      .collection("patterns")
      .doc(name)
      .set({
        pattern: saveableGrid
      })
      .then(() => {
        getAllPatterns();
      });
  };

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.form}>
        <CreatePattern {...other} color={color} />
      </div>

      <div className={styles.form}>
        <SavePattern name={name} setName={setName} savePattern={savePattern} />
      </div>

      <div className={styles.form}>
        <LoadPattern allPatterns={allPatterns} setGrid={setGrid} />
      </div>

      <div className={styles.grid}>
        <Columns grid={grid} color={color} setGrid={setGrid} />
      </div>
    </div>
  );
};

export default Dashboard;
