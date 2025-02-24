import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/yuvavaganza_logo.jpeg"
            className="h-8 rounded-full"
            alt="Yuva Vaganza Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Yuva Vaganza
          </span>
        </a>

        {/* Hamburger Button for Small Screens */}
        {/* <button
          onClick={handleToggle}
          className="lg:hidden block text-gray-900 dark:text-white focus:outline-none"
        >
          ☰
        </button> */}

        {/* Navbar Items for Large Screens */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/about"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            About
          </Link>
          <Link
            onClick={() => handleScroll("teams")}
            to="/"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Teams
          </Link>
          <Link
            onClick={() => handleScroll("sportings")}
            to="/"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Sportings
          </Link>
          <Link
            onClick={() => handleScroll("scoreboard")}
            to="/"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Scoreboard
          </Link>
        </div>

        {/* Automatically Visible Dropdown Menu for Small Screens */}
      </div>
    </nav>
  );
};

export default Navbar;
