import React from 'react';
import { Star, Heart, Clock, MapPin, GraduationCap, Languages } from 'lucide-react';
import { Doctor } from '../types/doctor';

interface DoctorCardProps {
  doctor: Doctor;
  expanded: boolean;
  onExpand: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

export default function DoctorCard({ doctor, expanded, onExpand, onFavorite, isFavorite }: DoctorCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        expanded ? 'col-span-2 row-span-2' : ''
      }`}
      onClick={onExpand}
    >
      <div className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={doctor.photo} 
            alt={doctor.name} 
            className="w-full h-48 object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-gray-900 font-semibold">{doctor.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({doctor.reviewCount})</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{doctor.experience} years experience</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{doctor.affiliation}</span>
            </div>
          </div>

          {expanded && (
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </h4>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  {doctor.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Languages className="w-4 h-4 mr-2" />
                  Languages
                </h4>
                <p className="mt-2 text-gray-600">{doctor.languages.join(', ')}</p>
              </div>

              <p className="text-gray-600">{doctor.about}</p>
            </div>
          )}
        </div>

        <div className="p-6 pt-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle booking logic
            }}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}