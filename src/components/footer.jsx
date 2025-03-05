import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-5">
      <p className="text-center text-2xl font-extrabold text-gray-800 tracking-wide">
        <span className="bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text font-serif italic">
          Follow us on
        </span>
      </p>
      <p className="mt-2">
        <div>
          <a
            href="https://www.instagram.com/yuva_vaganza_2025?igsh=MW5pbjNtOHplZ3lpaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl flex flex-col items-center text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </p>
    </footer>
  );
};

export default Footer;
