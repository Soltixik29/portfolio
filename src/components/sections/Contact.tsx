
import { portfolioConfig } from "@/config/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
    <section id="contact" className="py-20 sm:py-32">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              {portfolioConfig.contact.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <a 
                    href={`mailto:${portfolioConfig.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {portfolioConfig.contact.email}
                  </a>
                </div>
              )}
              
              {portfolioConfig.contact.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <span>{portfolioConfig.contact.phone}</span>
                </div>
              )}
              
              {portfolioConfig.contact.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span>{portfolioConfig.contact.location}</span>
                </div>
              )}
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {portfolioConfig.contact.github && (
                  <a 
                    href={portfolioConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                
                {portfolioConfig.contact.linkedin && (
                  <a 
                    href={portfolioConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                
                {portfolioConfig.contact.twitter && (
                  <a 
                    href={portfolioConfig.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
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
