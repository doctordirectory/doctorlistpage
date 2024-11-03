import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Specialty, Location, Availability } from '../types/doctor';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedSpecialty: Specialty | '';
  onSpecialtyChange: (value: Specialty | '') => void;
  selectedLocation: Location | '';
  onLocationChange: (value: Location | '') => void;
  selectedAvailability: Availability | '';
  onAvailabilityChange: (value: Availability | '') => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function SearchFilters({
  searchTerm,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  selectedLocation,
  onLocationChange,
  selectedAvailability,
  onAvailabilityChange,
  sortBy,
  onSortChange,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <select
          value={selectedSpecialty}
          onChange={(e) => onSpecialtyChange(e.target.value as Specialty | '')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Family Medicine">Family Medicine</option>
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value as Location | '')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
        </select>

        <select
          value={selectedAvailability}
          onChange={(e) => onAvailabilityChange(e.target.value as Availability | '')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Any Availability</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Weekend">Weekend</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="rating">Sort by Rating</option>
          <option value="experience">Sort by Experience</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </div>
  );
}