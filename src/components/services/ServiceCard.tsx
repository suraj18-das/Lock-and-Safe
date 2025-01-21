import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceFeatureList from './ServiceFeatureList';
import { ArrowRight } from 'lucide-react'; // Added Arrow Icon

interface ServiceCardProps {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceCard = React.memo(function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
  features,
  image,
}: ServiceCardProps) {
  return (
    <Link to={`/services/${slug}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-64 overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 lazy-load"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="flex items-center mb-2">
              <Icon className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
          </div>
        </motion.div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{description}</p>
          <ServiceFeatureList features={features} />
          <span className="text-blue-600 font-semibold">...more</span>
        </div>
        <ArrowRight className="absolute bottom-4 right-4 text-blue-600" /> 
      </div>
    </Link>
  );
});

export default ServiceCard;
