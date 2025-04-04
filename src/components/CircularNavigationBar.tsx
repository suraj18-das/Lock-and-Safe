import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const CircularMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0); // Track rotation of the button

  // Replace with your WhatsApp number including the country code.
  const whatsappNumber = '91XXXXXXXXXX'; // Example: '919876543210'

  const menuItems = [
    { icon: Facebook, url: '#', label: 'Facebook' }, //https://facebook.com
    { icon: Instagram, url: '#', label: 'Instagram' }, //https://instagram.com
    { icon: Twitter, url: '#', label: 'Twitter' }, //https://twitter.com
    { icon: Linkedin, url: '#', label: 'LinkedIn' }, //https://linkedin.com
    { icon: FaWhatsapp, url: `#`, label: 'WhatsApp' } //https://wa.me/${whatsappNumber}
  ];

  const toggleMenu = () => {
    if (!isOpen) {
      setRotation(rotation + 180); // Rotate clockwise (open)
    } else {
      setRotation(rotation - 180); // Rotate counterclockwise (close)
    }
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Variants for staggered animations of menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1, // Delay each item by 0.1s (Open order: top to bottom)
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    }),
    exit: (index: number) => ({
      opacity: 0,
      y: 20, // Exit with same position
      scale: 0,
      transition: {
        delay: (menuItems.length - 1 - index) * 0.1, // Reverse the delay for exit (bottom to top)
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    }),
  };

  return (
    <div className="lg:hidden fixed bottom-24 right-3 z-50">
      {/* Main Circular Button */}
      <motion.button
        className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: rotation }} // Rotate the button based on state
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? '✖' : <MessageCircle />}
        </motion.div>
      </motion.button>

      {/* Circular Menu Items */}
      <AnimatePresence>
        {isOpen &&
          menuItems.map((item, index) => {
            const Icon = item.icon;
            const angle = (-180 / (menuItems.length - 1)) * index - 90; // Adjusted for left-side arc
            const radius = 90; // Radius for circular layout

            return (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg bg-blue-500"
                style={{
                  top: `${-radius * Math.sin((angle * Math.PI) / 180)}px`,
                  left: `${radius * Math.cos((angle * Math.PI) / 180)}px`, 
                  transform: `rotate(${rotation}deg)`, 
                }}
                custom={index} // Pass index for staggered delay
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit" // Use the exit variant for staggered exit animation
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default CircularMenu;
