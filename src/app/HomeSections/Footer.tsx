"use client";

import React from "react";
import { Facebook, Instagram, Twitter, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer column data
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", path: "/shop" },
        { name: "New Arrivals", path: "/shop/new-arrivals" },
        { name: "Featured", path: "/shop/featured" },
        { name: "Sale", path: "/shop/sale" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
        { name: "Shipping & Returns", path: "/shipping-returns" },
        { name: "Size Guide", path: "/size-guide" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      path: "https://instagram.com",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      path: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      path: "https://twitter.com",
    },
  ];

  // Payment method icons using Lucide icons instead of placeholder images
  const paymentMethods = [
    { name: "Visa", icon: <CreditCard size={20} /> },
    { name: "Mastercard", icon: <CreditCard size={20} /> },
    { name: "PayPal", icon: <CreditCard size={20} /> },
    { name: "Apple Pay", icon: <CreditCard size={20} /> },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8 pb-8 border-b border-gray-200">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-800 mb-1">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Stay updated with the latest products, exclusive offers, and style
              inspiration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 text-sm rounded-md sm:whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links Section - Improved Responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
            <div className="h-18 w-18 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 flex items-center justify-center mr-2 shadow-sm relative">
              <Image src={logo} alt="Nami"/>

              </div>
            </div>
            <p className="text-xs text-gray-600 mb-4 max-w-xs">
              Elevating everyday style with quality essentials designed for
              comfort and versatility.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-amber-500 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns - Now 2 columns on mobile, 3 on small screens, 4 on larger screens */}
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h4 className="font-medium text-gray-800 text-sm mb-3">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-gray-600 hover:text-amber-500 transition-colors text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 sm:mb-0">
              © {currentYear} Nami. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentMethods.map((method, index) => (
                <span
                  key={index}
                  className="text-gray-400 border border-gray-200 rounded px-2 py-1"
                  title={`Payment method: ${method.name}`}
                >
                  {method.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
