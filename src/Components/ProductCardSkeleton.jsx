import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border p-4 rounded shadow animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-md"></div>

      <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>

      <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>

      <div className="mt-4 h-10 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default ProductCardSkeleton;
