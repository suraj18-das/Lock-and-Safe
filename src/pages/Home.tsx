import React, { useState, useEffect, Suspense, lazy } from "react";
import { Shield, Users, Home as HomeIcon, Clock } from "lucide-react";
const OurClientele = lazy(() => import("../components/ui/OurClientele"));
const Testimonials = lazy(() => import("../components/ui/Testimonials"));
import Banner from "../components/assets/Banner_HOME.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate=useNavigate();

  // Dynamic Taglines
  const taglines = [
    "Your Security is Our Priority . . .",
    "Protecting What Matters Most . . .",
    "Safeguarding Your Future, Today . . .",
    "Security You Can Trust, Service You Can Rely On . . .",
    "Committed to Excellence, Focused on Safety . . .",
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing Effect Logic with Cursor
  useEffect(() => {
    const handleTyping = () => {
      const currentText = taglines[currentTaglineIndex];
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(50);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  const [showCursor, setShowCursor] = useState(true);

  // Blinking Cursor Effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 300); // Blinking every 300ms

    return () => clearInterval(cursorInterval);
  }, []);

  const images = [
    "src\\components\\assets\\security-min.png?auto=format&fit=crop&q=80",
    "src\\components\\assets\\Housekeeping-1-1024x918-min.png?auto=format&fit=crop&q=80",
  ];

  // State for animated numbers
  const [clientsServed, setClientsServed] = useState(0);
  const [securityStaff, setSecurityStaff] = useState(0);
  const [support, setSupport] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  const stats = [
    { endValue: 500, setState: setClientsServed },
    { endValue: 1000, setState: setSecurityStaff },
    { endValue: 24, setState: setSupport },
    { endValue: 15, setState: setYearsExperience },
  ];

  useEffect(() => {
    // Function to animate the numbers
    const animateNumbers = (
      endValue: number,
      setState: {
        (value: React.SetStateAction<number>): void;
        (arg0: number): void;
      }
    ) => {
      let currentValue = 0;
      const increment = endValue / 100; // Adjust the speed of the animation
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
          setState(endValue);
          clearInterval(interval);
        } else {
          setState(Math.floor(currentValue));
        }
      }, 20); // Controls animation speed (lower is faster)
    };

    stats.forEach(({ endValue, setState }) =>
      animateNumbers(endValue, setState)
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              {/* Dynamic Tagline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {displayedText}
                <span
                  className={`inline-block  ${showCursor ? "" : "opacity-0"}`}
                >
                  |
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Professional security and facility services tailored to your
                needs. Protecting what matters most, 24/7.
              </p>
              <button onClick={()=>navigate("/contact")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                With over 15 years of expertise, we are a premier provider of
                security and facility management services based in West Bengal.
                Our dedicated team operates with the utmost professionalism and
                a deep commitment to ensuring the safety and satisfaction of our
                clients. Whether securing your business premises or maintaining
                essential facilities, we tailor our solutions to meet your
                specific needs.
              </p>
              <p className="text-gray-600 text-lg">
                Our mission is to build long-lasting relationships with our
                clients by delivering reliable, high-quality services. Rooted in
                integrity and driven by innovation, we are proud to be a trusted
                partner for businesses and communities across the region.
              </p>
            </div>
            <div>
              <img
                src={images[currentImageIndex]}
                alt="Who We Are"
                className="rounded-lg shadow-lg lazy-load"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide comprehensive security and facility management
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Professional Security",
                description:
                  "Trained and certified security personnel for all your protection needs",
              },
              {
                icon: Users,
                title: "Expert Staff",
                description:
                  "Experienced and vetted housekeeping and maintenance staff",
              },
              {
                icon: HomeIcon,
                title: "Facility Management",
                description:
                  "Complete facility management and maintenance services",
              },
              {
                icon: Clock,
                title: "24/7 Service",
                description:
                  "Round-the-clock availability for emergency situations",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 text-center"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl text-center font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-auto">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
        <OurClientele />
      </Suspense>
      {/* Stats Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: clientsServed, label: "Clients Served" },
              { number: securityStaff, label: "Security Staff" },
              { number: support, label: "Support" },
              { number: yearsExperience, label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}+</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
