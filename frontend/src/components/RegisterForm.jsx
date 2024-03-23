import React from "react";
import styles from "./registerform.module.css";
import logo from "../assets/musicartLogo.png";

const RegisterForm = () => {
  return (
    <div>
      <img className={styles.logo} src={logo}></img>
    </div>
  );
};

export default RegisterForm;
