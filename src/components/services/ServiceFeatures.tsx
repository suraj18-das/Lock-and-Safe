import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <span className="ml-3 text-lg text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}