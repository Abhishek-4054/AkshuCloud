import { Cloud, Cog, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8" data-testid="text-about-title">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-about-summary">
              Cloud and DevOps Engineer skilled in AWS, Terraform, Docker, Kubernetes, CI/CD, Linux, and enterprise infrastructure solutions. Certified in AWS & Azure, passionate about secure and scalable infrastructure. I specialize in automating complex deployment processes, optimizing cloud costs, and ensuring high availability for mission-critical applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center" data-testid="card-cloud-architecture">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Architecture</h3>
              <p className="text-gray-600">AWS & Azure certified with extensive experience in cloud-native solutions</p>
            </div>
            <div className="text-center" data-testid="card-devops-automation">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">DevOps Automation</h3>
              <p className="text-gray-600">CI/CD pipelines, Infrastructure as Code, and containerization expertise</p>
            </div>
            <div className="text-center" data-testid="card-security-compliance">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security & Compliance</h3>
              <p className="text-gray-600">HIPAA compliance, security best practices, and robust infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
