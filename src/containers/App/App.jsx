import React, { useState } from "react";
import styles from "./App.module.scss";

import Square from "../../components/square/Square";

const App = () => {
  const [input, setInput] = useState("");
  const [chartSource, setChartSource] = useState([]);

  let chart = chartSource.map(cell => <Square type={cell} />);

  const addValueToChart = event => {
    // Take input value from input and add it to chartSource array
    event.preventDefault();
    let modifiedSource = [...chartSource];
    modifiedSource.push(input);
    setChartSource(modifiedSource);
  };
  return (
    <>
      <div className={styles.chart}>{chart}</div>
      <form onSubmit={addValueToChart}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value.toLowerCase())}
          id="cell"
        />
        <button type="submit">Add Cell</button>
      </form>
    </>
  );
};

export default App;
