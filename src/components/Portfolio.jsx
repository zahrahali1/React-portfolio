import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'First Portfolio',
      image: '/images/First Portfolio.png',
      link: 'https://zahrahali1.github.io/week-2-professional-portfolio-challenge/',
      repo: 'https://github.com/zahrahali1/week-2-professional-portfolio-challenge'
    },
    {
      title: 'Quiz Challenge',
      image: '/images/Quiz Challenge.png',
      link: 'https://zahrahali1.github.io/week-4-Code-Quiz-challenge/',
      repo: 'https://github.com/zahrahali1/week-4-Code-Quiz-challenge'
    },
    {
      title: 'Weather Dashboard',
      image: '/images/Weather Dashboard.png',
      link: 'https://zahrahali1.github.io/weather-dashboard/',
      repo: 'https://github.com/zahrahali1/weather-dashboard'
    },
    {
      title: 'Project 1',
      image: '/images/Project 1.png',
      link: 'https://isazafeer.github.io/tripclick-project/',
      repo: 'https://isazafeer.github.io/tripclick-project/'
    },
    {
      title: 'Project 2',
      image: '/images/Project 2.png',
      link: 'https://james21198.github.io/Biblity-Project/',
      repo: 'https://biblity-project-1.onrender.com'
    },
  ];

  return (
    <section className="section-center">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-center {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border-top: 1px solid #000;
        }

        .projects {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
        }

        .project {
          width: calc(40% - 30px);
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
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .project a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: #0070f3;
        }

        .project a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;