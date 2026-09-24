import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/creation-site-web")({
  head: () => makeHead("creation", "fr"),
  component: () => <StandardPage lang="fr" pageKey="creation" />,
});
