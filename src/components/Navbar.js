import React from "react";
import styles from "../assets/Navbar.module.css"; // import the styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#certifications">Certifications</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
