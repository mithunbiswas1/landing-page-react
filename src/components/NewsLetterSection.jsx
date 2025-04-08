import React from "react";
import { HiArrowRight } from "react-icons/hi";

export const NewsLetterSection = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="newsLetter">
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative px-6 md:px-16 py-16 md:py-24">
          {/* gradient bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* left content  */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                Subscribe newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </p>
            </div>

            {/* right content  */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="w-full bg-white sm:w-auto md:w-80 px-4 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />
              <button className="w-full sm:w-auto cursor-pointer bg-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center  gap-2 text-white">
                <span>Discover</span>
                <HiArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
