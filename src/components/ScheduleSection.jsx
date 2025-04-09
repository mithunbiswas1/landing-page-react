import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ScheduleImage from "../assets/stats.webp";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

export const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <img
            src={ScheduleImage}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right seciton */}
        <div className="md:w-1/2 w-full">
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-orange-500 font-semibold uppercase"
          >
            Schedule
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
          >
            Start you bussiness <br /> With smart Scheduling solutions
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            className="mb-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quidem aliquid cupiditate natus enim, est amet itaque numquam
            ratione nisi?
          </motion.p>
          <motion.a
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling feature
            <IoIosArrowRoundForward className="size-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
