import React from "react";
import "./Portfolio.css"; // We'll add this later
import catalystImage from '../Images/catalyst.jpeg'
import zoraverse from '../Images/zoraverse.jpeg'

const Portfolio = () => {
  const projects = [
    {
      title: "Zuraverse - Community Moderator",
      description: `As a Community Moderator for Zuraverse, a dynamic platform dedicated to building the future of decentralized gaming and virtual environments, I played a key role in fostering an engaging and inclusive community. My responsibilities included:

Managing community discussions across various platforms, ensuring a positive and collaborative environment.
Moderating user interactions to maintain a safe and respectful community atmosphere.
Addressing community concerns, providing real-time support, and relaying feedback to the development team.
Assisting in promoting events, new features, and platform updates to drive engagement and participation.
Helping the team grow and maintain the community by interacting with users, answering questions, and keeping the dialogue constructive.`,
      image: zoraverse,
    },
    {
      title: "Catalyst INJ - Community Moderator",
      description: `At Catalyst INJ, a cutting-edge decentralized finance (DeFi) protocol leveraging the Injective blockchain, I contributed as a Community Moderator by:

Facilitating discussions within the community, providing technical and non-technical support.
Ensuring that community members were well-informed about protocol updates, new initiatives, and governance processes.
Resolving disputes and addressing concerns, ensuring that the community remained aligned with Catalyst INJ's values.
Supporting engagement strategies to keep users informed about upcoming launches, partnerships, and governance proposals.
Coordinating with the core team to relay community feedback and provide insights for improving user experience.
`,
      image: catalystImage,
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
