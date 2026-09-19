import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/mg-site";
import { makeHead } from "@/lib/mg-content";
export const Route = createFileRoute("/en/contact")({ head: () => makeHead("contact", "en"), component: () => <ContactPage lang="en" /> });
