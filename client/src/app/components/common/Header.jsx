"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuClicked,setMenuClicked]=useState(false)
  const pathname = usePathname();
  const isHome = pathname === "/";
  const handleMenuclick = () => {
    setMenuClicked(!menuClicked)
  }

  return (
    <>
      <div
        className={` hidden lg:flex w-full justify-between flex-row h-18 px-6 items-center 
    ${isHome ? "absolute top-0 left-0 z-50 pt-4 px-2" : "relative bg-white"}
  `}
      >
        <div className="left ">
          <Link href={"/"} className="flex flex-row items-center">
            <div
              className={
                isHome ? "text-3xl text-white" : "text-3xl text-[#D2C28F] "
              }
            >
              <CiLocationOn />
            </div>
            <div
              className={isHome ? "text-3xl text-white " : "text-3xl text-black"}
            >
              houzez
            </div>
          </Link>
        </div>
        <div className={`mid flex gap-12 ${
    isHome ? "text-white" : "text-black"
  }`}>
          <Link href={'/'}  className={pathname === "/" ? "border-b border-white hover:text-blue-400" : "hover:text-blue-400"}>
            Home
          </Link>
          <Link href={"/properties"}   className={pathname === "/properties" ? "border-b border-black  hover:text-blue-400" : " hover:text-blue-400"}
  >Properties</Link>
          <Link href={'/blog'} className={pathname === "/blog" ? "border-b border-black  hover:text-blue-400" : " hover:text-blue-400" }>Blog</Link>
          <Link href={'/about'} className={pathname === "/about" ? "border-b border-black   hover:text-blue-400" : " hover:text-blue-400"}>About Us</Link>
          <Link href={'/contact'} className={pathname === "/contact" ? "border-b border-black  hover:text-blue-400" : " hover:text-blue-400"}>Contact us</Link>
        </div>
       <div className="right flex flex-row gap-2 text-xl">
  <Link
    href="#"
    className="w-8 h-8 rounded-full bg-[#4267B2] flex items-center justify-center text-white hover:opacity-80"
  >
    <FaFacebook />
  </Link>

  <Link
    href="#"
    className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80"
  >
    <FaXTwitter />
  </Link>

  <Link
    href="#"
    className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80"
  >
    <FaYoutube />
  </Link>

  <Link
    href="#"
    className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white hover:opacity-80"
  >
    <FaInstagram />
  </Link>
</div>
      </div>
      <div
        className={` md:hidden lg:hidden flex w-full  flex-col h-18 py-4
    ${isHome ? "absolute top-0 left-0 z-50 pt-4 px-2" : "relative pt-4 px-2 bg-white "}
  `}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="left ">
        <Link href={'/'}  className="flex flex-row items-center">
        <div className={isHome ? "text-3xl text-white" : "text-3xl text-yellow-300"}>
          <CiLocationOn />
        </div>
        <div className={isHome ? "text-3xl text-white" : "text-3xl text-black"}>
          houzez
        </div>
        </Link>
      </div>
      <div className="right">
        <button onClick={handleMenuclick}>
         <IoMenuOutline className={pathname==='/' ? "text-3xl text-white hover:text-yellow-300": "text-3xl text-black  hover:text-yellow-300"}/>
        </button>
      </div>
        </div>
        {menuClicked &&
        <>
        <div className="flex flex-col gap-8 items-center justify-center bg-white text-[46px] fixed inset-0 z-50">
          <button onClick={handleMenuclick}>
            <HiMiniXMark className="text-5xl text-black"/>
          </button>
          <Link href={'/'} onClick={handleMenuclick} className="border-b-2">Home</Link>
          <Link href={'/properties'} onClick={handleMenuclick} className="border-b-2">Properties</Link>
          <Link href={'/blog'} onClick={handleMenuclick} className="border-b-2">Blog</Link>
          <Link href={'/about'} onClick={handleMenuclick} className="border-b-2">About</Link>
          <Link href={'/contact'} onClick={handleMenuclick} className="border-b-2">Contact</Link>
        </div>
        </>}
      </div>

    </>
  );
};

export default Header;
