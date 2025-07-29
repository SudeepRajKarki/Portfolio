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

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          <Link to="/" onClick={() => setIsOpen(false)}>Sudeep Raj Karki</Link>
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`flex flex-col md:flex-row absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
          {navLinks.map((link, index) => (
            link.to ? (
              <Link
                key={index}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                {link.label}
              </button>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
