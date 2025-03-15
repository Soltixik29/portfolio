
export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
};

export type ExperienceType = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type EducationType = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type SkillType = {
  category: string;
  items: string[];
};

export type ContactType = {
  email: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

export type PortfolioConfigType = {
  name: string;
  tagline: string;
  about: {
    title: string;
    description: string;
    image?: string;
  };
  experience: ExperienceType[];
  education: EducationType[];
  skills: SkillType[];
  projects: ProjectType[];
  contact: ContactType;
  footer: {
    text: string;
  };
};

export const portfolioConfig: PortfolioConfigType = {
  name: "John Doe",
  tagline: "Web Developer & Software Engineer",
  
  about: {
    title: "Building digital products, brands, and experiences",
    description: 
      "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products at Acme Inc. With over 5 years of experience in the software industry, I enjoy tackling complex problems and turning them into simple and intuitive solutions. My expertise includes frontend development, backend architecture, and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Acme Inc.",
      period: "2021 - Present",
      description: "Lead developer for the company's main SaaS product. Implemented new features, optimized performance, and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      period: "2018 - 2021",
      description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with designers to implement UI/UX improvements.",
      technologies: ["React", "Redux", "SCSS", "JavaScript"],
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency",
      period: "2017 - 2018",
      description: "Assisted in building websites for various clients. Gained experience in modern web development tools and practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ],
  
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Artificial Intelligence.",
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description: "Graduated with honors, focused on Web Development and Database Management.",
    },
  ],
  
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux", "Vue"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma", "Agile/Scrum"],
    },
  ],
  
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/project1",
      github: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, notifications, and progress tracking.",
      tags: ["React", "Firebase", "TypeScript", "Redux"],
      link: "https://example.com/project2",
      github: "https://github.com/johndoe/taskapp",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills, featuring a minimalist design and smooth animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com/project3",
      github: "https://github.com/johndoe/portfolio",
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides current weather conditions and forecasts based on user location or search.",
      tags: ["React", "OpenWeather API", "Chart.js"],
      link: "https://example.com/project4",
      github: "https://github.com/johndoe/weather-app",
    },
  ],
  
  contact: {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  
  footer: {
    text: "© 2023 John Doe. All rights reserved.",
  },
};
