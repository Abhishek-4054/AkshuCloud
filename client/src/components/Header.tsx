import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary" data-testid="header-logo">
            Abhishek Chauhan
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8" data-testid="nav-desktop">
            <li><a href="#home" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-home">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-about">About</a></li>
            <li><a href="#experience" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-experience">Experience</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-skills">Skills</a></li>
            <li><a href="#certifications" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-certifications">Certifications</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium" data-testid="nav-contact">Contact</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4" data-testid="nav-mobile">
            <ul className="flex flex-col space-y-4">
              <li><a href="#home" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-home">Home</a></li>
              <li><a href="#about" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-about">About</a></li>
              <li><a href="#experience" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-experience">Experience</a></li>
              <li><a href="#skills" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-skills">Skills</a></li>
              <li><a href="#certifications" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-certifications">Certifications</a></li>
              <li><a href="#contact" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium" onClick={toggleMobileMenu} data-testid="nav-mobile-contact">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
