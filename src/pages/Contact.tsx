import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import FadeInView from "../components/animations/FadeInView";
import SlideInView from "../components/animations/SlideInView";
import MapSection from "../components/contact/MapSection";
import { useLocation } from "react-router-dom";
import { AnimatedButton } from "../components/contact/AnimatedButton";
import { ClientButton } from "../components/contact/ClientButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
};

export default function Contact() {
  const [activeForm, setActiveForm] = useState<"client" | "staff" | null>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const [activeButton, setActiveButton] = useState<"staff" | "client" | null>(
    null
  );

  const buttonStyle = (form: string) =>
    `px-6 py-3 rounded-lg shadow-md transition-colors duration-300 ${
      activeForm === form
        ? "bg-blue-700 text-white"
        : form === "client"
        ? "bg-green-500 text-white text-2xl hover:bg-green-600"
        : "bg-orange-500 text-white text-2xl hover:bg-orange-600"
    }`;

  const handleButtonClick = (form: "client" | "staff") => {
    setActiveForm(form);

    // Scroll to the form section
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-blue-100">
                Whether you're looking to work with us or join our team, we'd
                love to hear from you
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              {
                icon: Phone,
                text: "+1 (555) 123-4567",
                label: "Phone",
              },
              {
                icon: Mail,
                text: "info@lockandsafe.com",
                label: "Email",
              },
              {
                icon: MapPin,
                text: "British India Street, Kolkata-700069, West Bengal, India",
                label: "Address",
              },
            ].map((item, index) => (
              <SlideInView key={index} delay={index * 0.2}>
                <div className="flex items-center justify-center">
                  <item.icon className="h-8 w-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </SlideInView>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons for Client and Staff */}
      {/* <div className="flex justify-center gap-8 py-8">
        <button
          className={buttonStyle("client")}
          onClick={() => handleButtonClick("client")}
        >
          Client Inquiry
        </button>
        <button
          className={buttonStyle("staff")}
          onClick={() => handleButtonClick("staff")}
        >
          Join as Staff
        </button>
      </div> */}

      <div className="min-h-[80vh] md:min-h-[50vh] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-40">
        {(activeButton === null || activeButton === "client") && (
          <ClientButton
            text="Business Inquiry"
            onExpand={() => setActiveButton("client")}
            onClose={() => setActiveButton(null)}
            isVisible={true}
          />
        )}

        {(activeButton === null || activeButton === "staff") && (
          <AnimatedButton
            text="Join Our Team"
            onExpand={() => setActiveButton("staff")}
            onClose={() => setActiveButton(null)}
            isVisible={true}
          />
        )}
      </div>

      {/* Form Section */}
      {/* <div
        ref={formSectionRef} // Reference to the form section
        className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-16"
      >
        <div
          className={`transition-transform duration-500 ${
            activeForm ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } bg-white p-2 sm:p-6 rounded-lg shadow-xl`}
        >
          {activeForm === "client" && <ClientContactForm />}
          {activeForm === "staff" && <StaffContactForm />}
        </div>
      </div> */}

      {/* Map Section */}
      <FadeInView delay={0.6}>
        <div className="h-[400px] bg-gray-200">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <MapSection />
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
