import React from "react";
import products from "@/app/lib/product";
import ProductDisplay from "./product-display";

// Correct type definition for Next.js App Router page component
type ProductPageProps = {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[]>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return <ProductDisplay product={product} />;
}