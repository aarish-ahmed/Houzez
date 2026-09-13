import React from 'react'
import EditPropertyForm from '../../components/editPropertyForm/EditPropertyForm.jsx'
import { getOneProperty } from '../../../fetchApi/propertyApi';


const EditProperty = async({params}) => {
    const {pid}=await params
    const property = await getOneProperty(pid);
    const handleEditPropertySubmit = async (formData) => {
      e.preventDefault()
      
    };
  return (
    <>
    
    <EditPropertyForm property={property}/>
    </>
  )
}

export default EditProperty