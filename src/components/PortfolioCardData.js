import proj1 from "../assets/skillpixellab.png"
import proj2 from "../assets/airbnb.png"
import proj3 from "../assets/smartnews.png"

const ProjectCardData = [
    {
        imgsrc:proj1, 
        title:"SkillPixel Lab",
        text:"A full-stack student lab platform integrated with Hoola E-Learning. Built with React frontend, Python backend, and Firestore database. Features responsive dashboards for students and instructors with role-based access control, API endpoints for Jupyter Notebook assignments with automated grading via nbgrader, and CI/CD deployment on Google Cloud Platform.",
        view: "https://lab.skillpixel.vn/",
        source: "",
    },
    {
        imgsrc:proj2, 
        title:"Airbnb Clone",
        text:"A scalable accommodation booking platform built with the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, property listings with image uploads and booking management system. Implements core functionality with responsive design using Tailwind CSS.",
        view: "",
        source: "https://github.com/phuoc-stack/Airbnb-Clone",
    },
    {
        imgsrc:proj3, 
        title:"SmartNews",
        text:"An intelligent news platform powered by AI that provides personalized article recommendations with real-time sentiment analysis, bias detection, and interactive chatbot discussions using Google Gemini AI and BERT models.",
        source: "https://github.com/Jesse0502/TDP_Project"
    },
    {
        imgsrc:proj1, 
        title:"Innotech",
        text:"Airbnb Clone using MERN stack",
        source: ""
    },
]

export default ProjectCardData;
