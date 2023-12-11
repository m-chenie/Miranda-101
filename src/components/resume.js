import React from 'react';

import ResumeRef from '../resume_ml.pdf';

const Resume = () => {
  const pdfFile = 'Resume_long.pdf';
  return (
    <section id="resume">
        <div className='pdfViewer'>
          <h1 className='allProjectHeader mb-3'>Miranda's Resume</h1>
          <object data={ResumeRef} type="application/pdf" width="100%" height="100%">
          </object>
        </div>
    </section>
  );
};

export default Resume;
