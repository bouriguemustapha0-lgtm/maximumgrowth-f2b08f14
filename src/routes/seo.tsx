import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/seo")({ head: () => makeHead("seo", "fr"), component: () => <SeoPage lang="fr" /> });
