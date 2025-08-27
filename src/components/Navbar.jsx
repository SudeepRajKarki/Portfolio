import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
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

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  // Apply dark or light mode
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

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full shadow z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          <Link to="/" onClick={() => setIsOpen(false)}>Sudeep Raj Karki</Link>
        </h1>

        {/* Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

    
        <div
          className={`flex flex-col md:flex-row absolute md:static bg-white dark:bg-gray-900 w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6`}
        >
          {navLinks.map((link, index) =>
            link.to ? (
              <Link
                key={index}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-left"
              >
                {link.label}
              </button>
            )
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
