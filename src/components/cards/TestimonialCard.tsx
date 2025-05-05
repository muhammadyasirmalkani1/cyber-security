import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  image
}) => {
  return (
    <div className="card card-hover h-full flex flex-col">
      <div className="mb-4">
        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-gray-300 text-sm italic mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img 
            src={image} 
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-gray-400 text-xs">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;