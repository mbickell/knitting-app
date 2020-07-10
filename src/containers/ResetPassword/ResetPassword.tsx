import React, { useState, ChangeEvent } from "react";
import styles from "./ResetPassword.module.scss";
import Input from "../../components/Input";
import { RouteComponentProps } from "@reach/router";

import firebase from "../../firebase";

const ResetPassword: React.FC<typeof RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setFeedback("Password reset email sent.");
      })
      .catch(error => {
        setFeedback(error.message);
      });
  };

  return (
    <section className={styles.resetPassword}>
      <div className={styles.content}>
        <article>
          <h2>Reset password</h2>
          <div className={styles.form}>
            <label>Email:</label>
            <Input
              type="email"
              callback={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              value={email}
              placeholder="Email"
            />
          </div>
          <button className={styles.button} onClick={resetPassword}>
            Reset password
          </button>
          <p>{feedback}</p>
        </article>
      </div>
    </section>
  );
};

export default ResetPassword;
