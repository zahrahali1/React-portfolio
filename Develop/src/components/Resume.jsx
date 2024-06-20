import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path_to_your_resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li><img src="MyFirstPortfolio.png" alt="My first portfolio" /></li>
        <li><img src="Tripclick.png" alt="Tripclick Project" /></li>
        <li><img src="Biblity.png" alt="Biblity Project" /></li>
      </ul>
    </section>
  );
};

export default Resume;