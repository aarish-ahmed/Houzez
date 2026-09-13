import React from 'react'
import { getPropertyApi } from '../../fetchApi/propertyApi'
import PropertyCard from '../components/propertyCard/PropertyCard'

// Force Next.js to render dynamically on request rather than during build
export const dynamic = 'force-dynamic';

const Properties = async () => {
  const edit = false;
  const properties = (await getPropertyApi()) || [];

  return (
    <div className='bg-gray-50 mt-8 pb-6 min-h-screen'>
      <PropertyCard properties={properties} edit={edit} />
    </div>
  );
};

export default Properties;