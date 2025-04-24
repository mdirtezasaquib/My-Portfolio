import { useState } from "react";
import { Menu, X, Home, User, FolderKanban, Brain, Mail } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Projects", icon: <FolderKanban size={18} /> },
    { name: "Skills", icon: <Brain size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  const linkBaseStyle =
    "flex items-center gap-1 cursor-pointer transition-all duration-300";
  const activeLinkStyle =
    "text-yellow-400 border-b-2 border-yellow-400 pb-1 scale-105";
  const defaultLinkStyle = "text-gray-100 hover:text-yellow-400";

  return (
    <nav className="bg-black/60 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-yellow-500 h-18">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text tracking-widest">
          MyPortfolio
        </h1>

        
        <ul className="hidden md:flex items-center gap-10 font-medium text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass={activeLinkStyle}
                className={`${linkBaseStyle} ${defaultLinkStyle}`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-400">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-black/90 py-6 text-yellow-400 font-medium text-lg transition-all duration-300">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass={activeLinkStyle}
                onClick={toggleMenu}
                className={`${linkBaseStyle} text-yellow-400`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
