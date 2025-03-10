// src/app/product/[id]/product-display.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";

interface ProductDisplayProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
    features: string[];
    inStock: boolean;
  } | undefined;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  if (!product) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">
          Sorry, we couldn&apos;t find the product you&apos;re looking for.
        </p>
        <Link href="/product">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">
            Return to Products
          </Button>
        </Link>
      </div>
    );
  }

  // Function to create WhatsApp link with pre-filled message
  const createWhatsAppLink = () => {
    const message = `Hello, I'm interested in purchasing the ${product.name} (${product.price}) from Nami Apparel.`;
    return `https://wa.me/2348145046894?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Back button */}
      <Link
        href="/product"
        className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product image */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-fill"
          />
        </div>

        {/* Product details */}
        <div>
          <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {product.category}
          </div>

          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-gray-900 mb-6">
            {product.price}
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <div
              className={`inline-flex items-center ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              <span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  product.inStock ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>
          </div>

          {/* Buy now button - WhatsApp link */}
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white transition-all py-6 text-lg">
              <ShoppingBag className="mr-2" />
              Buy Now via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}




