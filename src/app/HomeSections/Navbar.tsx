"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated navigation links as requested
  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Shop", path: "/product" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  // Handler for link clicks
  const handleLinkClick = (linkName: React.SetStateAction<string>) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-500/40 blur-sm group-hover:blur-md transition-all duration-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center mr-2 shadow-sm relative">
              <Image src={logo} alt="Nami" className="size-50"  />

              </div>
            </div>
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {mainNavLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="relative"
              >
                <a
                  href={link.path}
                  className={`text-gray-700 hover:text-amber-500 text-[20px] transition-colors relative`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 w-full"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Action Icons */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button 
              className="text-gray-700 hover:text-amber-500 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag size={20} />
              <motion.span 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}
              >
                0
              </motion.span>
              <motion.span 
                className="absolute -inset-2 rounded-full bg-amber-100/50 scale-0 group-hover:scale-100 transition-transform duration-300"
              />
            </motion.button>
           
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700 hover:text-amber-500 transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-white via-white to-amber-50 z-40 pt-24 px-8 overflow-y-auto flex flex-col md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-1/3 right-8 w-32 h-32 border border-amber-400/20 rounded-full"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            
            <motion.div 
              className="absolute bottom-1/4 left-4 w-24 h-24 border border-amber-400/30 rounded-full"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1
              }}
            />

            <div className="flex flex-col space-y-8 relative z-10">
              {/* Main Links */}
              <div className="space-y-1">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={link.path}
                      className={`text-gray-800 text-lg font-medium block py-4 border-b border-amber-100 transition-colors relative overflow-hidden group`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      <div className="flex items-center justify-between">
                        <span className={activeLink === link.name ? "text-amber-500" : ""}>{link.name}</span>
                        <ChevronDown size={16} className={`transform transition-transform group-hover:rotate-180 ${activeLink === link.name ? "text-amber-500 rotate-180" : "text-gray-400"}`} />
                      </div>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500" 
                        initial={{ width: activeLink === link.name ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons for Mobile */}
              {/* <div className="pt-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white w-full flex items-center justify-center gap-2 py-6 shadow-md">
                    <ShoppingBag size={18} />
                    <span>View Cart (0)</span>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    variant="outline"
                    className="w-full border-amber-400 text-amber-600 hover:bg-amber-50 py-6"
                  >
                    <User size={18} className="mr-2" />
                    <span>Sign In / Register</span>
                  </Button>
                </motion.div>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedNavbar;