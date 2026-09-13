import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const PropertyCard = ({ properties, edit }) => {
  if (!Array.isArray(properties) || properties.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        No properties found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-16">
      {properties.map((property) => {
        if (!property?.id) return null;

        return (
          <div
            key={property.id}
            className="h-auto pb-4 w-[95%] flex flex-col relative mx-auto border-0 rounded-md bg-white shadow-sm"
          >
            {/* Image and badges */}
            <Link href={`/properties/${property.id}`} className="block overflow-hidden rounded-t-md">
              <img
                src={property.images?.[0] || "/placeholder.jpg"}
                alt={property.title || "Property"}
                className="object-cover h-85 w-full hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {property.listingType && (
              <p className="absolute top-3 right-3 bg-gray-900 text-[12px] uppercase p-0.5 px-2 text-white border-gray-600 rounded">
                {property.listingType}
              </p>
            )}

            {property.price && (
              <p className="absolute top-3 left-3 text-[18px] font-semibold uppercase p-0.5 px-2 text-white bg-black/60 rounded">
                ${property.price}
              </p>
            )}

            {/* Details */}
            <div className="mt-4">
              <Link href={`/properties/${property.id}`}>
                <h1 className="font-medium pl-4 hover:underline">{property.title}</h1>
              </Link>

              <div className="flex flex-row items-center pl-3.5 text-gray-600">
                <CiLocationOn />
                <p className="text-sm ml-1">{property.location}</p>
              </div>

              <div className="flex flex-row justify-between items-center my-3">
                <div className="flex flex-row gap-4 items-center px-4">
                  <div className="flex flex-row gap-1 items-center">
                    <IoBedOutline />
                    <p className="text-sm">{property.bedrooms}</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <MdBathtub />
                    <p className="text-sm">{property.bathrooms}</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <LuTriangleRight />
                    <p className="text-sm">{property.area}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {edit && (
                    <Link
                      href={`/editProperty/${property.id}`}
                      className="mr-2 px-4 py-1.5 bg-[#D2C28F] text-sm font-medium rounded hover:opacity-90"
                    >
                      Edit
                    </Link>
                  )}
                  <Link
                    href={`/properties/${property.id}`}
                    className="mr-4 px-4 py-1.5 bg-[#D2C28F] text-sm font-medium rounded hover:opacity-90"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyCard;