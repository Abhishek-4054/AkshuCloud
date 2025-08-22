import { Cloud, Cog, Server, Database, TrendingUp, Code } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud size={32} />,
      gradient: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-200 text-blue-800",
      skills: ["AWS", "Azure"],
      testId: "card-skills-cloud"
    },
    {
      title: "DevOps & Automation",
      icon: <Cog size={32} />,
      gradient: "from-green-50 to-green-100",
      iconColor: "text-green-600",
      badgeColor: "bg-green-200 text-green-800",
      skills: ["Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
      testId: "card-skills-devops"
    },
    {
      title: "Middleware & Servers",
      icon: <Server size={32} />,
      gradient: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      badgeColor: "bg-purple-200 text-purple-800",
      skills: ["Tomcat", "Nginx", "Apache", "HAProxy"],
      testId: "card-skills-servers"
    },
    {
      title: "Databases",
      icon: <Database size={32} />,
      gradient: "from-red-50 to-red-100",
      iconColor: "text-red-600",
      badgeColor: "bg-red-200 text-red-800",
      skills: ["MySQL", "MongoDB", "Redis", "MariaDB"],
      testId: "card-skills-databases"
    },
    {
      title: "Monitoring & Tools",
      icon: <TrendingUp size={32} />,
      gradient: "from-yellow-50 to-yellow-100",
      iconColor: "text-yellow-600",
      badgeColor: "bg-yellow-200 text-yellow-800",
      skills: ["Git", "Prometheus", "Grafana", "ELK", "RabbitMQ"],
      testId: "card-skills-monitoring"
    },
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      gradient: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      badgeColor: "bg-indigo-200 text-indigo-800",
      skills: ["Java", "Python"],
      testId: "card-skills-programming"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8" data-testid="text-skills-title">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${category.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                data-testid={category.testId}
              >
                <div className={`${category.iconColor} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`inline-block ${category.badgeColor} px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
