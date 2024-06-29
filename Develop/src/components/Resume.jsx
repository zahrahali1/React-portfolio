import React from 'react';

const Resume = () => {
  return (
    <section className="section-center">
      <h1 style={{ marginBottom: '20px' }}>Resume</h1>
      <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Skills</h2>
        <ul style={{ paddingLeft: 0 }}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        </ul>
      </div>
      <div>
        <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Qualifications</h2>
        <ul style={{ paddingLeft: 0 }}>
          <li> GCSE - Computing</li>
          <li>Level 3 Cambridge Technical Diploma in IT - Northampton College</li>
          <li>Full stack bootcamp - University of Birmingham</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;