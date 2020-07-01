import React from "react";
import styles from "./SavePattern.module.scss";

import Input from "../Input";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  savePattern: () => void;
}

const SavePattern: React.FC<Props> = ({ name, setName, savePattern }) => {
  return (
    <section className={styles.inputs}>
      <p>Give a name to your pattern: </p>
      <Input type="text" placeholder="Pattern name" callback={event => setName(event.target.value)} value={name} />
      <button onClick={savePattern}>Save pattern</button>
    </section>
  );
};

export default SavePattern;
