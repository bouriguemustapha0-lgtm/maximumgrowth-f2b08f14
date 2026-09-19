import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/realisations")({ head: () => makeHead("work", "fr"), component: () => <WorkPage lang="fr" /> });
