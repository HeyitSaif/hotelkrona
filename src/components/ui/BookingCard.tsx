'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UsersIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

interface BookingCardProps {
  className?: string;
  variant?: 'hero' | 'standalone';
}

const BookingCard: React.FC<BookingCardProps> = ({ 
  className = "",
  variant = 'hero' 
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/booking?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}`;
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={`w-full ${className}`}
    >
      <div className={`
        ${variant === 'hero' 
          ? 'bg-white shadow-2xl' 
          : 'bg-white shadow-elevated'
        } 
        rounded-xl overflow-hidden max-w-3xl mx-auto
      `}>
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Row 1: Check-in and Check-out */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Check-in */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                Check-in
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white transition-all font-medium text-sm md:text-base"
                  required
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                Check-out
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white transition-all font-medium text-sm md:text-base"
                  required
                />
              </div>
            </div>
          </div>

          {/* Row 2: Adults and Children */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Adults */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                Adults
              </label>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white transition-all appearance-none cursor-pointer font-medium text-sm md:text-base"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5 Adults</option>
                  <option value="6">6 Adults</option>
                </select>
                <svg 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Children */}
            <div className="relative">
              <label className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                Children
              </label>
              <div className="relative">
                <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                <select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white transition-all appearance-none cursor-pointer font-medium text-sm md:text-base"
                >
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                  <option value="4">4 Children</option>
                </select>
                <svg 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 3: Search Button */}
          <div>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full text-base md:text-lg font-bold uppercase tracking-wide py-4 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 hover:scale-[1.02] active:scale-[0.98] text-white transform"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingCard;
