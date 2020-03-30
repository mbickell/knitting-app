import React, { useState } from "react";
import styles from "./SavePattern.module.scss";

import { firestore } from "../../firebase";

import Input from "../Input";

const SavePattern = ({ user, grid }) => {
  const [name, setName] = useState("");

  const savePattern = () => {
    let saveableGrid = {};

    grid.forEach((column, index) => {
      saveableGrid[`column-${index}`] = { column, index };
    });

    console.log(saveableGrid);

    firestore
      .collection("users")
      .doc(user.uid)
      .collection("patterns")
      .doc(name)
      .set({
        pattern: saveableGrid
      });
  };

  return (
    <>
      <p>Give a name to your pattern: </p>
      <Input type="text" callback={event => setName(event.target.value)} value={name} />
      <button onClick={savePattern}>Save pattern</button>
    </>
  );
};

export default SavePattern;
