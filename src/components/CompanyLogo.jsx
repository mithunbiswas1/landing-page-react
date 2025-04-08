import React from "react";

import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";

export const CompanyLogo = () => {
  const Logos = [
    slack,
    amazon,
    woocommerce,
    meundies,
    sitepoint,
    slack,
    amazon,
    woocommerce,
    meundies,
    sitepoint,
  ];
  return (
    <motion.div
      variants={fadeIn("left", 0.7)}
      initial="hidden"
      whileInView="show"
      className="w-full overflow-hidden container mx-auto py-20 flex sm:flex-row flex-col sm:items-center items-start"
    >
      <div className="w-[300px] shrink-0 text-gray-600 px-4 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br />
        Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap gap-8 animate-marquee">
        {Logos.map((logo, index) => (
          <img
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
          />
        ))}
      </div>
    </motion.div>
  );
};
