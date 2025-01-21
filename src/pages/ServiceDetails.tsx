import { useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import { ArrowLeft, Check } from "lucide-react";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8">
      {/* Hero Section */}
      <div
        className="h-96 bg-cover bg-center relative mt-4"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-blue-400 absolute top-3 left-4 z-20"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
        </button>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-start justify-end p-8">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-2">
            {service.title}
          </h1>
          <p className="pt-3.5 text-white text-sm sm:text-lg md:text-xl lg:text-2xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-10 px-4">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-xl text-gray-700">
              <Check className="h-5 w-5 text-blue-600 mr-2" />
              {feature}
            </li>
          ))}
          <li className="flex text-xl items-center text-gray-700">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            100% Satisfaction Guaranteed.
          </li>
          <li className="flex text-xl items-center text-gray-700">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            Certified and Experienced Professionals.
          </li>
          <li className="flex text-xl items-center text-gray-700">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            Timely Service Delivery.
          </li>
          <li className="flex text-xl items-center text-gray-700">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            Affordable Pricing and Packages.
          </li>
          <li className="flex text-xl items-center text-gray-700">
            <Check className="h-5 w-5 text-blue-600 mr-2" />
            Modern Tools and Equipment.
          </li>
        </ul>
      </section>

      {/* Additional Details */}
      <section className="py-10 px-4 border-t">
        <h3 className="text-2xl font-semibold mb-4">
          More About {service.title}
        </h3>
        <ul>
          <li className="flex text-xl items-start pt-2">
            <span className="text-blue-600 mr-2 text-xl">&gt;</span>
            <span>
              We provide high-quality {service.title.toLowerCase()} to meet your
              specific needs. Our team is trained and certified to ensure
              excellent service delivery.
            </span>
          </li>
          <li className="flex text-xl items-start pt-4">
            <span className="text-blue-600 mr-2 text-xl">&gt;</span>
            <span>
              Whether you need {service.title.toLowerCase()} for your home,
              office, or special events, we have tailored solutions to fit every
              requirement.
            </span>
          </li>
          <li className="flex text-xl items-start pt-4">
            <span className="text-blue-600 mr-2 text-xl">&gt;</span>
            <span>
              Our services are designed with flexibility in mind, ensuring that
              we can adapt to unique situations and deliver customized solutions
              for each client.
            </span>
          </li>
          <li className="flex text-xl items-start pt-4">
            <span className="text-blue-600 mr-2 text-xl">&gt;</span>
            <span>
              With years of experience and a proven track record, we guarantee
              reliability, professionalism, and customer satisfaction.
            </span>
          </li>
        </ul>

        <br />
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 border-t">
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <ul className="space-y-6 text-xl">
          <li>
            <h4 className="font-semibold text-xl">
              How do I book this service?
            </h4>
            <p className="text-gray-600">
              You can book this service by contacting us directly via phone or
              email.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">What areas do you serve?</h4>
            <p className="text-gray-600">
              We currently serve all major cities. Contact us for more details
              about coverage.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">Are your staff certified?</h4>
            <p className="text-gray-600">
              Yes, all our staff are trained and certified to deliver
              high-quality services.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">
              Do you offer customizable plans?
            </h4>
            <p className="text-gray-600">
              Absolutely! We provide customizable plans to suit individual needs
              and preferences.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">
              What is your cancellation policy?
            </h4>
            <p className="text-gray-600">
              We offer a flexible cancellation policy. Please contact us 24
              hours in advance for cancellations or rescheduling.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
