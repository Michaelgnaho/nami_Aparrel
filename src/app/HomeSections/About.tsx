"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedContent from '../../components/ui/AnimatedContent';

const NamiAbout = () => {
  const [, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  // Values data for the redesigned section
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every stitch and seam is expertly crafted with attention to detail and durability in mind.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      delay: 1.1
    },
    {
      title: "Sustainable Materials",
      description: "We source eco-friendly fabrics and materials that minimize our environmental footprint while maintaining luxurious quality.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      delay: 1.2
    },
    {
      title: "Timeless Design",
      description: "Our designs transcend seasonal trends, creating lasting pieces that remain relevant year after year and become cherished parts of your wardrobe.",
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 1.3
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-24" id="about">
      {/* Simplified background with subtle gradient */}
      <AnimatedContent>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 z-10"></div>
      
      {/* Golden accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      {/* Content container */}
      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 z-20">
        {/* Text content - centered without image */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h2
            className="text-5xl font-sans font-bold mb-8 text-gray-900 leading-tight tracking-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Story
            </motion.span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            className="text-2xl text-gray-800 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Crafting Timeless Fashion Since 2018
          </motion.p>
          
          {/* About content with read more functionality */}
          <motion.div
            className="space-y-4 text-lg text-gray-600 mb-6 tracking-wide overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ 
              maxHeight: expanded ? '1000px' : '140px',
              transition: 'max-height 0.6s ease-in-out' 
            }}
          >
            <p>
              Nami was born from a passion for blending traditional craftsmanship with contemporary design. Our collections celebrate the fusion of heritage techniques and modern aesthetics.
            </p>
            <p>
              Each piece in our collection is thoughtfully designed and ethically produced, ensuring both quality and sustainability. We believe fashion should be timeless, not disposable.
            </p>
            <p>
              Our team of designers draws inspiration from global cultures and artistic movements, creating distinctive garments that tell a story and stand the test of time.
            </p>
            <p>
              At Nami, we honor the centuries-old traditions of textile artisans while embracing innovation. Our garments are created with reverence for the past and excitement for the future.
            </p>
            <p>
              We work closely with a select group of workshops and artisans who share our values of excellence, integrity, and respect for both people and planet. This collaborative approach ensures every Nami piece meets our exacting standards.
            </p>
          </motion.div>
          
          {/* Read more toggle button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <button 
              onClick={toggleReadMore}
              className="flex items-center gap-2 mx-auto text-amber-500 hover:text-amber-600 font-medium transition-colors"
            >
              {expanded ? (
                <>
                  Read Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={16} />
                </>
              )}
            </button>
          </motion.div>
          
          {/* CTA buttons - matching hero button style */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:text-white px-8 py-6 text-lg font-medium rounded-sm w-full sm:w-auto shadow-md"
            >
              <span className="flex items-center gap-2">
                Our Collections
              </span>
            </Button>
            <Button
              variant="outline"
              className="border border-amber-400/50 hover:border-amber-500 text-gray-800 hover:text-amber-600 bg-transparent hover:bg-amber-50/50 px-8 py-6 text-lg font-medium rounded-sm w-full sm:w-auto"
            >
              Our Process
            </Button>
          </motion.div>
        </motion.div>
        
        {/* REDESIGNED Values section - with hover effects and cards */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Section title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mb-4">Our Values</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Values cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            {values.map((value, index) => (
              
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-xl border border-amber-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: value.delay }}
              >
                {/* Decorative golden corner */}
                <AnimatedContent>


                
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/20 to-transparent transform rotate-0 transition-transform duration-300 group-hover:rotate-90"></div>
                
                {/* Icon with animated background */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-amber-100 rounded-full"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative p-4">
                      {value.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className=" text-gray-800 mb-4 text-center text-[18px] text-bold">{value.title}</h3>
                <p className="text-gray-600 text-center text-sm">{value.description}</p>
                
                {/* Decorative underline that animates on hover */}
                
                <div className="h-0.5 w-0 group-hover:w-1/2 bg-amber-400 mx-auto mt-6 transition-all duration-500"></div>
                </AnimatedContent>

              </motion.div>
            ))}
          </div>
          
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
        </motion.div>
      </div>
      </AnimatedContent>
    </div>
  );
};

export default NamiAbout;