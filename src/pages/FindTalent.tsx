import React from 'react';
import TalentCard from '../components/find-talent/TalentCard';
import FilterBar from '../components/find-talent/FilterBar';

const FindTalent = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Find Talent</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border rounded-lg px-3 py-1.5 text-sm">
              <option>Top Rated</option>
              <option>Newly Added</option>
            </select>
          </div>
        </div>

        <FilterBar />
        
        <div className="text-sm text-gray-600 my-4">
          Showing 2,034 results
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <TalentCard
            name="David Copperfield"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
            score="3.5"
            revenue="$250,000"
            avgDealSize="$5,000"
          />
          <TalentCard
            name="Justin Michella"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
            score="3.8"
            revenue="$250,000"
            avgDealSize="$5,000"
          />
          <TalentCard
            name="Bryan Johnson"
            image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
            score="3.2"
            revenue="$250,000"
            avgDealSize="$5,000"
          />
        </div>
      </div>
    </div>
  );
};

export default FindTalent;