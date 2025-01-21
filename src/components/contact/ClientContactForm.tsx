import React, { useState } from "react";
import { Mail, Phone, Send, Loader2, User, MapPin, Building, Building2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import FloatingInput from "./FloatingInput";
import bgImage from "../assets/rock-staar-NzIV4vOBA7s-unsplash.jpg";

export default function ClientContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const additionalFields = [
    {
      name: "companyName",
      placeholder: "Company Name",
      type: "text",
      icon: <Building />,
      required: true,
    },
    {
      name: "serviceType",
      placeholder: "Service Required",
      type: "select",
      options: [
        "Security Services",
        "Housekeeping Services",
        "Facility Maintenance",
        "Event Security",
      ],
      required: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <div className="relative p-0 sm:p-2">
      <div
        className="absolute inset-0 rounded-lg -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-2 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <Building2 className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Business Inquiry
        </h2>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative backdrop-blur-sm bg-glassWhite rounded-xl shadow-xl border border-glassBorder p-4 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Base Fields */}
              <motion.div whileHover={{ scale: 1.02 }}>
                <FloatingInput
                  name="ClientName"
                  type="text"
                  placeholder="Full Name"
                  required
                  icon={<User />}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <FloatingInput
                  type="email"
                  name="ClientEmail"
                  placeholder="Email address"
                  required
                  icon={<Mail />}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <FloatingInput
                  type="phone"
                  name="ClientPhone"
                  placeholder="Enter phone"
                  required
                  icon={<Phone />}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <FloatingInput
                  name="ClientAddress"
                  type="text"
                  placeholder="Enter address"
                  required
                  icon={<MapPin />}
                  onChange={handleChange}
                />
              </motion.div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalFields.map((field) => (
                <motion.div key={field.name} whileHover={{ scale: 1.02 }}>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 h-10 bg-transparent rounded-md bg-gray-600/50 border border-gray-300 shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                      required={field.required}
                    >
                      <option value="">Select {field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <FloatingInput
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      icon={field.icon}
                      required={field.required}
                      onChange={handleChange}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Message Box */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <FloatingInput
                name="message"
                type="textarea"
                placeholder="Message"
                icon={<MessageCircle/>}
                // required
                onChange={handleChange}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="h-5 w-5" />
                </motion.div>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Business Inquiry
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
