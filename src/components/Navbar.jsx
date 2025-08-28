import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Better icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // ✅ Default to dark
  const location = useLocation();
  const navigate = useNavigate();

  // Set default dark mode and apply on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // ✅ Force dark mode by default
    }

    // Apply to html element
    if (savedTheme === 'dark' || !savedTheme) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Update theme and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure render
    } else {
      navigate(`/#${id}`);
    }
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            Sudeep Raj Karki
          </Link>

          {/* Desktop Menu & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-lg"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden bg-white dark:bg-gray-900 shadow-lg mt-1 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col px-4 py-3 space-y-3">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;