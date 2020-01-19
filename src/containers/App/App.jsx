import React from "react";
import styles from "./App.module.scss";

import Square from "../../components/square/Square";

const App = () => {
  let chartSource = ["red", "/", "green", 0, 0];

  let chart = chartSource.map(cell => <Square type={cell} />);

  const addValueToChart = () => {
    // Take input value from input and add it to chartSource array
  };
  return (
    <>
      <div className={styles.chart}>{chart}</div>
      <input type="text" name="cell" id="cell" />
    </>
  );
};

export default App;
