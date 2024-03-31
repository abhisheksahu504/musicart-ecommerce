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
      <div className={styles.container}>
        <select name="headphone" className={styles.headphonetype}>
          <option value="A">Headphone types</option>
          <option value="A">In ear headphone</option>
          <option value="A">On-ear headphone</option>
          <option value="A">Over-ear headphone</option>
        </select>
        <select name="company" className={styles.headphonetype}>
          <option value="A">Company</option>
          <option value="A">JBL</option>
          <option value="A">Sony</option>
          <option value="A">Zebronics</option>
          <option value="A">Boat</option>
          <option value="A">Ptron</option>
        </select>
        <select name="Color" className={styles.headphonetype}>
          <option value="A">Color</option>
          <option value="A">Blue</option>
          <option value="A">Black</option>
          <option value="A">White</option>
          <option value="A">Brown</option>
        </select>
        <select name="Price" className={styles.headphonetype}>
          <option value="A">Price</option>
          <option value="A">₹0-₹1000</option>
          <option value="A">₹1000-₹3000</option>
          <option value="A">₹3000-₹5000</option>
        </select>
        <select name="Sort" className={styles.sort}>
          <option value="A">Sort By</option>
          <option value="A">Feature</option>
          <option value="A">Price : Lowest</option>
          <option value="A">Price : Highest</option>
          <option value="A">Name : A-Z</option>
          <option value="A">Name : Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Homepage;
