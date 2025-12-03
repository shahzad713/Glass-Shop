import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  icon?: LucideIcon;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  description: string;
  fullDescription?: string;
  client?: string;
  date?: string;
  servicesUsed?: string[];
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  description: string;
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
}