import React from "react";
// import styles from "./CreatePattern.module.scss";

import Input from "../../components/Input";

const CreatePattern = ({ setColumns, columns, setRows, rows, color, setColor, generateGridArray }) => {
  return (
    <>
      <p>Set columns: </p>
      <Input type="number" callback={(event) => setColumns(parseInt(event.target.value))} value={columns} />
      <p>Set rows: </p>
      <Input type="number" callback={(event) => setRows(parseInt(event.target.value))} value={rows} />
      <button onClick={generateGridArray}>generate columns</button>
      <p>Pick color: </p>
      <Input type="color" callback={(event) => setColor(event.target.value)} value={color} />
    </>
  );
};

export default CreatePattern;
