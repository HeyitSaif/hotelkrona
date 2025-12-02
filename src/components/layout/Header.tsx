"use client";

import Button from "@/components/ui/Button";
import { HOTEL_INFO, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-sand border-b border-gold-dark/40">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-3.5">
          <div className="flex items-center space-x-8">
            <a
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="flex items-center space-x-2 text-bronze-dark hover:text-gold-darker transition-colors duration-300 min-h-[36px] font-medium"
            >
              <span className="text-base">📞</span>
              <span>{HOTEL_INFO.contact.phone}</span>
            </a>
            <a
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="flex items-center space-x-2 text-bronze-dark hover:text-gold-darker transition-colors duration-300 min-h-[36px] font-medium"
            >
              <span className="text-base">✉️</span>
              <span>{HOTEL_INFO.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gold-darker font-bold tracking-wide text-sm">
              Welcome to Hotel Korona
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-elevated border-b border-gold-dark/40"
            : "bg-cream/50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-28">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-4 group min-h-[48px]"
            >
              <div className="relative">
                <Image
                  src="/crown_Logo.png"
                  alt="Hotel Korona Logo"
                  height={80}
                  width={240}
                  className="w-auto h-16 md:h-20 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h1 className="font-serif text-xl md:text-3xl font-bold text-deep-bronze group-hover:text-gold-dark transition-colors duration-300">
                  Hotel Korona
                </h1>
                <p className="hidden md:block text-[11px] text-gold-darker tracking-[0.15em] uppercase font-bold mt-0.5">
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
                    font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 relative py-2 min-h-[44px] flex items-center
                    ${
                      pathname === link.href
                        ? "text-gold-darker"
                        : "text-bronze-dark hover:text-gold-darker"
                    }
                  `}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-darker to-gold-dark rounded-full shadow-gold"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/booking" className="hidden md:block">
                <Button
                  size="md"
                  variant="primary"
                  className="shadow-md hover:shadow-lg"
                >
                  Book Now
                </Button>
              </Link>

              {/* Mobile Menu Button - Enhanced Touch Target */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col w-12 h-12 justify-center items-center rounded-lg hover:bg-sand/30 transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-7 h-0.5 bg-gold block transition-all duration-300 rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-7 h-0.5 bg-gold block mt-2 transition-all duration-300 rounded-full"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-7 h-0.5 bg-gold block mt-2 transition-all duration-300 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
              >
                {/* Menu Header */}
                <div className="bg-sand border-b border-gold-dark/40 p-6 sticky top-0 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="Hotel Korona Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                      <span className="font-serif text-xl font-bold text-deep-bronze">
                        Hotel Korona
                      </span>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gold-dark/20 transition-colors"
                      aria-label="Close menu"
                    >
                      <span className="text-gold-darker text-3xl">×</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-2 mb-8">
                    {NAV_LINKS.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
                            font-sans font-semibold py-4 px-6 rounded-xl transition-all duration-300 min-h-[56px] flex items-center uppercase tracking-wider text-sm
                            ${
                              pathname === link.href
                                ? "text-gold-darker bg-cream border-l-4 border-gold-darker shadow-md"
                                : "text-bronze-dark hover:text-gold-darker hover:bg-sand-dark/30 border-l-4 border-transparent"
                            }
                          `}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 border-t border-gold-dark/40"
                  >
                    <Link
                      href="/booking"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        size="lg"
                        variant="primary"
                        className="w-full shadow-lg"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Mobile Contact Info */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-8 border-t border-gold-dark/40 space-y-4"
                  >
                    <h3 className="text-xs text-gold-darker uppercase tracking-widest font-bold mb-4">
                      Contact Us
                    </h3>

                    <a
                      href={`tel:${HOTEL_INFO.contact.phone}`}
                      className="flex items-center space-x-4 text-bronze-dark hover:text-gold-darker transition-colors group min-h-[48px] bg-cream/50 p-4 rounded-lg"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        📞
                      </span>
                      <span className="font-semibold">
                        {HOTEL_INFO.contact.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${HOTEL_INFO.contact.email}`}
                      className="flex items-center space-x-4 text-bronze-dark hover:text-gold-darker transition-colors group min-h-[48px] bg-cream/50 p-4 rounded-lg"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        ✉️
                      </span>
                      <span className="font-semibold text-sm">
                        {HOTEL_INFO.contact.email}
                      </span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
