import React from 'react';

const Resume = () => {
  return (
    <section className="section-center">
      <h1 style={{ marginBottom: '20px' }}>Resume</h1>
      <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Skills</h2>
        <ul style={{ paddingLeft: 0 }}>
        <ul>JavaScript</ul>
        <ul>React</ul>
        <ul>Node.js</ul>
        <ul>CSS</ul>
        <ul>HTML</ul>
        </ul>
      </div>
      <div>
        <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Qualifications</h2>
        <ul style={{ paddingLeft: 0 }}>
          <ul> GCSE - Computing</ul>
          <ul>Level 3 Cambridge Technical Diploma in IT - Northampton College</ul>
          <ul>Full stack bootcamp - University of Birmingham</ul>
        </ul>
      </div>
    </section>
  );
};

export default Resume;