export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  benefits: string[];
  implementation: string[];
  isComingSoon?: boolean;
}