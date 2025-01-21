import React from 'react';

const ServiceCardSkeleton = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 bg-gray-300" />
      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-full mb-4" />
        <div className="h-10 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
