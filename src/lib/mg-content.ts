export type Language = "fr" | "en";
export type PageKey = "home" | "creation" | "freelance" | "agency" | "services" | "work" | "seo" | "about" | "blog" | "contact";

export const whatsappNumber = "212699309986";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const routes: Record<PageKey, { fr: string; en: string }> = {
  home: { fr: "/", en: "/en" },
  creation: { fr: "/creation-site-web", en: "/en/web-design" },
  freelance: { fr: "/freelance-site-web", en: "/en/freelance-web-designer" },
  agency: { fr: "/agence-web", en: "/en/web-agency" },
  services: { fr: "/services", en: "/en/services" },
  work: { fr: "/realisations", en: "/en/work" },
  seo: { fr: "/seo", en: "/en/seo" },
  about: { fr: "/a-propos", en: "/en/about" },
  blog: { fr: "/blog", en: "/en/blog" },
  contact: { fr: "/contact", en: "/en/contact" },
};

export const meta: Record<PageKey, Record<Language, { title: string; description: string }>> = {
  home: {
    fr: { title: "Maximum Growth — Agence Digitale en Ligne | Maroc & International", description: "Sites web, SEO et croissance digitale pour les entreprises modernes. Agence en ligne au service du Maroc et de clients à l'international." },
    en: { title: "Maximum Growth — Online Digital Agency | Morocco & International", description: "Websites, SEO and digital growth for modern businesses. An online agency serving Morocco and clients internationally." },
  },
  creation: {
    fr: { title: "Création de Site Web au Maroc — Agence en Ligne | MG", description: "MG crée des sites rapides, responsive et optimisés SEO à distance pour les entreprises au Maroc, notamment à Béni Mellal, et à l'international." },
    en: { title: "Website Design in Morocco — Online Agency | MG", description: "MG builds fast, responsive and SEO-optimised websites remotely for businesses across Morocco, including Béni Mellal, and internationally." },
  },
  freelance: {
    fr: { title: "Freelance Site Web au Maroc — Service à Distance | MG", description: "Travaillez directement et à distance avec Mustapha Bourigue pour votre site web au Maroc, y compris à Béni Mellal, ou à l'international." },
    en: { title: "Freelance Web Designer in Morocco — Remote Service | MG", description: "Work directly and remotely with Mustapha Bourigue on your website across Morocco, including Béni Mellal, or internationally." },
  },
  agency: {
    fr: { title: "Maximum Growth — Agence Digitale à Distance | Sites & SEO", description: "Agence digitale en ligne pour les entreprises au Maroc et à l'international. Sites web, SEO et accompagnement à distance, notamment à Béni Mellal." },
    en: { title: "Maximum Growth — Remote Digital Agency | Websites & SEO", description: "An online digital agency serving businesses across Morocco and internationally with websites, SEO and remote support, including Béni Mellal." },
  },
  services: {
    fr: { title: "Services Web, SEO & Croissance Digitale | MG", description: "Sites web sur mesure, SEO, performance mobile et intégrations pour les entreprises au Maroc et à l'international, entièrement à distance." },
    en: { title: "Web, SEO & Digital Growth Services | MG", description: "Custom websites, SEO, mobile performance and integrations for businesses across Morocco and internationally, delivered fully remotely." },
  },
  work: {
    fr: { title: "Réalisations — Sites Web Créés à Distance par MG", description: "Découvrez les sites créés par notre agence en ligne pour des entreprises au Maroc et à l'international : design moderne, SEO et résultats concrets." },
    en: { title: "Work — Websites Built Remotely by MG", description: "Explore websites built by our online agency for businesses across Morocco and internationally, with modern design, SEO and concrete results." },
  },
  seo: {
    fr: { title: "SEO au Maroc — Référencement à Distance | MG", description: "Service SEO à distance pour les entreprises au Maroc, notamment à Béni Mellal, et à l'international : audit, technique et visibilité mesurable." },
    en: { title: "SEO in Morocco — Remote Search Optimisation | MG", description: "Remote SEO for businesses across Morocco, including Béni Mellal, and internationally: audits, technical optimisation and measurable visibility." },
  },
  about: {
    fr: { title: "À Propos — Maximum Growth, Agence Digitale en Ligne", description: "Découvrez Maximum Growth, agence digitale à distance fondée par Mustapha Bourigue, spécialiste web et SEO avec plus de 3 ans d'expérience." },
    en: { title: "About — Maximum Growth, Online Digital Agency", description: "Meet Maximum Growth, a remote digital agency founded by Mustapha Bourigue, a web and SEO specialist with more than 3 years of experience." },
  },
  blog: {
    fr: { title: "Blog — Conseils Web, SEO & Croissance | Maximum Growth", description: "Conseils pratiques de notre agence en ligne sur les sites web, le SEO et la visibilité pour les entreprises au Maroc et à l'international." },
    en: { title: "Blog — Web, SEO & Growth Advice | Maximum Growth", description: "Practical advice from our online agency on websites, SEO and visibility for businesses across Morocco and internationally." },
  },
  contact: {
    fr: { title: "Contact — Agence Digitale à Distance | Maximum Growth", description: "Contactez notre agence en ligne pour un projet web ou SEO au Maroc ou à l'international. Réponse rapide sur WhatsApp et devis gratuit." },
    en: { title: "Contact — Remote Digital Agency | Maximum Growth", description: "Contact our online agency about a web or SEO project in Morocco or internationally. Fast WhatsApp response and a free quote." },
  },
};

