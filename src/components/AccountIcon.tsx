import React from 'react';
import { User, Car, Building2, Calculator, Home, Hammer } from 'lucide-react';
import { IconType } from '../types/icons';

interface AccountIconProps {
  type: IconType;
  className?: string;
}

export default function AccountIcon({ type, className = "h-8 w-8 text-white" }: AccountIconProps) {
  switch (type) {
    case 'user':
      return <User className={className} />;
    case 'car':
      return <Car className={className} />;
    case 'building':
      return <Building2 className={className} />;
    case 'calculator':
      return <Calculator className={className} />;
    case 'home':
      return <Home className={className} />;
    case 'hammer':
      return <Hammer className={className} />;
    default:
      return <User className={className} />;
  }
}
