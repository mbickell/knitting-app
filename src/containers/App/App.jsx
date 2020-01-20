import React, { useState } from "react";
import styles from "./App.module.scss";

import Square from "../../components/square/Square";

const App = () => {
  const [input, setInput] = useState("");
  const [chartSource, setChartSource] = useState([]);

  const addValueToChart = event => {
    // Take input value from input and add it to chartSource array
    event.preventDefault();
    let modifiedSource = [...chartSource];
    modifiedSource.push(input);
    setChartSource(modifiedSource);
  };

  const removeValueFromChart = key => {
    let modifiedSource = [...chartSource];
    modifiedSource[key] = "";
    console.log(modifiedSource);
    setChartSource(modifiedSource);
  };

  let chart = chartSource.map((cell, index) =>
    cell ? (
      <Square
        type={cell}
        key={index}
        index={index}
        removeCell={removeValueFromChart}
      />
    ) : null
  );

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
