
import React from 'react';

function Skills() {
  const skills = ['React.js', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git', 'Java', 'Python', 'Laravel'];

  return (
    <section className="card">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
