export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  detailedPoints: string[];
  technologies: string[];
  liveUrl: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  image: string;
  isDemo?: boolean;
  isFlagship?: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "ik-safar",
    number: "01",
    title: "Ik Safar",
    category: "Travel Website",
    description:
      "A complete travel website built to present destinations and travel experiences through a modern digital experience.",
    detailedPoints: [
      "Built the complete frontend, interactive itinerary displays, and responsive user flow.",
      "Engineered an admin panel for dynamic trip packages and content updates.",
      "Optimized performance and full deployment on Vercel.",
    ],
    technologies: ["Next.js", "React", "Admin Panel", "Vercel", "Tailwind CSS"],
    liveUrl: "https://iksafar.in/",
    image: "/images/projects/iksafar.png",
    isFlagship: true,
    year: "2026",
  },
  {
    id: "valley-view",
    number: "02",
    title: "Valley View Homestay",
    category: "Homestay Website",
    description:
      "A complete homestay website with dynamic content and an admin panel for managing property information.",
    detailedPoints: [
      "Room and pricing management module with database-backed content.",
      "Gallery and content management system with Cloudinary integration.",
      "Direct WhatsApp booking inquiries and technical SEO optimization.",
      "Full deployment lifecycle management on Vercel.",
    ],
    technologies: ["Next.js", "MongoDB", "Cloudinary", "Vercel", "Tailwind CSS"],
    liveUrl: "https://valleyviewhomestay.com/",
    image: "/images/projects/valleyview.png",
    isFlagship: true,
    year: "2026",
  },
  {
    id: "simplifyte",
    number: "03",
    title: "Simplifyte",
    category: "Professional Experience / SaaS Product",
    description:
      "Worked on the company's marketing website and contributed frontend features to a SaaS platform for task and employee management.",
    detailedPoints: [
      "Developed responsive frontend features using React.js.",
      "Integrated 50+ REST APIs in collaboration with backend engineers.",
      "Developed and maintained admin panel modules and reusable UI components.",
      "Built the company's marketing website and improved user workflows.",
    ],
    technologies: ["React.js", "REST APIs", "JavaScript", "Admin Modules", "Tailwind CSS"],
    liveUrl: "https://simplifyte.com/",
    secondaryUrl: "https://app.simplifyte.com/",
    secondaryUrlLabel: "View SaaS App",
    image: "/images/projects/simplifyte.png",
    year: "2025 – 2026",
  },
  {
    id: "premium-cafe",
    number: "04",
    title: "Premium Cafe",
    category: "Concept Project / Demo",
    description:
      "A modern website concept for a premium cafe, focused on visual presentation and a polished browsing experience.",
    detailedPoints: [
      "Rich editorial atmosphere with custom typography and warm ambient layout.",
      "Interactive menu display and table reservation concept.",
      "Fluid responsive design tailored for mobile diners.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://premium-cafe-tawny.vercel.app/",
    image: "/images/projects/premium-cafe.png",
    isDemo: true,
    year: "2026",
  },
  {
    id: "bridal-makeup",
    number: "05",
    title: "Bridal Makeup Artist",
    category: "Concept Project / Demo",
    description:
      "An elegant portfolio website concept for a bridal makeup artist.",
    detailedPoints: [
      "High-end luxury aesthetic with editorial fashion layout.",
      "Lookbook gallery showcase and consultation inquiry flow.",
      "Smooth micro-interactions and typography choreography.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Editorial UI", "Vercel"],
    liveUrl: "https://vasudha-arora-bridal.vercel.app/",
    image: "/images/projects/bridal-makeup.png",
    isDemo: true,
    year: "2026",
  },
];
