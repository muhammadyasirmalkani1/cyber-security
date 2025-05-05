import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  ctaText,
  ctaLink
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-b border-gray-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
          <Link 
            to={ctaLink} 
            className="btn btn-primary text-base px-8 py-4"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;