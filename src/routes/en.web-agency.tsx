import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/web-agency")({ head: () => makeHead("agency", "en"), component: () => <StandardPage lang="en" pageKey="agency" /> });
