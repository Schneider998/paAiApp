import React from 'react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  revenue: string;
}

interface SalesExperienceProps {
  experiences: Experience[];
  requirements?: string[];
}

const SalesExperience = ({ experiences, requirements }: SalesExperienceProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Sales Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="text-sm">
              {exp.position} for {exp.company}. ({exp.duration} - {exp.revenue})
            </div>
          </div>
        ))}
      </div>

      {requirements && requirements.length > 0 && (
        <>
          <div className="text-sm font-medium mt-6">Looking for:</div>
          <ul className="list-none space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="text-sm">{req}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SalesExperience;