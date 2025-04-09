import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="testimonials">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          What our happy client say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </motion.div>

      {/* tesmonials card */}
      <div className="relative">
        {/* swiper cards */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full py-4 md:py-12">
              <motion.div
                variants={fadeIn("up", 0.2 * index)}
                initial="hidden"
                whileInView="show"
                className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col h-full"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span className="text-yellow-400 ">★</span>
                  ))}
                </div>
                <h3 className=" font-semibold mb-3">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigational button  */}
        <motion.div className="flex justify-center gap-4 mt-4 md:mt-8">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronLeft className="size-6" />
          </button>

          <button className="swiper-button-next-custom w-12 h-12 rounded-full border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronRight className="size-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
