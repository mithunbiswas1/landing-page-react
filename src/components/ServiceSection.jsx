import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

export const ServiceSection = () => {
  //   services section
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  return (
    <section className="px-4 py-20" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* header  */}
          <div className="w-full md:w-1/2">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
            >
              Future of support with new shape
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-gray-600 text-lg mb-4 md:w-4/5"
            >
              Discuss your goals, determine success metrics, identify problems
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">
                  UX design content strategy
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">Development bring</span>
              </div>
            </motion.div>

            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* service card  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                variants={fadeIn("right", 0.2 * index)}
                initial="hidden"
                whileInView="show"
                key={index}
                className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl mb-2 font-semibold">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  LEARN MORE
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
