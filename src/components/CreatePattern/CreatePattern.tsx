import React from "react";
import styles from "./CreatePattern.module.scss";

import Input from "../Input";

interface Props {
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columns: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  generateGridArray: () => void;
}

const CreatePattern: React.FC<Props> = ({ setColumns, columns, setRows, rows, color, setColor, generateGridArray }) => {
  return (
    <section className={styles.inputs}>
      <h2>Create pattern</h2>
      <p>Set columns: </p>
      <Input
        placeholder="No. of columns"
        type="number"
        callback={event => setColumns(parseInt(event.target.value))}
        value={`${columns}`}
      />
      <p>Set rows: </p>
      <Input
        placeholder="No. of rows"
        type="number"
        callback={event => setRows(parseInt(event.target.value))}
        value={`${rows}`}
      />
      <button onClick={generateGridArray}>generate columns</button>
      <p>Pick color: </p>
      <Input placeholder="color" type="color" callback={event => setColor(event.target.value)} value={color} />
    </section>
  );
};

export default CreatePattern;
