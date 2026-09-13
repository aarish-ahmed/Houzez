"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaYoutube, FaChevronUp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden flex items-center justify-center flex-col">
        <img
          src="/footer.jpg"
          alt="footer"
          className="absolute inset-0 w-full h-96 object-cover"
        />
        <div className="inset-0 absolute bg-black/20"></div>
        <div className="mx-auto relative py-12 w-[80%] md:w-[40%] bg-white/15 backdrop-blur-sm border-white rounded-lg flex flex-col justify-center items-center px-8 md:px-12 gap-4">
          <div className="text-white">*</div>
          <div className="text-[24px] md:text-[28px] text-center text-white font-serif">
            Investement or lifestyle-What should lead your decision?
          </div>
          <div className="text-white text-center font-thin text-[14px] md:text-[18px]">
            Aligning your property choice with your financial goals
          </div>
          <div className="h-[2px] w-28 bg-white mt-2"></div>
          <div className="bg-white px-3 py-2 border rounded-xl flex items-center gap-2 mt-2">
            <Link href={"/properties"}>Explore Properties </Link>
            <FaArrowRightLong className="translate-y-0.5" />
          </div>
        </div>
      </div>

      <footer className="bg-white text-gray-800 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-1 mb-4">
                <CiLocationOn className="text-blue-400 text-3xl" />
                <span className="text-3xl font-bold tracking-tighter text-black">
                  houzez
                </span>
              </Link>
              <p className="text-[#8e8e8e] text-[15px] leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-black text-lg mb-4">Real Estate</h3>
                <ul className="space-y-3 text-[15px] text-[#d2c28f]">
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Apartment</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Single Family Home</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Villa</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Studio</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg mb-4">Discover</h3>
                <ul className="space-y-3 text-[15px] text-[#d2c28f]">
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Miami</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Los Angeles</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Chicago</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">New York</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black text-lg mb-4">About Us</h3>
                <ul className="space-y-3 text-[15px] text-[#d2c28f]">
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">About</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Agents</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Blog</Link></li>
                  <li><Link href="#" className="hover:text-[#bdae7c] transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <p className="text-[#a0a0a0] text-sm">
              © Houzez - All rights reserved
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#00aced] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#cb2027] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <FaYoutube size={14} />
                </a>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#d2c28f] text-white flex items-center justify-center rounded-[3px] hover:bg-[#bdae7c] transition-colors ml-2"
                aria-label="Scroll to top"
              >
                <FaChevronUp size={16} />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;