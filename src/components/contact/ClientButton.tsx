import React, { useRef, useState } from "react";
import {
  X,
  Mail,
  Phone,
  Send,
  Loader2,
  User,
  MapPin,
  Building,
  MessageCircle,
  Building2,
} from "lucide-react";
import FloatingInput from "./FloatingInput";

interface ClientButtonProps {
  text: string;
  onExpand?: () => void;
  onClose?: () => void;
  isVisible?: boolean;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  text,
  onExpand,
  onClose,
  isVisible = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const ClentsFields = [
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

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onExpand?.();
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setFormData({});
    onClose?.();
  };

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

  if (!isVisible) return null;

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden
        px-6 py-3 rounded-lg
        bg-gradient-to-r from-blue-500 to-indigo-600
        text-white font-medium
        shadow-xl hover:shadow-2xl
        transform transition-all duration-500 ease-in-out
        ${!isExpanded && "hover:scale-105"}
        ${
          isExpanded
            ? " w-full h-[100vh] md:w-[900px] md:h-[600px] mt-4 mb-4 md:mt-12 md:mb-12"
            : "w-80 h-44"
        }
      `}
    >
      {isExpanded && (
        <div
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full 
                     hover:bg-white/20 transition-colors duration-200
                     cursor-pointer z-10"
        >
          <X size={16} />
        </div>
      )}

      <span
        className={`absolute transition-all duration-500 ease-in-out flex flex-col items-center
          ${
            isExpanded
              ? "md:right-[4%] right-0 top-8 md:top-1/2 -translate-x-1/2 md:-translate-x-0 -translate-y-0 md:-translate-y-1/2 text-3xl font-light tracking-wide"
              : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          }
      `}
      >
        <Building2 className="w-12 h-12 text-white mb-2" />
        {text}
      </span>

      {isExpanded && (
        <>
          <div className="absolute top-8 bottom-8 left-[67%] w-0 md:w-px bg-white" />
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="absolute top-36 md:top-20 left-8 w-[85%] md:w-[60%] animate-slide-up h-auto md:h-auto"
          >
            <div className="space-y-6">
              {/* Normal input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  name="ClientName"
                  type="text"
                  placeholder="Full Name"
                  required
                  icon={<User />}
                  onChange={handleChange}
                />
                <FloatingInput
                  type="email"
                  name="ClientEmail"
                  placeholder="Email Address"
                  required
                  icon={<Mail />}
                  onChange={handleChange}
                />
                <FloatingInput
                  type="tel"
                  name="ClientPhone"
                  placeholder="Enter phone"
                  required
                  icon={<Phone />}
                  onChange={handleChange}
                />
                <FloatingInput
                  name="ClientAddress"
                  type="text"
                  placeholder="Enter address"
                  required
                  icon={<MapPin />}
                  onChange={handleChange}
                />
              </div>
              {/* Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ClentsFields.map((field) => (
                  <div key={field.name}>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        onChange={handleChange}
                        className="w-full px-3 h-10 bg-transparent rounded-md bg-gray-600/50 border border-gray-300 shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
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
                  </div>
                ))}
              </div>
              {/* Message area for clients */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent rounded-md bg-gray-600/50 border border-gray-300 shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white resize-none h-24"
                />
              </div>
              {/* For Submitting the form */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-lg
                         bg-white text-indigo-600 font-medium
                         hover:bg-white/90 transition-colors
                         flex items-center justify-center gap-2
                         disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Business Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </button>
  );
};
