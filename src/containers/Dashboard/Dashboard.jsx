import React from "react";
import styles from "./Dashboard.module.scss";

import SavePattern from "../../components/SavePattern";
import CreatePattern from "../../components/CreatePattern";
import Columns from "../Columns";
import LoadPattern from "../LoadPattern/LoadPattern";

const Dashboard = props => {
  const { grid, color, user, setGrid, ...other } = props;

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.form}>
        <CreatePattern {...other} color={color} />
      </div>

      <div className={styles.form}>
        <SavePattern user={user} grid={grid} />
      </div>

      <div className={styles.form}>
        <LoadPattern />
      </div>

      <div className={styles.grid}>
        <Columns grid={grid} color={color} setGrid={setGrid} />
      </div>
    </div>
  );
};

export default Dashboard;
