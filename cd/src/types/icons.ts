export type IconType = 'user' | 'car' | 'building' | 'calculator' | 'home' | 'hammer';

export interface IconProps {
  type: IconType;
  className?: string;
}
