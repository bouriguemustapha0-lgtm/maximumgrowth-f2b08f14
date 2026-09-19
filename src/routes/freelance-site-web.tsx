import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/freelance-site-web")({ head: () => makeHead("freelance", "fr"), component: () => <StandardPage lang="fr" pageKey="freelance" /> });
