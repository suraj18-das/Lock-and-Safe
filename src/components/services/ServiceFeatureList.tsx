import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeatureListProps {
  features: string[];
}

const ServiceFeatureList= React.memo (function ServiceFeatureList({ features }: ServiceFeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <Check className="h-5 w-5 text-blue-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  );
});
export default ServiceFeatureList;