"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const SimplifiedHero = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Sample image - replace with your actual image
  const heroImage = "https://i.pinimg.com/474x/54/7e/33/547e334bbaec70517abda62da77e8dd8.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white pt-20">
      {/* Simplified background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 z-10"></div>
      
      {/* Golden accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      {/* Content container */}
      <div className="relative max-w-screen-xl mx-auto min-h-screen flex flex-col lg:flex-row items-center z-20 px-6 md:px-12">
        {/* Text content */}
        <motion.div 
          className="w-full lg:w-1/2  pb-2 lg:py-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-sans font-bold mb-8 text-gray-900 leading-tight tracking-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              NAMI'S
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              APPARELS
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Experience the future of design where innovation meets elegance. Our cutting-edge fashion redefines what's possible.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-white hover:text-white px-8 py-6 text-lg font-medium rounded-sm w-full sm:w-auto shadow-md"
            >
              <span className="flex items-center gap-2">
                Experience Now
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
            </Button>
            <Button
              variant="outline"
              className="border border-amber-400/50 hover:border-amber-500 text-gray-800 hover:text-amber-600 bg-transparent hover:bg-amber-50/50 px-8 py-6 text-lg font-medium rounded-sm w-full sm:w-auto"
            >
              View Collection
            </Button>
          </motion.div>
        </motion.div>

        {/* Image container */}
        <motion.div 
          className="w-full lg:w-1/2 h-96 lg:h-screen overflow-hidden relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main image with hover effect */}
          <motion.div 
            className="absolute inset-0 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-amber-500/20"></div>
          </motion.div>
          
          {/* Simple decorative element */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-32 h-32 border border-amber-400/30"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-30"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <ChevronDown size={24} className="text-amber-500" />
      </motion.div>
    </div>
  );
};

export default SimplifiedHero;