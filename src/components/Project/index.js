import React from 'react'

const Project = ({project, key}) => {
  return (
      <div key={key}>
      <h3>{project.name}</h3>
      <a href={project.url}>Here is a link</a>
    </div>
  );
}

export default Project