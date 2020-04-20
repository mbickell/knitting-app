import React from "react";
// import styles from "./LoadPattern.module.scss";
import DropDown from "../DropDown/DropDown";

const LoadPattern = ({ allPatterns, setGrid }) => {
  return (
    <>
      <h2>Load pattern</h2>
      <DropDown>
        {allPatterns.map((pattern) => (
          <p key={pattern.name} onClick={() => setGrid(pattern)}>
            {pattern.name}
          </p>
        ))}
      </DropDown>
    </>
  );
};

export default LoadPattern;
