import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    handleToggle()
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     {/* Logo */}
    //     <a href="/" className="flex items-center space-x-3">
    //       <img
    //         src="/yuvavaganza_logo.jpeg"
    //         className="h-8 rounded-full"
    //         alt="Yuva Vaganza Logo"
    //       />
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         Yuva Vaganza
    //       </span>
    //     </a>
    //     <div className="hidden lg:flex space-x-8">
    //       <Link
    //         to="/about"
    //         className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         onClick={() => handleScroll("teams")}
    //         to="/"
    //         className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //       >
    //         Teams
    //       </Link>
    //       <Link
    //         onClick={() => handleScroll("sportings")}
    //         to="/"
    //         className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //       >
    //         Sportings
    //       </Link>
    //       <Link
    //         onClick={() => handleScroll("scoreboard")}
    //         to="/"
    //         className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
    //       >
    //         Scoreboard
    //       </Link>
    //     </div>

    //     {/* Automatically Visible Dropdown Menu for Small Screens */}
    //   </div>
    // </nav>
    <nav className="fixed w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/yuvavaganza_logo.jpeg"
            className="h-12 rounded-full"
            alt="Yuva Vaganza Logo"
          />
          <span className="self-center text-[28px] font-semibold whitespace-nowrap dark:text-white">
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
        <button
          onClick={handleToggle}
          className={`lg:hidden block text-gray-900 dark:text-white focus:outline-none p-2.5 rounded-md transition-all duration-300 ${
            isOpen
              ? "bg-gray-200 dark:bg-gray-700 shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 "
          }`}
        >
          ☰
        </button>

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
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden w-full mt-4`}>
          <ul className="border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <li>
              <Link onClick={handleToggle}
                to="/about"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleScroll("teams")}
                to="/"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleScroll("sportings")}
                to="/"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Sportings
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleScroll("scoreboard")}
                to="/"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Scoreboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
