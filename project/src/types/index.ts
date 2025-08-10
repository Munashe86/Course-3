export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  registrationLink: string;
}