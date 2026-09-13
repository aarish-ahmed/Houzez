
import { FaAngleDown } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative flex h-[97vh] justify-center items-center">
      <video
        src="/villa.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute  inset-0 w-full h-full  object-cover"
      />
       <div className="flex flex-col items-center ">
        <h1 className="font-montserrat text-center  relative text-[40px] font-light tracking-[0.25em] text-white -translate-y-8 md:text-[46px]">
  SIGNATURE RESIDENCES REALTY
</h1>
       <p className="relative  text-center font-montserrat text-[16px] -translate-y-6 font-light tracking-[0.25em] text-white md:text-[20px]">
  Crafting Your Legacy with Exquisite Living Spaces
</p>
<FaAngleDown className="relative text-[46px] font-light text-gray-300 text-white translate-y-30 md:translate-y-45"/>
       </div>
      {/* Put things here to appear ON the video */}
    </div>
  );
};

export default Banner;