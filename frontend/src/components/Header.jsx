import React from "react";
import styles from "./header.module.css";
import { FiPhoneCall } from "react-icons/fi";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div id="left-side">
        <FiPhoneCall /> 912121131313
      </div>
      <div id="middle">Get 50% off on selected items | Shop Now</div>
      <div id={styles.rightSide}>
        <ul>
          <li>Login |</li>
          <li>Signup</li>
        </ul>
      </div>
    </div>
  );
};
