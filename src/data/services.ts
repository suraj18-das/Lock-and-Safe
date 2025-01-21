import { Shield, Users, Wrench, Clock,ShieldCheck, Sprout } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import SecurityImage from '../components/assets/security-min.png';
import HouseKeepingImage from '../components/assets/Housekeeping.jpg';
import FacilityImage from '../components/assets/Management-Services1-400x236.jpg';
import EventImage from '../components/assets/EventSecurity.avif';
import BouncerImage from '../components/assets/bouncer-Service.jpg';
import GardeningImage from '../components/assets/home-gardening-services.jpeg';


interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: 'security-guards',
    icon: Shield,
    title: 'Security Guards',
    description:
      'Professional security personnel trained in various aspects of security including surveillance, access control, and emergency response.',
    features: [
      'Trained & certified guards',
      '24/7 availability',
      'Uniformed personnel',
      'Emergency response',
    ],
    image: SecurityImage,
  },
  {
    slug: 'housekeeping-services',
    icon: Users,
    title: 'Housekeeping Services',
    description:
      'Comprehensive cleaning and maintenance services for commercial and residential properties.',
    features: [
      'Professional cleaning staff',
      'Regular maintenance',
      'Specialized cleaning services',
      'Green cleaning options',
    ],
    image: HouseKeepingImage,
  },
  {
    slug: 'facility-maintenance',
    icon: Wrench,
    title: 'Facility Maintenance',
    description:
      'Complete facility management solutions to keep your property in perfect condition.',
    features: [
      'Preventive maintenance',
      'Emergency repairs',
      'Equipment servicing',
      'Infrastructure upkeep',
    ],
    image: FacilityImage,
  },
  {
    slug: 'event-security',
    icon: Clock,
    title: 'Event Security',
    description:
      'Specialized security services for events, conferences, large gatherings and special occasions.',
    features: [
      'Crowd management',
      'VIP protection',
      'Access control',
      'Risk assessment',
    ],
    image: EventImage,
  },
  {
    slug: 'gardening-services',
    icon: Sprout, // Replace with a suitable Lucide icon
    title: 'Gardening Services',
    description:
      'We provide professional gardening and landscaping services to keep your outdoor spaces vibrant, organized, and well-maintained.',
    features: [
      'Landscape Design & Maintenance',
      'Lawn Mowing and Edging',
      'Weed Control and Fertilization',
      'Seasonal Planting and Pruning',
      'Irrigation System Management',
    ],
    image: GardeningImage // Replace with a relevant image URL
  },
  {
    slug: "bouncer-supply",
    icon: ShieldCheck, // Replaced with an appropriate Lucide icon
    title: "Bouncer Supply",
    description: "Our bouncers ensure safety and maintain order at your events and deliver top-tier security, creating a safe and enjoyable environment for guests.",
    features: [
      "Trained and licensed security personnel",
      "Event crowd management",
      "Emergency response readiness",
      "Customizable uniforms to match event themes",
      "24/7 availability for urgent needs",
    ],
    image: BouncerImage // Replace with your image URL
  }
  ,  
];
