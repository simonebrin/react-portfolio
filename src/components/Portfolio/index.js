import React from 'react';
import Project from '../Project';
import firstPhoto from '../../assets/portfolioImages/runbuddy.jpg';
import secondPhoto from '../../assets/portfolioImages/emoji.png';
import thirdPhoto from '../../assets/portfolioImages/artCritic.png';
import fourthPhoto from '../../assets/portfolioImages/Horiseon.png';
import fifthPhoto from '../../assets/portfolioImages/scheduler.png';
import sixthPhoto from '../../assets/portfolioImages/weather.png'



const Portfolio = () => {

    const projects = [
      {
        id: "1",
        image: firstPhoto,
        name: "Run Buddy",
        url: "https://simonebrin.github.io/run-buddy/",
        github: "https://github.com/simonebrin/run-buddy",
      },
      {
        id: "2",
        image: secondPhoto,
        name: "Emoji Finder",
        url: "https://tillzmh.github.io/Project1/",
        github: "https://github.com/tillzmh/Project1",
      },
      {
        id: "3",
        image: thirdPhoto,
        name: "Art Critic",
        url: "https://lit-woodland-94580.herokuapp.com/",
        github: "https://github.com/simonebrin/art-critic",
      },
      {
        id: "4",
        image: fourthPhoto,
        name: "Horiseon",
        url: "https://simonebrin.github.io/Project-1/",
        github: "https://github.com/simonebrin/Project-1",
      },
      {
        id: "5",
        image: fifthPhoto,
        name: "Scheduler",
        url: "https://simonebrin.github.io/weekday-planner/",
        github: "https://github.com/simonebrin/weekday-planner",
      },
      {
        id: "6",
        image: sixthPhoto,
        name: "Weather Dashboard",
        url: "https://simonebrin.github.io/weather-dashboard/",
        github:
          "https://github.com/simonebrin/weather-dashboard",
      },
    ];
return (
    <div>
      {projects.map((project) => (
          <Project project={project} key={project.name} src={project.image} />
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