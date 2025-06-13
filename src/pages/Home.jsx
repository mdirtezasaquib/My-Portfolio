import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myPic from "../assets/MyPhoto.jpg";
import resumePDF from "../assets/final-resume.pdf";
import { FaDownload, FaEye } from "react-icons/fa";

export default function Home() {
  const fullName = "Md Irteza Saquib";
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const delay = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedName(fullName.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === fullName.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedName(fullName.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullName]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-6xl font-semi-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 text-transparent bg-clip-text inline-block min-h-[3.5rem]">
            {displayedName}
            <span className="blinking-cursor">|</span>
          </span>
        </h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed sm:leading-loose tracking-wide text-justify sm:text-left px-2 sm:px-0"
        >
          I'm a Full Stack Developer specializing in{" "}
          <span className="text-yellow-400 font-semibold">
            Java + Spring Boot
          </span>{" "}
          &{" "}
          <span className="text-yellow-400 font-semibold">React, MongoDB</span>.{" "}
          <br className="sm:hidden" />I specialize in building high-performance,
          scalable, and visually stunning web applications that deliver
          exceptional user experiences.
        </motion.p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <motion.a
            href={resumePDF}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-1 min-w-[140px] sm:min-w-[160px] max-w-[200px] px-4 py-3 rounded-lg text-sm sm:text-base font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </motion.a>

          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-1 min-w-[140px] sm:min-w-[160px] max-w-[200px] px-4 py-3 rounded-lg text-sm sm:text-base font-semibold bg-gradient-to-r from-green-400 to-green-500 text-black shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <FaEye className="text-lg" />
            View Resume
          </motion.a>
        </div>
      </div>

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
    </section>
  );
}
