import { Doctor, Specialty, Location, Availability } from '../types/doctor';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    specialty: 'Cardiology',
    experience: 12,
    affiliation: 'Central Heart Institute',
    rating: 4.8,
    reviewCount: 127,
    location: 'New York',
    availability: ['Morning', 'Afternoon'],
    education: ['MD Harvard Medical School', 'Cardiology Fellowship Johns Hopkins'],
    about: 'Dr. Mitchell specializes in preventive cardiology and heart disease management with over a decade of experience.',
    languages: ['English', 'Spanish']
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    specialty: 'Neurology',
    experience: 15,
    affiliation: 'Neuro Care Center',
    rating: 4.9,
    reviewCount: 203,
    location: 'Los Angeles',
    availability: ['Afternoon', 'Evening'],
    education: ['MD Yale School of Medicine', 'Neurology Residency UCSF'],
    about: 'Dr. Wilson is a leading neurologist specializing in movement disorders and neurodegenerative diseases.',
    languages: ['English', 'Mandarin']
  },
  {
    id: '3',
    name: 'Dr. Emily Chen',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    specialty: 'Pediatrics',
    experience: 8,
    affiliation: 'Children\'s Medical Center',
    rating: 4.7,
    reviewCount: 156,
    location: 'Chicago',
    availability: ['Morning', 'Weekend'],
    education: ['MD Stanford Medical School', 'Pediatrics Residency Boston Children\'s'],
    about: 'Dr. Chen is passionate about child healthcare and developmental pediatrics.',
    languages: ['English', 'Mandarin', 'Cantonese']
  }
];