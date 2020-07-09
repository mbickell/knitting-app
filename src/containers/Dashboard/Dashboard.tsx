import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import { firestore } from "../../firebase";
import { RouteComponentProps } from "@reach/router";

import SavePattern from "../../components/SavePattern";
import CreatePattern from "../../components/CreatePattern";
import Columns from "../Columns";
import LoadPattern from "../../components/LoadPattern";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Grid {
  grid: string[][];
  name: string;
}

interface Props {
  path: typeof RouteComponentProps;
  grid: Grid | null;
  color: string;
  user: firebase.User | null;
  setGrid: React.Dispatch<React.SetStateAction<Grid | null>>;
  allPatterns: Grid[];
  getAllPatterns: () => void;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columns: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  generateGridArray: () => void;
  logout: () => void;
}

interface SaveableGrid {
  [index: string]: { column: string[]; index: number };
}

const Dashboard: React.FC<Props> = ({ grid, color, user, setGrid, allPatterns, getAllPatterns, logout, ...other }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const savePattern = (): void => {
    let saveableGrid: SaveableGrid = {};

    if (user && grid) {
      grid.grid.forEach((column, index) => {
        saveableGrid[`column-${index}`] = { column, index };
      });
      firestore
        .collection("users")
        .doc(user.uid)
        .collection("patterns")
        .doc(name)
        .set({
          pattern: saveableGrid
        })
        .then(() => {
          getAllPatterns();
        });
    }
  };

  return (
    <div className={styles.dashboard}>
      {window.innerWidth >= 769 ? null : (
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.icon} ${open ? styles.hide : ""}`}
          onClick={() => setOpen(true)}
        />
      )}
      <section className={`${styles.sidebar} ${open ? "" : styles.hide}`}>
        {window.innerWidth >= 769 ? null : (
          <FontAwesomeIcon icon={faTimes} className={open ? "" : styles.hide} onClick={() => setOpen(false)} />
        )}
        <div className={styles.form}>
          <LoadPattern allPatterns={allPatterns} setGrid={setGrid} />
        </div>

        <div className={styles.form}>
          <CreatePattern {...other} color={color} />
        </div>

        <div className={styles.form}>
          <SavePattern name={name} setName={setName} savePattern={savePattern} />
        </div>

        <div className={styles.signOut}>
          <button onClick={logout}>Sign out</button>
        </div>
      </section>

      <section className={styles.centerGrid}>
        <div className={styles.grid}>{grid ? <Columns grid={grid} color={color} setGrid={setGrid} /> : null}</div>
      </section>
    </div>
  );
};

export default Dashboard;
