import React from "react";
import styles from "./signin.module.css";
import logo from "../assets/musicartLogo.png";

const SignIn = () => {
  return (
    <div>
      <img className={styles.logo} src={logo}></img>
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
      <button className={styles.signUpBtn}>Create your Musicart Account</button>
    </div>
  );
};

export default SignIn;
