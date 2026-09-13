import React from "react";
import { getOneProperty } from "../../../fetchApi/propertyApi";
import PropertyGallery from "../../components/propertyGallery/PropertyGallery";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

const PropertyDetails = async ({ params }) => {
  const { pid } = await params;

  const property = await getOneProperty(pid);

  return (
    <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10 lg:py-16">
      <div className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold py-1">
        {property.title}
      </div>

      <div className="flex items-center gap-1 md:gap-2 pb-1 text-sm md:text-base lg:text-lg">
        <CiLocationOn className="text-lg md:text-2xl lg:text-3xl" />
        <div>{property.location}</div>
      </div>

      <p className="w-fit bg-gray-700 text-[12px] md:text-sm lg:text-base uppercase px-2 md:px-3 py-1 md:py-1.5 text-white rounded my-2 md:my-3">
        {property.listingType}
      </p>

      <PropertyGallery images={property.images} />

      <div id="overview" className="mt-8 md:mt-12 lg:mt-16 w-full md:w-2/3">
        <div className="flex justify-between items-center mb-6 md:mb-8 lg:mb-10">
          <div className="font-semibold text-xl md:text-2xl lg:text-3xl">
            Overview
          </div>

          <div className="font-semibold text-sm md:text-base lg:text-lg">
            Property ID: <span className="font-light">Hz-01</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <FaHome className="text-lg md:text-2xl lg:text-3xl" />

              <span className="font-medium text-sm md:text-lg lg:text-xl">
                {property.propertyType}
              </span>
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Property Type
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <IoBedOutline className="text-lg md:text-2xl lg:text-3xl" />

              <span className="font-medium text-sm md:text-lg lg:text-xl">
                {property.bedrooms}
              </span>
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Bedrooms
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <MdBathtub className="text-lg md:text-2xl lg:text-3xl" />

              <span className="font-medium text-sm md:text-lg lg:text-xl">
                {property.bathrooms}
              </span>
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Bathrooms
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <LuTriangleRight className="text-lg md:text-2xl lg:text-3xl" />

              <span className="font-medium text-sm md:text-lg lg:text-xl">
                {property.area}
              </span>
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Area
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="font-medium text-sm md:text-lg lg:text-xl uppercase">
              {property.status}
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Status
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <div className="font-medium text-sm md:text-lg lg:text-xl uppercase">
              {property.listingType}
            </div>

            <div className="text-sm md:text-base lg:text-lg text-gray-500">
              Listing Type
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
