
import { portfolioConfig } from "@/config/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send data to a server
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      {/* Purple gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-800/10 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
          
          {/* Profile information card */}
          <Card className="max-w-md mx-auto mb-10 glass-card border-purple-500/20 bg-purple-900/10 backdrop-blur-lg">
            <CardContent className="pt-6 pb-4">
              <div className="flex flex-col items-center space-y-3">
                {portfolioConfig.contact.location && (
                  <div className="flex items-center justify-center space-x-2 text-purple-300">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">{portfolioConfig.contact.location}</span>
                  </div>
                )}
                
                {/* Age information - assuming we add age to the config */}
                <div className="flex items-center justify-center space-x-2 text-purple-300">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">28 years old</span>
                </div>
                
                {/* Short description */}
                <p className="text-sm text-center text-purple-200 italic max-w-xs mt-2">
                  "Passionate developer creating elegant solutions for complex problems. Always learning, always building."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact Information</h3>
            
            <div className="space-y-4">
              {portfolioConfig.contact.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-400 h-5 w-5" />
                  <a 
                    href={`mailto:${portfolioConfig.contact.email}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {portfolioConfig.contact.email}
                  </a>
                </div>
              )}
              
              {portfolioConfig.contact.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-400 h-5 w-5" />
                  <span>{portfolioConfig.contact.phone}</span>
                </div>
              )}
              
              {portfolioConfig.contact.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-400 h-5 w-5" />
                  <span>{portfolioConfig.contact.location}</span>
                </div>
              )}
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4 text-purple-300">Connect with me</h4>
              <div className="flex space-x-4">
                {portfolioConfig.contact.github && (
                  <a 
                    href={portfolioConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900/50 hover:bg-purple-800 p-3 rounded-full transition-colors border border-purple-500/30"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-purple-300" />
                  </a>
                )}
                
                {portfolioConfig.contact.linkedin && (
                  <a 
                    href={portfolioConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900/50 hover:bg-purple-800 p-3 rounded-full transition-colors border border-purple-500/30"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-purple-300" />
                  </a>
                )}
                
                {portfolioConfig.contact.twitter && (
                  <a 
                    href={portfolioConfig.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900/50 hover:bg-purple-800 p-3 rounded-full transition-colors border border-purple-500/30"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-purple-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <Card className="glass-card border-purple-500/20 bg-purple-900/10 backdrop-blur-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-purple-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-purple-900/30 border-purple-500/30 placeholder:text-purple-400/50 focus-visible:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-purple-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full bg-purple-900/30 border-purple-500/30 placeholder:text-purple-400/50 focus-visible:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-purple-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="w-full min-h-[150px] bg-purple-900/30 border-purple-500/30 placeholder:text-purple-400/50 focus-visible:ring-purple-500"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
