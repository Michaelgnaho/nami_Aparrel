"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import i7 from "@/app/assets/i8.jpg";
import i2 from "@/app/assets/i2.jpg";
import i3 from "@/app/assets/i3.jpg";
import i4 from "@/app/assets/i4.jpg";
import i5 from "@/app/assets/i5.jpg";
import i6 from "@/app/assets/i6.jpg";
import Link from "next/link";

const ApparelCollectionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  const itemsToShow = useWindowSize();

  // Function to determine items to show based on screen size
  function useWindowSize() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", updateWidth);
      updateWidth();

      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    if (width === 0) return 1; // Default on initial render
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("apparel-collections");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Apparel collection data
  // Modified apparel collection data for free gowns with prices in Naira
const apparelCollections = [
  {
    id: 1,
    title: "Summer Gowns",
    description: "Light and breezy gowns for warm weather",
    image: i3,
    link: "/product",
  },
  {
    id: 2,
    title: "Casual Gowns",
    description: "Comfortable everyday gowns with relaxed fit",
    image: i2,
    link: "/product",
  },
  {
    id: 3,
    title: "Bohemian Gowns",
    description: "Free-spirited designs with unique patterns",
    image: i7,
    link: "/product",
  },
  {
    id: 4,
    title: "Evening Gowns",
    description: "Elegant gowns for special occasions",
    image: i4,
    link: "/product",
  },
  {
    id: 5,
    title: "Floral Gowns",
    description: "Beautiful gowns with floral patterns",
    image: i5,
    link: "/product",
  },
  {
    id: 6,
    title: "A-Line Gowns",
    description: "Flattering A-line gowns for all body types",
    image: i6,
    link: "/product",
  },
];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= apparelCollections.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, apparelCollections.length - itemsToShow)
        : prevIndex - 1
    );
  };

  return (
    <section
      id="apparel-collections"
      className="py-24 px-4 bg-white"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="block text-transparent text-5xl font-sans font-bold bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 pb-6"
          >
            Premium Apparel Collections
          </div>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Discover our exquisite range of designer apparel, crafted with
            meticulous attention to detail.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative px-4 md:px-8">
          {/* Carousel navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-600 hover:text-amber-700 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-600 hover:text-amber-700 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel slides */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsToShow)
                }%)`,
              }}
            >
              {apparelCollections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  className={`flex-none w-full sm:w-1/2 lg:w-1/3 p-3 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${(index % itemsToShow) * 150}ms`,
                    transitionProperty: "opacity, transform",
                    transitionDuration: "700ms",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className="group relative h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < itemsToShow}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                      <h3 className="text-white text-2xl font-bold mb-2 font-serif transition-transform duration-300 group-hover:translate-y-1">
                        {collection.title}
                      </h3>
                      <p className="text-gray-200 mb-4 font-sans transition-all duration-300 max-w-xs opacity-80 group-hover:opacity-100">
                        {collection.description}
                      </p>
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <a href={collection.link}>
                          <Button className="bg-white text-gray-900 hover:bg-amber-50 hover:text-amber-700 transition-all font-sans">
                            Explore Collection
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({
              length: Math.ceil(apparelCollections.length - itemsToShow + 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-amber-500 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Products button */}
        <div className="text-center mt-12">
          <Link href="/product">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-medium transition-all font-sans">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApparelCollectionsCarousel;




