import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import MonitorImage from "../assets/monitor-card.webp";

export const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left seciton */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold uppercase">Schedule</p>
          <p className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
            Start you bussiness <br /> With smart Scheduling solutions
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quidem aliquid cupiditate natus enim, est amet itaque numquam
            ratione nisi?
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling feature
            <IoIosArrowRoundForward className="size-8" />
          </a>
        </div>

        {/* Right section */}
        <div className="md:w-1/2 w-full">
          <img
            src={MonitorImage}
            alt="Schedule Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
