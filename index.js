import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Passionate and detail-oriented Web Developer and Python Developer with hands-on experience in building responsive front-end interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS, combined with strong backend logic using Python. Proven ability to collaborate in team environments and deliver clean, efficient code to solve real-world problems. Enthusiastic about learning new technologies and continuously improving development practices.`;

export const ABOUT_TEXT = `Hi! I'm a passionate Web Developer and Python Developer with a strong interest in building interactive and user-friendly web applications. I have hands-on experience using technologies like React.js, Tailwind CSS, JavaScript, Python, MySQL, and MongoDB, and I've worked on real-world projects and internships that strengthened my problem-solving and collaboration skills.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Jan 2025",
    role: "Frontend Developer",
    company: "Codeon Technologies",
    description: `Developed a Real Estate Dashboard to allow admin and agents to view and manage listings by implementing responsive design and dynamic filters using React and Tailwind CSS. 
Collaborated with UI/UX designers and backend developers to implement frontend functionality. Gained hands-on experience with tools like Figma and used version control like GitHub for code collaboration and deployment.`,
    technologies: ["Tailwind CSS","JavaScript","React.js","Figma","GitHub"],
  },
  {
    year: "Feb 2025 - May 2025",
    role: "Web Developer",
    company: "Rooman Technologies",
    description: `Designed and developed responsive user interfaces using frontend technologies. Created forms & dynamic tables to interact with data stored and performed CRUD operations on MySQL database. Collaborated with backend developers to connect frontend with the database.`,
    technologies: ["React.js","Tailwind CSS","MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React","Tailwind CSS","MySQL"],
  },
  {
    title: "Irrigation Method Prediction Using Advanced ML Techniques",
    image: project2,
    description:
      "Developed an Interactive web application to visualize and predict optimal irrigation methods,integrated ML predictions, enabling real-time displayof recommand irrigation techniques based on soil type,crop,weather conditions.",
    technologies: ["Python","MySQL","Django","HTML","CSS","JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "YouTube Clone",
    image: project4,
    description:
      "A responsive front-end clone of the YouTube interface, designed to replicate the look and feel of the original platform. Built using HTML for structure, CSS for styling, and JavaScript for dynamic content interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Tirupati , Andhra Pradesh",
  phoneNo: "+91 7287049294",
  email: "guntamadugusujith3@gmail.com",
};
