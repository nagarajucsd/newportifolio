import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internship */}
          <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-tech-blue group-hover:animate-pulse-glow" />
                Cloud Virtual Internship
              </CardTitle>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-tech-cyan">AICTE Eduskills</span>
                <Badge variant="secondary">July - Sept 2024</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Comprehensive cloud computing program powered by AWS Academy
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Covered Cloud Foundations and Cloud Architecting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hands-on practice with EC2, S3, IAM, and VPC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Curriculum powered by AWS Academy</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-tech-green group-hover:animate-pulse-glow" />
                B.Tech Computer Science & Design
              </CardTitle>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-tech-purple">SRKR Engineering College</span>
                <Badge variant="secondary">May 2025</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SRKR Engineering College, Bhimavaram
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-tech-orange" />
                  <span className="text-sm font-medium">CGPA: 7.73</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialized in Computer Science with focus on design thinking, 
                software development, and emerging technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mt-8 group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="h-6 w-6 text-tech-orange group-hover:animate-pulse-glow" />
              Achievements & Participation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">🏆</span>
                  <span className="text-sm">Secured 1st position in Academics (Sri Chaitanya Techno School, 2017)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">🏏</span>
                  <span className="text-sm">Member of the winning cricket team</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">🎯</span>
                  <span className="text-sm">Organized Treasure Hunt in Sigma Fest</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">🤖</span>
                  <span className="text-sm">Participated in AI Tools Workshop</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;