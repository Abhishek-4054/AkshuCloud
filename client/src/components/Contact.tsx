import { useState } from "react";
import { Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim() || formData.subject.length < 5) {
      errors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
    // Hide success message when user starts editing
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8" data-testid="text-contact-title">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-testid="section-contact-info">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
              <p className="text-gray-600 mb-8 text-lg">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about cloud infrastructure and DevOps best practices.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center" data-testid="contact-email">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:abhishek184054@gmail.com" className="text-primary hover:text-blue-700 transition-colors duration-300" data-testid="link-contact-email">
                      abhishek184054@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-linkedin">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/abhishek-chauhan-429554206" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700 transition-colors duration-300"
                      data-testid="link-contact-linkedin"
                    >
                      linkedin.com/in/abhishek-chauhan-429554206
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-phone">
                  <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+918091753343" className="text-primary hover:text-blue-700 transition-colors duration-300" data-testid="link-contact-phone">
                      +91-8091753343
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl" data-testid="section-contact-form">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    data-testid="input-name"
                  />
                  {formErrors.name && (
                    <div className="text-red-600 text-sm mt-1" data-testid="error-name">
                      {formErrors.name}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    data-testid="input-email"
                  />
                  {formErrors.email && (
                    <div className="text-red-600 text-sm mt-1" data-testid="error-email">
                      {formErrors.email}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    data-testid="input-subject"
                  />
                  {formErrors.subject && (
                    <div className="text-red-600 text-sm mt-1" data-testid="error-subject">
                      {formErrors.subject}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-vertical"
                    data-testid="input-message"
                  />
                  {formErrors.message && (
                    <div className="text-red-600 text-sm mt-1" data-testid="error-message">
                      {formErrors.message}
                    </div>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit-message"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                
                {/* Success Message */}
                {submitSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" data-testid="message-success">
                    <CheckCircle className="inline mr-2" size={20} />
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
