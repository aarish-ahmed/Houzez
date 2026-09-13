'use client'
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Kathleen Grant",
    role: "Founder",
    image: "/person1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    name: "Keith Bailey",
    role: "CEO",
    image: "/person2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    name: "Danielle Murray",
    role: "Manager",
    image: "/person3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
  {
    name: "Thomas Stevens",
    role: "Manager",
    image: "/person4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
  },
];

const TeamCard = ({ member }) => {
  const cardRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // Only run this animation on mobile
    if (window.innerWidth >= 768) return;

    let showTimer;
    let hideTimer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showTimer = setTimeout(() => {
            setShowInfo(true);

            hideTimer = setTimeout(() => {
              setShowInfo(false);
            }, 2000);
          }, 500);
        } else {
          clearTimeout(showTimer);
          clearTimeout(hideTimer);
          setShowInfo(false);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group h-100 overflow-hidden"
    >
      <img
        src={member.image}
        className={`h-100 w-full object-fit transition-all duration-500 ${
          showInfo ? "opacity-10" : "group-hover:opacity-10"
        }`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 ${
          showInfo
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <p className="font-semibold text-xl">
          {member.name}
        </p>

        <p className="text-xl font-light">
          {member.role}
        </p>

        <p className="mt-7 text-lg leading-8">
          {member.description}
        </p>

        <div className="flex gap-4 mt-5 text-xl">
          <FaFacebookF className="text-blue-600" />
          <FaXTwitter />
          <FaLinkedinIn className="text-sky-500" />
          <FaPinterestP className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

const TeamMember = () => {
  return (
    <div className="bg-[#F3F0ED] px-6 md:px-48 py-12 md:py-22">
      <div className="text-4xl font-sans tracking-wide pb-8 font-light">
        MEET OUR TEAM
      </div>

      <div className="flex grid grid-cols-1 md:grid-cols-4 md:h-100 gap-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMember;