export const siteConfig = {
  name: "Jaco Roux",
  title: "Jaco Roux | Website Designer & Frontend Developer — George, Garden Route",
  description:
    "Senior frontend developer based in George, Western Cape. I design and build conversion-focused business websites for SMEs across the Garden Route and South Africa. Get a free quote.",
  url: "https://jacoroux.co.za",
  locale: "en_ZA",
  email: "email@jacoroux.co.za",
  linkedin: "https://www.linkedin.com/in/jaco-roux/",
  location: "George, Western Cape, South Africa",
  region: "Garden Route",
  yearsExperience: 13,
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "business-websites",
    title: "Business Websites",
    priceFrom: "From R8 500",
    summary:
      "A clean, fast site that explains what you do, builds trust, and makes it easy to call, WhatsApp, or request a quote.",
    points: [
      "Mobile-first design",
      "Contact & WhatsApp CTAs",
      "SEO-ready structure",
      "Hosting & domain guidance",
    ],
  },
  {
    id: "redesigns",
    title: "Website Redesigns",
    priceFrom: "From R6 500",
    summary:
      "Outdated look, slow pages, or confusing navigation? I rebuild for clarity, speed, and more enquiries.",
    points: [
      "Fresh visual identity",
      "Content restructure",
      "Performance polish",
      "Conversion-focused layout",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    priceFrom: "From R4 500",
    summary:
      "One sharp page for a campaign, product, or service — built to turn clicks into conversations.",
    points: [
      "Focused messaging",
      "Lead capture form",
      "Fast load times",
      "Analytics-ready",
    ],
  },
  {
    id: "seo-performance",
    title: "SEO & Performance Polish",
    priceFrom: "From R2 500",
    summary:
      "Tighten metadata, structure, Core Web Vitals, and local SEO so Google — and customers — can find you.",
    points: [
      "On-page SEO",
      "Speed optimisation",
      "Local keywords",
      "Technical cleanup",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Brief",
    description:
      "We clarify your goals, audience, pages, and must-haves. You get a clear scope and quote — no surprises.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I shape a distinctive direction tailored to your brand, with layouts that highlight offers and CTAs.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I develop a fast, accessible site with forms, WhatsApp links, and SEO foundations ready for search.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We go live together. I hand over training notes, domain/hosting guidance, and a short polish period.",
  },
] as const;

export const portfolio = [
  {
    title: "JT Field",
    industry: "Painting & Renovation",
    url: "https://www.jt-field.co.za",
    problem:
      "A Garden Route painting business needed a professional site that won trust and booked site visits.",
    solution:
      "Built a lead-focused brochure site with services, gallery, and clear free-quote CTAs.",
    result:
      "Clients in George and surrounds can request quotes in one tap — phone, WhatsApp, or form.",
    tags: ["Local services", "Gallery", "Quotes"],
    accent: "pink" as const,
  },
  {
    title: "Generator Services",
    industry: "Power & Generators",
    url: "https://www.generatorservices.co.za",
    problem:
      "A generator business selling reliability needed a site that converts urgent and planned enquiries.",
    solution:
      "Designed a high-conversion service site with clear offers, proof, and WhatsApp-first enquiry flows.",
    result:
      "Visitors can request emergency repairs or new installs without hunting for contact details.",
    tags: ["Conversion", "WhatsApp", "Services"],
    accent: "lime" as const,
  },
  {
    title: "Wildfire Support",
    industry: "Nonprofit / Community",
    url: "https://www.wildfiresupport.org.za",
    problem:
      "A volunteer wildfire organisation needed a credible presence for donations, training, and contact.",
    solution:
      "Delivered a structured multi-section site covering services, gallery, donations, and outreach.",
    result:
      "Supporters can donate, enquire, and follow the team — with the site listing Jaco Roux as builder.",
    tags: ["Nonprofit", "Donate", "SEO"],
    accent: "violet" as const,
  },
] as const;

export const whyMe = [
  {
    title: "Senior-level craft",
    description:
      "Nearly 13 years shipping frontend for agencies, insurers, and digital teams — your site gets production-grade quality.",
  },
  {
    title: "Built to convert",
    description:
      "Pretty is not enough. Every layout is wired for calls, WhatsApp, and quotes so your website earns its keep.",
  },
  {
    title: "Modern stack",
    description:
      "React, Vue, and Next.js experience means fast pages, clean code, and a foundation you can grow into.",
  },
  {
    title: "Clear communication",
    description:
      "English and Afrikaans friendly. Based in George — available for Garden Route businesses and remote clients SA-wide.",
  },
] as const;

export const experience = [
  {
    company: "+OneX / IQX",
    role: "Senior Frontend Developer",
    period: "2022 – 2026",
  },
  {
    company: "Huble Digital",
    role: "Frontend Developer",
    period: "2021 – 2022",
  },
  {
    company: "dotsure.co.za",
    role: "Full Front End Developer",
    period: "2015 – 2021",
  },
] as const;
