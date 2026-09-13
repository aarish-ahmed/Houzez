import BlogCard from "./BlogCard";

export default function BlogSidebar({
  blogs,
  selectedBlog,
  onSelect,
}) {
  const otherBlogs = blogs.filter(
    (blog) => blog.id !== selectedBlog?.id
  );

  return (
    <aside>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Other Articles
      </h2>

      {otherBlogs.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No other articles available.
        </p>
      ) : (
        <div>
          {otherBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => onSelect(blog)}
            />
          ))}
        </div>
      )}
    </aside>
  );
}