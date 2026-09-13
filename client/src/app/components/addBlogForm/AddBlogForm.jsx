"use client";

import { addBlogApi } from "../../../fetchApi/blogApi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AddBlog() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Remove previous preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const imageUrl = URL.createObjectURL(file);

    setPreviewUrl(imageUrl);
  };

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(null);

    // Clear actual file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const data = await addBlogApi(formData);

      setMessage(data.message);
      setMessageType("success");

      // Clear form
      form.reset();

      // Clear image preview
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl(null);
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Add New Blog
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Create and publish a new blog article.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title + Slug */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              placeholder="e.g. how-to-buy-a-property"
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              This will be used in the blog URL.
            </p>
          </div>
        </div>

        {/* Author + Cover Image */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Author */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Author
            </label>

            <input
              type="text"
              name="author"
              placeholder="Author name"
              disabled={isLoading}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Cover Image
            </label>

            {/* 
              IMPORTANT:
              Keep the input mounted even when preview is showing.
            */}
            <input
              ref={fileInputRef}
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isLoading}
              className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm disabled:bg-gray-100 ${
                previewUrl ? "hidden" : ""
              }`}
            />

            {/* Image Preview */}
            {previewUrl && (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Cover preview"
                  className="h-40 w-full rounded-lg border border-gray-200 object-cover"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  disabled={isLoading}
                  className="absolute right-2 top-2 rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Excerpt
          </label>

          <textarea
            name="excerpt"
            rows={3}
            placeholder="Write a short description of the blog..."
            disabled={isLoading}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Content
          </label>

          <textarea
            name="content"
            rows={8}
            placeholder="Write your blog content here..."
            disabled={isLoading}
            className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <Link
            href="/adminDashboard"
            className={`rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              isLoading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Adding...
              </>
            ) : (
              "Add Blog"
            )}
          </button>
        </div>
      </form>

      {/* Backend Message */}
      {message && (
        <div
          className={`mt-5 rounded-lg px-4 py-3 text-sm ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}