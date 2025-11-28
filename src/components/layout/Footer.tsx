'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HOTEL_INFO, NAV_LINKS } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bronze border-t border-gold/30 shadow-2xl">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group mb-6 min-h-[48px]">
              <Image
                src="/logo.png"
                alt="Hotel Korona Logo"
                width={56}
                height={56}
                className="w-14 h-14 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-white">Hotel Korona</h3>
                <p className="text-gold text-[10px] tracking-[0.25em] uppercase font-bold">Coastal Castle Elegance</p>
              </div>
            </Link>
            
            <p className="text-cream text-sm leading-relaxed mb-8">
              Experience luxury in our castle-style resort, just 150m from pristine beaches. 
              Where historic elegance meets modern comfort.
            </p>

            {/* Social Links - Improved Touch Targets */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
                { icon: '🐦', label: 'Twitter', href: '#' },
                { icon: '🏆', label: 'TripAdvisor', href: '#' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center text-xl hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6 uppercase tracking-wider">Quick Links</h4>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-cream hover:text-gold transition-colors duration-300 text-sm min-h-[36px] flex items-center hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/gallery"
                className="block text-cream hover:text-gold transition-colors duration-300 text-sm min-h-[36px] flex items-center hover:translate-x-1"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-cream hover:text-gold transition-colors duration-300 text-sm min-h-[36px] flex items-center hover:translate-x-1"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6 uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${HOTEL_INFO.contact.phone}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group min-h-[48px] p-2 rounded-lg hover:bg-deep-bronze/30"
              >
                <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">Phone</p>
                  <p className="text-sm">{HOTEL_INFO.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${HOTEL_INFO.contact.email}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group min-h-[48px] p-2 rounded-lg hover:bg-deep-bronze/30"
              >
                <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform">✉️</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">Email</p>
                  <p className="text-sm break-all">{HOTEL_INFO.contact.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group min-h-[48px] p-2 rounded-lg hover:bg-deep-bronze/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform">💬</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">WhatsApp</p>
                  <p className="text-sm">{HOTEL_INFO.contact.whatsapp}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6 uppercase tracking-wider">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-cream">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-sm font-medium text-white uppercase tracking-wide mb-1">Address</p>
                  <p className="text-sm leading-relaxed">{HOTEL_INFO.location.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-cream">
                <span className="text-xl mt-0.5">🕐</span>
                <div>
                  <p className="text-sm font-medium text-white uppercase tracking-wide mb-1">Reception Hours</p>
                  <p className="text-sm">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-cream">
                <span className="text-xl mt-0.5">🏖️</span>
                <div>
                  <p className="text-sm font-medium text-white uppercase tracking-wide mb-1">Beach Distance</p>
                  <p className="text-sm">150 meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/30 bg-deep-bronze/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream text-sm text-center md:text-left">
              © {currentYear} Hotel Korona. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-cream hover:text-gold transition-colors duration-300 min-h-[36px] flex items-center">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream hover:text-gold transition-colors duration-300 min-h-[36px] flex items-center">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
