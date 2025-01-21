export interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    features: string[];
    images: {
      url: string;
      alt: string;
    }[];
  }