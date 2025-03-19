import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Highly motivated and skilled Frontend Developer with over 2.10 years of experience in building responsive and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Nextjs. Experienced in collaborating with cross-functional teams to deliver high-quality web solutions, optimizing performance, and ensuring a seamless user experience. A passion for staying up-to-date with the latest frontend development trends and technologies. Able to work independently and as part of a team to meet project goals and deadlines.`;

export const ABOUT_TEXT = `I am a dedicated and versatile react developer with a passion for creating efficient and user-friendly web applications. With 2.10 years of professional experience, I have worked with a variety of technologies, including React, Next.js, MariaDB, Laravel. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "May 2022 - Present",
        role: "Full Stack Developer",
        company: "Aissel Technologies Pvt Ltd.",
        description: `Led a team in developing and maintaining web applications using JavaScript, Bootstrap, React Component Libraries, React.js, and Next.js. Integrated RESTful APIs using axios in React.js and Next.js. Collaborated with Seniors to define project requirements and timelines.`,
        technologies: ["Bootstrap", "Javascript", "React.js", "Next.js", "Laravel", "Codeigniter", "MariaDB"],
    },
    {
        year: "June 2019 - Nov 2021",
        role: "Operations Executive",
        company: "Arera Healthcare & Technologies",
        description: `Handling the transportation department operations, Writing up reports on business operations for the executive staff, Creating a positive culture where the work can get done.`,
        technologies: ["MS Office"],
    }
];

export const PROJECTS = [
  {
    title: "Konectar 2.0 (KOL's Management Application)",
    image: project1,
    description:`Built a responsive web app with API’s integration to allow users to engage relevant medical professionals across different therapeutic areas with actionable insights to identify KOL’s/HCPs. Built features like user authentication, charts for data analytics, PWA using next-pwa package etc.`,
    technologies: ["HTML", "CSS", "React", "Next.js", "Bootstrap"],
  },
  {
    title: "Konectar Events Mobile App",
    image: project2,
    description:
      "An application for managing events(upcoming events) and events insights, with features such as insight, session notes creation, and progress tracking. Built API's in Codeigniter for Konectar Events Mobile App.",
    technologies: ["PHP", "Codeigniter", "MariaDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Contract Management",
    image: project4,
    description:`Built a responsive web app that seamlessly integrates document e-signature functionality to enhance the efficiency and security of contract process. Utilized Laravel blade template engine a PHP framework to build a scalable responsive web application.`,
    technologies: ["HTML", "CSS", "Laravel", "Bootstrap"],
  },
  {
    title: "Next.js Documentation Library",
    image: project1,
    description:`Built a responsive web app that seamlessly integrates react-bootstrap and react-suite component libraries, Echarts library for data visualization, tabulator js library for data listing in grid. Gives a descriptive information on how component libraries, JS libraries, Echarts library setup and usage in Next.js Application, and Forms Components, Reusable Components can be built in Next.js Application.`,
    technologies: ["HTML", "CSS", "React", "Next.js", "Bootstrap"],
  },
  {
    title: "Konectar Surveys",
    image: project4,
    description:`Developed the event survey functionality, allowing users to select events, speakers, and view related sessions with real-time data fetched via cURL in Codeigniter. Implemented a responsive UI using jQuery and Bootstrap to enhance user experience
    across devices.`,
    technologies: ["PHP", "Codeigniter", "MariaDB", "jQuery", "Javascript"],
  },
];

export const CONTACT = {
  address: "Hubballi, KA - 580030",
  phoneNo: "+91 9916-9511-56",
  email: "avinashhiremath231@gmail.com",
};
