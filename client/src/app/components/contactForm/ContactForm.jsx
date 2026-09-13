import React from 'react'

const ContactForm = () => {
  return (
    <div>
        
<div className="min-h-screen bg-[#f7f8f9] flex justify-center">
      <form className="w-full max-w-[700px] px-6 py-24">

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label
              htmlFor="firstName"
              className="block mb-8 text-[16px] tracking-[6px] text-black"
            >
              FIRST NAME <span className="text-red-500">*</span>
            </label>

            <input
              id="firstName"
              type="text"
              placeholder="Enter your name"
              className="w-full h-[51px] border border-gray-500 bg-[#f3f0ee] px-4 text-[16px] outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block mb-8 text-[16px] tracking-[6px] text-black"
            >
              LAST NAME <span className="text-red-500">*</span>
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full h-[51px] border border-gray-500 bg-[#f3f0ee] px-4 text-[16px] outline-none focus:border-blue-400"
            />
          </div>

        </div>

        {/* Email */}
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block mb-8 text-[16px] tracking-[6px] text-black"
          >
            EMAIL <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full h-[51px] border border-gray-500 bg-[#f3f0ee] px-4 text-[16px] outline-none focus:border-blue-400"
          />
        </div>

        {/* Message */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block mb-8 text-[16px] tracking-[6px] text-black"
          >
            MESSAGE <span className="text-red-500">*</span>
          </label>

          <textarea
            id="message"
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-500 bg-[#f3f0ee] px-4 py-3 text-[16px] outline-none focus:border-blue-400 resize-none"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3 mt-5">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 w-6 h-6"
          />

          <label
            htmlFor="consent"
            className="text-[16px] tracking-[5px] leading-8"
          >
            I CONSENT TO HAVING THIS WEBSITE STORE MY
            <br />
            SUBMITTED INFORMATION
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-[50px] mt-12 bg-black text-white tracking-[3px] text-[16px]"
        >
          SUBMIT
        </button>

      </form>
    </div>

    </div>
  )
}

export default ContactForm