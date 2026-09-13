import BlogPageContent from "../components/blog/BlogPageContent";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Page heading */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
          Our Blog
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Real Estate Insights
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Explore useful insights, property advice, market trends,
          and tips to help you make better real estate decisions.
        </p>
      </div>

      <BlogPageContent/>
    </div>
  );
}