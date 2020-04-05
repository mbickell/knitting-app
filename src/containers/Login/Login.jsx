import React, { useState } from "react";
import styles from "./Login.module.scss";

import firebase from "../../firebase";

import Input from "../../components/Input";
import { navigate } from "@reach/router";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        setUser(user);
      })
      .then(() => {
        navigate("/dash");
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code ", errorCode);
        console.log("error message ", errorMessage);
      });
  };

  return (
    <article>
      <h2>Login</h2>
      <div className={styles.form}>
        <label>Email:</label>
        <Input type="email" callback={(event) => setEmail(event.target.value)} value={email} placeholder="Email" />
        <label>Password:</label>
        <Input
          type="password"
          callback={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Password"
        />
        <button className="button secondary" onClick={login}>
          Sign in
        </button>
      </div>
    </article>
  );
};

export default Login;
