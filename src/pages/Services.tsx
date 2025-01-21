import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import FadeInView from '../components/animations/FadeInView';
import SlideInView from '../components/animations/SlideInView';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive security and facility management solutions tailored to your needs
            </p>
          </FadeInView>
        </div>
      </div>

      {/* Services Grid */}

            {/* Services Grid with Skeleton loading
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? // Render Skeleton Loaders when loading
              Array(4)
                .fill(0)
                .map((_, index) => <ServiceCardSkeleton key={index} />)
            : // Render Actual Service Cards after loading
              services.map((service, index) => (
                <SlideInView
                  key={index}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1} // Reduced delay
                >
                  <ServiceCard {...service} />
                </SlideInView>
              ))}
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SlideInView
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1} // Reduced delay
            >
              <ServiceCard {...service} />
            </SlideInView>
          ))}
        </div>
      </div>
    </div>
  );
}
