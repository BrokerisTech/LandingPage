// Type definitions for the landing page

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  title: string;
  description: string;
  metrics: {
    type: 'chat' | 'chart' | 'stats';
    content?: string;
    title?: string;
    data?: any;
  };
}

export interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  discount: number;
  features: string[];
  detailedFeatures: string[];
  isPopular: boolean;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}