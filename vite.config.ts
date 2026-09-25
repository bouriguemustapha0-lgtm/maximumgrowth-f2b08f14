// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { join } from "node:path";
import { generateSitemap } from "./scripts/generate-sitemap.mjs";

// Regenerates public/sitemap.xml on every build (and dev start), so Vercel
// always deploys a fresh sitemap without manual steps.
const sitemapPlugin = {
  name: "generate-sitemap",
  buildStart() {
    const out = join(process.cwd(), "public", "sitemap.xml");
    const count = generateSitemap(out);
    console.log(`[sitemap] wrote ${count} URLs to public/sitemap.xml`);
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [sitemapPlugin],
  },
});
