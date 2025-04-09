import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

export const NewsLetterSection = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="newsLetter">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative px-6 md:px-16 py-16 md:py-24">
          {/* gradient bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* left content  */}
            <div className="text-white max-w-lg text-center md:text-left">
              <motion.h2
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
              >
                Subscribe newsletter
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView="show"
                className="text-blue-100 text-sm sm:text-base"
              >
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </motion.p>
            </div>

            {/* right content  */}
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col sm:flex-row gap-4 sm:gap-0"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
