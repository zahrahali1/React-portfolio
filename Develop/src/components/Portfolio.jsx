import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      title: 'Project 1', 
      image: './public/images/First portfolio.png', 
    },
    { 
      title: 'Project 2', 
      image: '/images/Quiz Challenge.png',
    },
    { 
      title: 'Project 3', 
      image: './public/images/Weather Dashboard.png', 
    },
    { 
      title: 'Project 4', 
      image: '/images/Project 1.png',
    },
    { 
      title: 'Project 5', 
      image: './public/images/Project 2.png', 
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

      <style jsx>{`
        .section-center {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border-top: 1px solid #000; /* Corrected border syntax */
        }

        .projects {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between; /* Distribute projects evenly */
        }

        .project {
          width: calc(40% - 30px); /* Adjust width for 5 projects per row with gap */
          text-align: center;
          margin-bottom: 20px;
        }

        .project h3 {
          margin-bottom: 10px;
        }

        .project-image {
          max-width: 100%;
          height: auto;
          display: block;
          border-radius: 8px; /* Optional: Add border-radius for rounded corners */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow for depth */
        }
      `}</style>
    </section>
  );
};

export default Portfolio;