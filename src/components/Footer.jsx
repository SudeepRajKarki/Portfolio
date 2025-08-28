import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Sudeep Raj Karki. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/karki.sudip.16/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/stranger_me_03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SudeepRajKarki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sudeep-raj-karki-15ab77238/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      {/* Optional: Attribution or Note */}
      <div className="text-center mt-4 text-xs text-gray-500">
        Designed and built with ❤️ by Sudeep{"<"}3
      </div>
    </footer>
  );
}

export default Footer;