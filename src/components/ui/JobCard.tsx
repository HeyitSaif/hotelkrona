import React from 'react';
import Link from 'next/link';
import { JobPosition } from '@/lib/constants';
import Button from './Button';

interface JobCardProps {
  job: JobPosition;
}

// Job images mapping
const jobImages: Record<string, string> = {
  'front-desk-receptionist': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
  'restaurant-waiter': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  'housekeeper': 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  'chef': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  'maintenance-technician': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'spa-therapist': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url('${jobImages[job.id] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'}')`,
        }}
      />

      {/* Default Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-bronze-dark/90 to-charcoal/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Default Content - Job Title and Type */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 opacity-100 group-hover:opacity-0">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
          {job.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {job.category}
          </span>
          <span className="inline-block bg-white/90 text-bronze-dark text-xs font-semibold px-3 py-1 rounded-full">
            {job.employmentType}
          </span>
        </div>
      </div>

      {/* Hover Content - Details */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-2xl md:text-3xl text-gold-light mb-6">{job.title}</h3>
          
          {/* Hover Description */}
          <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
            {job.hoverDescription || job.description}
          </p>

          {/* Apply Button */}
          <Link href={`/careers/${job.id}`}>
            <Button 
              variant="primary" 
              className="w-full bg-gradient-to-r from-gold-dark to-gold hover:from-gold hover:to-gold-light"
            >
              View Details & Apply
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
