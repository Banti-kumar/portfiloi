import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  movies,
  ecomm,
  carsgame,
  threejs,
  costa,
  selectsource,
  crossml,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Enginner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Enginner",
    company_name: "Select Source International",
    icon: costa,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Nov 2024",
    points: [
      "Developed and implemented a robust software solution that revolutionized the approval processes across departments, ensuring seamless coordination and reducing time-to-approval by 50%; this resulted in improved efficiency, enhanced collaboration, and accelerated project delivery timelines(Paperless Office).",
      "Successfully created Data Management System using React.js, Material-Ui, Redux that allows users to upload, delete, download, favoriting, and sharing files and folders similar to Google Drive that reduces the real paper-work by 100% .",
      "Collaborated with developers to design and develop a user- friendly front-end interface of RTI (Right to Information) application with an optimized user experience; boosted user engagement by 25% and reduced bounce rate by 15% .",
      "Orchestrated the development of algorithms, API integration and flowchart with a team of 5 developers ; delivered a fully functional and scalable application that processed 50K+ data points daily with 99% accuracy .",
      "Resolve the daily basis issue, bug or any additional feature that provided in Jira by Testing Unit which makes application bug-free and updated to the current requirement by 100% .",
    ],
  },
  {
    title: "React associate developer",
    company_name: "Cross ml Private Limited",
    icon: crossml,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "I am responsible for managing the UI (User Interface) of the project, ensuring that it is visually appealing, user-friendly, and fully responsive. This includes implementing modern design principles, maintaining design consistency, and optimizing the user experience (UX)",
      "In addition to UI management, I also handle cross-functional integration between the frontend and backend. This involves managing API integrations, ensuring seamless data flow, and working with state management tools like Redux to maintain application stability.",

      "Beyond UI and integration, I am also responsible for AI implementation within the project. This includes integrating AI-powered features, optimizing machine learning models, and ensuring the AI-driven functionalities align with project requirements. I work with AI APIs, real-time data processing, and dynamic AI-generated content to enhance the application's intelligence and interactivity.",
      "Furthermore, I also develop backend APIs tailored to AI-related requirements. This involves creating and optimizing server-side endpoints, handling data processing, and ensuring efficient communication between the AI models and the application.",
      "Resolve the daily basis issue, bug or any additional feature that provided in Jira by Testing Unit which makes application bug-free and updated to the current requirement by 100% .",
    ],
  },
];

const projects = [
  {
    name: "MOVIESVERSE",
    description:
      "A simple web app made with REACT to search any movie and Web/TV show. Technology used are react.js , material-ui, tmdb-api for all data related queries,redux-toolkit, redux-toolkit-query.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
  },
  {
    name: "Two Cars-MASTER GAME",
    description:
      "Utilize HTML, CSS and JavaScript to create a interactive game, featuring two cars and challenging obstacles ; increased user engagement and retention by 40% through immersive gameplay mechanics.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carsgame,
  },
  {
    name: "Products",
    description:
      "Elevate your business with our high-performance MERN stack e-commerce platform. Featuring an intuitive admin panel, Stripe payment integration, cloud deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
  },
];

export { services, technologies, experiences, projects };

// comment
