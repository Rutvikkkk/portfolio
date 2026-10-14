# Rutvik Bhil — Personal Portfolio & SaaS Showcase

A high-performance personal portfolio and SaaS product showcase for **Rutvik Bhil** (Full-Stack Developer & SaaS Builder), engineered to convert both recruiters hiring for full-time engineering roles and founders/clients seeking freelance SaaS builds.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14+ / Next.js 16 (App Router, TypeScript, React 19)
- **Styling**: Tailwind CSS with custom design system tokens & dark/light mode (`next-themes`)
- **Animations**:
  - **GSAP**: "Reaching the Summit" mountain ascent loader with real-time SVG line-draw & climber beacon
  - **Framer Motion**: Scroll reveals, staggered typography, interactive state transitions, card physics
- **Smooth Scrolling**: Lenis (`lenis`) with prefers-reduced-motion fallback
- **Icons**: Lucide React
- **Typography**: Space Grotesk (display/headings) + Inter (body/UI) via `next/font/google`
- **Forms**: React Hook Form + Zod validation with dual-audience toggle (Hiring vs Project) & API route
- **Deployment**: Vercel ready

---

## 🏔️ The Signature Loading Screen: "Reaching the Summit"

The loading screen represents a mountain ascent inspired by Rutvik's climb of **Kedarkantha Peak (12,500 ft, India)**:
1. **Mountain Silhouette**: An SVG mountain line draws itself from left to right using stroke-dashoffset animation synced via GSAP.
2. **Climber Beacon**: A luminous marker tracks continuously along the line's current tip.
3. **Themed Status Texts**: Cycles from *"Packing gear"* (0-25%), *"Gaining altitude"* (25-50%), *"Almost at the snowline ridge"* (50-75%), to *"Summit in sight (12,500 ft)"* and *"Summit reached"*.
4. **Summit Opening**: Once reaching 100%, the loader scales out while the hero content slides in like the sky opening up from the summit.
5. **Session Memory**: Uses `sessionStorage` so the full experience plays once per session, followed by fast entrances on page revisits.
6. **Accessibility**: Fully respects `prefers-reduced-motion`.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact API endpoint with Zod validation
│   ├── crisptable/page.tsx    # Dedicated CrispTable SaaS showcase & architecture deep-dive
│   ├── work/[slug]/page.tsx   # Dynamic case study template with static params
│   ├── globals.css            # Custom CSS tokens & typography
│   ├── layout.tsx             # Root layout with fonts, ThemeProvider & Lenis
│   ├── page.tsx               # Main portfolio landing page
│   ├── robots.ts              # SEO robots config
│   └── sitemap.ts             # Dynamic XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Footer.tsx         # Site footer with quick links & socials
│   │   └── Navbar.tsx         # Fixed hide-on-scroll navigation & mobile menu
│   ├── loader/
│   │   └── SummitLoader.tsx   # Signature GSAP Mountain Ascent Loader
│   ├── providers/
│   │   ├── SmoothScroll.tsx   # Lenis wrapper with reduced-motion check
│   │   └── ThemeProvider.tsx  # Next-themes dark/light mode provider
│   ├── sections/
│   │   ├── AboutMe.tsx        # Story connecting Kedarkantha trekking to software discipline
│   │   ├── Contact.tsx        # Dual-mode Zod validated contact form
│   │   ├── CrispTableSpotlight.tsx # Interactive SaaS simulator & overview
│   │   ├── Experience.tsx     # Career timeline & resume PDF download
│   │   ├── FeaturedWork.tsx   # Projects showcase & category filters
│   │   ├── Hero.tsx           # Staggered typography, dual CTAs, mountain motif
│   │   ├── Services.tsx       # Freelance offerings & 4-step workflow
│   │   ├── Skills.tsx         # Categorized tech matrix with hover effects
│   │   ├── StatsBar.tsx       # Animated metrics counter
│   │   └── Testimonials.tsx   # Colleague & client recommendations
│   └── ui/
│       ├── Button.tsx         # Micro-animated button with motion effects
│       ├── ProjectCard.tsx    # Interactive project card with flagship layout
│       └── ThemeToggle.tsx    # Smooth dark/light switcher
├── data/
│   ├── experience.ts          # Work history & personal info
│   ├── projects.ts            # Project data, case studies, & placeholders
│   ├── services.ts            # Freelance services, 4-step process, testimonials
│   └── skills.ts              # Categorized tech stack data
├── lib/
│   ├── utils.ts               # Class merging utilities
│   └── validation.ts          # Zod schemas for contact form
└── types/
    └── index.ts               # Shared TypeScript interfaces
```

---

## 🛠️ Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## ✏️ Content Placeholders to Customize

All core content and links are cleanly separated in `src/data/`:
- `src/data/experience.ts`: Edit `personalInfo` (`email`, `github`, `linkedin`, `resumeUrl`, `trekHighlight`).
- `src/data/projects.ts`: Swap `[WEBSITE_1_NAME]`, `[WEBSITE_1_URL]`, `[WEBSITE_1_DESCRIPTION]`, `[WEBSITE_2_NAME]`, etc.
- `src/components/sections/AboutMe.tsx`: Replace `[TREK_PHOTO]` with your photo from Kedarkantha.
