import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <p className="text-gray-300">{title}</p>
    </div>
  );
};

export default FeatureItem;