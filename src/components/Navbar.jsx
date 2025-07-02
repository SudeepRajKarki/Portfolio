import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">Sudeep Raj Karki</Link>
        </h1>

        {/* Hamburger menu button (mobile) */}
        <button
          type="button"
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation links */}
        <div
          className={`flex-col md:flex-row md:flex items-center md:space-x-8 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          } md:translate-y-0 md:opacity-100 md:visible`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen("false")}
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
