import React from "react";
import "./Portfolio.css"; // Make sure to style your projects accordingly

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: `Built a personal portfolio website using HTML, CSS, and JavaScript to showcase my projects, skills, and experience. The site features a responsive design and smooth scrolling for easy navigation.`,
      image: "https://via.placeholder.com/150", // Dummy image
    },
    {
      title: "Task Tracker App",
      description: `Developed a Task Tracker using React JS and JavaScript. The app allows users to add, remove, and filter tasks with an intuitive user interface. The project demonstrates state management with React.`,
      image: "https://via.placeholder.com/150", // Dummy image
    },
    {
      title: "Weather Dashboard",
      description: `Created a Python-based Weather Dashboard that fetches real-time weather data using the OpenWeatherMap API. The dashboard includes search functionality and displays the current weather, temperature, and forecast.`,
      image: "https://via.placeholder.com/150", // Dummy image
    },
    {
      title: "Student Database Management System",
      description: `Built a Student Database Management System using Java and MySQL. The system allows users to add, update, and delete student records. It supports basic CRUD operations and demonstrates database connectivity.`,
      image: "https://via.placeholder.com/150", // Dummy image
    },
    {
      title: "Excel Automation Tool",
      description: `Developed an Excel Automation Tool using Python and the pandas library to automate data processing tasks. The tool helps users clean, organize, and analyze large Excel datasets with just a few clicks.`,
      image: "https://via.placeholder.com/150", // Dummy image
    },
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
