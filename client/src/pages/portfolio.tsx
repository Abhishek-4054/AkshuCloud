import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  useEffect(() => {
    // Active navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    function updateActiveNav() {
      let current = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-primary');
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    
    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
