export interface Doctor {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  experience: number;
  affiliation: string;
  rating: number;
  reviewCount: number;
  location: string;
  availability: string[];
  education: string[];
  about: string;
  languages: string[];
}

export type Specialty = 'Cardiology' | 'Dermatology' | 'Neurology' | 'Pediatrics' | 'Orthopedics' | 'Family Medicine';
export type Location = 'New York' | 'Los Angeles' | 'Chicago' | 'Houston' | 'Miami';
export type Availability = 'Morning' | 'Afternoon' | 'Evening' | 'Weekend';