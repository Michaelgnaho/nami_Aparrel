"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AnimatedContent from "@/components/ui/AnimatedContent";

const EnhancedCustomerReviews = () => {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Emily Carter",
      image: "/api/placeholder/800/600",
      rating: 5,
      review:
        "Absolutely love my new dress from Nami Apparel! The fabric is so luxurious, and the fit is perfect. Highly recommend!",
      delay: 0.3
    },
    {
      id: 2,
      name: "James Wilson",
      image: "/api/placeholder/800/600",
      rating: 5,
      review:
        "The blazer I bought is stunning. It's well-tailored and looks even better in person. Great customer service too!",
      delay: 0.4
    },
    {
      id: 3,
      name: "Sophia Lee",
      image: "/api/placeholder/800/600",
      rating: 5,
      review:
        "Nami Apparel never disappoints. Their pieces are timeless and elegant. I always get compliments when I wear them.",
      delay: 0.5
    },
    {
      id: 4,
      name: "Michael Brown",
      image: "/api/placeholder/800/600",
      rating: 5,
      review:
        "The quality of their products is unmatched. I've purchased multiple items, and each one exceeds my expectations.",
      delay: 0.6
    },
    {
      id: 5,
      name: "Olivia Davis",
      image: "/api/placeholder/800/600",
      rating: 5,
      review:
        "I'm obsessed with Nami Apparel! Their designs are modern yet classic. The delivery was fast, and the packaging was beautiful.",
      delay: 0.7
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-24" id="testimonials">
      <AnimatedContent>


      {/* Simplified background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-50/95 to-white/90 z-10"></div>
      
      {/* Golden accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-1/2 left-0 w-32 h-32 border border-amber-400/20 rounded-full"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        style={{ translateY: "-50%" }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-0 w-24 h-24 border border-amber-400/30 rounded-full"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-amber-400/20 rounded-full"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.5
        }}
      />

      {/* Content container */}
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 z-20">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-sans font-bold mb-8 text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              What Our
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Customers Say
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Hear from our satisfied customers about their experiences with Nami Apparel.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative px-4 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="bg-white rounded-lg p-8 shadow-xl border border-amber-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: testimonial.delay }}
                >
                  {/* Decorative golden corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/20 to-transparent transform rotate-0 transition-transform duration-300 group-hover:rotate-90"></div>

                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-amber-200 text-6xl font-serif opacity-30">&quot;</div>
                  
                  {/* Customer Info with animated background */}
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="relative mr-4">
                      <motion.div 
                        className="absolute inset-0 bg-amber-100 rounded-full"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-serif">
                        {testimonial.name}
                      </h3>
                      {/* Star Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="text-gray-600 flex-grow relative z-10 text-sm">
                    {testimonial.review}
                  </p>
                  
                  {/* Decorative underline that animates on hover */}
                  <div className="h-0.5 w-0 group-hover:w-1/3 bg-amber-400 mt-6 transition-all duration-500"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      </AnimatedContent>

    </div>
  );
};

export default EnhancedCustomerReviews;