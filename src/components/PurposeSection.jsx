import React from "react";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

export const features = [
  {
    icon: "🟣", // Replace with your actual icon component or image
    title: "Built for impact",
    description:
      "We identify and nurture a truly diverse team of designers, developers and marketers",
  },
  {
    icon: "🔴", // Replace with your actual icon component or image
    title: "In sync with you",
    description:
      "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
  },
];

export const PurposeSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* heading text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className=""
          >
            <p className="text-sm text-purple-600 font-medium mb-2">
              ACHIVE MORE
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
              Purpose of a convoy is to keep your team
            </h2>
          </motion.div>

          {/* bullet points */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <div className="flex space-x-4">
                <div className="w-12 h-12 flex items-center justify-start rounded-full">
                  {feature.icon}
                </div>
                <div className="">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
