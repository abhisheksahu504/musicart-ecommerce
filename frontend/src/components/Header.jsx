import React from "react";
import styles from "./header.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div id="left-side">
        <FiPhoneCall /> 912121131313
      </div>
      <div id="middle">
        Get 50% off on selected items |{" "}
        <Link style={{ color: "white" }} to="/">
          Shop Now
        </Link>
      </div>
      <div id={styles.rightSide}>
        <ul>
          <li>
            <Link to="/login" style={{ color: "white" }}>
              Login |
            </Link>
          </li>
          <li>
            <Link to="/signup" style={{ color: "white" }}>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
