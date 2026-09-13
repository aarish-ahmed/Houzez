"use client";

export default function BlogCard({ blog, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left group"
    >
      <div className="flex gap-4 border-b border-gray-200 pb-5 mb-5">
        {/* Image */}
        <div className="w-28 h-24 shrink-0 overflow-hidden rounded-lg">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Information */}
        <div className="flex flex-col justify-between min-w-0">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {blog.excerpt}
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </button>
  );
}