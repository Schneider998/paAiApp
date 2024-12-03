import React from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  applicants: number;
  status: 'active' | 'closed';
  postedDate: string;
}

const JobCard = ({
  title,
  location,
  type,
  applicants,
  status,
  postedDate,
}: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'active' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{applicants} applicants</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Posted {postedDate}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          {type}
        </span>
      </div>

      <div className="mt-6 pt-6 border-t flex justify-between items-center">
        <button className="text-gray-600 hover:text-gray-900">
          View Details
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          View Applicants
        </button>
      </div>
    </div>
  );
};

export default JobCard;