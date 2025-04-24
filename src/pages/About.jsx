import { motion } from "framer-motion";
import { FaJava, FaReact, FaGithub , FaDatabase } from "react-icons/fa";
import myPic from "../assets/MyPhoto.jpg"; 

export default function About() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text mb-12 drop-shadow-lg">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
    
        <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 1.2 }}
               className="md:w-1/2 flex justify-center"
             >
               <img
                 src={myPic}
                 alt="My Profile"
                 className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-yellow-500 shadow-xl hover:shadow-yellow-500 transition duration-300"
               />
             </motion.div>

        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300 space-y-5"
        >
          <p>
            Hello! I'm <span className="text-yellow-400 font-semibold">Md Irteza Saquib</span>, a passionate Full Stack Developer from Bihar.
            I love crafting elegant web experiences and building powerful backend systems using{" "}
            <span className="text-yellow-400 font-semibold">Spring Boot</span>,{" "}
            <span className="text-yellow-400 font-semibold">MongoDB</span> &{" "}
            <span className="text-yellow-400 font-semibold">React</span>.
          </p>
          <p>
            I enjoy learning new technologies, solving real-world problems, and continuously improving my skill set.
            I believe in clean code, strong UI/UX, and writing backend that just works.
          </p>
          <p className="font-semibold text-yellow-400">Let's build something amazing together! 💻</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <FaReact className="text-cyan-400 text-4xl" />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaJava className="text-orange-500 text-4xl" />
          <span>Java + Spring</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaDatabase className="text-green-400 text-4xl" />
          <span>MongoDB</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaGithub className="text-white text-4xl" />
          <span>GitHub</span>
        </div>
      </motion.div>

        </section>
  );
}
