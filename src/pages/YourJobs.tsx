import React, { useState } from 'react';
import { Star, Crown, LineChart, Users2 } from 'lucide-react';
import EmailBlastModal from '../components/jobs/EmailBlastModal';
import UpgradeModal from '../components/jobs/UpgradeModal';
import JobListingCard from '../components/jobs/JobListingCard';

const YourJobs = () => {
  const [showEmailBlastModal, setShowEmailBlastModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Your Jobs</h1>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 font-bold" />
                <h2 className="font-bold">Upgrade to Priority+</h2>
              </div>
              <p className="text-sm font-bold">Get 5x more visibility and access to premium features</p>
            </div>
            <button 
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={() => setShowUpgradeModal(true)}
            >
              Upgrade Now - $147/mo
            </button>
          </div>

          <div className="flex gap-6 text-sm font-bold">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 font-bold" />
              Featured listings
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 font-bold" />
              View tracking
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4 font-bold" />
              Candidate organization
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <JobListingCard
            title="Senior Account Executive"
            status="Active"
            location="West Coast, USA"
            type="Full-time"
            postedDays={15}
            stats={{
              totalViews: 245,
              applications: 12,
              interviews: 4,
              recentViews: 3
            }}
            onEmailBlast={() => setShowEmailBlastModal(true)}
          />

          <JobListingCard
            title="SDR Team Lead"
            status="Paused"
            location="Remote"
            type="Full-time"
            postedDays={8}
            stats={{
              totalViews: 182,
              applications: 8,
              interviews: 2,
              daysActive: 8
            }}
            onEmailBlast={() => setShowEmailBlastModal(true)}
          />
        </div>

        <EmailBlastModal
          isOpen={showEmailBlastModal}
          onClose={() => setShowEmailBlastModal(false)}
        />

        <UpgradeModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
        />
      </div>
    </div>
  );
};

export default YourJobs;