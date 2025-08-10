import React from 'react';

interface NoticeBoxProps {
  type: 'warning' | 'info';
  children: React.ReactNode;
}

export const NoticeBox: React.FC<NoticeBoxProps> = ({ type, children }) => {
  const bgColor = type === 'warning' ? 'bg-yellow-500/10' : 'bg-blue-500/10';
  const borderColor = type === 'warning' ? 'border-yellow-500/20' : 'border-blue-500/20';

  return (
    <div className={`mt-8 p-4 ${bgColor} rounded-lg border ${borderColor}`}>
      <p className="text-sm">{children}</p>
    </div>
  );
};