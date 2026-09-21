import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/mg-site";
import { articleHead } from "@/lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  component: Page,
  head: ({ params }) => articleHead("fr", params.slug),
});

function Page() {
  const { slug } = Route.useParams();
  return <ArticlePage lang="fr" slug={slug} />;
}
