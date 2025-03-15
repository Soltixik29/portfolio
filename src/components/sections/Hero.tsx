
import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="top" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-black/[0.02]"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage: "linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="space-y-2 animate-fade-in">
          <p className="inline-block px-3 py-1 text-sm bg-muted rounded-full">
            {portfolioConfig.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl mx-auto leading-tight">
            {portfolioConfig.name}
          </h1>
        </div>
        
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          {portfolioConfig.about.title}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          <Button className="btn-hover-effect rounded-full" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button className="btn-hover-effect rounded-full" variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
