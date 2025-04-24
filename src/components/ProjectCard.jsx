export default function ProjectCard({ title, desc, tech, github, live }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <p className="text-gray-600 my-2">{desc}</p>
        <p className="text-sm text-gray-500">Tech Used: {tech}</p>
        <div className="mt-4 flex gap-4">
          <a href={github} target="_blank" className="text-violet-600 underline">GitHub</a>
          <a href={live} target="_blank" className="text-blue-600 underline">Live Demo</a>
        </div>
      </div>
    );
  }
  