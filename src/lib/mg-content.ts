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
    fr: { title: "MG — Création de Sites Web à Béni Mellal | Mustapha Bourigue", description: "MG conçoit des sites web modernes et optimisés SEO à Béni Mellal, pour tous les secteurs. Devis gratuit, réponse rapide sur WhatsApp." },
    en: { title: "MG — Website Design in Béni Mellal | Mustapha Bourigue", description: "MG builds modern, SEO-optimised websites in Béni Mellal for every industry. Free quote and fast replies on WhatsApp." },
  },
  creation: {
    fr: { title: "Création de Site Web à Béni Mellal — Devis Gratuit | MG", description: "Besoin d'un site web professionnel à Béni Mellal ? Sites rapides, responsive et optimisés SEO. Découvrez nos tarifs et notre process de création." },
    en: { title: "Website Design in Béni Mellal — Free Quote | MG", description: "Need a professional website in Béni Mellal? Fast, responsive and SEO-optimised websites. Discover our pricing and design process." },
  },
  freelance: {
    fr: { title: "Freelance Site Web Béni Mellal — Développeur Web Indépendant | MG", description: "Freelance spécialisé en création de sites web à Béni Mellal. Tarifs directs sans intermédiaire, contact rapide, sites livrés en 2 à 4 semaines." },
    en: { title: "Freelance Web Designer Béni Mellal — Independent Developer | MG", description: "Freelance website specialist in Béni Mellal. Direct pricing, fast communication and websites delivered in 2 to 4 weeks." },
  },
  agency: {
    fr: { title: "Agence Web à Béni Mellal — Sites & SEO | Maximum Growth", description: "MG est une agence web basée à Béni Mellal : conception de sites, référencement SEO et optimisation. Accompagnement complet pour votre présence en ligne." },
    en: { title: "Web Agency in Béni Mellal — Websites & SEO | Maximum Growth", description: "MG is a web agency in Béni Mellal offering website design, SEO and optimisation. Complete support for your online presence." },
  },
  services: {
    fr: { title: "Services Web & SEO à Béni Mellal | MG", description: "Sites web sur mesure, SEO, performance mobile et intégrations WhatsApp/réservation. Découvrez tous les services de MG pour faire grandir votre activité." },
    en: { title: "Web & SEO Services in Béni Mellal | MG", description: "Custom websites, SEO, mobile performance and WhatsApp or booking integrations. Discover MG services for growing your business." },
  },
  work: {
    fr: { title: "Réalisations — Sites Web Créés par MG | Béni Mellal", description: "Découvrez les sites web réalisés par MG : hôtellerie, restaurants et plus. Design moderne, SEO intégré, résultats concrets pour nos clients." },
    en: { title: "Work — Websites Created by MG | Béni Mellal", description: "Explore websites created by MG for hotels, restaurants and more. Modern design, built-in SEO and concrete client results." },
  },
  seo: {
    fr: { title: "SEO Béni Mellal — Référencement Google | MG", description: "Service de référencement naturel à Béni Mellal pour être visible sur Google. Audit SEO, optimisation technique et locale. Résultats mesurables." },
    en: { title: "SEO Béni Mellal — Google Search Optimisation | MG", description: "SEO services in Béni Mellal to improve Google visibility. SEO audits, technical and local optimisation with measurable results." },
  },
  about: {
    fr: { title: "À Propos — Mustapha Bourigue, MG | Béni Mellal", description: "Mustapha Bourigue, développeur web et spécialiste SEO basé à Béni Mellal, 3+ ans d'expérience. Découvrez le parcours et la méthode derrière MG." },
    en: { title: "About — Mustapha Bourigue, MG | Béni Mellal", description: "Mustapha Bourigue is a web developer and SEO specialist in Béni Mellal with 3+ years of experience. Discover the story behind MG." },
  },
  blog: {
    fr: { title: "Blog — Conseils Web & SEO | MG Béni Mellal", description: "Conseils pratiques sur la création de sites web, le SEO et la visibilité en ligne pour les entreprises marocaines. Par MG, Béni Mellal." },
    en: { title: "Blog — Web & SEO Advice | MG Béni Mellal", description: "Practical website, SEO and online visibility advice for Moroccan businesses, by MG in Béni Mellal." },
  },
  contact: {
    fr: { title: "Contact — Devis Gratuit | MG Béni Mellal", description: "Contactez MG pour votre projet de site web ou SEO à Béni Mellal. Réponse rapide sur WhatsApp, devis gratuit sans engagement." },
    en: { title: "Contact — Free Quote | MG Béni Mellal", description: "Contact MG about your website or SEO project in Béni Mellal. Fast WhatsApp response and a free, no-obligation quote." },
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MG — Maximum Growth",
  founder: { "@type": "Person", name: "Mustapha Bourigue", jobTitle: "Développeur web et spécialiste SEO" },
  address: { "@type": "PostalAddress", addressLocality: "Béni Mellal", addressCountry: "MA" },
  areaServed: { "@type": "City", name: "Béni Mellal" },
  telephone: "+212699309986",
  email: "bouriguemustapha0@gmail.com",
  sameAs: ["https://www.instagram.com/mustapha_bourigue_mg", "https://www.linkedin.com/in/mustapha-bourigue"],
};

export function makeHead(key: PageKey, lang: Language) {
  const pageMeta = meta[key][lang];
  const path = routes[key][lang];
  const alternate = routes[key][lang === "fr" ? "en" : "fr"];
  const scripts: Array<{ type: string; children: string }> = [
    { type: "application/ld+json", children: JSON.stringify(localBusiness) },
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
