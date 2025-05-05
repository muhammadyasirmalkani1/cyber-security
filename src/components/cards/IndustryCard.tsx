import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  id,
  title,
  description,
  image
}) => {
  return (
    <div className="overflow-hidden rounded-lg group h-full flex flex-col shadow-lg hover:shadow-cyan-900/10 transition-all duration-300 border border-gray-700 hover:border-cyan-800">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 bg-gray-800/90 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
        
        <Link 
          to={`/industries/${id}`} 
          className="text-cyan-400 flex items-center text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;