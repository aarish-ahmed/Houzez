import React from "react";
import { AddPropertyForm } from "../components/addPropertyForm/AddPropertyForm";
import { addPropertyApi } from "../../fetchApi/propertyApi";

const Properties = async () => {
  const handleAddPropertySubmit = async (formData) => {
    "use server";
   const {data}= await addPropertyApi(formData);
  
  };

  return (
    <div>
      <AddPropertyForm handleAddPropertySubmit={handleAddPropertySubmit} />
    </div>
  );
};

export default Properties;