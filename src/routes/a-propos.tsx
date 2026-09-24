import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/a-propos")({
  head: () => makeHead("about", "fr"),
  component: () => <StandardPage lang="fr" pageKey="about" />,
});
