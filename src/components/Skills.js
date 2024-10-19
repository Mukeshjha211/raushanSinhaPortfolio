import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React JS', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'MySQL', level: 'Beginner' },
    { name: 'MS Excel', level: 'Intermediate' },
    { name: 'Java', level: 'Beginner' },
    { name: 'C++', level: 'Beginner' },
    { name: 'C', level: 'Beginner' }
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
