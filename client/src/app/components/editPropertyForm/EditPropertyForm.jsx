'use client'

import React, { useState } from "react";

const EditPropertyForm = ({ property }) => {
  const [title, setTitle] = useState(property?.title || "");
  const [description, setDescription] = useState(property?.description || "");
  const [price, setPrice] = useState(property?.price || "");
  const [location, setLocation] = useState(property?.location || "");
  const [propertyType, setPropertyType] = useState(property?.propertyType || "");
  const [status, setStatus] = useState(property?.status || "");
  const [bedrooms, setBedrooms] = useState(property?.bedrooms || "");
  const [bathrooms, setBathrooms] = useState(property?.bathrooms || "");
  const [area, setArea] = useState(property?.area || "");
  const [images, setImages] = useState(property?.images || []);
  const [newImages, setNewImages] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", isError: false });

  if (!property) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
        <p className="text-lg font-medium text-gray-500">Property not found.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setFeedback({ message: "", isError: false });

    try {
      // API call logic goes here
      
      setFeedback({ message: "Property updated successfully!", isError: false });
    } catch (error) {
      setFeedback({ message: "Failed to update property. Please try again.", isError: true });
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFeedback({ message: "", isError: false });
      }, 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Edit Property</h2>
        <p className="text-sm text-gray-500 mt-1">Update the details and images for this listing.</p>
      </div>

      {feedback.message && (
        <div className={`p-4 mb-6 rounded-lg font-medium border ${
          feedback.isError 
            ? 'bg-red-50 text-red-700 border-red-200' 
            : 'bg-green-50 text-green-700 border-green-200'
        }`}>
          {feedback.message}
        </div>
      )}

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
            placeholder="e.g. Luxury Villa in Downtown"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 resize-none disabled:opacity-60"
            placeholder="Describe the property..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <input
            type="text"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <input
            type="number"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            disabled={isSubmitting}
            className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 disabled:opacity-60"
          />
        </div>

        <div className="md:col-span-2 mt-4 pt-6 border-t border-gray-100">
          <label className="block text-base font-semibold text-gray-900 mb-4">Property Images</label>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {images.map((image, index) => (
              <div key={image} className="relative group aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-2 right-2 bg-white/90 text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 shadow-sm disabled:hidden"
                >
                  Remove
                </button>
              </div>
            ))}

            {newImages.map((file, index) => (
              <div key={`new-${index}`} className="relative group aspect-video bg-blue-50 rounded-xl overflow-hidden border-2 border-blue-400">
                <img
                  src={URL.createObjectURL(file)} 
                  alt={`New Upload ${index + 1}`}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow-sm font-medium">
                  New
                </div>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setNewImages(newImages.filter((_, i) => i !== index))}
                  className="absolute top-2 right-2 bg-white/90 text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 shadow-sm disabled:hidden"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-full">
            <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 transition-colors ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-100'}`}>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 font-medium">Click to upload new images</p>
                <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF</p>
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                disabled={isSubmitting}
                onChange={(e) => setNewImages([...newImages, ...e.target.files])}
              />
            </label>
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-end mt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:bg-blue-400 disabled:cursor-not-allowed min-w-[160px]"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditPropertyForm;