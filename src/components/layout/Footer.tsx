'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HOTEL_INFO, NAV_LINKS } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bronze border-t border-gold/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <Image
                src="/logo.png"
                alt="Hotel Korona Logo"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-white">Hotel Korona</h3>
                <p className="text-gold text-xs tracking-widest uppercase">Coastal Castle Elegance</p>
              </div>
            </Link>
            
            <p className="text-cream text-sm leading-relaxed mb-6">
              Experience luxury in our castle-style resort, just 150m from pristine beaches. 
              Where historic elegance meets modern comfort.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
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
                  className="w-10 h-10 bg-dark-brown/50 border border-gold/30 rounded-lg flex items-center justify-center text-lg hover:border-gold hover:bg-gold/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-cream hover:text-gold transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/gallery"
                className="block text-cream hover:text-gold transition-colors duration-300 text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-cream hover:text-gold transition-colors duration-300 text-sm"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${HOTEL_INFO.contact.phone}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group"
              >
                <span className="text-lg mt-0.5">📞</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold">Phone</p>
                  <p className="text-sm">{HOTEL_INFO.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${HOTEL_INFO.contact.email}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group"
              >
                <span className="text-lg mt-0.5">✉️</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold">Email</p>
                  <p className="text-sm">{HOTEL_INFO.contact.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-lg mt-0.5">💬</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold">WhatsApp</p>
                  <p className="text-sm">{HOTEL_INFO.contact.whatsapp}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-cream">
                <span className="text-lg mt-0.5">📍</span>
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm leading-relaxed">{HOTEL_INFO.location.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-cream">
                <span className="text-lg mt-0.5">🕐</span>
                <div>
                  <p className="text-sm font-medium text-white">Reception Hours</p>
                  <p className="text-sm">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-cream">
                <span className="text-lg mt-0.5">🏖️</span>
                <div>
                  <p className="text-sm font-medium text-white">Beach Distance</p>
                  <p className="text-sm">150 meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream text-sm">
              © {currentYear} Hotel Korona. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-cream hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream hover:text-gold transition-colors duration-300">
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
