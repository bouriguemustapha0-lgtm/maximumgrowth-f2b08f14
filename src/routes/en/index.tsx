import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/")({ head: () => makeHead("home", "en"), component: () => <HomePage lang="en" /> });
