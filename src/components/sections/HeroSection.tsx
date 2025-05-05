import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink
}) => {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector('section');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated Wave Background */}
      <div className="absolute inset-0 wave-bg opacity-10"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 animate-fadeIn">{title}</h1>
          <h3 className="text-cyan-400 mb-6 animate-slideUp">{subtitle}</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
          <Link 
            to={ctaLink} 
            className="btn btn-primary text-base px-8 py-4"
          >
            {ctaText}
          </Link>

          {/* Read More Button */}
          <button
            onClick={scrollToNextSection}
            className="block mx-auto mt-12 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
            aria-label="Read more"
          >
            <ChevronDown className="w-8 h-8" />
            <span className="sr-only">Read more</span>
          </button>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;