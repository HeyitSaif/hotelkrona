'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, CalendarIcon, UsersIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

interface BookingBarProps {
  className?: string;
}

const BookingBar: React.FC<BookingBarProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking data:', { checkIn, checkOut, adults, children });
    // Redirect to booking page with params
    window.location.href = `/booking?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}`;
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-30 ${className}`}
        >
          {/* Desktop Booking Bar */}
          <div className="hidden md:block bg-white backdrop-blur-xl border-b border-gold shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSubmit} className="flex items-center gap-4">
                {/* Check-in */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-1 font-medium tracking-wide uppercase">Check-in</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={today}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-1 font-medium tracking-wide uppercase">Check-out</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || today}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-1 font-medium tracking-wide uppercase">Guests</label>
                  <div className="relative">
                    <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                    <select
                      value={`${adults}-${children}`}
                      onChange={(e) => {
                        const [a, c] = e.target.value.split('-').map(Number);
                        setAdults(a);
                        setChildren(c);
                      }}
                      className="w-full pl-10 pr-10 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="1-0">1 Adult</option>
                      <option value="2-0">2 Adults</option>
                      <option value="2-1">2 Adults, 1 Child</option>
                      <option value="2-2">2 Adults, 2 Children</option>
                      <option value="3-0">3 Adults</option>
                      <option value="4-0">4 Adults</option>
                      <option value="4-2">4 Adults, 2 Children</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold pointer-events-none" />
                  </div>
                </div>

                <div className="pt-5">
                  <Button type="submit" size="lg" variant="primary">
                    Check Availability
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Booking Bar */}
          <div className="md:hidden bg-white backdrop-blur-xl border-b border-gold shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-dark-brown font-medium">
                  Book Your Stay
                </span>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center space-x-2 text-gold font-medium"
                >
                  <span>Quick Book</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                  </motion.div>
                </button>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <form onSubmit={handleSubmit} className="pt-4 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-gold mb-1 font-medium">Check-in</label>
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={today}
                            className="w-full px-3 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gold mb-1 font-medium">Check-out</label>
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || today}
                            className="w-full px-3 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold text-sm"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-gold mb-1 font-medium">Guests</label>
                        <select
                          value={`${adults}-${children}`}
                          onChange={(e) => {
                            const [a, c] = e.target.value.split('-').map(Number);
                            setAdults(a);
                            setChildren(c);
                          }}
                          className="w-full px-3 py-2.5 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold text-sm"
                        >
                          <option value="1-0">1 Adult</option>
                          <option value="2-0">2 Adults</option>
                          <option value="2-1">2 Adults, 1 Child</option>
                          <option value="2-2">2 Adults, 2 Children</option>
                          <option value="3-0">3 Adults</option>
                          <option value="4-0">4 Adults</option>
                        </select>
                      </div>

                      <Button type="submit" size="md" variant="primary" className="w-full">
                        Check Availability
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingBar;
