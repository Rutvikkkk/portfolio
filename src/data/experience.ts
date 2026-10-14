export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "freelance-developer",
    role: "Freelance Web Developer",
    company: "Self-Employed / Client Work",
    period: "August 2026 – Present",
    location: "Remote / Gujarat, India",
    type: "Freelance",
    summary:
      "Building and deploying complete, responsive websites for businesses, combining frontend craftsmanship with backend integrations, custom admin panels, and live delivery.",
    bullets: [
      "Engineered end-to-end client web solutions from UI layout to Vercel production deployment.",
      "Developed custom admin panel modules enabling business owners to manage rates, inventory, and dynamic media.",
      "Integrated database backends (MongoDB) and media CDNs (Cloudinary) for high reliability.",
      "Delivered live production platforms including Valley View Homestay and Ik Safar.",
    ],
    links: [
      { label: "Valley View Homestay", url: "https://valleyviewhomestay.com/" },
      { label: "Ik Safar", url: "https://iksafar.in/" },
    ],
  },
  {
    id: "simplifyte-frontend",
    role: "Frontend Developer",
    company: "Simplifyte",
    period: "August 2025 – August 2026",
    location: "Ahmedabad, Gujarat, India",
    type: "Full-Time",
    summary:
      "Contributed to a SaaS platform for task and employee management while developing the company's marketing website and scaling frontend modules.",
    bullets: [
      "Developed responsive frontend features and interactive application modules using React.js.",
      "Collaborated with backend engineers to integrate 50+ REST APIs across core workflows.",
      "Engineered and maintained admin panel features, role permissions, and user dashboards.",
      "Built and deployed the company's public marketing website with consistent UI/UX design.",
      "Standardized reusable component patterns to accelerate development speed and interface consistency.",
    ],
    links: [
      { label: "Marketing Site", url: "https://simplifyte.com/" },
      { label: "SaaS App", url: "https://app.simplifyte.com/" },
    ],
  },
  {
    id: "meetanshi-trainee",
    role: "React.js Trainee",
    company: "Meetanshi Technologies",
    period: "January 2025 – June 2025",
    location: "Bhavnagar, Gujarat, India",
    type: "Internship / Trainee",
    summary:
      "Gained hands-on experience building production frontend interfaces, REST API integration, component architecture, and team Git workflows.",
    bullets: [
      "Built clean, responsive web interfaces from design wireframes using HTML5, CSS3, JavaScript, and React.js.",
      "Integrated external RESTful endpoints and handled asynchronous data states.",
      "Architected modular, reusable UI components adhering to modern React best practices.",
      "Collaborated in agile team sprints with version control and code review workflows.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Engineering",
  field: "Computer Engineering",
  institution: "Gyanmanjari Institute of Technology",
  location: "Gujarat, India",
  year: "2025",
};
