import { Download, Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhishek_Chauhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Cloud & DevOps Engineer
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90" data-testid="text-hero-tagline">
            3+ years of experience in AWS, Infra Operations, and DevOps Engineering
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={handleDownloadResume}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              data-testid="button-download-resume"
            >
              <Download className="inline mr-2" size={20} />
              Download Resume
            </button>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              data-testid="link-get-in-touch"
            >
              <Mail className="inline mr-2" size={20} />
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:abhishek184054@gmail.com" 
              className="text-white hover:text-gray-200 transition-colors duration-300"
              data-testid="link-email"
            >
              <Mail size={32} />
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-chauhan-429554206" 
              className="text-white hover:text-gray-200 transition-colors duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-linkedin"
            >
              <FaLinkedin size={32} />
            </a>
            <a 
              href="tel:+918091753343" 
              className="text-white hover:text-gray-200 transition-colors duration-300"
              data-testid="link-phone"
            >
              <Phone size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
