import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SocialLink } from "./ui/SocialLink";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lock & Safe</h3>
            <p className="text-gray-400">
              Professional security and facility services you can trust.
              Available 24/7 for your safety and peace of mind.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                {/* Phone Icon beside the first number */}
                <div className="flex items-center mr-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>

                {/* Clickable phone numbers */}
                <div className="flex flex-col">
                  <a
                    href="tel:+918820130529"
                    className=" hover:underline active:text-purple-700"
                  >
                    +91 8820130529
                  </a>
                  <a
                    href="tel:+919748080177"
                    className=" hover:underline active:text-purple-700"
                  >
                    +91 9748080177
                  </a>
                  <a
                    href="tel:+917003606298"
                    className="hover:underline active:text-purple-700"
                  >
                    +91 7003606298
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span>info@lockandsafe.com</span>
              </div>
              <div className="flex">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span>
                  British India Street, Kolkata-700069, West Bengal, India
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <p className="text-gray-400">
              24/7 Emergency Services Available
              <br />
              Office Hours:
              <br />
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} icon={link.icon} href={link.href} />
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lock & Safe Facility Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
