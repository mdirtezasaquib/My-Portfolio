import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Job Portal",
      desc: "A full-featured job portal using Spring Boot and MongoDB.",
      tech: "React, Tailwind, Spring Boot, MongoDB",
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce Site",
      desc: "Online shopping site with cart, admin panel and authentication.",
      tech: "React, Spring Boot, MongoDB",
      github: "#",
      live: "#",
    },
    {
      title: "Music App",
      desc: "Stream music with playback and dark mode support.",
      tech: "React, Tailwind, Audio APIs",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-8 tracking-widest">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
