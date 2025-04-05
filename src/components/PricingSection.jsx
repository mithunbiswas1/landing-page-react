import React, { useState } from "react";

export const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // calculate product price base on product count
  const staterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto"></div>
    </section>
  );
};
