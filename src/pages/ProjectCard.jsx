import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, github, live, image }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="group relative bg-gradient-to-br from-gray-800/60 to-black/60 border-1 border-dashed border-yellow-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/30 transition-all backdrop-blur-lg"
    >

      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl blur-md opacity-20 group-hover:opacity-70 group-active:opacity-80 transition duration-500 pointer-events-none z-0" />

    
      <div className="relative z-10 p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
        />
      </div>

    
      <div className="relative z-10 p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.split(",").map((stack, i) => (
            <span
              key={i}
              className="bg-yellow-500/10 text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-300/20"
            >
              {stack.trim()}
            </span>
          ))}
        </div>

    
        <div className="flex gap-6 items-center mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-400 active:text-yellow-300 transition"
            title="GitHub Repository"
          >
            <FaGithub size={18} /> <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-400 active:text-yellow-300 transition"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={16} /> <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
