import React, { useState } from 'react';
import Project from '../Project'

const Portfolio = () => {
    const [projects] = useState([{ name: 'project1', url: 'https://www.google.com' }, { name: 'project2', url: 'https://www.youtube.com' }, { name: 'project3', url: 'https://www.google.com'}])
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
}

export default Portfolio