import { FaAws, FaMicrosoft } from "react-icons/fa";
import { BarChart3, Laptop } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      description: "Amazon Web Services foundational certification covering core AWS services and cloud concepts",
      icon: <FaAws size={24} />,
      borderColor: "border-blue-500",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      testId: "card-cert-aws"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      description: "Microsoft Azure foundational knowledge including core services, pricing, and support",
      icon: <FaMicrosoft size={24} />,
      borderColor: "border-blue-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      testId: "card-cert-azure"
    },
    {
      title: "Power BI Data Analyst Associate",
      description: "Microsoft Power BI certification for data modeling, visualization, and business intelligence",
      icon: <BarChart3 size={24} />,
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      testId: "card-cert-powerbi"
    },
    {
      title: "Mendix Intermediate Developer",
      description: "Low-code application development platform certification for rapid application development",
      icon: <Laptop size={24} />,
      borderColor: "border-green-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      testId: "card-cert-mendix"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8" data-testid="text-certifications-title">Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 ${cert.borderColor}`}
                data-testid={cert.testId}
              >
                <div className="flex items-center mb-4">
                  <div className={`${cert.bgColor} ${cert.iconColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
