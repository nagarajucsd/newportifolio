import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, GitBranch, Cloud, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline for Java Application",
      description: "Developed and containerized a Java-based application with automated build/test/deploy process using Jenkins and Docker.",
      details: [
        "Created Jenkins pipeline for continuous integration and delivery",
        "Configured Dockerfiles and Jenkinsfile for automation",
        "Implemented automated image building and deployment"
      ],
      technologies: ["Java", "Jenkins", "Docker"],
      icon: GitBranch,
      color: "text-tech-blue"
    },
    {
      title: "Automated Infrastructure Deployment",
      description: "Built automated infrastructure deployment using AWS CloudFormation for scalable and secure resource management.",
      details: [
        "Provisioned EC2 instances, S3 storage, and IAM roles",
        "Implemented Infrastructure-as-Code principles",
        "Ensured scalability and security best practices"
      ],
      technologies: ["AWS CloudFormation", "EC2", "S3", "IAM"],
      icon: Cloud,
      color: "text-tech-cyan"
    },
    {
      title: "ML-Based Intrusion Detection System",
      description: "Developed a machine learning-based security system using the UNSW-NB15 dataset with multiple ML algorithms.",
      details: [
        "Applied XGBoost for feature selection and performance improvement",
        "Implemented Decision Tree, KNN, Logistic Regression, SVM, ANN, CNN",
        "Built Flask-based web application for real-time detection",
        "Created model comparison and visualization features"
      ],
      technologies: ["Python", "Flask", "ML", "TensorFlow", "XGBoost"],
      icon: Shield,
      color: "text-tech-green"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of DevOps, Cloud, and Machine Learning technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="group hover:shadow-elegant transition-all duration-300 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <IconComponent className={`h-6 w-6 ${project.color} mt-1 group-hover:animate-pulse-glow flex-shrink-0`} />
                    <span className="leading-tight">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <ul className="space-y-1 text-sm">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;