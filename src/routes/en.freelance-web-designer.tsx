import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/freelance-web-designer")({ head: () => makeHead("freelance", "en"), component: () => <StandardPage lang="en" pageKey="freelance" /> });
