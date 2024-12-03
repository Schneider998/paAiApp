import React from 'react';
import { Star } from 'lucide-react';

interface InterviewAnalysis {
  category: string;
  rating: number;
}

interface InterviewSectionProps {
  analysis: InterviewAnalysis[];
  positives: string[];
  improvements: string[];
  conclusion: string;
  interviewScore: number;
}

const InterviewSection = ({ analysis, positives, improvements, conclusion, interviewScore }: InterviewSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold mb-4">Interview Analysis:</h2>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            {analysis.map((item, index) => (
              <div key={index}>
                <div className="text-sm mb-1">{item.category}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold mb-2">Interview Score</div>
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{interviewScore}%</span>
            </div>
            {/* Add circular progress indicator here if needed */}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Analysis</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium mb-2">Positives</h4>
            <ul className="list-disc pl-4 space-y-2">
              {positives.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Area For Improvement</h4>
            <ul className="list-disc pl-4 space-y-2">
              {improvements.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Interview Conclusion</h3>
        <p className="text-sm">{conclusion}</p>
      </div>
    </div>
  );
};

export default InterviewSection;