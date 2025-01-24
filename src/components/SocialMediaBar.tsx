import { Facebook, Instagram, Twitter, Linkedin, } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";


const SocialMediaBar = () => {
  // Replace with your WhatsApp number including the country code.
  const whatsappNumber = '91XXXXXXXXXX'; // Example: '919876543210'

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaWhatsapp, url: `https://wa.me/${whatsappNumber}`, label: 'WhatsApp' },
  ];

  return (
    <div
      className="social-bar"
      style={{
        zIndex:'50',
        position: 'fixed',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '8px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)',
        borderRadius: '0 16px 16px 0',
      }}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon;

        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex items-center justify-center p-3 rounded-full text-white"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialMediaBar;
