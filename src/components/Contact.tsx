import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss DevOps opportunities and cloud solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Mail className="h-6 w-6 text-tech-blue" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">dramarajudramaraju59@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Phone className="h-6 w-6 text-tech-green" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(+91) 9160908677</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="text-center space-y-6">
                <p className="text-muted-foreground">Connect with me on professional platforms</p>
                <div className="flex justify-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a 
                      href="https://www.linkedin.com/in/dandu-rama-siva-naga-raju" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild>
                    <a 
                      href="https://github.com/Nagaraju-209" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      GitHub Portfolio
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Note about contact */}
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Open to opportunities:</strong> DevOps Engineer, Cloud Architect, Software Developer roles. 
                  Available for immediate start upon graduation in May 2025.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
