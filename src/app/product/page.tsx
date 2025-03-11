import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import products from "../lib/product";  

export default function ProductsPage() {
  

  return (
    <section className="py-16 px-4 bg-white">
       <Link href="/">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">
            Return to Home
          </Button>
        </Link>
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
            Our Collection
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium fashion items, handpicked
            for exceptional quality and timeless style.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Category tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs text-amber-700 font-medium">
                  {product.category}
                </span>
              </div>

              {/* Product image with link to product page */}
              <Link href={`/product/${product.id}`}>
                <div className="h-80 relative overflow-hidden cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Product details */}
              <div className="p-5 border-t border-gray-100">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-gray-800 mb-2 transition-colors group-hover:text-amber-600 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-bold text-gray-900 mb-4">{product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white transition-all">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
