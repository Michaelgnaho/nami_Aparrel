"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form (in a real app, you'd send data to server here)
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-8 sm:py-12 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 sm:mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We&apos;re excited to hear from you! Whether you have a question
            about our products, custom orders, or anything else, our team is
            ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-sm text-gray-600">
                  Your message has been sent successfully. We&apos;ll get back
                  to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`border-gray-300 focus:ring-2 focus:ring-amber-100 focus:border-amber-400 text-sm ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border-gray-300 focus:ring-2 focus:ring-amber-100 focus:border-amber-400 text-sm ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 focus:ring-2 focus:ring-amber-100 focus:border-amber-400 text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-24 sm:min-h-32 border-gray-300 focus:ring-2 focus:ring-amber-100 focus:border-amber-400 text-sm ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-amber-600 text-white transition-colors duration-300 flex items-center justify-center text-sm py-2"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-amber-200 pb-2">
                Other Ways to Connect
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Visit Our Studio
                    </h4>
                    <address className="not-italic text-xs sm:text-sm text-gray-600 mt-1">
                    Proview plaza
                      <br />
                      Opic Estate 
                      <br />
                      Agbara, Ogun State, Nigeria
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Mail className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Email Us
                    </h4>
                    <a
                      href="mailto:hello@namiapparel.com"
                      className="text-xs sm:text-sm text-amber-600 hover:text-amber-800 hover:underline transition-colors mt-1 block"
                    >
                     odu.debby@gmail.com 
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-full mr-3">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Call Us
                    </h4>
                    <a
                      href="tel:+12125551234"
                      className="text-xs sm:text-sm text-amber-600 hover:text-amber-800 hover:underline transition-colors mt-1 block"
                    >
                     +2347039084464
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-medium mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-amber-50 p-2 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-amber-50 p-2 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-amber-50 p-2 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-700" />
                </a>
              </div>

              <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-xs sm:text-sm text-gray-700 flex items-center">
                  <CheckCircle className="w-3 h-3 text-amber-600 mr-2" />
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
