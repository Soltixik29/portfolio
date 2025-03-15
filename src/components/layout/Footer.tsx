
import { portfolioConfig } from "@/config/portfolio";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground">{portfolioConfig.footer.text}</p>
          </div>
          
          <div className="flex space-x-4">
            {portfolioConfig.contact.github && (
              <a 
                href={portfolioConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            
            {portfolioConfig.contact.linkedin && (
              <a 
                href={portfolioConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            
            {portfolioConfig.contact.twitter && (
              <a 
                href={portfolioConfig.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
            
            {portfolioConfig.contact.email && (
              <a 
                href={`mailto:${portfolioConfig.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
