import React from "react";
import styles from "./App.module.scss";

import Square from "../../components/square/Square";

const App = () => {
  let chartSource = [0, 0, 0, 0, 0];

  let chart = chartSource.map(cell => <Square type={cell} />);

  return <div>{chart}</div>;
};

export default App;
