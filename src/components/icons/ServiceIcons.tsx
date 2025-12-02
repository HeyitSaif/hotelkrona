import React from 'react';

export const ParkingIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="34" cy="40" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 24V18M28 24V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="42" y="16" width="6" height="16" rx="1" fill="currentColor" />
    <path d="M48 28L50 32M48 28L46 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BeachIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 28C28 22 32 20 36 20C40 20 44 22 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="18" r="3" fill="currentColor" />
    <path d="M20 36L44 36C44 40 42 44 40 46H24C22 44 20 40 20 36Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 44L46 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PoolIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 24L22 18M28 24L30 16M36 24L38 18M44 24L46 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 40C22 38 26 39 30 40C34 41 38 39 42 40C46 41 50 39 52 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="24" cy="32" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="32" cy="34" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="40" cy="31" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

export const RestaurantIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 28L28 18L32 22L36 18L40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="28" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M26 44L26 48M32 44L32 48M38 44L38 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 48H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const WiFiIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="44" r="2" fill="currentColor" />
    <path d="M24 36C26 34 29 33 32 33C35 33 38 34 40 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 28C22 24 26 22 32 22C38 22 42 24 46 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 20C18 14 25 12 32 12C39 12 46 14 52 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SeaViewIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 40C20 36 24 34 32 34C40 34 44 36 48 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 48C18 44 24 42 32 42C40 42 46 44 50 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 52H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.5" />
    <circle cx="28" cy="22" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="40" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
  </svg>
);
