import React from 'react';

const AnimatedBackground = () => {
  const codeSnippets = [
    'kubectl apply -f deployment.yaml',
    'docker build -t app:latest .',
    'terraform plan',
    'git push origin main',
    'aws s3 sync . s3://bucket',
    'jenkins pipeline started',
    'CI/CD pipeline: SUCCESS',
    'npm run build',
    'helm upgrade release .',
    'ansible-playbook deploy.yml'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating code snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute text-xs text-muted-foreground/30 font-mono animate-code-flow"
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          {snippet}
        </div>
      ))}
      
      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-blue rounded-full animate-float opacity-30" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-tech-green rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-tech-cyan rounded-full animate-float opacity-25" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-tech-purple rounded-full animate-float opacity-20" style={{ animationDelay: '6s' }} />
      <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-tech-orange rounded-full animate-float opacity-30" style={{ animationDelay: '8s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,154,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,154,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default AnimatedBackground;