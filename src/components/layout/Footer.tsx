'use client';

import { HOTEL_INFO, NAV_LINKS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bronze border-t border-gold/30 shadow-2xl relative" style={{ zIndex: 2 }}>
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
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://t.me/hotelkorona"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>

              <motion.a
                href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="VK"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://dzen.ru"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[48px] min-h-[48px] w-12 h-12 bg-deep-bronze/50 border border-gold/30 rounded-lg flex items-center justify-center hover:border-gold hover:bg-gold/20 transition-all duration-300 shadow-md"
                aria-label="Dzen"
              >
                <span className="text-gold text-base font-bold">D</span>
              </motion.a>
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
                <div className="text-gold mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">Phone</p>
                  <p className="text-sm">{HOTEL_INFO.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${HOTEL_INFO.contact.email}`}
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group min-h-[48px] p-2 rounded-lg hover:bg-deep-bronze/30"
              >
                <div className="text-gold mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
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
                <div className="text-gold mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">WhatsApp</p>
                  <p className="text-sm">{HOTEL_INFO.contact.whatsapp}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6 uppercase tracking-wider">Location</h4>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/Korona/@44.5988133,34.3711952,288m/data=!3m1!1e3!4m9!3m8!1s0x40eb4a79c9713629:0x9bd39acd87b530bd!5m2!4m1!1i2!8m2!3d44.5983579!4d34.3714401!16s%2Fg%2F1hm5sz0pf?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-cream hover:text-gold transition-colors duration-300 group min-h-[48px] p-2 rounded-lg hover:bg-deep-bronze/30"
              >
                <div className="text-gold mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-gold uppercase tracking-wide">Address</p>
                  <p className="text-sm leading-relaxed">{HOTEL_INFO.location.address}</p>
                </div>
              </a>
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
