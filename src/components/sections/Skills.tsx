
import { portfolioConfig } from "@/config/portfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Skills = () => {
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
    <section id="skills" className="py-20 sm:py-32 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal-item">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioConfig.skills.map((skillGroup, groupIndex) => (
            <Card key={groupIndex} className="glass-card h-full reveal-item" style={{ animationDelay: `${groupIndex * 100}ms` }}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill} 
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
