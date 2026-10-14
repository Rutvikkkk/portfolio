export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Modern component architectures, fluid interfaces, and responsive client-side development.",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    description: "Server runtime environments, RESTful communication, and business logic.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    description: "Document stores, schema modeling, and persistent data layers.",
    skills: ["MongoDB"],
  },
  {
    category: "Tools & Deployment",
    description: "Version control, testing suites, hosting infrastructure, and cloud media pipelines.",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Cloudinary", "Firebase"],
  },
];

export const allSkillsList = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Cloudinary",
  "Vercel",
  "Git & GitHub",
  "Postman",
  "Firebase",
  "HTML5 & CSS3",
];
