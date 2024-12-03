import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface Filter {
  type: string;
  value: string;
}

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = {
    revenue: {
      label: 'Revenue',
      options: [
        { label: 'Any', value: 'any' },
        { label: '$0 - $50k', value: '0-50k' },
        { label: '$50k - $100k', value: '50k-100k' },
        { label: '$100k+', value: '100k+' },
      ],
    },
    location: {
      label: 'Location',
      options: [
        { label: 'Any', value: 'any' },
        { label: 'Remote', value: 'remote' },
        { label: 'On-site', value: 'onsite' },
        { label: 'Hybrid', value: 'hybrid' },
      ],
    },
    avgDealSize: {
      label: 'Avg. Deal Size',
      options: [
        { label: 'Any', value: 'any' },
        { label: '$0 - $1k', value: '0-1k' },
        { label: '$1k - $5k', value: '1k-5k' },
        { label: '$5k - $10k', value: '5k-10k' },
        { label: '$10k+', value: '10k+' },
      ],
    },
  };

  const handleFilterChange = (type: string, value: string) => {
    setActiveFilters((prev) => {
      const existing = prev.findIndex((f) => f.type === type);
      if (existing !== -1) {
        if (value === 'any') {
          return prev.filter((f) => f.type !== type);
        }
        const newFilters = [...prev];
        newFilters[existing] = { type, value };
        return newFilters;
      }
      if (value === 'any') return prev;
      return [...prev, { type, value }];
    });
  };

  const removeFilter = (type: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.type !== type));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-[240px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search candidates..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          All
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Closers
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Senior/SDRs
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Sales managers
        </button>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 border rounded-lg hover:bg-gray-50"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {activeFilters.map((filter) => (
            <div
              key={filter.type}
              className="flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
            >
              <span>{filterOptions[filter.type as keyof typeof filterOptions].label}:</span>
              <span>{filterOptions[filter.type as keyof typeof filterOptions].options.find(opt => opt.value === filter.value)?.label}</span>
              <button
                onClick={() => removeFilter(filter.type)}
                className="hover:text-orange-900"
              >
                ×
              </button>
            </div>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Filter Options */}
      {showFilters && (
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
          {Object.entries(filterOptions).map(([type, { label, options }]) => (
            <div key={type}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={activeFilters.find(f => f.type === type)?.value || 'any'}
                onChange={(e) => handleFilterChange(type, e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;