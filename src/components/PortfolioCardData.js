import skillpixel from "../assets/skillpixellab.png";
import airbnb from "../assets/airbnb.png";
import smartnews from "../assets/smartnews.png";
import techleadingladies from "../assets/techleadingladies.png";

const ProjectCardData = [
  {
    imgsrc: techleadingladies,
    title: "Tech Leading Ladies",
    text: "Built and deployed a community website using React for a group bridging the gender gap in tech leadership. The platform supports women-identifying and non-binary members working in software development and technology roles.",
    view: "https://techleadingladies.com/",
    source: "",
  },
  {
    imgsrc: skillpixel,
    title: "SkillPixel Lab",
    text: "A full-stack student lab platform built with React frontend, Python backend, and Firestore database. Features responsive dashboards for students and instructors with role-based access control, API endpoints for Jupyter Notebook assignments with automated grading via nbgrader, and CI/CD deployment on Google Cloud Platform.",
    view: "https://lab.skillpixel.vn/",
    source: "",
  },
  {
    imgsrc: airbnb,
    title: "Airbnb Clone",
    text: "A scalable accommodation booking platform built with the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, property listings with image uploads and booking management system. Implements core functionality with responsive design using Tailwind CSS.",
    view: "",
    source: "https://github.com/phuoc-stack/Airbnb-Clone",
  },
  {
    imgsrc: smartnews,
    title: "SmartNews",
    text: "An intelligent news platform powered by AI that provides personalized article recommendations with real-time sentiment analysis, bias detection, and interactive chatbot discussions using Google Gemini AI and BERT models.",
    source: "https://github.com/Jesse0502/TDP_Project",
  },
];

export default ProjectCardData;
