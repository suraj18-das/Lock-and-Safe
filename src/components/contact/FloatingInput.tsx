import React, { useState } from "react";

interface FloatingInputProps {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  options?: string[]; // For select dropdown
  icon?: React.ReactNode; // New prop for icons
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  name,
  type,
  placeholder,
  required = false,
  onChange,
  options,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      {type === "select" ? (
        <div className="flex items-center">
          {icon && <span className="absolute left-3 text-white">{icon}</span>}
          <select
            id={name}
            name={name}
            required={required}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => setIsFocused(e.target.value !== "")}
            className={`pl-10 pr-4 w-full h-10 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white ${
              isFocused ? "text-blue-600" : "text-white"
            }`}
          >
            <option value="">{placeholder}</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : type === "textarea" ? (
        // Textarea Field
        <div className="relative flex items-start">
          {icon && (
            <span className="absolute left-3 top-3 text-white">{icon}</span>
          )}
          <textarea
            id={name}
            name={name}
            required={required}
            rows={4}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => setIsFocused(e.target.value !== "")}
            className={`pl-10 pr-4 py-2 w-full bg-transparent text-white border border-white-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white`}
          ></textarea>
          <label
            htmlFor={name}
            className={`absolute left-10 top-2.5 transition-all ${
              isFocused
                ? "text-white text-sm -translate-y-8"
                : "text-white text-base top-4"
            }`}
          >
            {placeholder}
          </label>
        </div>
      ) : (
        <div className="relative flex items-center">
          {icon && <span className="absolute left-3 text-white">{icon}</span>}
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => setIsFocused(e.target.value !== "")}
            className={`pl-10 pr-4 w-full h-10 bg-transparent border text-white border-white-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white focus:border-white`}
          />
          <label
            htmlFor={name}
            className={`absolute left-10 top-1/2 transition-all duration-200  px-1 ${
              isFocused
                ? "text-white text-sm -translate-y-8 bg-gradient-to-r from-indigo-500 to-purple-500 md:bg-purple-500"
                : "text-white text-base top-1/2 -translate-y-1/2"
            }`}
          >
            {placeholder}
          </label>
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
