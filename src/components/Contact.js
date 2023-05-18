import React from "react";
import styles from "../assets/Contact.module.css";

const Contact = () => {
  const contactInfo = {
    email: "your-email@example.com",
    phone: "123-456-7890",
    linkedIn: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourusername",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </li>
        <li className={styles.contactItem}>Phone: {contactInfo.phone}</li>
        <li className={styles.contactItem}>
          LinkedIn:{" "}
          <a
            href={contactInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Your LinkedIn
          </a>
        </li>
        <li className={styles.contactItem}>
          Github:{" "}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Github
          </a>
        </li>
        <li className={styles.contactItem}>
          Instagram:{" "}
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
