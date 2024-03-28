import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./homepage.module.css";
import logo from "../assets/musicartLogo.png";
import headphonegirl from "../assets/headphonegirl.png";

const Homepage = () => {
  return (
    <div>
      <div className={styles.logodiv}>
        <img className={styles.logo} src={logo}></img>
        <NavLink to="/" active className={styles.homelink}>
          Home
        </NavLink>
      </div>
      <div className={styles.imageSection}>
        <div style={{ textAlign: "center" }}>
          <h1>Grab upto 50% off on Selected headphones</h1>
        </div>

        <div>
          <img src={headphonegirl} alt="A girl with headephones on" />
        </div>
      </div>
      <div>
        <input
          type="text"
          className={styles.searchbox}
          onkeyup="myFunction()"
          placeholder="Search by Product Name"
          title="Type in a name"
        />
      </div>
      <div>
        <select name="headphone" className="headphonetype">
          <option value="A">In ear headphone</option>
          <option value="A">On-ear headphone</option>
          <option value="A">Over-ear headphone</option>
        </select>
      </div>
    </div>
  );
};

export default Homepage;
