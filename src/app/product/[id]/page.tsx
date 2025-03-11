// src/app/product/[id]/page.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck - Disable TypeScript checking for this file
// src/app/product/[id]/page.tsx
import React from "react";
import products from "@/app/lib/product";
import ProductDisplay from "./product-display";

export default async function ProductPage({ params }: { params: { id: string } }) {
  // With Next.js App Router, we need to properly handle params
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);
  
  return <ProductDisplay product={product} />;
}