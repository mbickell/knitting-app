import React, { useState, ChangeEvent } from "react";
import styles from "./NewPassword.module.scss";
import { RouteComponentProps } from "@reach/router";
import Input from "../../components/Input";

const NewPassword: React.FC<typeof RouteComponentProps> = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const newPassword = () => {
    alert("New password");
  };

  return (
    <section className={styles.newPassword}>
      <div className={styles.content}>
        <article>
          <h2>Reset password</h2>
          <div className={styles.form}>
            <label>Password:</label>
            <Input
              type="password"
              callback={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              value={password}
              placeholder="Email"
            />
            <label>Confirm password:</label>
            <Input
              type="password"
              callback={(event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
              placeholder="Confrim password"
            />
          </div>
          <button className={styles.button} onClick={newPassword}>
            Reset password
          </button>
          <p>{feedback}</p>
        </article>
      </div>
    </section>
  );
};

export default NewPassword;
