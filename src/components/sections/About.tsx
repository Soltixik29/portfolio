
import { portfolioConfig } from "@/config/portfolio";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll(".reveal-item");
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="py-20 sm:py-32" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {portfolioConfig.about.image && (
            <div className="w-full md:w-1/2 reveal-item">
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
                <AspectRatio ratio={3/4}>
                  <img 
                    src={portfolioConfig.about.image} 
                    alt={portfolioConfig.name}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          )}
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 reveal-item">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              {portfolioConfig.about.description.split('\n').map((paragraph, index) => (
                <p key={index} className="reveal-item" style={{ animationDelay: `${index * 100}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
