import { createFileRoute } from "@tanstack/react-router";
import { StandardPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/web-design")({
  head: () => makeHead("creation", "en"),
  component: () => <StandardPage lang="en" pageKey="creation" />,
});
