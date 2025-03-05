import React from "react";

import heroImage from "../assets/hero-image.png";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center "
    >
      {/* Left col */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
          <span className="text-blue-600 group-hover:scale-110 transition-transform font-medium">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your grouth</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We Bost the growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/20"></span>
          </span>
          Companies
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more - all within the same one billing
        </p>

        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-blue-300">
            →
          </button>
        </div>
      </div>

      {/* Right col */}
      <div className="relative">
        <img
          src={heroImage}
          alt="hero image"
          className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>
  );
};
