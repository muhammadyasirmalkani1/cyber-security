import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  features
}) => {
  return (
    <div className="card card-hover group h-full flex flex-col">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="mb-6 flex-grow">
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
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

export default ServiceCard;