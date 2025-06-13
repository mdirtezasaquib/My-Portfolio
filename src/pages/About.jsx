import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGithub,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import myPic from "../assets/MyPhoto.jpg";

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 ">
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-5 text-lg md:text-xl text-gray-300 backdrop-blur-md bg-white/5 p-6 rounded-xl shadow-md border-1 border-dashed border-yellow-500"
        >
          <p>
            Hello! I'm{" "}
            <span className="text-yellow-400 font-semibold">
              Md Irteza Saquib
            </span>
            , a passionate Full Stack Developer from Bihar. I love crafting
            elegant web experiences and building robust backend systems using{" "}
            <span className="text-yellow-400 font-semibold">Spring Boot</span>,{" "}
            <span className="text-yellow-400 font-semibold">MongoDB</span>, and{" "}
            <span className="text-yellow-400 font-semibold">React</span>.
          </p>
          <p>
            I enjoy learning new technologies, solving real-world problems, and
            continuously sharpening my skills. I believe in clean code, strong
            UI/UX, and seamless backend performance.
          </p>
          <p className="text-yellow-400 font-semibold">
            Let’s build something amazing together! 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="p-3 bg-white/10 backdrop-blur-lg rounded-full shadow-2xl border-4 border-yellow-500 hover:scale-105 transition">
            <img
              src={myPic}
              alt="My Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center"
      >
        {[
          { icon: <FaReact className="text-cyan-400" />, label: "React" },
          {
            icon: <FaJava className="text-orange-500" />,
            label: "Java + Spring",
          },
          { icon: <FaDatabase className="text-green-400" />, label: "MongoDB" },
          { icon: <FaGithub className="text-white" />, label: "GitHub" },
          {
            icon: <SiTailwindcss className="text-teal-400" />,
            label: "Tailwind CSS",
          },
          {
            icon: <FaJsSquare className="text-yellow-300" />,
            label: "JavaScript",
          },
          { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
          { icon: <FaCss3Alt className="text-blue-400" />, label: "CSS" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transform transition duration-300"
          >
            <div className="text-5xl">{item.icon}</div>
            <span className="text-white font-medium">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
