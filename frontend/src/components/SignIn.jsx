import React from "react";
import styles from "./signin.module.css";
import logo from "../assets/musicartLogo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Link to="/">
        <img className={styles.logo} src={logo}></img>
      </Link>
      {/* sign in box */}
      <div className={styles.signInBox}>
        <h2>Sign In</h2>
        <h5>Enter your email or mobile number</h5>
        <input className={styles.inputBox} type="text" />
        <h5>Password</h5>
        <input className={styles.inputBox} type="text" />
        <p>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
        <button className={styles.continuebtn}>Continue</button>
      </div>
      {/* end  */}
      <div className={styles.random}>
        <h5>
          <span>New to Musicart?</span>
        </h5>
      </div>
      <Link to="/signup">
        <button className={styles.signUpBtn} href="/signup">
          Create your Musicart Account
        </button>
      </Link>
    </div>
  );
};

export default SignIn;
