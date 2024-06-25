import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', link: 'http://project1.com', repo: 'http://github.com/project1' },
    { title: 'Project 2', link: 'http://project2.com', repo: 'http://github.com/project2' },
    
  ];

  return ( 
    <section> 
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;