import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
}

export function SocialLink({ icon: Icon, href }: SocialLinkProps) {
  return (
    <a href={href} className="text-gray-400 hover:text-white">
      <Icon className="h-6 w-6" />
    </a>
  );
}