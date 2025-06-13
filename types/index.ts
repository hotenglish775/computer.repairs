export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'mobile' | 'computer' | 'service';
  price?: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'smartphone' | 'laptop' | 'desktop' | 'tablet';
  beforeImage: string;
  afterImage: string;
  issues: string[];
  solutions: string[];
  clientFeedback?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  deviceType: string;
  issue: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes?: string;
}

export interface ServicePageData {
  service: Service;
  features: string[];
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string; }[];
  testimonials: Testimonial[];
  relatedServices: Service[];
}