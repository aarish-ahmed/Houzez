import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
const PropertyCard = ({ properties,edit }) => {
  
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-16">
      {properties?.map((property) => {
        return (
          <>
            <Link href={`/properties/${property.id}`} key={property.id}>
            <div key={property.id} className=" h-auto pb-4 w-[95%]  flex flex-col  relative mx-auto border-0 rounded-md bg-white ">
              <img src={property.images[0]} className="object-cover h-85 w-full"></img>
              <p className="absolute top-3 right-3 bg-gray-900 text-[12px] uppercase p-0.5 text-white border-gray-600 rounded ">{property.listingType}</p>
              <p className="absolute top-3 left-3 text-[18px] font-semibold uppercase p-0.5 text-white border-gray-600 rounded ">${property.price}</p>
              <div className="mt-4">
                <h1 className="font-medium pl-4">{property.title}</h1>
              <div className="flex flex-row items-center pl-3.5">
                <CiLocationOn />
                <p>{property.location}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 items-center px-4">
                <div className="flex flex-row gap-1 items-center">
                  <div >
                    <IoBedOutline />
                  </div>
                  <p>{property.bedrooms}</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div>
                    <MdBathtub />
                  </div>
                  <p>{property.bathrooms}</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div>
                   
                    <LuTriangleRight />
                  </div>
                  <p>{property.area}</p>
                </div>
              </div>
              {edit && 
              <>
              <Link href={`/editProperty/${property.id}`} className="mr-4 px-4 py-1.5 bg-[#D2C28F] border-0 rounded">edit</Link>
              </>
              }
              <Link href={`/properties/${property.id}`} className="mr-4 px-4 py-1.5 bg-[#D2C28F] border-0 rounded">Details</Link>
              </div>
              </div>
            </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default PropertyCard;
