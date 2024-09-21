import React from 'react';
import './Education.css'; // We'll add this later

const Education = () => {
  const education = [
    {
      institution: 'IIMT College of Science & Technology',
      degree: 'Bachelor of Science in Computer Science',
      dates: '2019 - 2023',
      details: 'Honed skills in Web3 technologies, AWS, Nonprofit Organizations, and Operations Management.'
    },
    {
      institution: 'Certification',
      degree: 'AWS DevOps Engineer',
      dates: 'Completed in 2022',
      details: 'Certification in AWS DevOps practices and technologies.'
    },
    {
      institution: 'Certification',
      degree: 'Project Management',
      dates: 'Completed in 2021',
      details: 'Certification in project management methodologies and practices.'
    }
    // Add more educational qualifications and certifications as needed
  ];

  return (
    <section className="education">
      <h2>Education & Certifications</h2>
      <div className="education-container">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-institution">{item.institution}</p>
            <p className="education-dates">{item.dates}</p>
            <p className="education-details">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
