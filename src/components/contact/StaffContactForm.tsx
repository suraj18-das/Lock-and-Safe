import React, { useState } from "react";
import {
  Calendar,
  UserPlus,
  Send,
  Loader2,
  User,
  Mail,
  Phone,
  MapPin,
  File,
  Image,
} from "lucide-react";
import { motion } from "framer-motion";
import FloatingInput from "./FloatingInput";

export default function StaffContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Additional Fields
  const additionalFields = [
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

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required profile picture
    if (!profilePicture) {
      alert("Profile Picture is required.");
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    console.log("Profile Picture:", profilePicture);
    console.log("CV File:", cvFile);
    setIsSubmitting(false);
  };

  // Handle Input Change
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

  // Handle File Change
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "profile" | "cv"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be under 2MB!");
        return;
      }

      if (fileType === "profile") setProfilePicture(file); // Required
      if (fileType === "cv") setCvFile(file); // Optional
    }
  };

  return (
    <div className="relative p-0 sm:p-2">
      {/* Background */}
      <div className="absolute inset-0 bg-orange-300 rounded-lg -z-10" />
      <div className="p-2 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <UserPlus className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
          Join Our Team
        </h2>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative backdrop-blur-lg bg-glassWhite rounded-xl shadow-xl border border-glassBorder p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Base Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
            {/* Additional Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
            {/* File Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-white mb-1">Profile Picture*</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => handleFileChange(e, "profile")}
                  className="file:bg-blue-600 file:text-white file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-blue-700 w-full"
                />
              </div>
              <div>
                <label className="block text-white mb-1">CV</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "cv")}
                  className="file:bg-blue-600 file:text-white file:py-2 file:px-4 file:rounded-md file:border-0 hover:file:bg-blue-700 w-full"
                />
              </div>
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5" />
              ) : (
                "Submit Application"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
