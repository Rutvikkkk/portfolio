# Rutvik Bhil — Personal Developer Portfolio

> **"Developer by skills. Explorer by nature."**

An award-winning editorial personal portfolio website engineered for **Rutvik Bhil** (Full-Stack JavaScript Developer / React & Next.js Developer). Built with an editorial, cinematic, dark aesthetic inspired by modern creative craftsmanship, featuring Rutvik's authentic Kedarkantha summit photograph and narrative, verifiable production client projects, and an accurate career timeline.

---

## 🏔️ Design Direction & Aesthetic

- **Theme**: Dark editorial palette (`#08090B` near-black background, `#111317` deep charcoal, `#F5F4F0` warm white typography, `#A3A6AD` muted grey, and `#91B9F5` alpine-sky accent).
- **Hero Photography**: Authentic high-resolution photograph of Rutvik Bhil on the summit of **Kedarkantha Peak (12,500 ft, Uttarakhand, India)** at sunrise with subtle cinematic overlays and restrained parallax.
- **Typography**: Fluid type system via `next/font/google`:
  - `DM Sans` for display headlines
  - `Manrope` for body and interface elements
  - `Instrument Serif` (italic) for poetic accents and visual signatures
- **Motion & Interaction**:
  - `Framer Motion`: Fluid entrance choreography, masked text reveals, interactive project card physics, and smooth chapter switching.
  - `Lenis`: Butter-smooth inertia scrolling with automatic `prefers-reduced-motion` compliance.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── images/
│   │   ├── kedarkantha-summit.jpg    # Authentic summit photograph (12,500 ft)
│   │   └── projects/
│   │       ├── iksafar.png           # Live screenshot (https://iksafar.in/)
│   │       ├── valleyview.png        # Live screenshot (https://valleyviewhomestay.com/)
│   │       ├── simplifyte.png        # Live screenshot (https://simplifyte.com/)
│   │       ├── premium-cafe.png      # Live screenshot (https://premium-cafe-tawny.vercel.app/)
│   │       └── bridal-makeup.png     # Live screenshot (https://vasudha-arora-bridal.vercel.app/)
│   └── resume.pdf                    # Rutvik Bhil's official PDF resume
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Contact endpoint with Zod validation
│   │   ├── globals.css               # Design system tokens, fluid scales & sliding underline
│   │   ├── layout.tsx                # App root with Google Fonts, SEO metadata & OpenGraph
│   │   ├── page.tsx                  # Landing page assembling all editorial sections
│   │   ├── robots.ts                 # SEO robots configuration
│   │   └── sitemap.ts                # XML Sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Minimalist transparent header with mobile sheet
│   │   │   └── Footer.tsx            # Quiet minimal footer with back-to-top action
│   │   ├── providers/
│   │   │   └── SmoothScroll.tsx      # Lenis smooth-scroll wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Full-screen Kedarkantha hero with story & dual CTAs
│   │   │   ├── About.tsx             # Philosophy, introduction, and verified personal facts
│   │   │   ├── StorySection.tsx      # 3-chapter Kedarkantha ascent (Struggle, Climb, Sunrise)
│   │   │   ├── Projects.tsx          # Editorial project showcase with live previews & filters
│   │   │   ├── Experience.tsx        # Verifiable career timeline & computer engineering degree
│   │   │   ├── TechStack.tsx         # Categorized JavaScript toolkit (no fake percentages)
│   │   │   └── Contact.tsx           # Emotional closing section, direct links & message form
│   │   └── ui/
│   │       ├── Icons.tsx             # Custom SVG icons (GitHub, LinkedIn)
│   │       ├── ProjectCard.tsx       # Aspect-ratio project preview with status badges & tags
│   │       └── SectionHeading.tsx    # Reusable tracked label & fluid headline component
│   ├── data/
│   │   ├── site.ts                   # Centralized configuration (name, role, contacts, URLs)
│   │   ├── projects.ts               # Accurate projects catalog
│   │   ├── experience.ts             # Professional career history & education
│   │   └── skills.ts                 # Categorized technical toolkit
│   └── lib/
│       ├── utils.ts                  # Utility class merging
│       └── validation.ts             # Zod schema validation
```

---

## ⚡ Getting Started Locally

```bash
# 1. Navigate to the project directory
cd /Users/vishalbhil/.gemini/antigravity-ide/scratch/portfolio

# 2. Run the development server
npm run dev

# Open http://localhost:3000 in your browser.
```

### Production Build

```bash
npm run build
npm run start
```

---

## ⚙️ Updating Content & Links

All personal details, URLs, and social profiles are maintained in a single configuration file:
- **`src/data/site.ts`**: Edit name, email, phone, LinkedIn, GitHub, and story copy.
- **`src/data/projects.ts`**: Add or modify portfolio projects, descriptions, and live URLs.
- **`src/data/experience.ts`**: Update work history or education credentials.
- **`public/resume.pdf`**: Drop in any newly updated PDF resume to automatically update the download button across the site.
