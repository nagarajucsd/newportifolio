import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Dandu Rama Siva Naga Raju
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            <span className="text-tech-cyan">DevOps Engineer</span> • <span className="text-tech-green">Cloud Architect</span> • <span className="text-tech-blue">Software Developer</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Ambitious and adaptable graduate specializing in Cloud Computing, DevOps, and Software Development. 
            Passionate about automating infrastructure and building scalable solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.linkedin.com/in/dandu-rama-siva-naga-raju-773333328" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/danduramaraju" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-tech-blue" />
              <span>dramarajudramaraju59@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-tech-green" />
              <span>(+91) 9160908677</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;