import React from "react";
import styles from "../assets/Certifications.module.css"; // import the styles

const Certifications = () => {
  const certifications = [
    "CompTIA IT Fundamentals",
    "AWS Certified Developer",
    "AWS Certified Solutions Architect",
    "Meta Back-End Developer",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Certifications</h1>
      <ul className={styles.certificationList}>
        {certifications.map((certification, index) => (
          <li key={index} className={styles.certificationItem}>
            {certification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
