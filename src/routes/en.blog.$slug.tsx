import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/mg-site";
import { articleHead } from "@/lib/blog-content";

export const Route = createFileRoute("/en/blog/$slug")({
  component: Page,
  head: ({ params }) => articleHead("en", params.slug),
});

function Page() {
  const { slug } = Route.useParams();
  return <ArticlePage lang="en" slug={slug} />;
}
