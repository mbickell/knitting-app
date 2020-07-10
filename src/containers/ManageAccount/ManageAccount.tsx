import React, { useState, ChangeEvent, useEffect } from "react";
import styles from "./ManageAccount.module.scss";
import { RouteComponentProps } from "@reach/router";
import Input from "../../components/Input";
import firebase from "../../firebase";
import { navigate } from "@reach/router";

interface parameters {
  [key: string]: string;
}

const ManageAccount: React.FC<typeof RouteComponentProps> = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [parameters, setParameteres] = useState<parameters>({});

  const newPassword = (): void => {
    if (password !== confirmPassword) {
      setFeedback("Please ensure your passwords match.");
      setPassword("");
      setConfirmPassword("");
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!?£$%*&@]{8,}$/)) {
      setFeedback(
        "Your password should contain 1 number, 1 uppercase and 1 lowercase character and be at least 8 characters long."
      );
      setPassword("");
      setConfirmPassword("");
    } else {
      firebase
        .auth()
        .confirmPasswordReset(parameters.oobCode, password)
        .then(() => {
          alert("Your password has been reset");
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              navigate("/dash");
            })
            .catch(error => {
              setFeedback(error.message);
            });
        })
        .catch(error => {
          // Handle Errors here.
          // const errorCode = error.code;
          const errorMessage = error.message;
          // alert(errorCode);
          setFeedback(errorMessage);
        });
    }
  };

  const getParameters = (query: string): void => {
    const parameters: parameters = {};
    const keys = query.substring(1).split("&");
    keys.forEach(key => {
      parameters[key.substring(0, key.indexOf("="))] = key.substring(key.indexOf("=") + 1);
    });
    setParameteres(parameters);
  };

  const verifyCode = (oobCode: string): void => {
    firebase
      .auth()
      .verifyPasswordResetCode(oobCode)
      .then(email => {
        setEmail(email);
      });
  };

  useEffect(() => {
    getParameters(location.search);
  }, [location]);

  useEffect(() => {
    if (parameters.hasOwnProperty("oobCode")) {
      verifyCode(parameters.oobCode);
    }
  }, [parameters]);

  return (
    <section className={styles.manageAccount}>
      <div className={styles.content}>
        <article>
          <h2>Reset password</h2>
          {email ? <h3>Your email: {email}</h3> : null}
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
          <p>
            Your password should contain 1 number, 1 uppercase and 1 lowercase character and be at least 8 characters
            long.
          </p>
          <button className={styles.button} onClick={newPassword}>
            Reset password
          </button>
          <p>{feedback}</p>
        </article>
      </div>
    </section>
  );
};

export default ManageAccount;
