import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/seo")({ head: () => makeHead("seo", "en"), component: () => <SeoPage lang="en" /> });
