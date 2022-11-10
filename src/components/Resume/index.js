import React from 'react';
import resumeImage from '../../assets/resumeImage/resumeImage.png'
import resume from '../../assets/resumeImage/simone brin resume.pdf'

const Resume = () => {
    return (
      <div>
        <a download={resume} href={resumeImage}>
          <img src={resumeImage} alt="resume" />
        </a>
      </div>
    );
}

export default Resume;