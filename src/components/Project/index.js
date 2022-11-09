import React from 'react';
import { GoMarkGithub } from "react-icons/go";


const Project = ({project, key}) => {
  return (
    <div key={key}>
      <div className="head-text">
        <div className="head-image">
          <img src={project.image} alt="project" />
        </div>
        <div className="text-on-image">
          <a href={project.url}>
            <h3>{project.name}</h3>
          </a>
          <a href={project.github}>
            <h2>
              <GoMarkGithub />
            </h2>
          </a>
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

// export default function Project({ image, title, deployed, repo }) {
//     return (
//         <div>
//             <img src={image} alt='project'/>
//             <div>{title}</div>
//             <a href={deployed}>Deployed</a>
//             <a href={repo}>Repo</a>
//         </div>
//     );
// }