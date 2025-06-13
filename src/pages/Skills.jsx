import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMongodb, SiMysql, SiPostman, SiSwagger } from "react-icons/si";

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    ],
    Backend: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "Node.js", icon: <FaNode className="text-green-400" /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
      { name: "Swagger UI", icon: <SiSwagger className="text-yellow-500" /> },
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center px-6 py-16">
      <h2 className="text-4xl font-bold text-yellow-400 mb-12"> My Skills</h2>

      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white text-black shadow-lg rounded-2xl p-6 hover:shadow-yellow-400 transition-all"
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4">{category}</h3>
            <ul className="space-y-2 text-black-200 font-medium">
              {skillList.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-black py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
