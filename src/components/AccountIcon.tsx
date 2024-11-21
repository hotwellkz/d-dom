import React from 'react';
import { User, Car, Building2, Calculator, Home, Hammer } from 'lucide-react';
import { IconType } from '../types/icons';

interface AccountIconProps {
  type: IconType;
  className?: string;
}

export default function AccountIcon({ type, className = "h-8 w-8 text-white" }: AccountIconProps) {
  const icons = {
    user: User,
    car: Car,
    building: Building2,
    calculator: Calculator,
    home: Home,
    hammer: Hammer
  };

  const Icon = icons[type];
  return <Icon className={className} />;
}
