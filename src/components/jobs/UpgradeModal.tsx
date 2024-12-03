import React from 'react';
import { Star, CheckCircle2, LineChart, Users } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpgradeModal = ({ isOpen, onClose }: UpgradeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-6">Upgrade to Priority+</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">3x</p>
              <p className="text-sm text-gray-600">More Job Views</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">2x</p>
              <p className="text-sm text-gray-600">Faster Hiring</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">85%</p>
              <p className="text-sm text-gray-600">Response Rate</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-3">
                <Star className="w-5 h-5" />
                Premium Visibility
              </h3>
              <div className="space-y-3 pl-7">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>Featured placement at top of job listings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>Verified Business Badge to build trust</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>Priority ranking in search results</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-3">
                <LineChart className="w-5 h-5" />
                Enhanced Insights
              </h3>
              <div className="space-y-3 pl-7">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>See who viewed your jobs in real-time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>Create and manage multiple talent shortlists</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                  <span>Add private notes and ratings to candidates</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Join 500+ businesses hiring top sales talent</span>
            </div>
            <p className="text-sm text-gray-300 pl-7 mb-2">
              "Priority+ helped us hire our top-performing AE in just 2 weeks. The verified badge and featured placement made a huge difference."
            </p>
            <p className="text-sm text-gray-400 pl-7">
              - Sarah Miller, Head of Talent at TechCorp
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-1">Monthly subscription</p>
            <p className="text-3xl font-bold mb-1">$147</p>
            <p className="text-sm text-gray-600">per month</p>
          </div>

          <div className="flex gap-3">
            <button 
              className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;