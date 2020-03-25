import React from "react";
import styles from "./Dashboard.module.scss";

import Input from "../../components/Input";
import Columns from "../Columns";

const Dashboard = ({ setColumns, columns, setRows, rows, color, setColor, grid, generateGridArray }) => {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.form}>
        <Input type="number" callback={event => setColumns(parseInt(event.target.value))} value={columns} />
        <Input type="number" callback={event => setRows(parseInt(event.target.value))} value={rows} />
        <button onClick={generateGridArray}>generate columns</button>
        <Input type="color" callback={event => setColor(event.target.value)} value={color} />
      </div>

      <div className={styles.grid}>
        <Columns grid={grid} color={color} />
      </div>
    </div>
  );
};

export default Dashboard;
