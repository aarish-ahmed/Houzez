"use client";
import { useState } from "react";
import React from "react";

export const AddPropertyForm = ({ handleAddPropertySubmit }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      formData.delete("images");

      selectedImages.forEach((image) => {
        formData.append("images", image);
      });

      const response = await handleAddPropertySubmit(formData);

      if (response?.error) {
        setFeedback({
          type: "error",
          message: response.error || "Failed to add property.",
        });
      } else {
        setFeedback({
          type: "success",
          message: "Property added successfully!",
        });
        formElement.reset();
        setSelectedImages([]);
      }
    } catch (err) {
      setFeedback({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
      // Automatically scroll to the top of the page to show the feedback banner
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            Property Management
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Add New Property
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Create a new property listing by providing the details, pricing,
            location, and images below.
          </p>
        </div>

        {feedback.message && (
          <div
            className={`mb-6 rounded-xl border p-4 text-sm font-medium ${
              feedback.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Basic Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Provide the main information about this property.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Property Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="e.g. Modern 3 Bedroom Apartment"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows="5"
                  placeholder="Describe the property, its features, surroundings, and other important details..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Listing Details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Set the property type, listing type, status, and location.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                    $
                  </span>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    min="0"
                    placeholder="250000"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-8 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="e.g. Gulshan, Dhaka"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                  <option value="Office">Office</option>
                  <option value="Land">Land</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="listingType"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Listing Type
                </label>
                <select
                  id="listingType"
                  name="listingType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Select listing type
                  </option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Rented">Rented</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Property Specifications
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add the basic measurements and room information.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label
                  htmlFor="bedrooms"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Bedrooms
                </label>
                <input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  required
                  min="0"
                  placeholder="e.g. 3"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="bathrooms"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Bathrooms
                </label>
                <input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  required
                  min="0"
                  placeholder="e.g. 2"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Area (sq ft)
                </label>
                <input
                  id="area"
                  name="area"
                  type="number"
                  required
                  min="0"
                  placeholder="e.g. 1500"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Property Images
            </label>
            <label htmlFor="images" className="cursor-pointer">
              <div className="border-2 border-dashed border-indigo-400 rounded-xl p-10 text-center">
                <p>Click to upload property images</p>
                <p>PNG, JPG or WEBP · Multiple images allowed</p>
              </div>
            </label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              multiple
              className="hidden"
              onChange={(e) => {
                setSelectedImages((prev) => [
                  ...prev,
                  ...Array.from(e.target.files),
                ]);
              }}
            />

            {selectedImages.length > 0 && (
              <div className="mt-4">
                {selectedImages.map((image, index) => (
                  <div
                    key={`${image.name}-${index}`}
                    className="text-sm text-slate-600"
                  >
                    {image.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p className="text-xs text-slate-500">
              Make sure all property information is accurate before submitting.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && (
                <svg
                  className="h-4 w-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {loading ? "Adding Property..." : "Add Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};