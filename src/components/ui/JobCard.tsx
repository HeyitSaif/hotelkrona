import React from 'react';
import Link from 'next/link';
import { JobPosition } from '@/lib/constants';
import Button from './Button';

interface JobCardProps {
  job: JobPosition;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white border border-gold-dark/20 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Job Title and Type */}
      <div className="mb-4">
        <h3 className="text-xl font-serif font-bold text-bronze-dark mb-2">
          {job.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-sand text-bronze-dark text-xs font-semibold px-3 py-1 rounded-full">
            {job.category}
          </span>
          <span className="inline-block bg-gold-lighter text-bronze-dark text-xs font-semibold px-3 py-1 rounded-full">
            {job.employmentType}
          </span>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="mb-4 flex-grow">
        <h4 className="text-sm font-semibold text-bronze-dark mb-2 uppercase tracking-wide">
          Key Responsibilities:
        </h4>
        <ul className="space-y-1.5 text-sm text-gray-700">
          {job.responsibilities.slice(0, 3).map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gold-darker mr-2 mt-0.5">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* We Offer Section */}
      <div className="bg-sand-light rounded-lg p-4 mb-4">
        <h4 className="text-sm font-semibold text-bronze-dark mb-2 uppercase tracking-wide">
          We Offer:
        </h4>
        <ul className="space-y-1 text-sm text-gray-700">
          {job.weOffer.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gold-darker mr-2">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <Link href={`/careers/${job.id}`} className="mt-auto">
        <Button variant="primary" className="w-full">
          View Details & Apply
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
