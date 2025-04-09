import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

export const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // calculate product price base on product count
  const staterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Pricing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Starter Plan */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl md:text-4xl font-bold">${staterPrice}/mo</p>
          </motion.div>

          {/* Business Plan */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl md:text-4xl font-bold">
              ${businessPrice}/mo
            </p>
          </motion.div>
        </div>

        {/* Range */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="max-w-xl mx-auto "
        >
          <p className="text-center text-gray-600">{productCount} products</p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-gray-600">1</span>
              <input
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs md:text-sm text-gray-600">50</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">Ready to get started</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
