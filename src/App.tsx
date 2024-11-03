import React, { useState, useMemo } from 'react';
import { Stethoscope } from 'lucide-react';
import { doctors } from './data/doctors';
import { Doctor, Specialty, Location, Availability } from './types/doctor';
import DoctorCard from './components/DoctorCard';
import SearchFilters from './components/SearchFilters';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | ''>('');
  const [selectedLocation, setSelectedLocation] = useState<Location | ''>('');
  const [selectedAvailability, setSelectedAvailability] = useState<Availability | ''>('');
  const [sortBy, setSortBy] = useState('rating');
  const [expandedDoctorId, setExpandedDoctorId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredDoctors = useMemo(() => {
    return doctors
      .filter((doctor) => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
        const matchesLocation = !selectedLocation || doctor.location === selectedLocation;
        const matchesAvailability = !selectedAvailability || 
                                  doctor.availability.includes(selectedAvailability);
        
        return matchesSearch && matchesSpecialty && matchesLocation && matchesAvailability;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'experience':
            return b.experience - a.experience;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedSpecialty, selectedLocation, selectedAvailability, sortBy]);

  const toggleFavorite = (doctorId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(doctorId)) {
        newFavorites.delete(doctorId);
      } else {
        newFavorites.add(doctorId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Doctor Directory</h1>
            </div>
            <div className="text-sm text-gray-500">
              {filteredDoctors.length} doctors found
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          onSpecialtyChange={setSelectedSpecialty}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          selectedAvailability={selectedAvailability}
          onAvailabilityChange={setSelectedAvailability}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              expanded={expandedDoctorId === doctor.id}
              onExpand={() => setExpandedDoctorId(expandedDoctorId === doctor.id ? null : doctor.id)}
              onFavorite={() => toggleFavorite(doctor.id)}
              isFavorite={favorites.has(doctor.id)}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}