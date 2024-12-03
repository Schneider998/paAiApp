import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../common/ConfirmationDialog';

interface CandidateRowProps {
  id?: string;
  name: string;
  image: string;
  position: string;
  revenueSold: string;
  avgDealSize: string;
  score: string;
}

const CandidateRow = ({
  id = '1',
  name,
  image,
  position,
  revenueSold,
  avgDealSize,
  score,
}: CandidateRowProps) => {
  const navigate = useNavigate();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleDecline = () => {
    console.log('Application declined');
    // Add decline logic here
  };

  // Convert score from "9/10" format to percentage
  const matchingRate = Math.round((parseFloat(score.split('/')[0]) / 10) * 100);

  return (
    <>
      <div 
        className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => navigate(`/profile/${id}`, { state: { from: 'hiring-pipeline' } })}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold">{name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-orange-500 uppercase">Verified Sales Expert</span>
                <span className="text-sm text-gray-500">Applied for: {position}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Revenue Sold</p>
              <p className="font-semibold">{revenueSold}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Avg Deal Size</p>
              <p className="font-semibold">{avgDealSize}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Matching Rate</p>
              <p className="font-semibold">{matchingRate}%</p>
            </div>
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowConfirmDialog(true);
                }}
              >
                Decline
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleDecline}
        title="Confirm Decline"
        message="Are you sure you want to cancel this application?"
      />
    </>
  );
};

export default CandidateRow;