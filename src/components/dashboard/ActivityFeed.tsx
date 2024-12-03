import React from 'react';

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        <ActivityItem
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
          text="New application from David"
          time="2h ago"
        />
        <ActivityItem
          avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces"
          text="Justin accepted your invite"
          time="5h ago"
        />
      </div>
    </div>
  );
};

const ActivityItem = ({ avatar, text, time }: { avatar: string; text: string; time: string }) => {
  return (
    <div className="flex items-center space-x-3">
      <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
      <div className="flex-1">
        <p className="text-sm text-gray-800">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default ActivityFeed;