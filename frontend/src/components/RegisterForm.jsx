import React from "react";
import styles from "./registerform.module.css";
import logo from "../assets/musicartLogo.png";

const RegisterForm = () => {
  return (
    <div>
      {/* image logo  */}
      <div>
        <img className={styles.logo} src={logo}></img>
      </div>
      {/* signup box */}
      <div className={styles.signUpForm}>
        <h2>Create Account</h2>
        <h5>Your name</h5>
        <input className={styles.inputBox} type="text" />
        <h5>Mobile Number</h5>
        <input className={styles.inputBox} type="text" />
        <h5>Email Id</h5>
        <input className={styles.inputBox} type="text" />
        <h5>Password</h5>
        <input className={styles.inputBox} type="text" />
        <h5>
          By enrolling your mobile phone number, you consent to receive
          <br />
          automated security notifications via text message from Musicart.
          <br />
          Message and data rates may apply.
        </h5>
        <button className={styles.continuebtn}>Continue</button>
        <p>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
      {/* end  */}
      <div>
        <h5 style={{ textAlign: "center" }}>
          Already have an account?
          <span>
            <a href="/login" style={{ color: "black" }}>
              Sign In
            </a>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default RegisterForm;
