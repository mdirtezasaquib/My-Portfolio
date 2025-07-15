import ProjectCard from "../pages/ProjectCard";

import jobThumb from "../assets/job-port.jpg";
import webhouseIndia from "../assets/web.jpg";
import musicThumb from "../assets/sonix.jpg";
import calculator from "../assets/calculator.jpg";
import retrivo from "../assets/retrivo.jpg";
import swadThumb from "../assets/swad-seva.jpg";
import whatsapp from "../assets/whatsapp.jpg";

export default function Projects() {
  const projectList = [


    {
      title: "WhatsApp Clone",
      desc: "WhatsApp Clone app showcasing real-time chat and responsive UI.",
      tech: "React, Tailwind, Spring Boot, MongoDB",
      github: "https://github.com/mdirtezasaquib/whatsapp-clone",
      live: "https://irtezabywhatsap.netlify.app/",
      image: whatsapp,
    },


     {
      title: "Swad Seva Food App",
      desc: "Food ordering app with menu, ratings, and user feedback system.",
      tech: "React, Tailwind, Spring Boot, MongoDB",
      github: "https://github.com/mdirtezasaquib/swad-seva-frontend",
      live: "https://swad-seva-saquib.netlify.app/",
      image: swadThumb,
    },

    {
      title: "Job Portal",
      desc: "Full-featured platform with login, job listings, and admin panel.",
      tech: "React, Tailwind CSS, Spring Boot, MongoDB",
      github: "https://github.com/mdirtezasaquib/JobPortalBackend",
      live: "#",
      image: jobThumb,
    },
    {
      title: "WebHouse India",
      desc: "WebHouse India: Modern, responsive frontend project with clean UI.",
      tech: "React, Tailwind CSS, JavaScript",
      github: "https://github.com/mdirtezasaquib/web-House-India",
      live: "https://webhouse-by-irtezasaquib.netlify.app/",
      image: webhouseIndia,
    },
    {
      title: "Sonix Music App",
      desc: "Listen to your favorite music with smooth playback and dark mode.",
      tech: "JavaScript, Tailwind CSS, Audio API",
      github: "https://github.com/mdirtezasaquib/Sonix-music-app",
      live: "https://sonix-saquib.netlify.app/",
      image: musicThumb,
    },
    {
      title: "Calculator",
      desc: "Simple, responsive calculator app with clean UI and instant results.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/mdirtezasaquib/Calculator",
      live: "https://irtezacalculator.netlify.app/",
      image: calculator,
    },
    {
      title: "Retrivo",
      desc: "Retrivo: Lost and Found app to report, search, and recover items.",
      tech: "React, Spring Boot, MongoDB",
      github: "https://github.com/mdirtezasaquib/Lost-Found",
      live: "https://lost-found-com.netlify.app/",
      image: retrivo,
    },
   
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text tracking-widest">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectList.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
