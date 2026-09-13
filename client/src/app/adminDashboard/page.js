import React from 'react'
import { getPropertyApi } from '../../fetchApi/propertyApi'
import PropertyCard from '../components/propertyCard/PropertyCard'
import Link from 'next/link';

const AdminDashboard = async() => {
  const edit=true;

const prooperties=await getPropertyApi()

  return (
    <>
    <div className='flex flex-col md:flex-row justify-between  gap-4 p-6 md:px-18'>
      <div></div>
      <div className='text-4xl'>AdminDashboard</div>
      <div className='flex flex-row gap-2'>
        <Link href={'/blog/add'} className='text-xl bg-[#D2C28F]  rounded-sm p-2'>Add Blog</Link>
        <Link href={'/addProperties'} className='text-xl bg-[#D2C28F] rounded-sm p-2'>Add Property</Link>
      </div>
    </div>
    <PropertyCard properties={prooperties} edit={edit}/>
    </>
  )
}

export default AdminDashboard