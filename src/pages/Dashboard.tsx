import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import Stats from '../components/dashboard/Stats';

function Dashboard() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Review Card */}
          <div className="bg-orange-500 text-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl mb-2">Candidates to Review</h2>
            <p className="mb-4">You have 8 new applications</p>
            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium">
              Review Now
            </button>
          </div>
          
          {/* Credits Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-2">Invite Credits</h2>
            <p className="text-3xl font-bold mb-1">12 credits left</p>
            <p className="text-gray-500 mb-4">Get more credits to invite candidates</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
              Upgrade Plan
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatsCard title="To Review" value="8" />
          <StatsCard title="Pending" value="6" />
          <StatsCard title="Accepted" value="24" />
          <StatsCard title="Rejected" value="12" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityFeed />
          <Stats />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;