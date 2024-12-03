import React from 'react';
import { SkipBack, SkipForward, Play, Shuffle, Repeat } from 'lucide-react';

interface SalesCallProps {
  calls: Array<{
    title: string;
    duration: string;
  }>;
}

const SalesCallSection = ({ calls }: SalesCallProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Live Sales Calls</h2>
      <div className="grid grid-cols-2 gap-6">
        {calls.map((call, index) => (
          <div key={index} className="space-y-4">
            <div className="text-sm font-medium">{call.title}</div>
            <div className="h-1 bg-gray-200 rounded-full">
              <div className="h-full w-1/2 bg-gray-900 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <Shuffle className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <SkipBack className="w-4 h-4" />
                </button>
              </div>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <Play className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <SkipForward className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <Repeat className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesCallSection;