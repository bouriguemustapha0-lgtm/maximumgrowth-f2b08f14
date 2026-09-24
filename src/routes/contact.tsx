import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/contact")({
  head: () => makeHead("contact", "fr"),
  component: () => <ContactPage lang="fr" />,
});
