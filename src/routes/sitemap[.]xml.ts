import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://maximumgrowth.online";

const pages = [
  "/", "/en",
  "/creation-site-web", "/en/web-design",
  "/freelance-site-web", "/en/freelance-web-designer",
  "/agence-web", "/en/web-agency",
  "/services", "/en/services",
  "/realisations", "/en/work",
  "/seo", "/en/seo",
  "/a-propos", "/en/about",
  "/blog", "/en/blog",
  "/contact", "/en/contact",
];

const articles = [
  "/blog/prix-site-web-maroc-2026", "/en/blog/website-cost-morocco-2026",
  "/blog/choisir-agence-web-beni-mellal", "/en/blog/choose-web-agency-beni-mellal",
  "/blog/site-pas-visible-sur-google", "/en/blog/website-not-visible-on-google",
  "/blog/site-vitrine-ou-site-reservation", "/en/blog/business-website-or-booking-website",
  "/blog/whatsapp-business-petites-entreprises-maroc", "/en/blog/whatsapp-business-moroccan-small-businesses",
];

function entry(path: string, changefreq: string, priority: string) {
  return `  <url>\n    <loc>${SITE}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function buildSitemap() {
  const urls = [
    ...pages.map((p) => entry(p, "weekly", p === "/" || p === "/en" ? "1.0" : "0.8")),
    ...articles.map((p) => entry(p, "monthly", "0.7")),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
