import React from 'react';
import { Zap } from 'lucide-react';

interface JobListingCardProps {
  title: string;
  status: string;
  location: string;
  type: string;
  postedDays: number;
  stats: {
    totalViews: number;
    applications: number;
    interviews: number;
    recentViews?: number;
    daysActive?: number;
  };
  onEmailBlast: () => void;
}

const JobListingCard = ({
  title,
  status,
  location,
  type,
  postedDays,
  stats,
  onEmailBlast,
}: JobListingCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              status === 'Active' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {location} · {type} · Posted {postedDays} days ago
          </p>
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          Edit Job
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">Total Views</p>
          <p className="text-2xl font-bold">{stats.totalViews}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">Applications</p>
          <p className="text-2xl font-bold">{stats.applications}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">Interviews</p>
          <p className="text-2xl font-bold">{stats.interviews}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-bold mb-1">
            {stats.recentViews !== undefined ? 'Recent Views' : 'Days Active'}
          </p>
          <p className="text-2xl font-bold">
            {stats.recentViews !== undefined ? stats.recentViews : stats.daysActive}
          </p>
        </div>
      </div>

      <button 
        onClick={onEmailBlast}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
      >
        <Zap className="w-4 h-4" />
        <span>Need faster results? Send an email blast to all matching candidates</span>
      </button>
    </div>
  );
};

export default JobListingCard;