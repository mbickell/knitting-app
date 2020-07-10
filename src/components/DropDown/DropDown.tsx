import React from "react";
import styles from "./DropDown.module.scss";

interface Grid {
  grid: string[][];
  name: string;
}

interface Props {
  allPatterns: Grid[];
  setGrid: React.Dispatch<React.SetStateAction<Grid | null>>;
}

const DropDown: React.FC<Props> = ({ children, setGrid, allPatterns }) => {
  return (
    <div className={styles.dropdown}>
      <select name="patterns" id="patterns" onChange={event => setGrid(allPatterns[parseInt(event.target.value)])}>
        {children}
      </select>
    </div>
  );
};

export default DropDown;
