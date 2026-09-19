import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/blog")({ head: () => makeHead("blog", "en"), component: () => <BlogPage lang="en" /> });
