import React from 'react'
import ContactForm from '../components/contactForm/ContactForm'

const page = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center w-full">
        <img
          src="/about.png"
          className="h-60 w-full md:h-60 object-cover"
        ></img>
        <div className="absolute text-4xl flex justify-center items-center  text-white font-light tracking-[8px]">
         CONTACT US
        </div>
      </div>
      <div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default page