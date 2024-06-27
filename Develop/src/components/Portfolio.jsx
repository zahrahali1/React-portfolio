import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      title: 'Project 1', 
      image: './public/images/Project 1.png', 
    },
    { 
      title: 'Project 2', 
      image: '/images/Project 2.png',
    },
  ];

  return (
    <section className="section-center">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;