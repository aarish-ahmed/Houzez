
import React from 'react'
import { getPropertyApi } from '../../fetchApi/propertyApi'
import PropertyCard from '../components/propertyCard/PropertyCard'

const Properties = async() => {
    const edit=false;
    const  properties=await getPropertyApi()
    
  return (
    <div className='bg-gray-50 mt-8 pb-6'>
        <PropertyCard properties={properties} edit={edit}/>
    </div>
  )
}

export default Properties