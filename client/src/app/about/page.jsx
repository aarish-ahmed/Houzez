import React from "react";
import TeamMember from "../components/teamMembers/TeamMember";

const page = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center w-full">
        <img
          src="/about.png"
          className="h-60 w-full md:h-60 object-cover"
        ></img>
        <div className="absolute text-4xl flex justify-center items-center  text-white font-light tracking-[8px]">
          ABOUT US
        </div>
      </div>
      <div className="px-6 py-16 md:px-48 flex flex-col md:flex-row font-serif gap-8 ">
        <div className="font-sans text-[18px] leading-[1.5] font-light tracking-wide text-gray-700 text-justify">
          <span className="font-semibold">
            Houzez is a premium WordPress theme for real estate agents
          </span>{" "}
          and agencies where modern aesthetics are combined with a tasteful
          simplicity and where the ease of use is achieved without compromise in
          your ability to customize the design. <br />
          <span>
            Whether you are a real estate agent looking to build a website for
            your company or a web developer seeking a perfect WordPress theme
            for your next project, you are certain to appreciate the numerous
            features and benefits that our theme provides.
          </span>
        </div>
        <div className="font-sans text-[18px] leading-[1.5] font-light tracking-wide text-gray-700 text-justify">
          Houzez is also a WordPress-based property management system which
          allows you to own and maintain a real estate marketplace, coordinate
          your agents, accept submissions and offer membership packages. <br />
          <span>
            Unlike many other real estate themes which confine you to a handful
            of predefined layouts,{" "}
            <span className="font-semibold">
              Houzez offers a limitless array of possibilities to structure and
              style your content.
            </span>{" "}
            All of the customization options are logically organized in your
            WordPress admin panel and thorough customization in the provided
            documentation.
          </span>
        </div>
      </div>
      <TeamMember />
    </div>
  );
};

export default page;
