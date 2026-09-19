import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/work")({ head: () => makeHead("work", "en"), component: () => <WorkPage lang="en" /> });
