// src/app/product/[id]/page.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck - Disable TypeScript checking for this file
import React from "react";
import products from "@/app/lib/product";
import ProductDisplay from "./product-display";

export default function ProductPage({ params }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);
  
  return <ProductDisplay product={product} />;
}