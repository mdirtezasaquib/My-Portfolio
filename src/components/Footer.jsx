import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 px-4 sm:px-6 md:px-12 py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
    
        <div>
          <h3 className="text-yellow-400 font-bold text-xl mb-4">Get In Touch</h3>
          <p className="text-gray-400 leading-relaxed">
            Whether it’s a project, collaboration, or just a chat, I’m all ears.
            Connect with me on social media or send me a message right here.
          </p>
          <div className="flex space-x-5 mt-6 text-yellow-400">
            <a href="mdsaquib" aria-label="Facebook" className="hover:text-yellow-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="@DevSaquib" aria-label="Twitter" className="hover:text-yellow-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-irteza-saquib-43a1b7328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="hover:text-yellow-500 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="mdsaquibofficial" aria-label="Instagram" className="hover:text-yellow-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-500 transition">Project</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-500 transition">Skills</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Patna Bihar, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:+919135595758" className="hover:text-yellow-500 transition">+91 9135595758</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:mdsaquib140802@gmail.com" className="hover:text-yellow-500 transition">mdsaquib140802@gmail.com</a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe for updates & offers
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              required
              className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-5 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2025 <span className="text-yellow-400 font-semibold">Md Irteza Saquib</span>. All rights reserved.
      </div>
    </footer>
  );
}
