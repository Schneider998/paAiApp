import React from 'react';
import { X } from 'lucide-react';
import CandidateRow from '../components/hiring/CandidateRow';

const HiringPipeline = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Hiring Pipeline</h1>
          <select className="border rounded-lg px-3 py-1.5 text-sm">
            <option>All Jobs</option>
            <option>Active Jobs</option>
            <option>Closed Jobs</option>
          </select>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg">
            <span>To Review</span>
            <span className="flex items-center justify-center bg-white/20 w-6 h-6 rounded-full text-sm">8</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <span>Pending Response</span>
            <span className="flex items-center justify-center bg-gray-100 w-6 h-6 rounded-full text-sm">6</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <span>Accepted</span>
            <span className="flex items-center justify-center bg-gray-100 w-6 h-6 rounded-full text-sm">24</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <span>Rejected</span>
            <span className="flex items-center justify-center bg-gray-100 w-6 h-6 rounded-full text-sm">12</span>
          </div>
        </div>

        <div className="bg-orange-500 rounded-lg p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Action Required</h2>
              <p>You have 8 new applications waiting for review</p>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <CandidateRow
            id="1"
            name="David Copperfield"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
            position="Senior AE - West Coast"
            revenueSold="$250,000"
            avgDealSize="$5,000"
            score="9/10"
          />
          <CandidateRow
            id="2"
            name="Sarah Johnson"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
            position="SDR Team Lead"
            revenueSold="$180,000"
            avgDealSize="$4,500"
            score="8.5/10"
          />
        </div>
      </div>
    </div>
  );
};

export default HiringPipeline;