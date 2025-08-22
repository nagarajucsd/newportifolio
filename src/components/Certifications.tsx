import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Cloud, Server, Code } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Foundations Badge",
      provider: "Amazon Web Services",
      icon: Cloud,
      color: "text-tech-blue",
      description: "Fundamental understanding of AWS cloud concepts, services, and architecture",
      credlyUrl: "https://www.credly.com/users/dandu-rama-siva-naga-raju"
    },
    {
      title: "AWS Cloud Architecting Badge",
      provider: "Amazon Web Services", 
      icon: Server,
      color: "text-tech-cyan",
      description: "Advanced cloud architecture design principles and best practices",
      credlyUrl: "https://www.credly.com/users/dandu-rama-siva-naga-raju"
    },
    {
      title: "Cloud Virtual Internship Certificate",
      provider: "AICTE Eduskills",
      icon: Award,
      color: "text-tech-green",
      description: "Comprehensive cloud computing curriculum powered by AWS Academy",
      credlyUrl: null
    },
    {
      title: "Serverless Computing using AWS Lambda",
      provider: "AWS Training",
      icon: Code,
      color: "text-tech-purple",
      description: "Hands-on experience with serverless architecture and Lambda functions",
      credlyUrl: null
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating cloud and DevOps expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={cert.title}
                className="group hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <IconComponent className={`h-6 w-6 ${cert.color} mt-1 group-hover:animate-pulse-glow flex-shrink-0`} />
                    <div className="flex-1">
                      <span className="leading-tight">{cert.title}</span>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {cert.provider}
                        </Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                  
                  {cert.credlyUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={cert.credlyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on Credly
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://www.credly.com/users/dandu-rama-siva-naga-raju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Award className="h-5 w-5" />
              View All Credentials on Credly
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;