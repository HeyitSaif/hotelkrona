'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, HOTEL_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-sand border-b border-gold/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-2">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="flex items-center space-x-2 text-bronze hover:text-gold transition-colors duration-300"
            >
              <span>📞</span>
              <span>{HOTEL_INFO.contact.phone}</span>
            </a>
            <a
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="flex items-center space-x-2 text-bronze hover:text-gold transition-colors duration-300"
            >
              <span>✉️</span>
              <span>{HOTEL_INFO.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gold font-medium tracking-wide">Welcome to Hotel Korona</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gold/20' 
            : 'bg-cream/50'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Hotel Korona Logo"
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h1 className="font-serif text-xl md:text-2xl font-bold text-dark-brown group-hover:text-gold transition-colors duration-300">
                  Hotel Korona
                </h1>
                <p className="hidden md:block text-xs text-gold tracking-widest uppercase">
                  Coastal Castle Elegance
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 relative py-2
                    ${pathname === link.href
                      ? 'text-gold'
                      : 'text-bronze hover:text-gold'
                    }
                  `}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/booking" className="hidden md:block">
                <Button size="md" variant="primary">
                  Book Now
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col w-8 h-8 justify-center items-center"
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-gold block transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-gold block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-gold block mt-1.5 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gold/30 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        font-sans font-medium py-3 px-4 rounded-lg transition-all duration-300
                        ${pathname === link.href
                          ? 'text-gold bg-cream border-l-2 border-gold'
                          : 'text-bronze hover:text-gold hover:bg-sand/30'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gold/30">
                    <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button size="md" variant="primary" className="w-full">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gold/30 space-y-3">
                  <a
                    href={`tel:${HOTEL_INFO.contact.phone}`}
                    className="flex items-center space-x-3 text-bronze hover:text-gold transition-colors"
                  >
                    <span>📞</span>
                    <span>{HOTEL_INFO.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${HOTEL_INFO.contact.email}`}
                    className="flex items-center space-x-3 text-bronze hover:text-gold transition-colors"
                  >
                    <span>✉️</span>
                    <span className="text-sm">{HOTEL_INFO.contact.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
