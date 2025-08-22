import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Cloud, Settings, Database, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS Lambda", "CloudFormation"],
      color: "text-tech-cyan"
    },

    
    
    {
      title: "DevOps Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "CI/CD", "Docker", "Jenkins", "Kubernetes"],
      color: "text-tech-green"
    },
    
    {
      title: "Programming & Scripting",
      icon: Code2,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "React"],
      color: "text-tech-blue"
    },

    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Linux", "Windows"],
      color: "text-tech-orange"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern cloud and DevOps solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${category.color} group-hover:animate-pulse-glow`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary/20 transition-all duration-200 hover:scale-105"
                      >
                        {skill}
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

export default Skills;