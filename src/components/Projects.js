import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with React.js to showcase my work.',
      link: 'dummy-link',
    },
    {
      name: 'E-Commerce App',
      description: 'A fully functional e-commerce application built with React and Laravel.',
      link: 'dummylink',
    },
  ];

  return (
    <section className="cardProjects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
