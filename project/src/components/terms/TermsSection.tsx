import React from 'react';

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export const TermsSection: React.FC<TermsSectionProps> = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">{title}</h2>
      {children}
    </div>
  );
};