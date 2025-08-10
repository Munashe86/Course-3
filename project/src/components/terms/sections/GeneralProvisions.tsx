import React from 'react';

export const GeneralProvisions: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">General Provisions</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Jurisdiction</h3>
        <p>
          This Agreement is governed by and shall be construed in accordance with the laws of the State of Nevada without regard to its principles of conflicts of law.
        </p>
        {/* Rest of general provisions section */}
      </div>
    </div>
  );
};