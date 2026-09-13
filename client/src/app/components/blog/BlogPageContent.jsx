"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getBlogsApi,
} from "../../../fetchApi/blogApi";

import BlogDetails from "./BlogDetails";
import BlogSidebar from "./BlogSidebar";
import BlogLoading from "./BlogLoading";

export default function BlogPageContent({ initialSlug = null }) {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const data = await getBlogsApi();

        const blogList = data.blogs || [];

        setBlogs(blogList);

        if (blogList.length === 0) {
          setSelectedBlog(null);
          return;
        }

        // If URL contains a slug, select that blog
        if (initialSlug) {
          const matchingBlog = blogList.find(
            (blog) => blog.slug === initialSlug
          );

          if (matchingBlog) {
            setSelectedBlog(matchingBlog);
          } else {
            // If slug doesn't exist, use newest blog
            setSelectedBlog(blogList[0]);
          }

          return;
        }

        // No slug = select newest blog
        setSelectedBlog(blogList[0]);
      } catch (error) {
        console.error(error);
        setError(error.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [initialSlug]);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);

    router.push(`/blog/${blog.slug}`, {
      scroll: false,
    });
  };

  if(loading){
     return <BlogLoading />;
  }
  if (error) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-red-500">
          {error}
        </p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-gray-500">
          No blogs available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* 2/3 - Blog Details */}
      <main className="lg:col-span-2">
        <BlogDetails blog={selectedBlog} />
      </main>

      {/* 1/3 - Other Blogs */}
      <div className="lg:col-span-1">
        <BlogSidebar
          blogs={blogs}
          selectedBlog={selectedBlog}
          onSelect={handleSelectBlog}
        />
      </div>

    </div>
  );
}