import React from 'react';
import './WorkExperience.css'; // We'll add this later

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Zuraverse',
      position: 'Developer Relations (DevRel) Professional',
      dates: 'Jan 2023 - Present',
      description: 'Cultivating and nurturing a thriving community of developers, enthusiasts, and stakeholders in the Web3 domain. Providing technical support, facilitating knowledge sharing, and advocating for the possibilities of Web3 technologies.'
    },
    {
      company: 'Tech Innovations Inc.',
      position: 'Software Engineer Intern',
      dates: 'Jun 2022 - Dec 2022',
      description: 'Assisted in the development of internal tools and applications. Worked closely with senior developers to troubleshoot and resolve issues, and contributed to the improvement of software performance and scalability.'
    },
    // Add more experiences as needed
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-position">{experience.position}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-dates">{experience.dates}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
