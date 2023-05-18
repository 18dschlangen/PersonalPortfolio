import React from "react";
import profilePic from "../images/profilePic.jpg"; // replace with the path to your image
import styles from "../assets/About.module.css"; // import the styles from the correct location

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "MongoDB",
    "Express.js",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <img src={profilePic} alt="profile" className={styles.image} />
      <p>
        Hi! My name is John Doe. I'm a web developer with a passion for
        front-end technologies like React and Vue. I have 3 years of experience
        in the field and have worked on a variety of projects, including
        eCommerce websites, portfolio sites, and internal tools.
      </p>
      <p>
        I graduated from XYZ University with a degree in Computer Science and
        have since continuously improved my skills and kept up with the latest
        industry trends. My strengths lie in my ability to solve complex
        problems, my strong communication skills, and my dedication to
        continuously improving my skills.
      </p>
      <p>
        In my free time, I enjoy contributing to open-source projects and
        learning new programming languages. I'm currently learning Go and
        finding it very interesting!
      </p>

      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
