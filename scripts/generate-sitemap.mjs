// Generates public/sitemap.xml at build time.
// Single source of truth for routes + hreflang pairs.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE = "https://maximumgrowth.online";

// [frPath, enPath]
const pages = [
  ["/", "/en"],
  ["/creation-site-web", "/en/web-design"],
  ["/freelance-site-web", "/en/freelance-web-designer"],
  ["/agence-web", "/en/web-agency"],
  ["/services", "/en/services"],
  ["/realisations", "/en/work"],
  ["/seo", "/en/seo"],
  ["/a-propos", "/en/about"],
  ["/blog", "/en/blog"],
  ["/contact", "/en/contact"],
];

const articles = [
  ["/blog/prix-site-web-maroc-2026", "/en/blog/website-cost-morocco-2026"],
  ["/blog/choisir-agence-web-beni-mellal", "/en/blog/choose-web-agency-beni-mellal"],
  ["/blog/site-pas-visible-sur-google", "/en/blog/website-not-visible-on-google"],
  ["/blog/site-vitrine-ou-site-reservation", "/en/blog/business-website-or-booking-website"],
  ["/blog/whatsapp-business-petites-entreprises-maroc", "/en/blog/whatsapp-business-moroccan-small-businesses"],
];

function urlEntry(loc, fr, en, extra = "") {
  return (
    `  <url><loc>${SITE}${loc}</loc>${extra}` +
    `<xhtml:link rel="alternate" hreflang="fr" href="${SITE}${fr}"/>` +
    `<xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/>` +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${fr}"/></url>`
  );
}

export function generateSitemap(outFile) {
  const entries = [];
  for (const [fr, en] of pages) {
    entries.push(urlEntry(fr, fr, en));
    entries.push(urlEntry(en, fr, en));
  }
  const articleExtra = "<changefreq>monthly</changefreq><priority>0.7</priority>";
  for (const [fr, en] of articles) {
    entries.push(urlEntry(fr, fr, en, articleExtra));
    entries.push(urlEntry(en, fr, en, articleExtra));
  }
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join("\n") +
    `\n</urlset>\n`;
  writeFileSync(outFile, xml, "utf8");
  return entries.length;
}

// Run standalone: `node scripts/generate-sitemap.mjs`
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "sitemap.xml");
  const count = generateSitemap(out);
  console.log(`sitemap.xml written with ${count} URLs -> ${out}`);
}
