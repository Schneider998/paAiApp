import React from 'react';
import { Heart, Bookmark, MapPin } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  image: string;
  position: string;
  location: string;
  stats: {
    revenue: string;
    closeRate: string;
    avgDealSize: string;
  };
  available?: boolean;
}

const ProfileHeader = ({ name, image, position, location, stats, available }: ProfileHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          {available && (
            <span className="inline-flex items-center text-green-600 text-sm mb-2">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Available now
            </span>
          )}
          <div className="flex items-center gap-4 mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Get in touch
            </button>
          </div>
          <div>
            <div className="font-medium mb-1">{position}</div>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="text-2xl font-bold mb-1">{stats.revenue}</div>
          <div className="text-sm text-gray-600">Revenue Closed</div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="text-2xl font-bold mb-1">{stats.closeRate}</div>
          <div className="text-sm text-gray-600">Close Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="text-2xl font-bold mb-1">{stats.avgDealSize}</div>
          <div className="text-sm text-gray-600">Avg Deal Size</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;