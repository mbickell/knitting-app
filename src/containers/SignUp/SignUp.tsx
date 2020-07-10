import React, { useState, ChangeEvent } from "react";
import styles from "./SignUp.module.scss";
import firebase from "../../firebase";

import Input from "../../components/Input";
import { navigate, RouteComponentProps, Link } from "@reach/router";
import { FirebaseError } from "firebase";

const SignUp: React.FC<typeof RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const createUser = (): void => {
    if (!(email.includes("@") && email.includes(".", email.indexOf("@")))) {
      setError("Please ensure you have entered your email correctly.");
    } else if (password !== confirmedPassword) {
      setError("Please ensure your passwords match.");
      setPassword("");
      setConfirmedPassword("");
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!?£$%*&@]{8,}$/)) {
      setError(
        "Your password should contain 1 number, 1 uppercase and 1 lowercase character and be at least 8 characters long."
      );
      setPassword("");
      setConfirmedPassword("");
    } else {
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
          // const errorCode = error.code;
          const errorMessage = error.message;
          // alert(errorCode);
          setError(errorMessage);
        });
    }
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.content}>
        <article>
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
            <p>
              Your password should contain 1 number, 1 uppercase and 1 lowercase character and be at least 8 characters
              long.
            </p>
            <p className={styles.error}>{error}</p>
          </div>
          <button className={styles.button} onClick={createUser}>
            Sign up
          </button>
        </article>
        <Link to="/" className={styles.button}>
          Login
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
