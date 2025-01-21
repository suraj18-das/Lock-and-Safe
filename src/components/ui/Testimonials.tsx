import Slider from 'react-slick';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    content:
      "Lock & Safe has provided exceptional security services for our business. Their team is professional and always responsive.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Property Manager",
    content:
      "The facility management services have exceeded our expectations. They maintain our properties to the highest standards.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Brown",
    role: "Event Organizer",
    content:
      "Highly reliable and efficient services. I recommend Lock & Safe for any event security needs.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by businesses and property managers across the country
          </p>
        </div>

        {/* Slider component */}
        <div className="mt-10">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-gray-50 p-8 rounded-lg  border border-gray-500">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover lazy-load"
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
