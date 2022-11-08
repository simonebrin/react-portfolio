import React from 'react';

const Project = ({project, key}) => {
  return (
    <div key={key}>
      <div className="head-text">
        <div className="head-image">
                  <img src={project.image} alt="project" />
        </div>
        <div className="text-on-image">
          <h3>{project.name}</h3>
          <a href={project.url}>Here is a link</a>
        </div>
      </div>
    </div>
  );
}

export default Project

// const Project = ({ project, key }) => {
//   return (
//     <div key={key}>
//       <img src={project.image} alt="project" />
//       <h3>{project.name}</h3>
//       <a href={project.url}>Here is a link</a>
//     </div>
//   );
// };