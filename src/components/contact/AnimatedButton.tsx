import React, { useRef, useState } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Loader2,
  File,
  Image,
  UserPlus,
} from "lucide-react";
import FloatingInput from "./FloatingInput";

interface AnimatedButtonProps {
  text: string;
  onExpand?: () => void;
  onClose?: () => void;
  isVisible?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  onExpand,
  onClose,
  isVisible = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const StaffFields = [
    {
      name: "age",
      placeholder: "Enter your age",
      type: "number",
      icon: <Calendar />,
      required: true,
    },
    {
      name: "Gender",
      placeholder: "Select Your Gender",
      type: "select",
      options: ["Male", "Female"],
      required: true,
    },
    {
      name: "Qualification",
      placeholder: "Qualification",
      type: "select",
      options: [
        "Matrix",
        "Higher Secondary",
        "Diploma",
        "Graduate",
        "Post Graduate",
        "Below Matrix",
      ],
      required: true,
    },
    {
      name: "position",
      placeholder: "Position Applied For",
      type: "select",
      options: [
        "Security Guard",
        "Housekeeping Staff",
        "Maintenance Technician",
        "Supervisor",
      ],
      required: true,
    },
    {
      name: "experience",
      placeholder: "Years of Experience",
      type: "select",
      options: ["None", "0-3", "3-5", "5-8", "8 and above"],
      required: true,
    },
  ];

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onExpand?.();
      buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setFormData({});
    onClose?.();
    setProfilePicture(null);
    setCvFile(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profilePicture) {
      alert("Profile Picture is required.");
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    console.log("Profile Picture:", profilePicture);
    console.log("CV File:", cvFile);
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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "profile" | "cv"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be under 2MB!");
        return;
      }

      if (fileType === "profile") setProfilePicture(file);
      if (fileType === "cv") setCvFile(file);
    }
  };

  return (
    <button
    ref={buttonRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden
        px-6 py-3 rounded-lg
        bg-gradient-to-r from-indigo-500 to-purple-600
        text-white font-medium
        shadow-xl hover:shadow-2xl
        transform transition-all duration-500 ease-in-out
        ${!isExpanded && "hover:scale-105"}
        ${isExpanded ? " w-full h-[100vh] md:w-[900px] md:h-[600px] mt-4 mb-4 md:mt-12 md:mb-12" : "w-80 h-44"}
      `}
    >
      {isExpanded && (
        <div
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full 
                     hover:bg-white/20 transition-colors duration-200
                     cursor-pointer"
        >
          <X size={16} />
        </div>
      )}

      <span
        className={`absolute transition-all duration-500 ease-in-out flex flex-col items-center
          ${
            isExpanded
              ? "left-1/2 md:left-[4%] -translate-x-1/2 md:-translate-x-0  top-4 md:top-1/2 -translate-y-0 md:-translate-y-1/2 text-3xl font-light tracking-wide"
              : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          }
      `}
      >
        <UserPlus className="w-12 h-12 text-white mb-0md:mb-2" />
        {text}
      </span>

      {isExpanded && (
        <>
          <div className="absolute top-8 bottom-8 right-[72%]  w-0 md:w-px bg-white  "/>


          <form
  onClick={(e) => e.stopPropagation()}
  onSubmit={handleSubmit}
  className="absolute top-28 md:top-12 right-6 w-[85%] md:w-[67%] animate-slide-up space-y-6"
>
  <div className="space-y-4">
    {/* Normal input fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FloatingInput
        name="StaffName"
        type="text"
        placeholder="Full Name"
        required
        icon={<User />}
        onChange={handleChange}
      />
      <FloatingInput
        type="email"
        name="StaffEmail"
        placeholder="Email Address"
        required
        icon={<Mail />}
        onChange={handleChange}
      />
      <FloatingInput
        type="tel"
        name="StaffPhone"
        placeholder="Enter phone"
        required
        icon={<Phone />}
        onChange={handleChange}
      />
      <FloatingInput
        name="StaffAddress"
        type="text"
        placeholder="Enter address"
        required
        icon={<MapPin />}
        onChange={handleChange}
      />
    </div>

    {/* Dropdowns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {StaffFields.map((field) => (
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
    {/* File Upload Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div>
        <label className="block text-sm text-white mb-1 text-left">
          Profile Picture*
        </label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => handleFileChange(e, "profile")}
          className="file:bg-blue-600 file:text-white file:py-1 file:px-4 file:rounded-md file:border-0 hover:file:bg-blue-700 w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-white mb-1 text-left">CV</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFileChange(e, "cv")}
          className="file:bg-blue-600 file:text-white file:py-1 file:px-4 file:rounded-md file:border-0 hover:file:bg-blue-700 w-full"
        />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="mt-0">
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-2 md:py-3 px-3 rounded-lg
              bg-white text-blue-600 font-medium
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
          <span>Submit Application</span>
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
