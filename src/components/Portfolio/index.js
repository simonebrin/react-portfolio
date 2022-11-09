import React, { useState } from 'react';
import Project from '../Project';
import firstPhoto from '../../assets/portfolioImages/runbuddy.jpg';
import secondPhoto from '../../assets/portfolioImages/emoji.png'



const Portfolio = () => {

    const [projects] = useState([{
        id: '1',
        image: firstPhoto,
        name: 'project1',
        url: 'https://www.google.com',
        github: 'github.com/simonebrin'
    },
        {
        id: '2',
        image: secondPhoto,
        name: 'project2',
            url: 'https://www.youtube.com',
            github: 'github.com/simonebrin'
    }
    ])
return (
    <div>
      {projects.map((project) => (
          <Project project={project} key={project.name} img src={project.image} />
      ))}
    </div>
  );
}

export default Portfolio

// const Portfolio = () => {
//   //     // const [projects] = useState([{ name: 'project1', url: 'https://www.google.com', image: '' }, { name: 'project2', url: 'https://www.youtube.com' }, { name: 'project3', url: 'https://www.google.com' }])
//   //     // const [projects] = useState([{
//   //     //      name: 'project1', photo: { firstPhoto },
//   //     // }]);
// }


//   return (
//     <div>
//       {projects.map((e, project) => (
//           <Project photo={e.photo}
//               text={e.name}
//               key={e.name} />
//       ))}
//     </div>
//   );
// }

// const projectInfo = [
//     {
//         image: firstPhoto,
//         title: 'Run Buddy',
//         deployed: 'google.com',
//         repo: 'google.com',
//     },
// ];

// export default function Portfolio() {
//     return (
//         <div>
//             <h1>Run Buddy</h1>
//             {projectInfo.map((project) => (
//                 <Project {...project} />
//             ))}
//         </div>
//     );
// }