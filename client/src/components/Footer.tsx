import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2" data-testid="text-footer-name">Abhishek Chauhan</h3>
            <p className="text-gray-400" data-testid="text-footer-title">Cloud & DevOps Engineer</p>
          </div>
          
          <div className="flex space-x-6" data-testid="footer-social-links">
            <a 
              href="mailto:abhishek184054@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="link-footer-email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-chauhan-429554206" 
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-footer-linkedin"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="tel:+918091753343" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="link-footer-phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="text-footer-copyright">
            &copy; 2025 Abhishek Chauhan. All rights reserved. Built with React & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
