
import { portfolioConfig } from "@/config/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Experience = () => {
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
    <section id="experience" className="py-20 sm:py-32 bg-muted/30" ref={sectionRef}>
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center reveal-item">Experience & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 reveal-item">Work Experience</h3>
            {portfolioConfig.experience.map((item, index) => (
              <Card key={index} className="glass-card reveal-item" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-muted-foreground">{item.company}</p>
                    </div>
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 reveal-item">Education</h3>
            {portfolioConfig.education.map((item, index) => (
              <Card key={index} className="glass-card reveal-item" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">{item.degree}</h4>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
