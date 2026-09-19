import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/agence-web")({ head: () => makeHead("agency", "fr"), component: () => <StandardPage lang="fr" pageKey="agency" /> });
