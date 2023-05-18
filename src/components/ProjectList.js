import React from "react";
import styles from "../assets/ProjectList.module.css";

const Project = ({ name, imageUrl, projectUrl }) => {
  return (
    <div className={styles.project}>
      <img className={styles.projectImage} src={imageUrl} alt={name} />
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>
  );
};

const ProjectList = () => {
  const projects = [
    {
      name: "Project 1",
      imageUrl: "url/to/project1/image",
      projectUrl: "url/to/project1",
    },
    {
      name: "Project 2",
      imageUrl: "url/to/project2/image",
      projectUrl: "url/to/project2",
    },
    // Add more projects here...
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
