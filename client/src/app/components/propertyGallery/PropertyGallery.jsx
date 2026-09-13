'use client'
import React, { useState } from 'react'

const PropertyGallery = ({images}) => {
    const [selectedImage,setSelectedImage]=useState(images[0])
  return (
    <div className='flex flex-col gap-4'>
    <div >
        <img
        src={selectedImage}
        className='h-110 object-cover md:w-2/3 md:h-[75%]'
        />
    </div>
    <div className='flex gap-2 overflow-x-auto'>
      {images.map((image)=>{
        return(
            <>
            <img
            src={image}
            className='h-20 w-20 object-fit'
            onClick={(()=>setSelectedImage(image))}
            />
            </>
        )
      })}
    </div>
    </div>
  )
}

export default PropertyGallery