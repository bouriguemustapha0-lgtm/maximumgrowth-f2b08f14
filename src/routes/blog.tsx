import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/blog")({ head: () => makeHead("blog", "fr"), component: () => <BlogPage lang="fr" /> });
