import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/about")({ head: () => makeHead("about", "en"), component: () => <StandardPage lang="en" pageKey="about" /> });
