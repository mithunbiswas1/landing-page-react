import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16">
      {/* heading texts */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          How can we help your bussiness
        </h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* feature box */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#f1eff0" : index === 1 ? "#fee7e7" : "#fff3e4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium mb-3 ">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </motion.div>

      {/* button */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="text-center mt-12"
      >
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative">
          Become a Partner
          <div className="absolute -z-10 w-full h-full bg-blue-600/30 blur-xl rounded-full top-0 left-0"></div>
        </button>
      </motion.div>
    </section>
  );
};
