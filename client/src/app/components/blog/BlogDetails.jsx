export default function BlogDetails({ blog }) {
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <p className="text-gray-500">No blog selected.</p>
      </div>
    );
  }

  return (
    <article>
      {/* Cover Image */}
      <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog information */}
      <div className="mt-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h1>

        {/* Author + Date */}
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span>By {blog.author}</span>

          <span>•</span>

          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Excerpt */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
          {blog.excerpt}
        </p>

        {/* Content */}
        <div className="mt-8 text-gray-700 leading-8 whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </article>
  );
}