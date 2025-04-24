import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram , FaPaperPlane} from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/Contact/create/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMsg("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setResponseMsg("Something went wrong ❌");
      }
    } catch (err) {
      setResponseMsg("Server error ❌");
      console.error(err);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Send me a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
           <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-lg text-black font-semibold hover:scale-105 transition transform flex items-center justify-center gap-2"
            >
             <FaPaperPlane className="text-lg" />
            Send Message
           </button>
            {responseMsg && <p className="text-green-400 pt-2">{responseMsg}</p>}
          </form>
        </div>

        <div className="text-center md:text-left space-y-6">
          <h3 className="text-2xl font-semibold text-yellow-400">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a href="https://github.com/mdirtezasaquib" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/Md Irteza Saquib" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/your-mdsaquibofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2025 <span className="text-yellow-400 font-medium">Md Irteza Saquib</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
