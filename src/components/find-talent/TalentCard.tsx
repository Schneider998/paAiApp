import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface TalentCardProps {
  id?: string;
  name: string;
  image: string;
  score: string;
  revenue: string;
  avgDealSize: string;
}

const TalentCard = ({
  id = '1',
  name,
  image,
  score,
  revenue,
  avgDealSize,
}: TalentCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Revenue Sold</span>
            <span className="font-semibold">{revenue}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Avg Deal Size</span>
            <span className="font-semibold">{avgDealSize}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">PhoneSales Score</span>
            <span className="font-semibold">{score}/4</span>
          </div>
        </div>

        <div className="mt-4">
          <button 
            onClick={() => navigate(`/profile/${id}`, { state: { from: 'find-talent' } })}
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;