const siteUrl = "https://maximumgrowth.lovable.app";

const socialProfiles = ["https://www.instagram.com/mustapha_bourigue_mg", "https://www.linkedin.com/in/mustapha-bourigue"];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#mustapha-bourigue`,
  name: "Mustapha Bourigue",
  jobTitle: "Web Developer & SEO Specialist",
  description: "Founder of Maximum Growth, a remote digital agency. Web developer and SEO specialist with more than 3 years of experience building fast, search-optimised websites for businesses across Morocco and internationally.",
  worksFor: { "@id": `${siteUrl}/#organization` },
  knowsAbout: ["Web development", "Search engine optimisation", "React", "Next.js", "TypeScript", "Tailwind CSS", "Core Web Vitals"],
  telephone: "+212699309986",
  email: "bouriguemustapha0@gmail.com",
  url: `${siteUrl}/a-propos`,
  sameAs: socialProfiles,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Maximum Growth",
  alternateName: "MG",
  url: siteUrl,
  logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` },
  description: "Maximum Growth is a remote digital agency helping businesses across Morocco and internationally with websites, SEO and digital growth. No physical office — services delivered fully online.",
  founder: { "@id": `${siteUrl}/#mustapha-bourigue` },
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+212699309986",
    email: "bouriguemustapha0@gmail.com",
    url: `${siteUrl}/contact`,
    availableLanguage: ["French", "English", "Arabic"],
  },
  areaServed: [
    { "@type": "Country", name: "Morocco" },
    { "@type": "City", name: "Béni Mellal" },
    { "@type": "City", name: "Marrakech" },
    { "@type": "City", name: "Casablanca" },
  ],
  sameAs: socialProfiles,
};

export function makeHead(key: PageKey, lang: Language) {
  const pageMeta = meta[key][lang];
  const path = routes[key][lang];
  const alternate = routes[key][lang === "fr" ? "en" : "fr"];
  const scripts: Array<{ type: string; children: string }> = [
    { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
    { type: "application/ld+json", children: JSON.stringify(personSchema) },
  ];
  if (key !== "home") {
    scripts.push({ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: lang === "fr" ? "Accueil" : "Home", item: lang === "fr" ? "/" : "/en" }, { "@type": "ListItem", position: 2, name: pageMeta.title, item: path }] }) });
  }
  if (key === "creation") {
    const faq = lang === "fr" ? [
      ["Combien coûte la création d'un site web au Maroc ?", "Le prix dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation du design."],
      ["Combien de temps pour avoir mon site en ligne ?", "Un site vitrine standard prend 2 à 4 semaines, de la première maquette à la mise en ligne."],
      ["Mon site sera-t-il visible sur Google dès le lancement ?", "Le site est structuré pour le SEO dès sa construction, mais le classement prend généralement plusieurs semaines à quelques mois."],
    ] : [
      ["How much does a website cost in Morocco?", "The price depends on page count, features and the level of design customisation."],
      ["How long until my website is online?", "A standard business website takes 2 to 4 weeks from the first design to launch."],
      ["Will my website rank on Google from launch?", "The website is structured for SEO from the start, but rankings generally take several weeks to a few months."],
    ];
    scripts.push({ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }) });
  }
  return {
    meta: [
      { title: pageMeta.title },
      { name: "description", content: pageMeta.description },
      { property: "og:title", content: pageMeta.title },
      { property: "og:description", content: pageMeta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: path },
      { rel: "alternate", hrefLang: lang === "fr" ? "en" : "fr", href: alternate },
      { rel: "alternate", hrefLang: "x-default", href: routes[key].fr },
    ],
    scripts,
  };
}
