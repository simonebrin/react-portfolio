import React, { useState } from 'react';
import Project from '../Project';
import firstPhoto from '../../assets/portfolioImages/runbuddy.jpg';
import secondPhoto from '../../assets/portfolioImages/emoji.png'

const Portfolio = () => {
    // const [projects] = useState([{ name: 'project1', url: 'https://www.google.com', image: '' }, { name: 'project2', url: 'https://www.youtube.com' }, { name: 'project3', url: 'https://www.google.com' }])
    // const [projects] = useState([{
    //      name: 'project1', photo: { firstPhoto },
    // }]);
    const [projects] = useState([{
        id: '1',
        image: firstPhoto,
        name: 'project1',
        url: 'https://www.google.com'
    },
        {
        id: '2',
        image: secondPhoto,
        name: 'project2',
        url: 'https://www.youtube.com'
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