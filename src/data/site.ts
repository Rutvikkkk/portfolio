export interface SiteConfig {
  name: string;
  role: string;
  secondaryRole: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  portfolioUrl: string;
  availability: string;
  statusHeadline: string;
  mountainStory: {
    peak: string;
    location: string;
    elevation: string;
    tagline: string;
    headline: string;
    story: string;
    signature: string;
    imagePath: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Rutvik Bhil",
  role: "Full-Stack JavaScript Developer",
  secondaryRole: "React & Next.js Developer / Freelance Web Developer",
  location: "Gujarat, India",
  email: "rutvikbhil008@gmail.com",
  phone: "+91 9723962344",
  linkedin: "https://linkedin.com/in/rutvik-bhil",
  github: "https://github.com/Rutvikkkk",
  resumeUrl: "/resume.pdf",
  portfolioUrl: "https://rutvikbhil-portfolio.vercel.app/",
  availability: "Open to freelance projects and full-time opportunities",
  statusHeadline: "Currently freelancing for businesses and actively seeking full-time software engineering roles.",
  mountainStory: {
    peak: "KEDARKANTHA PEAK",
    location: "UTTARAKHAND, INDIA",
    elevation: "12,500 FT",
    tagline: "Developer by skills. Explorer by nature.",
    headline: "Harder paths.\nStronger versions of you.",
    story:
      "I trekked for three days to reach this summit. There were moments I thought about giving up. My body was struggling, but I kept going. And at the top, I witnessed the most beautiful sunrise of my life.",
    signature: "Discomfort today.\nA better version tomorrow.",
    imagePath: "/images/kedarkantha-summit.jpg",
  },
};
