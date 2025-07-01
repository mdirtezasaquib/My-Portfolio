import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaBriefcase /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function BottomNavbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          window.scrollY >= section.offsetTop - 100
        ) {
          current = link.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-inner border-t border-gray-600 flex justify-around items-center py-3 md:hidden">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`flex flex-col items-center text-xs font-medium transition-all ${
            activeSection === link.id
              ? "text-yellow-400"
              : "text-white hover:text-yellow-300"
          }`}
        >
          <span className="text-lg">{link.icon}</span>
          {link.label}
        </a>
      ))}
    </div>
  );
}
