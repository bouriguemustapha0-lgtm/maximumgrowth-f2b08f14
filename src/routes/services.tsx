import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/services")({ head: () => makeHead("services", "fr"), component: () => <StandardPage lang="fr" pageKey="services" /> });
