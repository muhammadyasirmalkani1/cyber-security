import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComplianceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ComplianceCard: React.FC<ComplianceCardProps> = ({
  id,
  title,
  description,
  icon
}) => {
  return (
    <div className="card card-hover group h-full flex flex-col bg-gray-800/40 border-gray-700">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
      
      <Link 
        to={`/services/${id}`} 
        className="text-cyan-400 flex items-center text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300"
      >
        Read More
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ComplianceCard;