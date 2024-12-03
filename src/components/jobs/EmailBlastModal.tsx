import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface EmailBlastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailBlastModal = ({ isOpen, onClose }: EmailBlastModalProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-medium mb-6">Your email blast will include:</h3>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-400" />
              <span className="text-sm">Direct delivery to all matching sales candidates</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-400" />
              <span className="text-sm">Professional email template highlighting your role</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gray-400" />
              <span className="text-sm">One-click application process for candidates</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-medium mb-2">Reach</h4>
              <p className="text-2xl font-bold mb-1">2,400+</p>
              <p className="text-sm text-gray-500">matching candidates</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Average Response</h4>
              <p className="text-2xl font-bold mb-1">15-20</p>
              <p className="text-sm text-gray-500">qualified candidates</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-medium mb-4">Schedule Your Blast</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Select Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Select Time</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-1">One-time payment</p>
            <p className="text-3xl font-bold mb-1">$97</p>
            <p className="text-sm text-gray-600">per email blast</p>
          </div>

          <div className="flex gap-3">
            <button
              className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Schedule Blast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBlastModal;