import React from "react";
import styles from "./LoadPattern.module.scss";
import DropDown from "../../components/DropDown/DropDown";

const LoadPattern = ({ allPatterns, setGrid }) => {
  return (
    <>
      <h2>Load pattern</h2>
      <DropDown>
        {allPatterns.map(pattern => (
          <p onClick={() => setGrid(pattern)}>{pattern.name}</p>
        ))}
      </DropDown>
    </>
  );
};

export default LoadPattern;
