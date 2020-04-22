import React, { useState, ChangeEvent } from "react";
import styles from "./SignUp.module.scss";
import firebase from "../../firebase";

import Input from "../../components/Input";
import { navigate, RouteComponentProps } from "@reach/router";
import { FirebaseError } from "firebase";

const SignUp: React.FC<typeof RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const createUser = (): void => {
    if (password === confirmedPassword && email.includes("@") && email.includes(".", email.indexOf("@"))) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setConfirmedPassword("");
          navigate("/dash");
        })
        .catch((error: FirebaseError) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error code ", errorCode);
          console.log("error message ", errorMessage);
        });
    } else {
      alert("Please ensure your password match and the email is filled out correctly");
      setPassword("");
      setConfirmedPassword("");
    }
  };

  return (
    <>
      <h2>Sign up</h2>
      <div className={styles.form}>
        <label>Email:</label>
        <Input
          type="email"
          callback={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
        />
        <label>Password:</label>
        <Input
          type="password"
          callback={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          value={password}
          placeholder="Password"
        />
        <label>Confirm password:</label>
        <Input
          type="password"
          callback={(event: ChangeEvent<HTMLInputElement>) => setConfirmedPassword(event.target.value)}
          value={confirmedPassword}
          placeholder="Confrim password"
        />
        <button onClick={createUser}>Sign up</button>
      </div>
    </>
  );
};

export default SignUp;
