import React from 'react';

const Stats = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Stats</h2>
      <div className="space-y-4">
        <StatItem label="Response Rate" value="65%" />
        <StatItem label="Acceptance Rate" value="45%" />
      </div>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-orange-500 rounded-full"
          style={{ width: value }}
        />
      </div>
    </div>
  );
};

export default Stats;