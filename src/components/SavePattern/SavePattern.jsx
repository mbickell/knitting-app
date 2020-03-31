import React, { useState } from "react";
import styles from "./SavePattern.module.scss";

import Input from "../Input";

const SavePattern = ({ name, setName, savePattern }) => {
  return (
    <>
      <p>Give a name to your pattern: </p>
      <Input type="text" callback={event => setName(event.target.value)} value={name} />
      <button onClick={savePattern}>Save pattern</button>
    </>
  );
};

export default SavePattern;
