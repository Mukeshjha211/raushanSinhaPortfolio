import React from 'react';
import './Skills.css'; // We'll add this later

const Skills = () => {
  const skills = [
    { name: 'Web3 Technologies', level: 'Expert' },
    { name: 'Amazon Web Services (AWS)', level: 'Intermediate' },
    { name: 'Project Management', level: 'Intermediate' },
    { name: 'AWS DevOps Engineer', level: 'Intermediate' },
    { name: 'Operations Management', level: 'Beginner' }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
