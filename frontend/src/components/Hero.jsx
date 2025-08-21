import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* {hero left side} */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0">
        <div className="text-[#414141] space-y-4">
          <div className="flex items-center gap-3">
            <p className="w-10 md:w-12 h-[2px] bg-[#414141]"></p>
            <p className="text-sm md:text-base font-medium tracking-wide uppercase">
             August & Sage Studio
            </p>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-tight font-semibold tracking-tight">
            Breathe in Calm,
            <br />
            Wear it Bold.
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-md">
            Discover flowing silhouettes and coastal textures designed for
            effortless layering. Style that feels like a breeze — made to move
            with you.
          </p>
        </div>
      </div>

      {/* { hero image} */}
      <img
        className="h-70 object-cover w-full sm:w-1/2"
        src={assets.heroimg}
        alt=""
      />
    </div>
  );
};

export default Hero;
