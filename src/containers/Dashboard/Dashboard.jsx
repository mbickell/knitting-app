import React from "react";
import styles from "./Dashboard.module.scss";

import SavePattern from "../../components/SavePattern";
import CreatePattern from "../../components/CreatePattern";
import Columns from "../Columns";

const Dashboard = props => {
  const { grid, color, ...other } = props;

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.form}>
        <CreatePattern {...other} color={color} />
      </div>

      <div className={styles.form}>
        <SavePattern />
      </div>

      <div className={styles.grid}>
        <Columns grid={grid} color={color} />
      </div>
    </div>
  );
};

export default Dashboard;
