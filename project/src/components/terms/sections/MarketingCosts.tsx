import React from 'react';

export const MarketingCosts: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Outbound Marketing Costs</h2>
      <div className="space-y-4">
        <p className="text-gray-300">
          Please take note of the various costs associated with using AI Solutions for phone, email, and SMS services. While the platform offers numerous benefits, it's essential to understand the additional charges involved beyond the standard monthly subscription fee.
        </p>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Phone Calls:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Making outgoing phone calls will be charged at a rate of $0.205 per minute</li>
            <li>Receiving incoming calls will be charged at a rate of $0.1038 per minute</li>
            <li>Each Phone Number will be charged at a rate of $10.63/number</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white">Text Messages (SMS):</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Sending and receiving text messages (SMS segment) will be billed at a rate of $0.1590</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white">Emails:</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Sending and receiving emails will be billed at a rate of $0.1050 per email</li>
          </ul>
          
          <p className="text-gray-300 italic">Please note that fees can change at any time.</p>
        </div>
      </div>
    </div>
  );
};