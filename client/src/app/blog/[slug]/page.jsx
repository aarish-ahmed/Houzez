import BlogPageContent from "../../components/blog/BlogPageContent";

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <BlogPageContent initialSlug={slug} />
    </div>
  );
}