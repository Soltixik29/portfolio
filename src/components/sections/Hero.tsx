
import { portfolioConfig } from "@/config/portfolio";
import { ArrowDown, GamepadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="top" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      {/* Purple gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-purple-800/20 pointer-events-none"></div>
      
      <div 
        className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-black/[0.02]"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage: "linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="space-y-2 animate-fade-in">
          <p className="inline-block px-3 py-1 text-sm bg-purple-900/50 text-purple-200 rounded-full border border-purple-500/30">
            {portfolioConfig.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl mx-auto leading-tight bg-gradient-to-br from-white to-purple-300 bg-clip-text text-transparent">
            {portfolioConfig.name}
          </h1>
        </div>
        
        <p className="mt-6 text-xl md:text-2xl text-purple-200 max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          {portfolioConfig.about.title}
        </p>
        
        {/* Profile card with age and location */}
        <div className="mt-8 glass-card border-purple-500/20 bg-purple-900/20 backdrop-blur-lg p-4 rounded-xl max-w-md animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col items-center space-y-3">
            {portfolioConfig.contact.location && (
              <div className="flex items-center justify-center space-x-2 text-purple-300">
                <span className="text-sm">📍 {portfolioConfig.contact.location}</span>
              </div>
            )}
            
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <span className="text-sm">✨ 28 years old</span>
            </div>
            
            <p className="text-sm text-center text-purple-200 italic max-w-xs">
              "Passionate developer creating elegant solutions for complex problems. Always learning, always building."
            </p>
            
            {/* Game button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2 border-purple-500/30 bg-purple-900/30 text-purple-200 hover:bg-purple-800"
              asChild
            >
              <a href="/game" className="flex items-center gap-2">
                <GamepadIcon size={16} />
                Play Thought Bubble Game
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-purple-300 hover:text-purple-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
