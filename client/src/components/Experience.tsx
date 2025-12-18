import { ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8" data-testid="text-experience-title">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="space-y-12">
            {/* Raptbot Experience */}
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="card-experience-raptbot">
  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-job-title-raptbot">Software Engineer</h3>
      <h4 className="text-xl text-primary font-semibold mb-2" data-testid="text-company-raptbot">Raptbot</h4>
      <p className="text-gray-600 font-medium" data-testid="text-duration-raptbot">Sept 2024 – Present</p>
    </div>
    <div className="mt-4 lg:mt-0">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" data-testid="badge-raptbot-duration">Ongoing</span>
    </div>
  </div>
  <ul className="space-y-3 text-gray-700">
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Managed alerting and monitoring systems for 25 client accounts using custom dashboards</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Collaborated with cross-functional teams to ensure rapid response to system anomalies</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Implemented automated escalation paths for critical incidents to improve response time by 40%</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Monitored system performance and resource usage for optimal uptime and performance</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Provided in-depth reports and analytics on alert trends and resolution times to leadership</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Developed and optimized automated workflows to reduce manual monitoring tasks by 60%</span>
    </li>
    <li className="flex items-start">
      <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
      <span>Trained team members on best practices for monitoring tools and alerting mechanisms</span>
    </li>
  </ul>
</div>

            {/* Feedback Medical Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="card-experience-feedback">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-job-title-current">Cloud & DevOps Engineer</h3>
                  <h4 className="text-xl text-primary font-semibold mb-2" data-testid="text-company-current">Feedback Medical</h4>
                  <p className="text-gray-600 font-medium" data-testid="text-duration-current">Jan 2025 – Present</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium" data-testid="badge-current-role">Current Role</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Deployed and configured cloud-native applications on AWS using ECS, EKS, and Lambda</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Automated infrastructure provisioning with Terraform and Jenkins, reducing deployment time by 70%</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Implemented monitoring solutions using CloudWatch, Prometheus, and Grafana for 99.9% uptime</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Ensured security compliance and supported enterprise IT operations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Optimized AWS costs through resource right-sizing and reserved instance planning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Managed containerized applications using Docker and Kubernetes orchestration</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Established backup and disaster recovery procedures for critical systems</span>
                </li>
              </ul>
            </div>

            {/* Cognizant Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="card-experience-cognizant">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-job-title-previous">Software Engineer</h3>
                  <h4 className="text-xl text-primary font-semibold mb-2" data-testid="text-company-previous">Cognizant Technology Solutions</h4>
                  <p className="text-gray-600 font-medium" data-testid="text-duration-previous">Jul 2022 – Sept 2024</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium" data-testid="badge-previous-duration">2 years 3 months</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Developed and maintained RESTful APIs using Java Spring Boot for enterprise applications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Automated AWS infrastructure provisioning with Terraform, managing 50+ cloud resources</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Built and maintained CI/CD pipelines using Jenkins, reducing manual deployment efforts by 80%</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Implemented load balancing and auto-scaling solutions for high-availability applications</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Configured monitoring and alerting systems for proactive issue resolution</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Collaborated with cross-functional teams to deliver scalable cloud solutions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Performed database optimization and maintenance for MySQL and MongoDB systems</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                  <span>Mentored junior developers on best practices for cloud architecture and DevOps workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
