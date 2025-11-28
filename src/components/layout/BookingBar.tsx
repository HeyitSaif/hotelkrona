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
    window.location.href = `/booking?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}`;
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-20 md:top-0 left-0 right-0 z-40 ${className}`}
        >
          {/* Desktop Booking Bar */}
          <div className="hidden md:block bg-white/95 backdrop-blur-xl border-b border-gold shadow-xl">
            <div className="container mx-auto px-4 py-5">
              <form onSubmit={handleSubmit} className="flex items-end gap-4">
                {/* Check-in */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-2 font-bold tracking-widest uppercase">Check-in</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold pointer-events-none" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={today}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all min-h-[48px]"
                      required
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-2 font-bold tracking-widest uppercase">Check-out</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold pointer-events-none" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || today}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all min-h-[48px]"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1">
                  <label className="block text-xs text-gold mb-2 font-bold tracking-widest uppercase">Guests</label>
                  <div className="relative">
                    <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold pointer-events-none" />
                    <select
                      value={`${adults}-${children}`}
                      onChange={(e) => {
                        const [a, c] = e.target.value.split('-').map(Number);
                        setAdults(a);
                        setChildren(c);
                      }}
                      className="w-full pl-10 pr-10 py-3 bg-white border border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none cursor-pointer min-h-[48px]"
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

                <div>
                  <Button type="submit" size="lg" variant="primary" className="shadow-lg hover:shadow-xl whitespace-nowrap">
                    Check Availability
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Booking Bar - Improved */}
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gold shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between min-h-[48px]">
                <span className="text-dark-brown font-bold uppercase tracking-wide text-sm">
                  Book Your Stay
                </span>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center space-x-2 text-gold font-semibold min-h-[44px] px-4 py-2 rounded-lg hover:bg-sand/30 transition-colors"
                  aria-label={isExpanded ? "Close booking form" : "Open booking form"}
                  aria-expanded={isExpanded}
                >
                  <span className="text-sm uppercase tracking-wide">Quick Book</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
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
                    <form onSubmit={handleSubmit} className="pt-6 space-y-5 pb-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gold mb-2 font-bold uppercase tracking-wider">Check-in</label>
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={today}
                            className="w-full px-4 py-3.5 bg-white border-2 border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm min-h-[52px]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gold mb-2 font-bold uppercase tracking-wider">Check-out</label>
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || today}
                            className="w-full px-4 py-3.5 bg-white border-2 border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm min-h-[52px]"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-gold mb-2 font-bold uppercase tracking-wider">Guests</label>
                        <select
                          value={`${adults}-${children}`}
                          onChange={(e) => {
                            const [a, c] = e.target.value.split('-').map(Number);
                            setAdults(a);
                            setChildren(c);
                          }}
                          className="w-full px-4 py-3.5 bg-white border-2 border-sand text-bronze rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm appearance-none cursor-pointer min-h-[52px]"
                        >
                          <option value="1-0">1 Adult</option>
                          <option value="2-0">2 Adults</option>
                          <option value="2-1">2 Adults, 1 Child</option>
                          <option value="2-2">2 Adults, 2 Children</option>
                          <option value="3-0">3 Adults</option>
                          <option value="4-0">4 Adults</option>
                        </select>
                      </div>

                      <Button type="submit" size="lg" variant="primary" className="w-full shadow-lg py-4">
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
